import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  onClick: () => void;
  items?: DropdownItem[];
}

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const findRemediesMenu: DropdownItem[] = [
    {
      label: 'By Ailment',
      onClick: () => onNavigate('remedies-ailment'),
      items: [
        { label: 'Digestive Health', onClick: () => onNavigate('ailment-digestive') },
        { label: 'Sleep', onClick: () => onNavigate('ailment-sleep') },
        { label: 'Skin Health', onClick: () => onNavigate('ailment-skin') },
        { label: 'Pain & Inflammation', onClick: () => onNavigate('ailment-pain') },
        { label: 'Stress & Anxiety', onClick: () => onNavigate('ailment-stress') },
        { label: 'Hormonal Balance', onClick: () => onNavigate('ailment-hormonal') },
        { label: 'Immunity', onClick: () => onNavigate('ailment-immunity') },
        { label: 'Energy & Vitality', onClick: () => onNavigate('ailment-energy') },
      ]
    },
    {
      label: 'By Body System',
      onClick: () => onNavigate('remedies-system'),
      items: [
        { label: 'Skin', onClick: () => onNavigate('system-skin') },
        { label: 'Gut', onClick: () => onNavigate('system-gut') },
        { label: 'Respiratory', onClick: () => onNavigate('system-respiratory') },
        { label: 'Nervous', onClick: () => onNavigate('system-nervous') },
        { label: 'Reproductive', onClick: () => onNavigate('system-reproductive') },
        { label: 'Muscular', onClick: () => onNavigate('system-muscular') },
      ]
    },
    {
      label: 'By Benefit',
      onClick: () => onNavigate('remedies-benefit'),
      items: [
        { label: 'Detox', onClick: () => onNavigate('benefit-detox') },
        { label: 'Anti-aging', onClick: () => onNavigate('benefit-antiaging') },
        { label: 'Calming', onClick: () => onNavigate('benefit-calming') },
        { label: 'Antimicrobial', onClick: () => onNavigate('benefit-antimicrobial') },
        { label: 'Hydration', onClick: () => onNavigate('benefit-hydration') },
        { label: 'Weight Management', onClick: () => onNavigate('benefit-weight') },
      ]
    },
  ];

  const shopMenu: DropdownItem[] = [
    { label: 'Herbal Powders & Teas', onClick: () => onNavigate('shop-powders-teas') },
    { label: 'Essential & Carrier Oils', onClick: () => onNavigate('shop-oils') },
    { label: 'DIY Kits & Starter Sets', onClick: () => onNavigate('shop-kits') },
    { label: 'Beauty & Bath Products', onClick: () => onNavigate('shop-beauty') },
    { label: 'Digital eBooks & Guides', onClick: () => onNavigate('shop-ebooks') },
    { label: 'Gift Sets', onClick: () => onNavigate('shop-gifts') },
    { label: 'South African Suppliers', onClick: () => onNavigate('shop-suppliers') },
  ];

  const apothecariesMenu: DropdownItem[] = [
    {
      label: 'African Herbal Apothecary',
      onClick: () => onNavigate('apothecary-african'),
      items: [
        { label: 'History of African Herbalism', onClick: () => onNavigate('african-history') },
        { label: 'Regional Healing Traditions', onClick: () => onNavigate('african-regional') },
        { label: 'Healing Tools & Rituals', onClick: () => onNavigate('african-rituals') },
      ]
    },
    {
      label: 'Global Apothecary',
      onClick: () => onNavigate('apothecary-global'),
      items: [
        { label: 'European', onClick: () => onNavigate('global-european') },
        { label: 'Chinese (TCM)', onClick: () => onNavigate('global-tcm') },
        { label: 'Indigenous American', onClick: () => onNavigate('global-indigenous') },
        { label: 'Middle Eastern', onClick: () => onNavigate('global-middle-east') },
      ]
    },
    {
      label: 'Homeopathy & Ayurveda',
      onClick: () => onNavigate('apothecary-homeopathy'),
      items: [
        { label: 'Homeopathy Principles', onClick: () => onNavigate('homeopathy-principles') },
        { label: 'African-Adapted Homeopathy', onClick: () => onNavigate('homeopathy-african') },
        { label: 'Ayurveda Doshas', onClick: () => onNavigate('ayurveda-doshas') },
        { label: 'Herbal Formulations', onClick: () => onNavigate('ayurveda-formulations') },
      ]
    },
  ];

  const diyMenu: DropdownItem[] = [
    {
      label: 'Formulation Guides',
      onClick: () => onNavigate('diy-formulations'),
      items: [
        { label: 'Infusions', onClick: () => onNavigate('formulation-infusions') },
        { label: 'Decoctions', onClick: () => onNavigate('formulation-decoctions') },
        { label: 'Tinctures', onClick: () => onNavigate('formulation-tinctures') },
        { label: 'Salves & Balms', onClick: () => onNavigate('formulation-salves') },
        { label: 'Aromatherapy Blends', onClick: () => onNavigate('formulation-aromatherapy') },
        { label: 'Body & Hair Oils', onClick: () => onNavigate('formulation-oils') },
      ]
    },
    {
      label: 'Remedies Library',
      onClick: () => onNavigate('diy-remedies'),
      items: [
        { label: 'Sleep Support', onClick: () => onNavigate('remedy-sleep') },
        { label: 'Energy Boosters', onClick: () => onNavigate('remedy-energy') },
        { label: 'Detox Blends', onClick: () => onNavigate('remedy-detox') },
        { label: 'Pain Relief', onClick: () => onNavigate('remedy-pain') },
        { label: 'Immunity Support', onClick: () => onNavigate('remedy-immunity') },
      ]
    },
    {
      label: 'Emotional & Spiritual',
      onClick: () => onNavigate('diy-spiritual'),
      items: [
        { label: 'Emotional Balance', onClick: () => onNavigate('spiritual-emotional') },
        { label: 'Spiritual Cleansing', onClick: () => onNavigate('spiritual-cleansing') },
        { label: 'Grounding', onClick: () => onNavigate('spiritual-grounding') },
      ]
    },
    { label: 'Safety & Quality', onClick: () => onNavigate('diy-safety') },
  ];

  const oilsMenu: DropdownItem[] = [
    {
      label: 'Essential Oils by Category',
      onClick: () => onNavigate('oils-essential-category'),
      items: [
        { label: 'Physical Healing', onClick: () => onNavigate('oils-physical') },
        { label: 'Cosmetic', onClick: () => onNavigate('oils-cosmetic') },
        { label: 'Spiritual', onClick: () => onNavigate('oils-spiritual') },
        { label: 'Emotional Balance', onClick: () => onNavigate('oils-emotional') },
      ]
    },
    { label: 'A-Z Essential Oil Index', onClick: () => onNavigate('oils-az-index') },
    { label: 'Carrier Oil Profiles', onClick: () => onNavigate('oils-carrier') },
    { label: 'Blending Chart', onClick: () => onNavigate('oils-blending') },
  ];

  const educationMenu: DropdownItem[] = [
    { label: 'Alternative & Complementary Medicine', onClick: () => onNavigate('edu-alternative') },
    { label: 'Nutrition & Dietetics', onClick: () => onNavigate('edu-nutrition') },
    { label: 'Holistic & Spiritual Wellness', onClick: () => onNavigate('edu-holistic') },
    { label: 'Preventive & Functional Health', onClick: () => onNavigate('edu-preventive') },
    { label: 'Beauty & Self-Care', onClick: () => onNavigate('edu-beauty') },
    { label: 'African Herbal Traditions', onClick: () => onNavigate('edu-african') },
    { label: 'Preparation & Mixing Guides', onClick: () => onNavigate('edu-preparation') },
    { label: 'Herbal Glossary & Safety', onClick: () => onNavigate('edu-glossary') },
  ];

  const plantLibraryMenu: DropdownItem[] = [
    {
      label: 'By Plant Part',
      onClick: () => onNavigate('plants-by-part'),
      items: [
        { label: 'Leaves', onClick: () => onNavigate('plants-leaves') },
        { label: 'Roots', onClick: () => onNavigate('plants-roots') },
        { label: 'Seeds', onClick: () => onNavigate('plants-seeds') },
        { label: 'Bark', onClick: () => onNavigate('plants-bark') },
        { label: 'Flowers', onClick: () => onNavigate('plants-flowers') },
        { label: 'Fruit', onClick: () => onNavigate('plants-fruit') },
        { label: 'Resin & Sap', onClick: () => onNavigate('plants-resin') },
      ]
    },
    { label: 'A-Z Index', onClick: () => onNavigate('plants-az') },
    { label: 'Potency & Benefit Mapping', onClick: () => onNavigate('plants-potency') },
  ];

  const blogMenu: DropdownItem[] = [
    { label: 'Healing the African Way', onClick: () => onNavigate('blog-african-healing') },
    { label: 'From Root to Remedy Stories', onClick: () => onNavigate('blog-root-remedy') },
    { label: 'Indigenous Medicine & Folklore', onClick: () => onNavigate('blog-folklore') },
    { label: 'Seasonal Wellness', onClick: () => onNavigate('blog-seasonal') },
    { label: 'Herbal Myths vs. Science', onClick: () => onNavigate('blog-myths') },
    { label: 'Modern Herbalism & Sustainability', onClick: () => onNavigate('blog-sustainability') },
  ];

  const communityMenu: DropdownItem[] = [
    { label: 'Forum: Share Remedies', onClick: () => onNavigate('community-forum') },
    { label: 'User Submissions', onClick: () => onNavigate('community-submissions') },
    { label: 'Video Guides', onClick: () => onNavigate('community-videos') },
    { label: 'Events, Workshops & Webinars', onClick: () => onNavigate('community-events') },
    { label: 'Affiliate Partners', onClick: () => onNavigate('community-partners') },
    { label: 'E-book Marketplace', onClick: () => onNavigate('community-ebooks') },
  ];

  const contactMenu: DropdownItem[] = [
    { label: 'Book Herbal Consultation', onClick: () => onNavigate('contact-consultation') },
    { label: 'Contact Form', onClick: () => onNavigate('contact-form') },
    { label: 'Privacy Policy', onClick: () => onNavigate('contact-privacy') },
    { label: 'Terms & Conditions', onClick: () => onNavigate('contact-terms') },
  ];

  const renderDropdownButton = (label: string, menuKey: string) => {
    const isOpen = openDropdown === menuKey;
    return (
      <button
        onClick={() => setOpenDropdown(isOpen ? null : menuKey)}
        className="flex items-center gap-1 text-stone-700 hover:text-emerald-700 transition-colors font-medium"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    );
  };

  const renderDropdownMenu = (items: DropdownItem[]) => {
    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-stone-200 py-2 min-w-[240px] z-50">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                item.onClick();
                setOpenDropdown(null);
              }}
              className="w-full text-left px-4 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {item.label}
            </button>
            {item.items && item.items.length > 0 && (
              <div className="pl-4 bg-stone-50">
                {item.items.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => {
                      subItem.onClick();
                      setOpenDropdown(null);
                    }}
                    className="w-full text-left px-4 py-1.5 text-sm text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav ref={dropdownRef} className="hidden lg:flex items-center gap-6">
      <button
        onClick={() => onNavigate('home')}
        className="text-stone-700 hover:text-emerald-700 transition-colors font-medium"
      >
        Home
      </button>

      <div className="relative">
        {renderDropdownButton('Find Remedies', 'remedies')}
        {openDropdown === 'remedies' && renderDropdownMenu(findRemediesMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Shop', 'shop')}
        {openDropdown === 'shop' && renderDropdownMenu(shopMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Apothecaries', 'apothecaries')}
        {openDropdown === 'apothecaries' && renderDropdownMenu(apothecariesMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('DIY & Remedies', 'diy')}
        {openDropdown === 'diy' && renderDropdownMenu(diyMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Essential Oils', 'oils')}
        {openDropdown === 'oils' && renderDropdownMenu(oilsMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Education Hub', 'education')}
        {openDropdown === 'education' && renderDropdownMenu(educationMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Plant Library', 'plants')}
        {openDropdown === 'plants' && renderDropdownMenu(plantLibraryMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Blog', 'blog')}
        {openDropdown === 'blog' && renderDropdownMenu(blogMenu)}
      </div>

      <div className="relative">
        {renderDropdownButton('Community', 'community')}
        {openDropdown === 'community' && renderDropdownMenu(communityMenu)}
      </div>

      <button
        onClick={() => onNavigate('glossary')}
        className="text-stone-700 hover:text-emerald-700 transition-colors font-medium"
      >
        Glossary
      </button>

      <div className="relative">
        {renderDropdownButton('Contact', 'contact')}
        {openDropdown === 'contact' && renderDropdownMenu(contactMenu)}
      </div>
    </nav>
  );
}
