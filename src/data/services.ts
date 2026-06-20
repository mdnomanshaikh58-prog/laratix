import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  MessageSquare,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = 'web-development' | 'business' | 'academic';

export interface ServiceData {
  id: string;
  category: ServiceCategory;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  includes: string[];
  advanced: string[];
  tools: string[];
  targetClient: string;
  pricing: {
    basic: {
      price: string;
      features: string[];
      deliveryTime: string;
    };
    standard: {
      price: string;
      features: string[];
      deliveryTime: string;
    };
    premium: {
      price: string;
      features: string[];
      deliveryTime: string;
    };
  };
}

const BDT_PER_USD = 125;

const formatDualCurrencyPrice = (usdAmount: number, hasPlus = false) => {
  const bdtAmount = new Intl.NumberFormat('en-US').format(
    usdAmount * BDT_PER_USD,
  );
  const suffix = hasPlus ? '+' : '';

  return `$${usdAmount}${suffix} / ৳${bdtAmount}${suffix} BDT`;
};

export const serviceCategoryContent: Record<
  ServiceCategory,
  {
    label: string;
    description: string;
  }
> = {
  'web-development': {
    label: 'Web Development',
    description:
      'Modern websites, landing pages, stores, and custom web apps designed to convert and scale.',
  },
  business: {
    label: 'Business',
    description:
      'Insight-driven business services for dashboards, reporting, finance, and strategy support.',
  },
  academic: {
    label: 'Academic',
    description:
      'Research-focused services for thesis, analytics, methodology, and end-to-end project support.',
  },
};

