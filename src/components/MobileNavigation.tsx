import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MobileNavigationProps {
  onNavigate: (section: string) => void;
  onClose: () => void;
}

export default function MobileNavigation({ onNavigate, onClose }: MobileNavigationProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    onClose();
  };

  const toggleMenu = (menuKey: string) => {
    setExpandedMenu(expandedMenu === menuKey ? null : menuKey);
  };

  return (
    <div className="flex flex-col p-4 gap-2 max-h-[70vh] overflow-y-auto">
      <button
        onClick={() => handleNavigate('home')}
        className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
      >
        Home
      </button>

      <div>
        <button
          onClick={() => toggleMenu('remedies')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Find Remedies</span>
          {expandedMenu === 'remedies' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'remedies' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('remedies-ailment')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">By Ailment</button>
            <button onClick={() => handleNavigate('remedies-system')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">By Body System</button>
            <button onClick={() => handleNavigate('remedies-benefit')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">By Benefit</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('shop')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Shop</span>
          {expandedMenu === 'shop' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'shop' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('shop-powders-teas')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Herbal Powders & Teas</button>
            <button onClick={() => handleNavigate('shop-oils')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Essential & Carrier Oils</button>
            <button onClick={() => handleNavigate('shop-kits')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">DIY Kits & Starter Sets</button>
            <button onClick={() => handleNavigate('shop-beauty')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Beauty & Bath Products</button>
            <button onClick={() => handleNavigate('shop-ebooks')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Digital eBooks & Guides</button>
            <button onClick={() => handleNavigate('shop-gifts')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Gift Sets</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('apothecaries')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Apothecaries of the World</span>
          {expandedMenu === 'apothecaries' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'apothecaries' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('apothecary-african')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">African Herbal Apothecary</button>
            <button onClick={() => handleNavigate('apothecary-global')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Global Apothecary</button>
            <button onClick={() => handleNavigate('apothecary-homeopathy')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Homeopathy & Ayurveda</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('diy')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>DIY & Remedies</span>
          {expandedMenu === 'diy' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'diy' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('diy-formulations')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Formulation Guides</button>
            <button onClick={() => handleNavigate('diy-remedies')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Remedies Library</button>
            <button onClick={() => handleNavigate('diy-spiritual')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Emotional & Spiritual</button>
            <button onClick={() => handleNavigate('diy-safety')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Safety & Quality</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('oils')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Essential & Carrier Oils</span>
          {expandedMenu === 'oils' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'oils' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('oils-essential-category')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Essential Oils by Category</button>
            <button onClick={() => handleNavigate('oils-az-index')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">A-Z Essential Oil Index</button>
            <button onClick={() => handleNavigate('oils-carrier')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Carrier Oil Profiles</button>
            <button onClick={() => handleNavigate('oils-blending')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Blending Chart</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('education')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Education Hub</span>
          {expandedMenu === 'education' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'education' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('edu-alternative')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Alternative Medicine</button>
            <button onClick={() => handleNavigate('edu-nutrition')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Nutrition & Dietetics</button>
            <button onClick={() => handleNavigate('edu-holistic')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Holistic Wellness</button>
            <button onClick={() => handleNavigate('edu-preventive')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Preventive Health</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('plants')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Plant Library</span>
          {expandedMenu === 'plants' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'plants' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('plants-by-part')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">By Plant Part</button>
            <button onClick={() => handleNavigate('plants-az')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">A-Z Index</button>
            <button onClick={() => handleNavigate('plants-potency')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Potency Mapping</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('blog')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Blog</span>
          {expandedMenu === 'blog' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'blog' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('blog-african-healing')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Healing the African Way</button>
            <button onClick={() => handleNavigate('blog-folklore')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Indigenous Medicine</button>
            <button onClick={() => handleNavigate('blog-seasonal')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Seasonal Wellness</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleMenu('community')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Community</span>
          {expandedMenu === 'community' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'community' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('community-forum')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Forum</button>
            <button onClick={() => handleNavigate('community-events')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Events & Workshops</button>
            <button onClick={() => handleNavigate('community-videos')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Video Guides</button>
          </div>
        )}
      </div>

      <button
        onClick={() => handleNavigate('glossary')}
        className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
      >
        Glossary
      </button>

      <div>
        <button
          onClick={() => toggleMenu('contact')}
          className="w-full flex items-center justify-between py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors"
        >
          <span>Contact</span>
          {expandedMenu === 'contact' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {expandedMenu === 'contact' && (
          <div className="ml-4 mt-1 space-y-1">
            <button onClick={() => handleNavigate('contact-consultation')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Book Consultation</button>
            <button onClick={() => handleNavigate('contact-form')} className="block w-full text-left py-1.5 px-4 text-sm text-stone-600 hover:text-emerald-700">Contact Form</button>
          </div>
        )}
      </div>
    </div>
  );
}
