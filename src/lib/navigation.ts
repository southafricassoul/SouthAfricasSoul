export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: '🏠 Home',
    href: '#home',
  },
  {
    label: '📖 About',
    children: [
      { label: 'Our Story', href: '#our-story' },
      { label: 'Mission & Philosophy', href: '#mission' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    label: '🛍️ Shop (Marketplace)',
    children: [
      { label: 'Herbal Blends & Teas', href: '#herbal-blends' },
      { label: 'Oils (Essential & Carrier)', href: '#oils' },
      { label: 'Massage & Aromatherapy Kits', href: '#kits' },
      { label: 'DIY Kits', href: '#diy-kits' },
      { label: 'Digital Products (E-books, PDFs)', href: '#digital-products' },
    ],
  },
  {
    label: '🌍 Region and Traditions',
    children: [
      {
        label: '🌎 Global Apothecary',
        children: [
          { label: 'European Folk Herbalism', href: '#european-folk' },
          { label: 'Chinese Medicine (TCM)', href: '#tcm' },
          { label: 'Indigenous American', href: '#indigenous-american' },
          { label: 'Middle Eastern Herbalism', href: '#middle-eastern' },
        ],
      },
      {
        label: '🌍 African Herbal Apothecary',
        children: [
          {
            label: 'History of African Herbalism',
            children: [
              { label: 'Origins and Cultural Lineage', href: '#origins' },
              { label: 'Indigenous Medicinal Evolution', href: '#evolution' },
            ],
          },
          {
            label: 'African Healing Traditions by Region',
            children: [
              { label: 'Zulu Healing', href: '#zulu' },
              { label: 'Xhosa Healing', href: '#xhosa' },
              { label: 'Tswana & Sotho Healing', href: '#tswana-sotho' },
              { label: 'Yoruba Healing', href: '#yoruba' },
              { label: 'Ashanti & Akan Healing', href: '#ashanti-akan' },
              { label: 'Berber Healing', href: '#berber' },
              { label: 'Nubian Healing', href: '#nubian' },
              { label: 'Egyptian Healing', href: '#egyptian' },
              { label: 'Central & East African Healing', href: '#central-east-african' },
            ],
          },
          {
            label: 'African Healing Tools & Rituals',
            children: [
              { label: 'Implements, Ceremonial Cleansing, Divination Herbs, Smudge Traditions', href: '#tools-rituals' },
              { label: 'Integration of Spirituality, Song, and Medicine', href: '#integration' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '🕉️ Global Homeopathy & Ayurveda',
    children: [
      {
        label: 'Homeopathy',
        children: [
          { label: 'Principles of Homeopathy', href: '#homeopathy-principles' },
          { label: 'Potency & Dilution Scales', href: '#potency-dilution' },
          { label: 'Common Homeopathic Remedies', href: '#common-remedies' },
          { label: 'African-Adapted Homeopathic Approaches', href: '#african-homeopathy' },
        ],
      },
      {
        label: 'Ayurveda',
        children: [
          { label: 'The Three Doshas: Vata, Pitta, Kapha', href: '#doshas' },
          { label: 'Ayurvedic Herbs & Spices', href: '#ayurvedic-herbs' },
          { label: 'Herbal Formulations by Dosha', href: '#formulations-by-dosha' },
          { label: 'Ayurvedic Oils & Body Treatments', href: '#ayurvedic-oils' },
          { label: 'Ayurvedic Massage (Abhyanga & Marma Therapy)', href: '#ayurvedic-massage' },
        ],
      },
    ],
  },
  {
    label: '🌿 Natural Ingredients & Oils',
    children: [
      {
        label: 'Plant Parts',
        children: [
          { label: 'Seeds', href: '#seeds' },
          { label: 'Roots', href: '#roots' },
          { label: 'Bark', href: '#bark' },
          { label: 'Leaves', href: '#leaves' },
          { label: 'Flowers', href: '#flowers' },
          { label: 'Fruit', href: '#fruit' },
          { label: 'Resin & Sap', href: '#resin-sap' },
        ],
      },
      {
        label: 'Carrier Oils',
        children: [
          { label: 'Sweet Almond Oil', href: '#sweet-almond-oil' },
          { label: 'Jojoba Oil', href: '#jojoba-oil' },
          { label: 'Coconut Oil', href: '#coconut-oil' },
          { label: 'Grapeseed Oil', href: '#grapeseed-oil' },
          { label: 'Argan Oil', href: '#argan-oil' },
          { label: 'Castor Oil', href: '#castor-oil' },
          { label: 'Avocado Oil', href: '#avocado-oil' },
          { label: 'Rosehip Seed Oil', href: '#rosehip-seed-oil' },
          { label: 'Hemp Seed Oil', href: '#hemp-seed-oil' },
          { label: 'Black Seed Oil', href: '#black-seed-oil' },
          { label: 'Tamanu Oil', href: '#tamanu-oil' },
        ],
      },
      {
        label: 'Essential Oils',
        children: [
          { label: 'Lavender', href: '#lavender' },
          { label: 'Chamomile (Roman/German)', href: '#chamomile' },
          { label: 'Rose', href: '#rose' },
          { label: 'Jasmine', href: '#jasmine' },
          { label: 'Ylang Ylang', href: '#ylang-ylang' },
          { label: 'Geranium', href: '#geranium' },
          { label: 'Eucalyptus', href: '#eucalyptus' },
          { label: 'Peppermint', href: '#peppermint' },
          { label: 'Tea Tree', href: '#tea-tree' },
          { label: 'Rosemary', href: '#rosemary' },
          { label: 'Patchouli', href: '#patchouli' },
          { label: 'Frankincense', href: '#frankincense' },
          { label: 'Myrrh', href: '#myrrh' },
          { label: 'Sandalwood', href: '#sandalwood' },
          { label: 'Lemon', href: '#lemon' },
          { label: 'Orange (Sweet)', href: '#orange' },
          { label: 'Bergamot', href: '#bergamot' },
        ],
      },
    ],
  },
  {
    label: '🌸 Aromatherapy & Massage Therapy',
    children: [
      {
        label: 'Aromatherapy',
        children: [
          { label: 'Principles of Aromatherapy', href: '#aromatherapy-principles' },
          { label: 'Essential Oil Blending Guide', href: '#blending-guide' },
          { label: 'Diffusion & Inhalation Methods', href: '#diffusion-inhalation' },
          { label: 'Emotional & Energetic Healing', href: '#emotional-healing' },
          { label: 'Chakra & Mood Blends', href: '#chakra-mood' },
          { label: 'Safety, Dilution & Contraindications', href: '#safety-dilution' },
        ],
      },
      {
        label: 'Massage Therapy',
        children: [
          { label: 'Introduction to Therapeutic Massage', href: '#intro-massage' },
          {
            label: 'Massage Techniques',
            children: [
              { label: 'Swedish Massage', href: '#swedish' },
              { label: 'Deep Tissue', href: '#deep-tissue' },
              { label: 'Lymphatic Drainage', href: '#lymphatic-drainage' },
              { label: 'Aromatherapy Massage', href: '#aromatherapy-massage' },
              { label: 'Ayurvedic Massage (Abhyanga)', href: '#abhyanga' },
            ],
          },
          { label: 'Massage Oil Recipes', href: '#massage-oil-recipes' },
          { label: 'Carrier & Essential Oil Synergies', href: '#synergies' },
          { label: 'Body-Mind Healing & Relaxation', href: '#body-mind-healing' },
        ],
      },
    ],
  },
  {
    label: '💚 Benefits',
    children: [
      {
        label: 'Physical',
        children: [
          { label: 'Sleep Aid', href: '#sleep-aid' },
          { label: 'Energy & Vitality', href: '#energy-vitality' },
          { label: 'Weight Management', href: '#weight-management' },
          { label: 'Digestive & Gut Health', href: '#digestive-gut' },
          { label: 'Detox & Liver Health', href: '#detox-liver' },
          { label: 'Immunity Boost', href: '#immunity-boost' },
          {
            label: 'Skin Health',
            children: [
              { label: 'Dark Mark Removal', href: '#dark-mark-removal' },
              { label: 'Anti-Aging', href: '#anti-aging' },
              { label: '💧 Hydration & Nourishment', href: '#hydration' },
              { label: '🔥 Anti-Inflammatory & Soothing', href: '#anti-inflammatory' },
              { label: '✨ Brightening & Anti-Aging', href: '#brightening' },
              { label: '🧴 Cleansing, Astringent & Toning', href: '#cleansing' },
              { label: '💆‍♀️ Calming, Soothing & Aromatherapy', href: '#calming' },
              { label: '🦠 Antibacterial & Acne Support', href: '#antibacterial' },
            ],
          },
          { label: 'Hair Growth & Scalp Health', href: '#hair-growth' },
          { label: 'Pain Relief & Anti-Inflammatory', href: '#pain-relief' },
          { label: 'Antimicrobial & Antiviral', href: '#antimicrobial' },
          { label: 'Hormonal & Menstrual Health', href: '#hormonal-menstrual' },
          { label: 'Circulation & Cardiovascular', href: '#circulation' },
          { label: 'Aphrodisiac / Libido Support', href: '#aphrodisiac' },
          { label: 'Arousal & Performance', href: '#arousal-performance' },
        ],
      },
      {
        label: 'Emotional & Mental Health',
        children: [
          { label: 'Stress Relief & Anxiety', href: '#stress-relief' },
          { label: 'Focus & Memory', href: '#focus-memory' },
          { label: 'Emotional Balance', href: '#emotional-balance' },
          { label: 'Spiritual Grounding & Cleansing', href: '#spiritual-grounding' },
        ],
      },
    ],
  },
  {
    label: '🧪 DIY & Recipes',
    children: [
      {
        label: 'Homeopathy & Apothecary',
        children: [
          { label: 'African Remedies', href: '#african-remedies' },
          { label: 'Global Remedies', href: '#global-remedies' },
        ],
      },
      { label: 'Teas & Tonics', href: '#teas-tonics' },
      { label: 'Tinctures & Extracts', href: '#tinctures-extracts' },
      { label: 'Balms & Salves', href: '#balms-salves' },
      { label: 'Skin & Hair Recipes', href: '#skin-hair-recipes' },
      { label: 'Massage Oils & Body Blends', href: '#massage-oils' },
      { label: 'Aromatherapy Blends', href: '#aromatherapy-blends' },
    ],
  },
  {
    label: '📚 Education Hub',
    children: [
      { label: 'Safety & Dosage', href: '#safety-dosage' },
      { label: 'Mixing Charts (Oils & Blends)', href: '#mixing-charts' },
      { label: 'DIY Apothecary Tutorials', href: '#diy-tutorials' },
      { label: 'Aromatherapy & Massage Certification Guides', href: '#certification-guides' },
      { label: 'Homeopathic Basics', href: '#homeopathic-basics' },
      { label: 'Ayurvedic Principles', href: '#ayurvedic-principles' },
    ],
  },
  {
    label: '🍃 Nutrition & Wellness',
    children: [
      { label: 'Herbal Nutrition', href: '#herbal-nutrition' },
      { label: 'Gut Health & Probiotics', href: '#gut-health' },
      { label: 'Detox & Cleansing', href: '#detox-cleansing' },
      { label: 'Herbal Weight Management', href: '#herbal-weight-management' },
    ],
  },
  {
    label: '🕊️ Mind & Spirit',
    children: [
      { label: 'Relaxation & Sleep', href: '#relaxation-sleep' },
      { label: 'Mood & Anxiety', href: '#mood-anxiety' },
      { label: 'Focus & Memory', href: '#focus-memory-spirit' },
      { label: 'Spiritual Cleansing', href: '#spiritual-cleansing' },
      { label: 'Energy & Chakra Balancing', href: '#energy-chakra' },
    ],
  },
  {
    label: '🌐 Community & Learning',
    children: [
      { label: 'Forum / User Contributions', href: '#forum' },
      { label: 'Videos & Tutorials', href: '#videos-tutorials' },
      { label: 'Events & Workshops', href: '#events-workshops' },
    ],
  },
];
