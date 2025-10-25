const kebabCase = (str: string) => str.replace(/&/g, 'and').replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').toLowerCase();

const generateHrefs = (items: any[], parentPath = '') => {
  return items.map((item: any) => {
    if (item.href && item.href.startsWith('#')) {
      if(item.label === "🏠 Home") {
        return { ...item, href: "/" };
      }
      return item;
    }

    // A more robust way to generate the path
    const pathSegment = kebabCase(item.label);
    const currentPath = parentPath ? `${parentPath}/${pathSegment}` : `/${pathSegment}`;

    if (item.dropdown) {
      return {
        ...item,
        dropdown: generateHrefs(item.dropdown, currentPath),
      };
    } else {
      return {
        ...item,
        href: currentPath,
      };
    }
  });
};

export const menuOptions = generateHrefs([
  {
    label: "🏠 Home",
    href: "#home",
  },
  {
    label: "📖 About",
    dropdown: [
      { label: "Our Story", href: "#" },
      { label: "Mission & Philosophy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    label: "🛍️ Shop (Marketplace)",
    disabled: true,
    dropdown: [
      { label: "Herbal Blends & Teas", href: "#" },
      { label: "Oils (Essential & Carrier)", href: "#" },
      { label: "Massage & Aromatherapy Kits", href: "#" },
      { label: "DIY Kits", href: "#" },
      { label: "Digital Products (E-books, PDFs)", href: "#" },
    ],
  },
  {
    label: "🌍 Region and Traditions",
    dropdown: [
      {
        label: "🌎 Global Apothecary",
        dropdown: [
          { label: "European Folk Herbalism", href: "#" },
          { label: "Chinese Medicine (TCM)", href: "#" },
          { label: "Indigenous American", href: "#" },
          { label: "Middle Eastern Herbalism", href: "#" },
        ],
      },
      {
        label: "🌍 African Herbal Apothecary",
        dropdown: [
          {
            label: "History of African Herbalism",
            dropdown: [
              { label: "Origins and Cultural Lineage", href: "#" },
              { label: "Indigenous Medicinal Evolution", href: "#" },
            ],
          },
          {
            label: "African Healing Traditions by Region",
            dropdown: [
              { label: "Zulu Healing", href: "#" },
              { label: "Xhosa Healing", href: "#" },
              { label: "Tswana & Sotho Healing", href: "#" },
              { label: "Yoruba Healing", href: "#" },
              { label: "Ashanti & Akan Healing", href: "#" },
              { label: "Berber Healing", href: "#" },
              { label: "Nubian Healing", href: "#" },
              { label: "Egyptian Healing", href: "#" },
              { label: "Central & East African Healing", href: "#" },
            ],
          },
          {
            label: "African Healing Tools & Rituals",
            dropdown: [
              { label: "Implements, Ceremonial Cleansing, Divination Herbs, Smudge Traditions", href: "#" },
              { label: "Integration of Spirituality, Song, and Medicine", href: "#" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "🕉️ Global Homeopathy & Ayurveda",
    dropdown: [
      {
        label: "Homeopathy",
        dropdown: [
          { label: "Principles of Homeopathy", href: "#" },
          { label: "Potency & Dilution Scales", href: "#" },
          { label: "Common Homeopathic Remedies", href: "#" },
          { label: "African-Adapted Homeopathic Approaches", href: "#" },
        ],
      },
      {
        label: "Ayurveda",
        dropdown: [
          { label: "The Three Doshas: Vata, Pitta, Kapha", href: "#" },
          { label: "Ayurvedic Herbs & Spices", href: "#" },
          { label: "Herbal Formulations by Dosha", href: "#" },
          { label: "Ayurvedic Oils & Body Treatments", href: "#" },
          { label: "Ayurvedic Massage (Abhyanga & Marma Therapy)", href: "#" },
        ],
      },
    ],
  },
  {
    label: "🌿 Natural Ingredients & Oils",
    dropdown: [
      {
        label: "Plant Parts",
        dropdown: [
          { label: "Seeds", href: "#" },
          { label: "Roots", href: "#" },
          { label: "Bark", href: "#" },
          { label: "Leaves", href: "#" },
          { label: "Flowers", href: "#" },
          { label: "Fruit", href: "#" },
          { label: "Resin & Sap", href: "#" },
        ],
      },
      {
        label: "Carrier Oils",
        dropdown: [
            { label: "Sweet Almond Oil", href: "#" },
            { label: "Jojoba Oil", href: "#" },
            { label: "Coconut Oil", href: "#" },
            { label: "Grapeseed Oil", href: "#" },
            { label: "Argan Oil", href: "#" },
            { label: "Castor Oil", href: "#" },
            { label: "Avocado Oil", href: "#" },
            { label: "Rosehip Seed Oil", href: "#" },
            { label: "Hemp Seed Oil", href: "#" },
            { label: "Black Seed Oil", href: "#" },
            { label: "Tamanu Oil", href: "#" },
        ],
      },
      {
        label: "Essential Oils",
        dropdown: [
          { label: "Lavender", href: "#" },
          { label: "Chamomile (Roman/German)", href: "#" },
          { label: "Rose", href: "#" },
          { label: "Jasmine", href: "#" },
          { label: "Ylang Ylang", href: "#" },
          { label: "Geranium", href: "#" },
          { label: "Eucalyptus", href: "#" },
          { label: "Peppermint", href: "#" },
          { label: "Tea Tree", href: "#" },
          { label: "Rosemary", href: "#" },
          { label: "Patchouli", href: "#" },
          { label: "Frankincense", href: "#" },
          { label: "Myrrh", href: "#" },
          { label: "Sandalwood", href: "#" },
          { label: "Lemon", href: "#" },
          { label: "Orange (Sweet)", href: "#" },
          { label: "Bergamot", href: "#" },
        ],
      },
    ],
  },
  {
    label: "🌸 Aromatherapy & Massage Therapy",
    dropdown: [
        {
            label: "Aromatherapy",
            dropdown: [
                { label: "Principles of Aromatherapy", href: "#" },
                { label: "Essential Oil Blending Guide", href: "#" },
                { label: "Diffusion & Inhalation Methods", href: "#" },
                { label: "Emotional & Energetic Healing", href: "#" },
                { label: "Chakra & Mood Blends", href: "#" },
                { label: "Safety, Dilution & Contraindications", href: "#" },
            ]
        },
        {
            label: "Massage Therapy",
            dropdown: [
                { label: "Introduction to Therapeutic Massage", href: "#" },
                {
                    label: "Massage Techniques",
                    dropdown: [
                        { label: "Swedish Massage", href: "#" },
                        { label: "Deep Tissue", href: "#" },
                        { label: "Lymphatic Drainage", href: "#" },
                        { label: "Aromatherapy Massage", href: "#" },
                        { label: "Ayurvedic Massage (Abhyanga)", href: "#" },
                    ]
                },
                { label: "Massage Oil Recipes", href: "#" },
                { label: "Carrier & Essential Oil Synergies", href: "#" },
                { label: "Body-Mind Healing & Relaxation", href: "#" },
            ]
        }
    ]
  },
  {
    label: "💚 Benefits",
    dropdown: [
      {
        label: "Physical",
        dropdown: [
            { label: "Sleep Aid", href: "#" },
            { label: "Energy & Vitality", href: "#" },
            { label: "Weight Management", href: "#" },
            { label: "Digestive & Gut Health", href: "#" },
            { label: "Detox & Liver Health", href: "#" },
            { label: "Immunity Boost", href: "#" },
            {
                label: "Skin Health",
                dropdown: [
                    { label: "Dark Mark Removal", href: "#" },
                    { label: "Anti-Aging", href: "#" },
                    { label: "💧 Hydration & Nourishment", href: "#" },
                    { label: "🔥 Anti-Inflammatory & Soothing", href: "#" },
                    { label: "✨ Brightening & Anti-Aging", href: "#" },
                    { label: "🧴 Cleansing, Astringent & Toning", href: "#" },
                    { label: "💆‍♀️ Calming, Soothing & Aromatherapy", href: "#" },
                    { label: "🦠 Antibacterial & Acne Support", href: "#" },
                ]
            },
            { label: "Hair Growth & Scalp Health", href: "#" },
            { label: "Pain Relief & Anti-Inflammatory", href: "#" },
            { label: "Antimicrobial & Antiviral", href: "#" },
            { label: "Hormonal & Menstrual Health", href: "#" },
            { label: "Circulation & Cardiovascular", href: "#" },
            { label: "Aphrodisiac / Libido Support", href: "#" },
            { label: "Arousal & Performance", href: "#" },
        ],
      },
      {
        label: "Emotional & Mental Health",
        dropdown: [
            { label: "Stress Relief & Anxiety", href: "#" },
            { label: "Focus & Memory", href: "#" },
            { label: "Emotional Balance", href: "#" },
            { label: "Spiritual Grounding & Cleansing", href: "#" },
        ]
      },
    ],
  },
  {
    label: "🧪 DIY & Recipes",
    dropdown: [
        {
            label: "Homeopathy & Apothecary",
            dropdown: [
                { label: "African Remedies", href: "#" },
                { label: "Global Remedies", href: "#" },
            ]
        },
        { label: "Teas & Tonics", href: "#" },
        { label: "Tinctures & Extracts", href: "#" },
        { label: "Balms & Salves", href: "#" },
        { label: "Skin & Hair Recipes", href: "#" },
        { label: "Massage Oils & Body Blends", href: "#" },
        { label: "Aromatherapy Blends", href: "#" },
    ]
  },
  {
    label: "📚 Education Hub",
    dropdown: [
        { label: "Safety & Dosage", href: "#" },
        { label: "Mixing Charts (Oils & Blends)", href: "#" },
        { label: "DIY Apothecary Tutorials", href: "#" },
        { label: "Aromatherapy & Massage Certification Guides", href: "#" },
        { label: "Homeopathic Basics", href: "#" },
        { label: "Ayurvedic Principles", href: "#" },
    ]
  },
  {
    label: "🍃 Nutrition & Wellness",
    dropdown: [
        { label: "Herbal Nutrition", href: "#" },
        { label: "Gut Health & Probiotics", href: "#" },
        { label: "Detox & Cleansing", href: "#" },
        { label: "Herbal Weight Management", href: "#" },
    ]
  },
  {
    label: "🕊️ Mind & Spirit",
    dropdown: [
        { label: "Relaxation & Sleep", href: "#" },
        { label: "Mood & Anxiety", href: "#" },
        { label: "Focus & Memory", href: "#" },
        { label: "Spiritual Cleansing", href: "#" },
        { label: "Energy & Chakra Balancing", href: "#" },
    ]
  },
  {
    label: "🌐 Community & Learning",
    dropdown: [
        { label: "Forum / User Contributions", href: "#" },
        { label: "Videos & Tutorials", href: "#" },
        { label: "Events & Workshops", href: "#" },
    ]
  }
]);
