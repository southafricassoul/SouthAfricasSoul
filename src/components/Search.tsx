import { Search as SearchIcon, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import sanityClient from '../lib/sanityClient';

interface SearchResult {
  _id: string;
  name: string;
  _type: string;
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const performSearch = useCallback(async (term: string) => {
    if (term.length > 2) {
      setIsLoading(true);
      const query = `*[_type in ["herb", "tradition", "product"] && name match $searchTerm] {
        _id,
        name,
        _type
      }`;
      const params = { searchTerm: `*${term}*` };

      try {
        const data = await sanityClient.fetch(query, params);
        setResults(data);
      } catch (error) {
        console.error('Search failed', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setResults([]);
    }
  }, []);

  useEffect(() => {
    const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
      func: F,
      waitFor: number,
    ) => {
      let timeout: NodeJS.Timeout;
      return (...args: Parameters<F>): Promise<ReturnType<F>> =>
        new Promise(resolve => {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => resolve(func(...args)), waitFor);
        });
    };

    const debouncedSearch = debounce(() => performSearch(searchTerm), 500);
    debouncedSearch();
  }, [searchTerm, performSearch]);

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      clearSearch();
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Desktop Search Bar */}
      <div className="hidden lg:block relative w-64">
        <input
          type="text"
          placeholder="Search remedies, traditions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border rounded-full text-sm text-stone-700 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700 dark:focus:ring-emerald-600"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
        {searchTerm && (
          <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
            <X className="w-4 h-4 text-stone-500" />
          </button>
        )}
      </div>

      {/* Mobile Search Toggle */}
      <div className="lg:hidden">
        <button
          onClick={toggleSearch}
          className="p-1 xs:p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
          aria-label="Toggle search"
        >
          {isExpanded ? (
            <X className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          ) : (
            <SearchIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isExpanded && (
        <div className="fixed inset-x-0 top-0 z-50 p-4 bg-white dark:bg-stone-900 border-b shadow-lg lg:hidden">
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Search remedies, traditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-3 w-full border rounded-full text-base text-stone-700 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700 dark:focus:ring-emerald-600"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <button
              onClick={toggleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
            >
              <X className="w-5 h-5 text-stone-500" />
            </button>
          </div>

          {results.length > 0 && (
            <div className="mt-2 max-h-[60vh] overflow-y-auto bg-white rounded-lg shadow-lg border dark:bg-stone-800 dark:border-stone-700">
              <ul>
                {results.map((result) => (
                  <li key={result._id} className="p-3 border-b last:border-0 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer">
                    <a href={`/${result._type}/${result._id}`} className="block">
                      <div className="font-medium text-emerald-900 dark:text-emerald-50">{result.name}</div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 capitalize">{result._type}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isLoading && searchTerm && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border p-4 text-center dark:bg-stone-800 dark:border-stone-700">
              <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-emerald-500 border-t-transparent mr-2"></div>
              Loading...
            </div>
          )}
        </div>
      )}

      {/* Desktop Results Dropdown */}
      {!isExpanded && (
        <div className="hidden lg:block">
          {results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-50 dark:bg-stone-800 dark:border-stone-700">
              <ul>
                {results.map((result) => (
                  <li key={result._id} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer">
                    <a href={`/${result._type}/${result._id}`} className="block">
                      <div className="font-medium text-emerald-900 dark:text-emerald-50 text-sm">{result.name}</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 capitalize">{result._type}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isLoading && searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border p-2 z-50 dark:bg-stone-800 dark:border-stone-700 text-sm">
              Loading...
            </div>
          )}
        </div>
      )}
    </div>
  );
}