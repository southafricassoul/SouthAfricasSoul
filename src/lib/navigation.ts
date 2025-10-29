import {
  Home,
  BookOpen,
  ShoppingBag,
  Globe2,
  Gem,
  Leaf,
  Flower2,
  Heart,
  FlaskConical,
  Library,
  Sprout,
  BrainCircuit,
  Users,
} from "lucide-react";

export const menuOptions = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "About",
    icon: BookOpen,
    dropdown: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Philosophy", href: "/about/mission-philosophy" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
  {
    label: "Shop (Marketplace)",
    icon: ShoppingBag,
    dropdown: [
      { label: "Herbal Blends & Teas", href: "/shop/herbal-blends-teas" },
      { label: "Oils (Essential & Carrier)", href: "/shop/oils-essential-carrier" },
      { label: "Massage & Aromatherapy Kits", href: "/shop/massage-aromatherapy-kits" },
      { label: "DIY Kits", href: "/shop/diy-kits" },
      { label: "Digital Products (E-books, PDFs)", href: "/shop/digital-products" },
    ],
  },
  {
    label: "Region and Traditions",
    icon: Globe2,
    dropdown: [
      {
        label: "Global Apothecary",
        dropdown: [
          { label: "European Folk Herbalism", href: "/region/global/european-folk-herbalism" },
          { label: "Chinese Medicine (TCM)", href: "/region/global/chinese-medicine" },
          { label: "Indigenous American", href: "/region/global/indigenous-american" },
          { label: "Middle Eastern Herbalism", href: "/region/global/middle-eastern-herbalism" },
        ],
      },
      {
        label: "African Herbal Apothecary",
        dropdown: [
          {
            label: "History of African Herbalism",
            dropdown: [
              { label: "Origins and Cultural Lineage", href: "/region/african/history/origins" },
              { label: "Indigenous Medicinal Evolution", href: "/region/african/history/evolution" },
            ],
          },
          {
            label: "African Healing Traditions by Region",
            dropdown: [
              { label: "Zulu Healing", href: "/region/african/traditions/zulu" },
              { label: "Xhosa Healing", href: "/region/african/traditions/xhosa" },
              { label: "Tswana & Sotho Healing", href: "/region/african/traditions/tswana-sotho" },
              { label: "Yoruba Healing", href: "/region/african/traditions/yoruba" },
              { label: "Ashanti & Akan Healing", href: "/region/african/traditions/ashanti-akan" },
              { label: "Berber Healing", href: "/region/african/traditions/berber" },
              { label: "Nubian Healing", href: "/region/african/traditions/nubian" },
              { label: "Egyptian Healing", href: "/region/african/traditions/egyptian" },
              { label: "Central & East African Healing", href: "/region/african/traditions/central-east" },
            ],
          },
          {
            label: "African Healing Tools & Rituals",
            dropdown: [
              { label: "Implements & Rituals", href: "/region/african/tools/implements" },
              { label: "Spirituality & Medicine", href: "/region/african/tools/spirituality" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Global Homeopathy & Ayurveda",
    icon: Gem,
    dropdown: [
      {
        label: "Homeopathy",
        dropdown: [
          { label: "Principles of Homeopathy", href: "/global/homeopathy/principles" },
          { label: "Potency & Dilution Scales", href: "/global/homeopathy/potency" },
          { label: "Common Homeopathic Remedies", href: "/global/homeopathy/remedies" },
          { label: "African-Adapted Homeopathic Approaches", href: "/global/homeopathy/african-adapted" },
        ],
      },
      {
        label: "Ayurveda",
        dropdown: [
          { label: "The Three Doshas", href: "/global/ayurveda/doshas" },
          { label: "Ayurvedic Herbs & Spices", href: "/global/ayurveda/herbs" },
          { label: "Herbal Formulations by Dosha", href: "/global/ayurveda/formulations" },
          { label: "Ayurvedic Oils & Body Treatments", href: "/global/ayurveda/oils" },
          { label: "Ayurvedic Massage", href: "/global/ayurveda/massage" },
        ],
      },
    ],
  },
  {
    label: "Natural Ingredients & Oils",
    icon: Leaf,
    dropdown: [
      {
        label: "Plant Parts",
        dropdown: [
          { label: "Seeds", href: "/ingredients/plant-parts/seeds" },
          { label: "Roots", href: "/ingredients/plant-parts/roots" },
          { label: "Bark", href: "/ingredients/plant-parts/bark" },
          { label: "Leaves", href: "/ingredients/plant-parts/leaves" },
          { label: "Flowers", href: "/ingredients/plant-parts/flowers" },
          { label: "Fruit", href: "/ingredients/plant-parts/fruit" },
          { label: "Resin & Sap", href: "/ingredients/plant-parts/resin-sap" },
        ],
      },
      {
        label: "Carrier Oils",
        dropdown: [
          { label: "Sweet Almond Oil", href: "/ingredients/carrier-oils/sweet-almond" },
          { label: "Jojoba Oil", href: "/ingredients/carrier-oils/jojoba" },
        ],
      },
      {
        label: "Essential Oils",
        dropdown: [
          { label: "Lavender", href: "/ingredients/essential-oils/lavender" },
          { label: "Chamomile", href: "/ingredients/essential-oils/chamomile" },
        ],
      },
    ],
  },
  {
    label: "Aromatherapy & Massage Therapy",
    icon: Flower2,
    dropdown: [
        {
            label: "Aromatherapy",
            dropdown: [
                { label: "Principles of Aromatherapy", href: "/therapy/aromatherapy/principles" },
                { label: "Essential Oil Blending Guide", href: "/therapy/aromatherapy/blending-guide" },
            ]
        },
        {
            label: "Massage Therapy",
            dropdown: [
                { label: "Introduction to Therapeutic Massage", href: "/therapy/massage/introduction" },
                {
                    label: "Massage Techniques",
                    dropdown: [
                        { label: "Swedish Massage", href: "/therapy/massage/techniques/swedish" },
                        { label: "Deep Tissue", href: "/therapy/massage/techniques/deep-tissue" },
                    ]
                },
            ]
        }
    ]
  },
  {
    label: "Benefits",
    icon: Heart,
    dropdown: [
      {
        label: "Physical",
        dropdown: [
            { label: "Sleep Aid", href: "/benefits/physical/sleep-aid" },
            { label: "Energy & Vitality", href: "/benefits/physical/energy-vitality" },
            {
                label: "Skin Health",
                dropdown: [
                    { label: "Dark Mark Removal", href: "/benefits/physical/skin-health/dark-mark-removal" },
                    { label: "Anti-Aging", href: "/benefits/physical/skin-health/anti-aging" },
                ]
            },
        ],
      },
      {
        label: "Emotional & Mental Health",
        dropdown: [
            { label: "Stress Relief & Anxiety", href: "/benefits/emotional/stress-relief" },
            { label: "Focus & Memory", href: "/benefits/emotional/focus-memory" },
        ]
      },
    ],
  },
  {
    label: "DIY & Recipes",
    icon: FlaskConical,
    dropdown: [
        {
            label: "Homeopathy & Apothecary",
            dropdown: [
                { label: "African Remedies", href: "/diy/apothecary/african-remedies" },
                { label: "Global Remedies", href: "/diy/apothecary/global-remedies" },
            ]
        },
        { label: "Teas & Tonics", href: "/diy/teas-tonics" },
    ]
  },
  {
    label: "Education Hub",
    icon: Library,
    dropdown: [
        { label: "Safety & Dosage", href: "/education/safety-dosage" },
        { label: "Mixing Charts", href: "/education/mixing-charts" },
    ]
  },
  {
    label: "Nutrition & Wellness",
    icon: Sprout,
    dropdown: [
        { label: "Herbal Nutrition", href: "/wellness/herbal-nutrition" },
        { label: "Gut Health & Probiotics", href: "/wellness/gut-health" },
    ]
  },
  {
    label: "Mind & Spirit",
    icon: BrainCircuit,
    dropdown: [
        { label: "Relaxation & Sleep", href: "/mind-spirit/relaxation-sleep" },
        { label: "Mood & Anxiety", href: "/mind-spirit/mood-anxiety" },
    ]
  },
  {
    label: "Community & Learning",
    icon: Users,
    dropdown: [
        { label: "Forum", href: "/community/forum" },
        { label: "Videos & Tutorials", href: "/community/videos-tutorials" },
    ]
  }
];
