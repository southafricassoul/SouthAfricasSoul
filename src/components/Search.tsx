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

  return (
    <div className="relative">
      <div className="flex items-center">
        {/* Mobile Search Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800 md:hidden"
          aria-label="Toggle search"
        >
          {isExpanded ? <X className="w-6 h-6" /> : <SearchIcon className="w-6 h-6" />}
        </button>

        {/* Search Input - Desktop: always visible, Mobile: visible only when expanded */}
        <div className={`
          ${isExpanded ? 'fixed inset-x-0 top-24 px-4 py-2 bg-white dark:bg-stone-900 border-b shadow-md z-50 md:relative md:top-0 md:p-0 md:bg-transparent md:border-none md:shadow-none' : 'hidden md:block'}
          relative w-full md:w-64 transition-all duration-300
        `}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus={isExpanded}
              className="pl-10 pr-4 py-2 w-full border rounded-full text-sm text-stone-700 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700 dark:focus:ring-emerald-600"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
                <X className="w-4 h-4 text-stone-500" />
              </button>
            )}
          </div>

          {/* Search Results */}
          {(results.length > 0 || isLoading) && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border dark:bg-stone-800 dark:border-stone-700 max-h-96 overflow-y-auto z-[60]">
              {isLoading ? (
                <div className="p-4 text-center text-stone-500">Loading...</div>
              ) : (
                <ul>
                  {results.map((result) => (
                    <li key={result._id} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer border-b last:border-none dark:border-stone-700">
                      <a
                        href={`/${result._type}/${result._id}`}
                        className="block"
                        onClick={() => setIsExpanded(false)}
                      >
                        <div className="font-medium text-emerald-900 dark:text-emerald-50">{result.name}</div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 capitalize">{result._type}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