export const servicesData: ServiceData[] = [
  {
    id: 'landing-page-development',
    category: 'web-development',
    icon: LayoutTemplate,
    title: 'High-Converting Landing Page Development',
    shortDescription:
      'Custom landing pages built for campaigns, lead generation, and service-based sales funnels.',
    fullDescription:
      'Perfect for agencies, consultants, and startups that need a polished page focused on conversions. We design and build responsive landing pages with strong messaging, clean structure, and clear calls to action.',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    includes: [
      'Custom landing page design and development',
      'Mobile-first responsive layout',
      'CTA-focused page sections',
      'Fast-loading performance setup',
      'Basic on-page SEO structure',
    ],
    advanced: [
      'A/B test-ready section variations',
      'Lead form integration',
      'Analytics and event tracking',
      'Multi-section conversion copy refinement',
    ],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    targetClient: 'Startups, agencies, coaches, service businesses',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(120),
        features: [
          'Single-page landing site',
          'Responsive design',
          'Contact form section',
          'Basic SEO setup',
          '1 revision round',
        ],
        deliveryTime: '3-5 days',
      },
      standard: {
        price: formatDualCurrencyPrice(220),
        features: [
          'Everything in Basic',
          'Custom animations',
          'Conversion-focused section flow',
          'Analytics integration',
          '2 revision rounds',
        ],
        deliveryTime: '5-7 days',
      },
      premium: {
        price: formatDualCurrencyPrice(380, true),
        features: [
          'Everything in Standard',
          'Multi-variant page sections',
          'Advanced form workflows',
          'Performance optimization',
          'Unlimited revisions',
        ],
        deliveryTime: '7-10 days',
      },
    },
  },
  {
    id: 'business-website-development',
    category: 'web-development',
    icon: Globe,
    title: 'Business Website Development',
    shortDescription:
      'Professional multi-page websites for brands that need trust, clarity, and a strong online presence.',
    fullDescription:
      'A complete business website solution for companies that need more than a simple brochure page. We structure your content, build core pages, and deliver a clean, modern experience that reflects your brand professionally.',
    thumbnail:
      'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    includes: [
      'Multi-page business website',
      'Home, about, services, and contact pages',
      'Responsive navigation and layout',
      'Brand-consistent design system',
      'Contact form and CTA sections',
    ],
    advanced: [
      'Blog or portfolio integration',
      'CMS-ready architecture',
      'Speed optimization',
      'Advanced section animations',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    targetClient: 'Agencies, small businesses, personal brands',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(180),
        features: [
          'Up to 4 pages',
          'Responsive development',
          'Basic content sections',
          'Contact form',
          '1 revision round',
        ],
        deliveryTime: '5-7 days',
      },
      standard: {
        price: formatDualCurrencyPrice(320),
        features: [
          'Everything in Basic',
          'Up to 7 pages',
          'Custom section layouts',
          'Performance tuning',
          '2 revision rounds',
        ],
        deliveryTime: '7-10 days',
      },
      premium: {
        price: formatDualCurrencyPrice(500, true),
        features: [
          'Everything in Standard',
          'Expanded page architecture',
          'Blog or portfolio setup',
          'Advanced UI polish',
          'Unlimited revisions',
        ],
        deliveryTime: '10-14 days',
      },
    },
  },
  {
    id: 'ecommerce-frontend',
    category: 'web-development',
    icon: ShoppingCart,
    title: 'E-commerce Storefront Development',
    shortDescription:
      'Conversion-ready storefronts for product businesses that need polished shopping experiences.',
    fullDescription:
      'We build customer-facing storefront experiences for growing brands that want a cleaner online store. From product listing flows to checkout-focused layouts, this service is built to support trust and sales.',
    thumbnail:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    includes: [
      'Homepage and product showcase design',
      'Collection and product detail pages',
      'Shopping cart user flows',
      'Mobile-first storefront experience',
      'Trust-building conversion sections',
    ],
    advanced: [
      'Custom promotional sections',
      'Newsletter and lead capture',
      'Payment flow UI enhancements',
      'Upsell and cross-sell section design',
    ],
    tools: ['React', 'Tailwind CSS', 'Stripe UI', 'REST APIs'],
    targetClient: 'Product brands, online sellers, DTC startups',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(220),
        features: [
          'Core storefront pages',
          'Responsive product layouts',
          'Cart flow UI',
          'Basic promo sections',
          '1 revision round',
        ],
        deliveryTime: '6-8 days',
      },
      standard: {
        price: formatDualCurrencyPrice(380),
        features: [
          'Everything in Basic',
          'Enhanced product browsing',
          'Conversion-focused page sections',
          'Email capture integration',
          '2 revision rounds',
        ],
        deliveryTime: '8-12 days',
      },
      premium: {
        price: formatDualCurrencyPrice(650, true),
        features: [
          'Everything in Standard',
          'Advanced storefront polish',
          'Custom promotional experiences',
          'Scalable frontend architecture',
          'Unlimited revisions',
        ],
        deliveryTime: '12-16 days',
      },
    },
  },
  {
    id: 'web-app-dashboard',
    category: 'web-development',
    icon: Smartphone,
    title: 'Custom Web App Dashboard UI',
    shortDescription:
      'Admin panels and dashboard interfaces for SaaS, internal tools, and data-driven products.',
    fullDescription:
      'This service is for teams that need a usable, clean interface for users, operators, or admins. We design and develop dashboards that organize data clearly and make day-to-day workflows easier to manage.',
    thumbnail:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    includes: [
      'Dashboard layout architecture',
      'Analytics cards and data tables',
      'Responsive sidebar and navigation',
      'User workflow screens',
      'Reusable UI component structure',
    ],
    advanced: [
      'Role-based dashboard views',
      'Advanced filtering experiences',
      'Chart-rich reporting screens',
      'Scalable component system planning',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    targetClient: 'SaaS founders, startups, internal operations teams',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(200),
        features: [
          'Core dashboard interface',
          'Up to 3 main screens',
          'Responsive layout',
          'Basic tables and cards',
          '1 revision round',
        ],
        deliveryTime: '5-7 days',
      },
      standard: {
        price: formatDualCurrencyPrice(360),
        features: [
          'Everything in Basic',
          'Additional workflow screens',
          'Interactive charts',
          'Reusable component patterns',
          '2 revision rounds',
        ],
        deliveryTime: '8-10 days',
      },
      premium: {
        price: formatDualCurrencyPrice(580, true),
        features: [
          'Everything in Standard',
          'Complex dashboard structure',
          'Advanced filtering and reporting',
          'Full UI system polish',
          'Unlimited revisions',
        ],
        deliveryTime: '10-14 days',
      },
    },
  },
  {
    id: 'financial-analysis',
    category: 'business',
    icon: TrendingUp,
    title: 'Financial Data Analysis Package',
    shortDescription:
      'Banking performance analysis, financial ratios, econometric modeling, and STATA-based comprehensive analysis.',
    fullDescription:
      'Deep financial insights for banking, corporate finance, and economic research. Not just calculations, but meaningful analysis with industry-standard tools.',
    thumbnail:
      'https://images.unsplash.com/photo-1767424196045-030bbde122a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzc0NjUxMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Bank performance analysis (ROA, ROE, NIM)',
      'Loan portfolio and credit analysis',
      'Financial ratio analysis',
      'Time series analysis and forecasting',
      'Macro-variable impact studies (GDP, inflation)',
    ],
    advanced: [
      'Econometric modeling (panel data regression)',
      'STATA-based comprehensive analysis',
      'Financial risk assessment',
      'Industry comparison studies',
    ],
    tools: ['STATA', 'SPSS', 'Excel', 'Python'],
    targetClient: 'Finance students, analysts, research projects',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(100),
        features: [
          'Basic financial ratios',
          'Descriptive analysis',
          'Simple trend analysis',
          'Excel-based report',
          '1 revision round',
        ],
        deliveryTime: '3-5 days',
      },
      standard: {
        price: formatDualCurrencyPrice(180),
        features: [
          'Everything in Basic',
          'ROA, ROE, NIM analysis',
          'Time series analysis',
          'STATA/SPSS outputs',
          '2 revision rounds',
        ],
        deliveryTime: '6-8 days',
      },
      premium: {
        price: formatDualCurrencyPrice(300, true),
        features: [
          'Everything in Standard',
          'Panel data regression',
          'Econometric modeling',
          'Comprehensive financial report',
          'Unlimited revisions',
        ],
        deliveryTime: '10-15 days',
      },
    },
  },
  {
    id: 'business-insights',
    category: 'business',
    icon: Briefcase,
    title: 'Business Data Insights & Dashboard Service',
    shortDescription:
      'Transform messy business data into actionable dashboards and KPI tracking for strategic decisions.',
    fullDescription:
      'Turn messy business data into clear, actionable decisions. Perfect for startups and small businesses who need data-driven insights without the complexity.',
    thumbnail:
      'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3NDU0MTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Data cleaning and preparation',
      'Interactive dashboard creation',
      'KPI tracking (sales, performance, growth)',
      'Trend analysis and visualization',
      'Actionable insight reports',
    ],
    advanced: [
      'Custom dashboard design',
      'Real-time data integration',
      'Predictive analytics',
      'Automated reporting systems',
    ],
    tools: ['Excel', 'Power BI', 'Python', 'Tableau'],
    targetClient: 'Small businesses, startups, entrepreneurs',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(100),
        features: [
          'Basic data cleaning',
          'Simple Excel dashboard',
          'Key metrics visualization',
          'Summary insights',
          '1 revision round',
        ],
        deliveryTime: '4-5 days',
      },
      standard: {
        price: formatDualCurrencyPrice(200),
        features: [
          'Everything in Basic',
          'Interactive Power BI dashboard',
          'Multiple KPI tracking',
          'Trend analysis',
          '2 revision rounds',
        ],
        deliveryTime: '7-10 days',
      },
      premium: {
        price: formatDualCurrencyPrice(350, true),
        features: [
          'Everything in Standard',
          'Custom dashboard design',
          'Predictive analytics',
          'Automated reporting',
          'Unlimited revisions',
        ],
        deliveryTime: '12-18 days',
      },
    },
  },
  {
    id: 'data-cleaning',
    category: 'business',
    icon: Database,
    title: 'Data Cleaning & Preparation Service',
    shortDescription:
      'Professional data cleaning with missing value treatment, outlier detection, and structuring.',
    fullDescription:
      'Clean data equals accurate results. Our entry-level service ensures your dataset is analysis-ready with professional treatment of all data quality issues.',
    thumbnail:
      'https://images.unsplash.com/photo-1606327054581-899eb5e6d1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2xlYW5pbmclMjBzcHJlYWRzaGVldCUyMG9yZ2FuaXphdGlvbnxlbnwxfHx8fDE3NzQ2NTEwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Missing value identification and treatment',
      'Outlier detection and handling',
      'Variable transformation and recoding',
      'Dataset structuring and formatting',
      'Data validation and quality checks',
    ],
    advanced: [
      'Advanced imputation techniques',
      'Data normalization and standardization',
      'Variable creation and computation',
      'Data merging and integration',
    ],
    tools: ['SPSS', 'Excel', 'Python', 'STATA'],
    targetClient: 'All researchers and business clients',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(30),
        features: [
          'Basic cleaning',
          'Missing value treatment',
          'Simple outlier detection',
          'Clean dataset file',
          '1 revision round',
        ],
        deliveryTime: '1-2 days',
      },
      standard: {
        price: formatDualCurrencyPrice(60),
        features: [
          'Everything in Basic',
          'Advanced outlier handling',
          'Variable transformation',
          'Structured dataset',
          '2 revision rounds',
        ],
        deliveryTime: '2-3 days',
      },
      premium: {
        price: formatDualCurrencyPrice(100, true),
        features: [
          'Everything in Standard',
          'Advanced imputation',
          'Data normalization',
          'Complete data preparation',
          'Unlimited revisions',
        ],
        deliveryTime: '3-5 days',
      },
    },
  },
  {
    id: 'consultation',
    category: 'business',
    icon: MessageSquare,
    title: 'Consultation & Strategy Sessions',
    shortDescription:
      '1-on-1 sessions for method selection guidance and problem-solving for research or business needs.',
    fullDescription:
      'Get clarity before execution. 1-on-1 sessions to solve your research or business analytics challenges with expert guidance on methodology and strategy.',
    thumbnail:
      'https://images.unsplash.com/photo-1765438864227-288900d09d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzQ2NTEwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Problem definition and scoping',
      'Methodology selection guidance',
      'Tool and technique recommendations',
      'Research design consultation',
      'Analysis strategy planning',
    ],
    advanced: [
      'Complex research design',
      'Advanced statistical method selection',
      'Custom solution development',
      'Long-term project planning',
    ],
    tools: ['Expert consultation'],
    targetClient: 'Anyone needing guidance before starting',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(50),
        features: [
          '1 hour consultation',
          'Problem scoping',
          'Method recommendations',
          'Q&A session',
          'Follow-up email summary',
        ],
        deliveryTime: 'Same day',
      },
      standard: {
        price: formatDualCurrencyPrice(90),
        features: [
          '2 hour consultation',
          'Research design review',
          'Detailed methodology plan',
          'Tool selection guidance',
          'Written strategy document',
        ],
        deliveryTime: '1-2 days',
      },
      premium: {
        price: formatDualCurrencyPrice(150, true),
        features: [
          'Multiple consultation sessions',
          'Complete project planning',
          'Custom solution design',
          'Ongoing support access',
          'Comprehensive strategy report',
        ],
        deliveryTime: 'Flexible',
      },
    },
  },
  {
    id: 'academic-research',
    category: 'academic',
    icon: BookOpen,
    title: 'Academic Research Analytics Suite',
    shortDescription:
      'Complete research analysis from descriptive statistics to advanced SEM and CFA for thesis and academic projects.',
    fullDescription:
      'Your strongest entry point for thesis students, MBA/BBA candidates, and researchers. We turn your raw data into a complete research results chapter with academic-level precision.',
    thumbnail:
      'https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwZGF0YSUyMGFuYWx5dGljcyUyMHN0dWRlbnR8ZW58MXx8fHwxNzc0NjUxMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Descriptive statistics (mean, standard deviation, etc.)',
      'Correlation analysis (Pearson, Spearman)',
      'Regression analysis (linear, multiple)',
      'Hypothesis testing (t-test, ANOVA, chi-square)',
      'Detailed interpretation and reporting',
    ],
    advanced: [
      'Structural Equation Modeling (SEM)',
      'Confirmatory Factor Analysis (CFA)',
      'Mediation and moderation analysis',
      'Path analysis',
    ],
    tools: ['SPSS', 'AMOS', 'SmartPLS', 'STATA'],
    targetClient: 'Thesis students, MBA/BBA, researchers',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(80),
        features: [
          'Descriptive statistics',
          'Basic correlation analysis',
          'Simple regression',
          'Summary report',
          '1 revision round',
        ],
        deliveryTime: '3-4 days',
      },
      standard: {
        price: formatDualCurrencyPrice(150),
        features: [
          'Everything in Basic',
          'Multiple regression',
          'Hypothesis testing (t-test, ANOVA)',
          'Detailed interpretation',
          '2 revision rounds',
        ],
        deliveryTime: '5-7 days',
      },
      premium: {
        price: formatDualCurrencyPrice(250, true),
        features: [
          'Everything in Standard',
          'SEM / CFA analysis',
          'Mediation & moderation',
          'Full research report',
          'Unlimited revisions',
        ],
        deliveryTime: '10-14 days',
      },
    },
  },
  {
    id: 'research-support',
    category: 'academic',
    icon: Award,
    title: 'Complete Research Project Support',
    shortDescription:
      'End-to-end thesis and research project support from proposal to final report with revisions.',
    fullDescription:
      'Premium end-to-end research completion service. From proposal to final report, we have got you covered with comprehensive support at every stage.',
    thumbnail:
      'https://images.unsplash.com/photo-1672595527067-f5aef22037f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHByb2plY3QlMjB0aGVzaXMlMjB3cml0aW5nfGVufDF8fHx8MTc3NDY1MTA0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    includes: [
      'Research proposal guidance',
      'Literature review assistance',
      'Complete data analysis',
      'Results interpretation',
      'Report writing support',
      'Multiple revision rounds',
      'Ongoing consultation',
    ],
    advanced: [
      'Research design consultation',
      'Questionnaire development',
      'Data collection strategy',
      'Publication preparation',
    ],
    tools: ['All available tools based on requirements'],
    targetClient: 'Final-year students, thesis clients',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(200),
        features: [
          'Proposal guidance',
          'Data analysis support',
          'Basic interpretation',
          'Results chapter draft',
          '2 revision rounds',
        ],
        deliveryTime: '7-10 days',
      },
      standard: {
        price: formatDualCurrencyPrice(400),
        features: [
          'Everything in Basic',
          'Literature review help',
          'Comprehensive analysis',
          'Full results chapter',
          '3 revision rounds',
        ],
        deliveryTime: '14-20 days',
      },
      premium: {
        price: formatDualCurrencyPrice(600, true),
        features: [
          'Everything in Standard',
          'End-to-end project support',
          'Questionnaire development',
          'Complete thesis chapters',
          'Unlimited revisions',
        ],
        deliveryTime: '21-30 days',
      },
    },
  },
  {
    id: 'academic-data-interpretation',
    category: 'academic',
    icon: Code2,
    title: 'Academic Data Interpretation & Reporting',
    shortDescription:
      'Research findings converted into clear tables, interpretations, and results chapter-ready reporting.',
    fullDescription:
      'Ideal for students and researchers who already have output files but need expert interpretation. We transform raw results into academic-ready explanation, structure, and reporting that is easier to defend and present.',
    thumbnail:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    includes: [
      'Output interpretation and explanation',
      'Results chapter structure support',
      'Table and figure organization',
      'Hypothesis discussion support',
      'Academic writing alignment',
    ],
    advanced: [
      'Chapter flow refinement',
      'Supervisor feedback incorporation',
      'Journal-style reporting structure',
      'Defense presentation support',
    ],
    tools: ['SPSS', 'AMOS', 'STATA', 'Word'],
    targetClient: 'Thesis students, postgraduate researchers, dissertation writers',
    pricing: {
      basic: {
        price: formatDualCurrencyPrice(70),
        features: [
          'Basic result interpretation',
          'Table explanation support',
          'Results summary',
          'Formatted notes',
          '1 revision round',
        ],
        deliveryTime: '2-3 days',
      },
      standard: {
        price: formatDualCurrencyPrice(130),
        features: [
          'Everything in Basic',
          'Structured results chapter support',
          'Hypothesis discussion',
          'Polished reporting flow',
          '2 revision rounds',
        ],
        deliveryTime: '4-6 days',
      },
      premium: {
        price: formatDualCurrencyPrice(220, true),
        features: [
          'Everything in Standard',
          'Advanced interpretation depth',
          'Supervisor revision support',
          'Defense-ready reporting',
          'Unlimited revisions',
        ],
        deliveryTime: '6-9 days',
      },
    },
  },
];

export const serviceCategoryOrder: ServiceCategory[] = [
  'web-development',
  'business',
  'academic',
];

export const servicesByCategory = serviceCategoryOrder.map((category) => ({
  category,
  ...serviceCategoryContent[category],
  services: servicesData.filter((service) => service.category === category),
}));
