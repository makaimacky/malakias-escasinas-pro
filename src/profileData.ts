export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  impact: string;
  highlights: string[];
};

export type Project = {
  name: string;
  category: 'Systems' | 'Dashboard' | 'Web' | 'Data';
  stack: string[];
  description: string;
  outcomes: string[];
};

export const profile = {
  name: 'Malakias T. Escasinas',
  shortName: 'Macky Escasinas',
  title: 'Full Stack Web Developer • Data Analyst • Dashboard Developer',
  location: 'Muntinlupa City, Philippines',
  email: 'Macky.escasinas@gmail.com',
  phone: '09159847136',
  portfolio: 'https://makaimacky.github.io/portfolio/',
  linkedIn: 'https://www.linkedin.com/in/malakias-escasinas/',
  driveFolder: 'https://drive.google.com/drive/folders/18DyEMtFaKIrb-WOh9ciCv8vid_3yOAjX?usp=sharing',
  driveFile: 'https://drive.google.com/file/d/1D06bWF5cGJpA8_eMRXQ1g21r1WqRoY0J/view?usp=drive_link',
  intro:
    'With over 15 years of professional experience in web development, data analysis, dashboard development, and senior technical support, I bring a strong combination of technical expertise and business-focused problem solving.',
  about:
    'My main programming language is PHP, with over four years of solid experience in WordPress development, including Elementor, WooCommerce, custom theme development using WordPress hierarchy and custom fields. I specialize in technical SEO implementation and website optimization using Yoast, Jetpack, Screaming Frog, Google Analytics, and Google Ads. I also enhance website speed and performance using WP Rocket and implement security solutions with MalCare, Sucuri, and Wordfence.',
  dataStory:
    'As a Data Analyst, I have worked extensively with back-office and API data, building data-gathering applications and validating API documentation for compliance and accuracy. I have designed and developed dashboards and graphical user interfaces to visualize business data, monitor KPIs, track transactions, and generate analytical reports that support decision-making.',
  modernStack:
    'Additionally, I have knowledge of ReactJS, ExpressJS, and NodeJS, with projects that include newsletter systems and email notification platforms. I am a Zuitt Bootcamp graduate with Front-end and Back-end certifications and have completed AWS S3 and EC2 training.',
  closing:
    'I am confident that my experience in web development, data visualization, dashboard creation, SEO optimization, and system support will allow me to contribute effectively to your team.',
};

export const stats = [
  { label: 'Years Professional Experience', value: '15+', detail: 'Web, data, dashboard, support' },
  { label: 'WordPress Experience', value: '4+', detail: 'Elementor, WooCommerce, themes' },
  { label: 'Performance Improvement', value: '30%', detail: 'React/Node app optimization' },
  { label: 'Traffic Impression Growth', value: '25%', detail: 'Technical SEO implementation' },
];

