export interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    name: '📖 About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Mission & Philosophy', href: '/about/mission-philosophy' },
      { name: 'Contact', href: '/about/contact' },
    ],
  },
  {
    name: '🛍️ Shop (Marketplace)',
    href: '/shop',
    children: [
      { name: 'Herbal Blends & Teas', href: '/shop/herbal-blends-teas' },
      { name: 'Oils (Essential & Carrier)', href: '/shop/oils' },
      { name: 'Massage & Aromatherapy Kits', href: '/shop/massage-aromatherapy-kits' },
      { name: 'DIY Kits', href: '/shop/diy-kits' },
      { name: 'Digital Products (E-books, PDFs)', href: '/shop/digital-products' },
    ],
  },
  {
    name: '🌍 Region and Traditions',
    href: '/region-and-traditions',
    children: [
      {
        name: '🌎 Global Apothecary',
        href: '/region/global-apothecary',
        children: [
          { name: 'European Folk Herbalism', href: '/region/global-apothecary/european-folk-herbalism' },
          { name: 'Chinese Medicine (TCM)', href: '/region/global-apothecary/tcm' },
          { name: 'Indigenous American', href: '/region/global-apothecary/indigenous-american' },
          { name: 'Middle Eastern Herbalism', href: '/region/global-apothecary/middle-eastern-herbalism' },
        ],
      },
      {
        name: '🌍 African Herbal Apothecary',
        href: '/region/african-apothecary',
        children: [
          {
            name: 'History of African Herbalism',
            href: '/region/african-apothecary/history',
            children: [
              { name: 'Origins and Cultural Lineage', href: '/region/african-apothecary/history/origins' },
              { name: 'Indigenous Medicinal Evolution', href: '/region/african-apothecary/history/evolution' },
            ],
          },
          {
            name: 'African Healing Traditions by Region',
            href: '/region/african-apothecary/traditions',
            children: [
              { name: 'Zulu Healing', href: '/region/african-apothecary/traditions/zulu' },
              { name: 'Xhosa Healing', href: '/region/african-apothecary/traditions/xhosa' },
              { name: 'Tswana & Sotho Healing', href: '/region/african-apothecary/traditions/tswana-sotho' },
              { name: 'Yoruba Healing', href: '/region/african-apothecary/traditions/yoruba' },
              { name: 'Ashanti & Akan Healing', href: '/region/african-apothecary/traditions/ashanti-akan' },
              { name: 'Berber Healing', href: '/region/african-apothecary/traditions/berber' },
              { name: 'Nubian Healing', href: '/region/african-apothecary/traditions/nubian' },
              { name: 'Egyptian Healing', href: '/region/african-apothecary/traditions/egyptian' },
              { name: 'Central & East African Healing', href: '/region/african-apothecary/traditions/central-east-african' },
            ],
          },
          {
            name: 'African Healing Tools & Rituals',
            href: '/region/african-apothecary/tools',
            children: [
              { name: 'Implements, Ceremonial Cleansing, Divination Herbs, Smudge Traditions', href: '/region/african-apothecary/tools/implements' },
              { name: 'Integration of Spirituality, Song, and Medicine', href: '/region/african-apothecary/tools/integration' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: '🕉️ Global Homeopathy & Ayurveda',
    href: '/global-homeopathy-ayurveda',
    children: [
      {
        name: 'Homeopathy',
        href: '/global-homeopathy-ayurveda/homeopathy',
        children: [
          { name: 'Principles of Homeopathy', href: '/global-homeopathy-ayurveda/homeopathy/principles' },
          { name: 'Potency & Dilution Scales', href: '/global-homeopathy-ayurveda/homeopathy/potency-dilution' },
          { name: 'Common Homeopathic Remedies', href: '/global-homeopathy-ayurveda/homeopathy/remedies' },
          { name: 'African-Adapted Homeopathic Approaches', href: '/global-homeopathy-ayurveda/homeopathy/african-adapted' },
        ],
      },
      {
        name: 'Ayurveda',
        href: '/global-homeopathy-ayurveda/ayurveda',
        children: [
          { name: 'The Three Doshas: Vata, Pitta, Kapha', href: '/global-homeopathy-ayurveda/ayurveda/doshas' },
          { name: 'Ayurvedic Herbs & Spices', href: '/global-homeopathy-ayurveda/ayurveda/herbs-spices' },
          { name: 'Herbal Formulations by Dosha', href: '/global-homeopathy-ayurveda/ayurveda/formulations' },
          { name: 'Ayurvedic Oils & Body Treatments', href: '/global-homeopathy-ayurveda/ayurveda/oils-treatments' },
          { name: 'Ayurvedic Massage (Abhyanga & Marma Therapy)', href: '/global-homeopathy-ayurveda/ayurveda/massage' },
        ],
      },
    ],
  },
  {
    name: '🌿 Natural Ingredients & Oils',
    href: '/natural-ingredients-oils',
    children: [
      {
        name: 'Plant Parts',
        href: '/natural-ingredients-oils/plant-parts',
        children: [
          { name: 'Seeds', href: '/natural-ingredients-oils/plant-parts/seeds' },
          { name: 'Roots', href: '/natural-ingredients-oils/plant-parts/roots' },
          { name: 'Bark', href: '/natural-ingredients-oils/plant-parts/bark' },
          { name: 'Leaves', href: '/natural-ingredients-oils/plant-parts/leaves' },
          { name: 'Flowers', href: '/natural-ingredients-oils/plant-parts/flowers' },
          { name: 'Fruit', href: '/natural-ingredients-oils/plant-parts/fruit' },
          { name: 'Resin & Sap', href: '/natural-ingredients-oils/plant-parts/resin-sap' },
        ],
      },
      {
        name: 'Carrier Oils',
        href: '/natural-ingredients-oils/carrier-oils',
        children: [
          { name: 'Sweet Almond Oil', href: '/natural-ingredients-oils/carrier-oils/sweet-almond' },
          { name: 'Jojoba Oil', href: '/natural-ingredients-oils/carrier-oils/jojoba' },
          { name: 'Coconut Oil', href: '/natural-ingredients-oils/carrier-oils/coconut' },
          { name: 'Grapeseed Oil', href: '/natural-ingredients-oils/carrier-oils/grapeseed' },
          { name: 'Argan Oil', href: '/natural-ingredients-oils/carrier-oils/argan' },
          { name: 'Castor Oil', href: '/natural-ingredients-oils/carrier-oils/castor' },
          { name: 'Avocado Oil', href: '/natural-ingredients-oils/carrier-oils/avocado' },
          { name: 'Rosehip Seed Oil', href: '/natural-ingredients-oils/carrier-oils/rosehip-seed' },
          { name: 'Hemp Seed Oil', href: '/natural-ingredients-oils/carrier-oils/hemp-seed' },
          { name: 'Black Seed Oil', href: '/natural-ingredients-oils/carrier-oils/black-seed' },
          { name: 'Tamanu Oil', href: '/natural-ingredients-oils/carrier-oils/tamanu' },
        ],
      },
      {
        name: 'Essential Oils',
        href: '/natural-ingredients-oils/essential-oils',
        children: [
          { name: 'Lavender', href: '/natural-ingredients-oils/essential-oils/lavender' },
          { name: 'Chamomile (Roman/German)', href: '/natural-ingredients-oils/essential-oils/chamomile' },
          { name: 'Rose', href: '/natural-ingredients-oils/essential-oils/rose' },
          { name: 'Jasmine', href: '/natural-ingredients-oils/essential-oils/jasmine' },
          { name: 'Ylang Ylang', href: '/natural-ingredients-oils/essential-oils/ylang-ylang' },
          { name: 'Geranium', href: '/natural-ingredients-oils/essential-oils/geranium' },
          { name: 'Eucalyptus', href: '/natural-ingredients-oils/essential-oils/eucalyptus' },
          { name: 'Peppermint', href: '/natural-ingredients-oils/essential-oils/peppermint' },
          { name: 'Tea Tree', href: '/natural-ingredients-oils/essential-oils/tea-tree' },
          { name: 'Rosemary', href: '/natural-ingredients-oils/essential-oils/rosemary' },
          { name: 'Patchouli', href: '/natural-ingredients-oils/essential-oils/patchouli' },
          { name: 'Frankincense', href: '/natural-ingredients-oils/essential-oils/frankincense' },
          { name: 'Myrrh', href: '/natural-ingredients-oils/essential-oils/myrrh' },
          { name: 'Sandalwood', href: '/natural-ingredients-oils/essential-oils/sandalwood' },
          { name: 'Lemon', href: '/natural-ingredients-oils/essential-oils/lemon' },
          { name: 'Orange (Sweet)', href: '/natural-ingredients-oils/essential-oils/orange' },
          { name: 'Bergamot', href: '/natural-ingredients-oils/essential-oils/bergamot' },
        ],
      },
    ],
  },
  {
    name: '🌸 Aromatherapy & Massage Therapy',
    href: '/aromatherapy-massage',
    children: [
      {
        name: 'Aromatherapy',
        href: '/aromatherapy-massage/aromatherapy',
        children: [
          { name: 'Principles of Aromatherapy', href: '/aromatherapy-massage/aromatherapy/principles' },
          { name: 'Essential Oil Blending Guide', href: '/aromatherapy-massage/aromatherapy/blending-guide' },
          { name: 'Diffusion & Inhalation Methods', href: '/aromatherapy-massage/aromatherapy/diffusion-inhalation' },
          { name: 'Emotional & Energetic Healing', href: '/aromatherapy-massage/aromatherapy/emotional-healing' },
          { name: 'Chakra & Mood Blends', href: '/aromatherapy-massage/aromatherapy/chakra-mood-blends' },
          { name: 'Safety, Dilution & Contraindications', href: '/aromatherapy-massage/aromatherapy/safety' },
        ],
      },
      {
        name: 'Massage Therapy',
        href: '/aromatherapy-massage/massage-therapy',
        children: [
          { name: 'Introduction to Therapeutic Massage', href: '/aromatherapy-massage/massage-therapy/introduction' },
          {
            name: 'Massage Techniques',
            href: '/aromatherapy-massage/massage-therapy/techniques',
            children: [
              { name: 'Swedish Massage', href: '/aromatherapy-massage/massage-therapy/techniques/swedish' },
              { name: 'Deep Tissue', href: '/aromatherapy-massage/massage-therapy/techniques/deep-tissue' },
              { name: 'Lymphatic Drainage', href: '/aromatherapy-massage/massage-therapy/techniques/lymphatic-drainage' },
              { name: 'Aromatherapy Massage', href: '/aromatherapy-massage/massage-therapy/techniques/aromatherapy' },
              { name: 'Ayurvedic Massage (Abhyanga)', href: '/aromatherapy-massage/massage-therapy/techniques/ayurvedic' },
            ],
          },
          { name: 'Massage Oil Recipes', href: '/aromatherapy-massage/massage-therapy/recipes' },
          { name: 'Carrier & Essential Oil Synergies', href: '/aromatherapy-massage/massage-therapy/synergies' },
          { name: 'Body-Mind Healing & Relaxation', href: '/aromatherapy-massage/massage-therapy/body-mind-healing' },
        ],
      },
    ],
  },
  {
    name: '💚 Benefits',
    href: '/benefits',
    children: [
      {
        name: 'Physical',
        href: '/benefits/physical',
        children: [
          { name: 'Sleep Aid', href: '/benefits/physical/sleep-aid' },
          { name: 'Energy & Vitality', href: '/benefits/physical/energy-vitality' },
          { name: 'Weight Management', href: '/benefits/physical/weight-management' },
          { name: 'Digestive & Gut Health', href: '/benefits/physical/digestive-gut-health' },
          { name: 'Detox & Liver Health', href: '/benefits/physical/detox-liver-health' },
          { name: 'Immunity Boost', href: '/benefits/physical/immunity-boost' },
          {
            name: 'Skin Health',
            href: '/benefits/physical/skin-health',
            children: [
              { name: 'Dark Mark Removal', href: '/benefits/physical/skin-health/dark-mark-removal' },
              { name: 'Anti-Aging', href: '/benefits/physical/skin-health/anti-aging' },
              { name: '💧 Hydration & Nourishment', href: '/benefits/physical/skin-health/hydration-nourishment' },
              { name: '🔥 Anti-Inflammatory & Soothing', href: '/benefits/physical/skin-health/anti-inflammatory-soothing' },
              { name: '✨ Brightening & Anti-Aging', href: '/benefits/physical/skin-health/brightening-anti-aging' },
              { name: '🧴 Cleansing, Astringent & Toning', href: '/benefits/physical/skin-health/cleansing-astringent-toning' },
              { name: '💆‍♀️ Calming, Soothing & Aromatherapy', href: '/benefits/physical/skin-health/calming-soothing-aromatherapy' },
              { name: '🦠 Antibacterial & Acne Support', href: '/benefits/physical/skin-health/antibacterial-acne-support' },
            ],
          },
          { name: 'Hair Growth & Scalp Health', href: '/benefits/physical/hair-growth-scalp-health' },
          { name: 'Pain Relief & Anti-Inflammatory', href: '/benefits/physical/pain-relief-anti-inflammatory' },
          { name: 'Antimicrobial & Antiviral', href: '/benefits/physical/antimicrobial-antiviral' },
          { name: 'Hormonal & Menstrual Health', href: '/benefits/physical/hormonal-menstrual-health' },
          { name: 'Circulation & Cardiovascular', href: '/benefits/physical/circulation-cardiovascular' },
          { name: 'Aphrodisiac / Libido Support', href: '/benefits/physical/aphrodisiac-libido-support' },
          { name: 'Arousal & Performance', href: '/benefits/physical/arousal-performance' },
        ],
      },
      {
        name: 'Emotional & Mental Health',
        href: '/benefits/emotional-mental-health',
        children: [
          { name: 'Stress Relief & Anxiety', href: '/benefits/emotional-mental-health/stress-relief-anxiety' },
          { name: 'Focus & Memory', href: '/benefits/emotional-mental-health/focus-memory' },
          { name: 'Emotional Balance', href: '/benefits/emotional-mental-health/emotional-balance' },
          { name: 'Spiritual Grounding & Cleansing', href: '/benefits/emotional-mental-health/spiritual-grounding-cleansing' },
        ],
      },
    ],
  },
  {
    name: '🧪 DIY & Recipes',
    href: '/diy-recipes',
    children: [
      { name: 'Homeopathy & Apothecary', href: '/diy-recipes/homeopathy-apothecary' },
      { name: 'African Remedies', href: '/diy-recipes/african-remedies' },
      { name: 'Global Remedies', href: '/diy-recipes/global-remedies' },
      { name: 'Teas & Tonics', href: '/diy-recipes/teas-tonics' },
      { name: 'Tinctures & Extracts', href: '/diy-recipes/tinctures-extracts' },
      { name: 'Balms & Salves', href: '/diy-recipes/balms-salves' },
      { name: 'Skin & Hair Recipes', href: '/diy-recipes/skin-hair-recipes' },
      { name: 'Massage Oils & Body Blends', href: '/diy-recipes/massage-oils-body-blends' },
      { name: 'Aromatherapy Blends', href: '/diy-recipes/aromatherapy-blends' },
    ],
  },
  {
    name: '📚 Education Hub',
    href: '/education-hub',
    children: [
      { name: 'Safety & Dosage', href: '/education-hub/safety-dosage' },
      { name: 'Mixing Charts (Oils & Blends)', href: '/education-hub/mixing-charts' },
      { name: 'DIY Apothecary Tutorials', href: '/education-hub/diy-apothecary-tutorials' },
      { name: 'Aromatherapy & Massage Certification Guides', href: '/education-hub/aromatherapy-massage-certification' },
      { name: 'Homeopathic Basics', href: '/education-hub/homeopathic-basics' },
      { name: 'Ayurvedic Principles', href: '/education-hub/ayurvedic-principles' },
    ],
  },
  {
    name: '🍃 Nutrition & Wellness',
    href: '/nutrition-wellness',
    children: [
      { name: 'Herbal Nutrition', href: '/nutrition- wellness/herbal-nutrition' },
      { name: 'Gut Health & Probiotics', href: '/nutrition-wellness/gut-health-probiotics' },
      { name: 'Detox & Cleansing', href: '/nutrition-wellness/detox-cleansing' },
      { name: 'Herbal Weight Management', href: '/nutrition-wellness/herbal-weight-management' },
    ],
  },
  {
    name: '🕊️ Mind & Spirit',
    href: '/mind-spirit',
    children: [
      { name: 'Relaxation & Sleep', href: '/mind-spirit/relaxation-sleep' },
      { name: 'Mood & Anxiety', href: '/mind-spirit/mood-anxiety' },
      { name: 'Focus & Memory', href: 'mind-spirit/focus-memory' },
      { name: 'Spiritual Cleansing', href: '/mind-spirit/spiritual-cleansing' },
      { name: 'Energy & Chakra Balancing', href: '/mind-spirit/energy-chakra-balancing' },
    ],
  },
  {
    name: '🌐 Community & Learning',
    href: '/community-learning',
    children: [
      { name: 'Forum / User Contributions', href: '/community-learning/forum' },
      { name: 'Videos & Tutorials', href: '/community-learning/videos-tutorials' },
      { name: 'Events & Workshops', href: '/community-learning/events-workshop' },
    ],
  },
];