export const skillGroups = [
  {
    title: 'Core Development',
    icon: 'Code2',
    skills: ['PHP', 'ReactJS', 'NodeJS', 'ExpressJS', 'JavaScript ES6+', 'HTML', 'CSS', 'REST API'],
  },
  {
    title: 'WordPress & SEO',
    icon: 'Globe2',
    skills: ['WordPress', 'Elementor', 'WooCommerce', 'Custom Themes', 'Custom Fields', 'Yoast', 'Jetpack', 'Screaming Frog', 'Google Analytics', 'Google Ads'],
  },
  {
    title: 'Data & Dashboards',
    icon: 'BarChart3',
    skills: ['Back-office Data', 'API Data Validation', 'KPI Dashboards', 'Transaction Monitoring', 'Analytical Reports', 'SQL Server Reporting Services'],
  },
  {
    title: 'Cloud, Performance & Security',
    icon: 'ShieldCheck',
    skills: ['AWS EC2', 'AWS S3', 'WP Rocket', 'MalCare', 'Sucuri', 'Wordfence', 'Performance Optimization'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Gavin Ventures Inc. (OKBET)',
    role: 'Full Stack Web Developer',
    location: 'Taguig City, Metro Manila',
    period: 'August 2022 – May 2026',
    impact: 'Built enterprise-level applications, integrated gaming APIs, improved speed, SEO, and user experience.',
    highlights: [
      'Designed and developed enterprise-level web applications using React.js and Node.js, improving loading speed by approximately 30%.',
      'Implemented responsive UI/UX interfaces that enhanced user interaction and satisfaction.',
      'Optimized web pages through technical SEO, increasing traffic impressions by approximately 25%.',
      'Integrated APIs for gaming data while ensuring backend reliability and documentation compliance.',
      'Collaborated in Agile teams to convert business requirements into scalable technical solutions.',
    ],
  },
  {
    company: 'Karamar Corporation',
    role: 'Software Developer',
    location: 'Makati City, Metro Manila',
    period: 'July 2015 – August 2022',
    impact: 'Developed business systems, maintained databases, improved reporting, and supported operational workflows.',
    highlights: [
      'Collaborated with project management to develop and refine database systems for operational efficiency.',
      'Designed, optimized, tested, and troubleshot web applications prior to deployment.',
      'Administered and maintained databases, resolving issues that improved uptime by approximately 20%.',
      'Developed reporting solutions using SQL Server Reporting Services for business decision-making.',
      'Led technology implementation initiatives that improved productivity and software value.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'HR Management / HRExam',
    category: 'Systems',
    stack: ['PHP', 'Database', 'Dashboard', 'UI/UX'],
    description: 'A comprehensive HR management application that streamlines applicant exams, result verification, and real-time result posting.',
    outcomes: ['Faster applicant feedback', 'Improved exam monitoring', 'Reduced manual HR work'],
  },
  {
    name: 'Sales System',
    category: 'Systems',
    stack: ['PHP', 'Reports', 'Transactions', 'Database'],
    description: 'A transaction management system for client payments, discounts, account records, and sales monitoring.',
    outcomes: ['Improved payment tracking', 'Reduced account discrepancies', 'Cleaner reporting workflow'],
  },
  {
    name: 'Clinic Management System',
    category: 'Systems',
    stack: ['Inventory', 'Patient Records', 'Database', 'Forms'],
    description: 'An inventory and patient history platform for tracking medicines, automating patient data entry, and improving clinic operations.',
    outcomes: ['Better medicine tracking', 'Fewer data entry errors', 'Improved patient record integrity'],
  },
  {
    name: 'Cash Monitoring System',
    category: 'Dashboard',
    stack: ['KPI', 'Data Visualization', 'Transactions', 'Reports'],
    description: 'A dashboard-oriented monitoring system that tracks financial transactions and supports analytical reporting.',
    outcomes: ['Clearer KPI visibility', 'Faster reporting', 'Improved transaction review'],
  },
  {
    name: 'Casino Dashboard Interface',
    category: 'Dashboard',
    stack: ['API', 'Gaming Data', 'Dashboard UI', 'Compliance'],
    description: 'A custom design and dashboard interface for gaming platform data, including API-driven views and monitoring panels.',
    outcomes: ['Better data visibility', 'API documentation validation', 'Improved operational monitoring'],
  },
  {
    name: 'Newsletter & Email Notification Platforms',
    category: 'Web',
    stack: ['ReactJS', 'NodeJS', 'ExpressJS', 'Email'],
    description: 'Modern JavaScript projects for newsletter management and automated email notification workflows.',
    outcomes: ['Automated communication', 'Reusable components', 'Improved user engagement'],
  },
];

export const certifications = [
  {
    name: 'Zuitt Bootcamp Front-end Certified',
    url: 'http://share.zertify.zuitt.co/certificate/afc9457f-628c-427b-8d90-7aef9b3a09b0',
  },
  {
    name: 'Zuitt Bootcamp Back-end Certified',
    url: 'http://share.zertify.zuitt.co/certificate/20fbe17e-d1e8-4d0a-9779-875dda3b8672',
  },
  {
    name: 'AWS S3 Training',
    url: 'http://share.zertify.zuitt.co/certificate/0c1ce3bb-ca35-4686-bd44-70b323632e57',
  },
  {
    name: 'AWS EC2 Training',
    url: 'http://share.zertify.zuitt.co/certificate/0c1ce3bb-ca35-4686-bd44-70b323632e57',
  },
  {
    name: 'Full Stack Developer Certificate',
    url: 'http://share.zertify.zuitt.co/certificate/ca615f11-2305-47aa-9479-002f8a83e00e',
  },
  {
    name: 'Scholar ng Bayan Awardee',
    url: '',
  },
];

export const education = {
  school: 'Pamantasan ng Lungsod ng Muntinlupa',
  degree: 'Bachelor of Science in Computer Science',
  period: '2010 – 2014',
};


export type WebsiteSample = {
  name: string;
  url: string;
  category: 'Custom Theme' | 'WooCommerce' | 'SEO Blog' | 'Shopify' | 'Resort';
  summary: string;
  tags: string[];
};

export const websiteSamples: WebsiteSample[] = [
  {
    name: 'Betflix93',
    url: 'https://betflix93.vip/',
    category: 'Custom Theme',
    summary: 'Custom WordPress theme work using custom fields for a casino-style front-end experience.',
    tags: ['WordPress', 'Custom Fields', 'Theme UI'],
  },
  {
    name: 'The88 Thai',
    url: 'https://the88thai.co/',
    category: 'Custom Theme',
    summary: 'Custom theme implementation for a localized gaming website with reusable content fields.',
    tags: ['Custom Theme', 'Localization', 'CMS'],
  },
  {
    name: 'The88 Auto',
    url: 'https://the88auto.co/',
    category: 'Custom Theme',
    summary: 'Custom WordPress build focused on structured content management and campaign-ready pages.',
    tags: ['WordPress', 'SEO', 'Landing Pages'],
  },
  {
    name: 'The88 MVP',
    url: 'https://the88mvp.co/',
    category: 'Custom Theme',
    summary: 'Custom field driven theme work for content flexibility, page consistency, and faster updates.',
    tags: ['Custom Fields', 'Theme Hierarchy', 'UI'],
  },
  {
    name: 'Abrams MFG',
    url: 'https://abramsmfg.com/',
    category: 'WooCommerce',
    summary: 'E-commerce website experience using WooCommerce for product presentation and online transactions.',
    tags: ['WooCommerce', 'E-commerce', 'WordPress'],
  },
  {
    name: 'PBA Online Betting',
    url: 'https://pbaonlinebetting.ph/',
    category: 'SEO Blog',
    summary: 'Content-focused website supporting organic search visibility, technical SEO, and publishing workflows.',
    tags: ['SEO', 'Blog', 'Analytics'],
  },
  {
    name: 'Top Online Sports Betting',
    url: 'https://toponlinesportsbetting.ph/',
    category: 'SEO Blog',
    summary: 'SEO-oriented content website structured for sports betting topics, discoverability, and performance.',
    tags: ['SEO Content', 'WordPress', 'Optimization'],
  },
  {
    name: 'PBA Updates',
    url: 'https://pbaupdates.ph/',
    category: 'SEO Blog',
    summary: 'Publishing website designed for updates, article organization, and search-friendly content delivery.',
    tags: ['Publishing', 'SEO', 'CMS'],
  },
  {
    name: 'Online Betting Games',
    url: 'https://onlinebettinggames.ph/',
    category: 'SEO Blog',
    summary: 'SEO blog website with organized content pages, search-focused structure, and performance considerations.',
    tags: ['SEO', 'Content', 'Performance'],
  },
  {
    name: 'OKBET Play',
    url: 'https://okbetplay.app/',
    category: 'SEO Blog',
    summary: 'Gaming-related web property supporting SEO campaigns, structured content, and user acquisition.',
    tags: ['SEO', 'Gaming', 'Content'],
  },
  {
    name: 'OKBET Sports',
    url: 'https://okbetsports.com/',
    category: 'SEO Blog',
    summary: 'Sports content website with technical SEO, content structure, and publishing optimization.',
    tags: ['Sports', 'SEO', 'Analytics'],
  },
  {
    name: 'OKBET Sports PH',
    url: 'https://okbetsports.ph/',
    category: 'SEO Blog',
    summary: 'Localized sports website for content campaigns, SEO implementation, and web performance improvements.',
    tags: ['Local SEO', 'WordPress', 'Content'],
  },
  {
    name: 'OKBET Sports Net',
    url: 'https://okbetsports.net/',
    category: 'SEO Blog',
    summary: 'Search-focused sports website built around structured publishing and optimization workflows.',
    tags: ['SEO', 'Publishing', 'Performance'],
  },
  {
    name: 'Sports PH News',
    url: 'https://sportsphnews.com/',
    category: 'SEO Blog',
    summary: 'News-style website supporting frequent publishing, content categorization, and organic reach.',
    tags: ['News', 'SEO', 'CMS'],
  },
  {
    name: 'BK888',
    url: 'https://bk888.tech/',
    category: 'SEO Blog',
    summary: 'Gaming-related web property for content visibility, search optimization, and campaign support.',
    tags: ['Gaming', 'SEO', 'Web'],
  },
  {
    name: 'CasinoPlus88',
    url: 'https://casinoplus88.com/',
    category: 'SEO Blog',
    summary: 'Casino-focused website work involving content structure, web optimization, and SEO implementation.',
    tags: ['Casino', 'SEO', 'Optimization'],
  },
  {
    name: 'Playtime88',
    url: 'https://playtime88.com/',
    category: 'SEO Blog',
    summary: 'Content and optimization work for gaming-related pages, campaigns, and search visibility.',
    tags: ['Content', 'SEO', 'Gaming'],
  },
  {
    name: 'OKGames88',
    url: 'https://okgames88.com/',
    category: 'SEO Blog',
    summary: 'SEO and website optimization experience for a gaming-oriented web property.',
    tags: ['SEO', 'WordPress', 'Performance'],
  },
  {
    name: 'Jewelmer',
    url: 'https://www.jewelmer.com/',
    category: 'Shopify',
    summary: 'Shopify website experience for a premium brand presence with clean product and content presentation.',
    tags: ['Shopify', 'E-commerce', 'Brand'],
  },
  {
    name: 'Urban Villas Resort',
    url: 'https://urbanvillasresort.com/',
    category: 'Resort',
    summary: 'Hospitality website experience focused on professional presentation, responsive design, and conversion-oriented pages.',
    tags: ['Hospitality', 'Responsive', 'Website'],
  },
];

export type GallerySample = {
  id: string;
  title: string;
  category: 'Dashboard' | 'Website' | 'Analytics' | 'Report';
  source: string;
  url: string;
  thumbnail: string;
  description: string;
};

const driveThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const gallerySamples: GallerySample[] = [
  {
    id: '1XvDrWI6Tt2M7o6dQLCbSVUABh4XB8Byy',
    title: 'Registration Analytics Dashboard',
    category: 'Dashboard',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1XvDrWI6Tt2M7o6dQLCbSVUABh4XB8Byy/view?usp=sharing',
    thumbnail: driveThumb('1XvDrWI6Tt2M7o6dQLCbSVUABh4XB8Byy'),
    description: 'Registration KPIs, verification status, trends, and outlet performance views.',
  },
  {
    id: '1MB_quXUt68TgCczIsVJsFVGbeIFnZdLr',
    title: 'Monthly Performance Summary',
    category: 'Analytics',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1MB_quXUt68TgCczIsVJsFVGbeIFnZdLr/view?usp=sharing',
    thumbnail: driveThumb('1MB_quXUt68TgCczIsVJsFVGbeIFnZdLr'),
    description: 'Monthly trends for active users, agents, valid bets, and GGR.',
  },
  {
    id: '1DF5_ZIaJwlnhDu2a25nu2wHce5ew_iUb',
    title: 'Registration Summary Report',
    category: 'Report',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1DF5_ZIaJwlnhDu2a25nu2wHce5ew_iUb/view?usp=sharing',
    thumbnail: driveThumb('1DF5_ZIaJwlnhDu2a25nu2wHce5ew_iUb'),
    description: 'Registration, verified, and fully verified performance summaries with detailed tables.',
  },
  {
    id: '1Rvo_HpJBrNOCuvj5X28WVf2VFcifwmqz',
    title: 'Master Agent Performance Overview',
    category: 'Dashboard',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1Rvo_HpJBrNOCuvj5X28WVf2VFcifwmqz/view?usp=sharing',
    thumbnail: driveThumb('1Rvo_HpJBrNOCuvj5X28WVf2VFcifwmqz'),
    description: 'Agent activity, active players, GGR, and performance distribution dashboards.',
  },
  {
    id: '1Baw1CvH2l8SV_O1jtFSvoNU-de5Yoc__',
    title: 'Facebook Analytics Dashboard',
    category: 'Analytics',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1Baw1CvH2l8SV_O1jtFSvoNU-de5Yoc__/view?usp=sharing',
    thumbnail: driveThumb('1Baw1CvH2l8SV_O1jtFSvoNU-de5Yoc__'),
    description: 'Social metrics covering reach, views, interactions, link clicks, visits, and follows.',
  },
  {
    id: '1Gu9nQWfx7N3nyPmKLr8hUJ8E9ML_OFDy',
    title: 'Sports News PH Dashboard',
    category: 'Analytics',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1Gu9nQWfx7N3nyPmKLr8hUJ8E9ML_OFDy/view?usp=sharing',
    thumbnail: driveThumb('1Gu9nQWfx7N3nyPmKLr8hUJ8E9ML_OFDy'),
    description: 'Content reach, traffic, follows, and website/social performance monitoring.',
  },
  {
    id: '14JyBOGTW-oF33bfHP14Cjjy14QxQW8mf',
    title: '2026 Betting Station Dashboard',
    category: 'Dashboard',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/14JyBOGTW-oF33bfHP14Cjjy14QxQW8mf/view?usp=sharing',
    thumbnail: driveThumb('14JyBOGTW-oF33bfHP14Cjjy14QxQW8mf'),
    description: 'Operational dashboard views for active players, transactions, deposits, withdrawals, and GGR.',
  },
  {
    id: '1D06bWF5cGJpA8_eMRXQ1g21r1WqRoY0J',
    title: 'BD-Tech Team Dashboard',
    category: 'Dashboard',
    source: 'Drive Folder 2',
    url: 'https://drive.google.com/file/d/1D06bWF5cGJpA8_eMRXQ1g21r1WqRoY0J/view?usp=sharing',
    thumbnail: driveThumb('1D06bWF5cGJpA8_eMRXQ1g21r1WqRoY0J'),
    description: 'Team task overview, workflow, data views, workload trends, and task status reporting.',
  },
  {
    id: '1EIbh4ZyeNH7e7IRIcQ8Whzgg6gDLfDzN',
    title: 'Abrams MFG Website Sample',
    category: 'Website',
    source: 'Drive Folder 2',
    url: 'https://drive.google.com/file/d/1EIbh4ZyeNH7e7IRIcQ8Whzgg6gDLfDzN/view?usp=sharing',
    thumbnail: driveThumb('1EIbh4ZyeNH7e7IRIcQ8Whzgg6gDLfDzN'),
    description: 'WooCommerce/e-commerce website sample preview from the project folder.',
  },
  {
    id: '1lPTgFPp_j9P5cG42TALyVv834osEm-u0',
    title: 'OKBET Sports PH Website Sample',
    category: 'Website',
    source: 'Drive Folder 2',
    url: 'https://drive.google.com/file/d/1lPTgFPp_j9P5cG42TALyVv834osEm-u0/view?usp=sharing',
    thumbnail: driveThumb('1lPTgFPp_j9P5cG42TALyVv834osEm-u0'),
    description: 'Sports content website sample preview focused on SEO and publishing workflows.',
  },
  {
    id: '1Qf_8ij1s8x172Smk5r46wFlZG2MaSIan',
    title: 'Lotto OKBET Website Sample',
    category: 'Website',
    source: 'Drive Folder 2',
    url: 'https://drive.google.com/file/d/1Qf_8ij1s8x172Smk5r46wFlZG2MaSIan/view?usp=sharing',
    thumbnail: driveThumb('1Qf_8ij1s8x172Smk5r46wFlZG2MaSIan'),
    description: 'Website sample preview for gaming-related landing and content presentation.',
  },
  {
    id: '1IQ-qTTFBJACNB9XjsNzHNHBJVCZ1FLDJ',
    title: 'Three Game Report vs Back Office Data',
    category: 'Report',
    source: 'Drive Folder 1',
    url: 'https://drive.google.com/file/d/1IQ-qTTFBJACNB9XjsNzHNHBJVCZ1FLDJ/view?usp=sharing',
    thumbnail: driveThumb('1IQ-qTTFBJACNB9XjsNzHNHBJVCZ1FLDJ'),
    description: 'Variance report comparing game data and back-office data across count, stake, payout, and GGR.',
  },
  {
    id: '1ym0KvLVAGK7DfzOhUXawyommbhgIaKFu',
    title: 'React Extraction Sample',
    category: 'Website',
    source: 'Drive File',
    url: 'https://drive.google.com/file/d/1ym0KvLVAGK7DfzOhUXawyommbhgIaKFu/view?usp=sharing',
    thumbnail: driveThumb('1ym0KvLVAGK7DfzOhUXawyommbhgIaKFu'),
    description: 'React extraction visual sample added from the provided Drive file for review as part of the portfolio gallery.',
  },
];
