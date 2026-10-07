// Upswing Agency Strategic Data & Knowledge Layer

export const brandInfo = {
  name: 'Upswing Agency',
  tagline: 'Scale with Ads. Build with Tech. Grow with Content.',
  subheading: 'Upswing is a full-stack growth and technology agency. We empower all types of businesses with high-converting Meta & Google Ads, custom websites & IT solutions, and cinematic commercial video production.',
  coreDifferentiator: 'Performance Ads + IT & Web Development + In-House Video Production — engineered seamlessly under one agency.',
  location: 'Noida, Delhi NCR & Uttar Pradesh, India',
  founder: {
    name: 'Prashant Pal',
    role: 'Founder & Managing Director',
    bio: 'Strategic lead unifying high-converting Meta & Google Ads, robust web & IT infrastructure, and on-location cinematic video production.',
    image: '/images/prashant_pal_founder.png',
    linkedin: 'https://www.linkedin.com/in/prashant-pal01/'
  },
  email: 'palprashant90.ai@gmail.com',
  phone: '+91 93891 10347',
  whatsappUrl: "https://wa.me/919389110347?text=Hi%20Upswing%20Agency,%20I'd%20like%20to%20discuss%20growing%20our%20business.",
  socials: {
    instagram: 'https://instagram.com/upswingagency',
    linkedin: 'https://www.linkedin.com/in/prashant-pal01/',
    youtube: 'https://youtube.com/@upswingagency'
  }
};

export const trustMetrics = [
  { value: '₹2.5Cr+', label: 'Managed Ad Spend', sub: 'Meta & Google Ads (5.2x Avg ROAS)' },
  { value: '60+', label: 'IT & Web Solutions Built', sub: 'Corporate Sites, Web Apps & Portals' },
  { value: '150+', label: 'Commercial Video Shoots', sub: '4K Cinema & Motorized Gimbal Reels' },
  { value: '100%', label: 'Direct Media & Tech Billing', sub: 'Zero markup on ad spend or hosting' }
];

export const serviceCategories = [
  {
    id: 'ads',
    title: 'Meta & Google Ads',
    badge: 'Paid Acquisition & ROAS',
    headline: 'Turn Ad Spend Into Scalable Customer Acquisition',
    description: 'Targeted Google Ads and Meta campaigns engineered for every business type—delivering high-intent leads, phone calls, footfall, and ecommerce sales with transparent ROAS dashboards.',
    deliverables: [
      'Meta Ads Architecture (Instagram Sponsored Reels, Feeds & Stories)',
      'Google Ads (Search Intent, Performance Max, YouTube & Display)',
      'Direct Client Ad Account Billing (100% Transparency, 0% Spend Markup)',
      'High-Intent Lead Gen & CRM Pipeline Routing for All Businesses',
      'Conversion API (CAPI), Google Tag Manager & Real-Time Tracking'
    ],
    ctaText: 'Launch Paid Ad Campaigns',
    serviceSlug: 'performance-marketing'
  },
  {
    id: 'it-solutions',
    title: 'IT & Web Solutions',
    badge: 'Technology & Software',
    headline: 'Fast, Scalable Web Applications & IT Infrastructure',
    description: 'We develop custom websites, web applications, customer portals, and IT infrastructure built with modern frameworks to give your business an unfair competitive advantage.',
    deliverables: [
      'High-Converting Corporate & Business Websites (React, Next.js, WordPress)',
      'Custom Web Applications, Booking Portals & Internal Dashboards',
      'Ecommerce Platforms (Shopify, Custom Cart, Payment Gateway Integration)',
      'CRM, WhatsApp Automation & Cloud API Architecture',
      'Speed Optimization (Sub-1s Load Time, 99+ Core Web Vitals) & Security'
    ],
    ctaText: 'Discuss Your IT & Web Project',
    serviceSlug: 'web-development'
  },
  {
    id: 'production',
    title: 'Video Production & Reels',
    badge: 'In-House Studio',
    headline: 'Cinematic 4K Video Production & Viral Social Reels',
    description: 'From concept and scripting to handheld 3-axis motorized gimbal filming, cinema lighting and post-production, we create 4K commercial videos and 9:16 reels that stop the scroll.',
    deliverables: [
      'High-Impact 9:16 Instagram Reels & Short-Form Social Videos',
      'Commercial Brand Films & Corporate Facility Showcases',
      'Motorized 3-Axis Gimbal Stabilized Dynamic Tracking Shoots',
      'Product Videography & Detail Macro Lighting Captures',
      'Precision Color Grading, Foley Sound Design & Motion Typography'
    ],
    ctaText: 'Plan Your Next Shoot',
    serviceSlug: 'video-production'
  },
  {
    id: 'brand-growth',
    title: 'Brand Identity & SEO',
    badge: 'Foundation & Organic',
    headline: 'Stand Out with Distinctive Identity & Compounding Search',
    description: 'Establish market authority with cohesive visual identity systems, vector brand kits, and technical SEO architectures that position your business at the top of organic search.',
    deliverables: [
      'Brand Identity Systems (Logos, Color Palettes, Typography Scales)',
      'High-Converting Social Media Creative Templates & Carousels',
      'Technical & Content SEO (Google First-Page Ranking Architecture)',
      'Google Business Profile (Local Maps SEO Dominance)',
      'Brand Positioning, Messaging Playbooks & Conversion Copywriting'
    ],
    ctaText: 'Build Your Brand Authority',
    serviceSlug: 'branding'
  }
];

export const detailedServices = [
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing (Meta & Google Ads)',
    category: 'Digital Growth',
    heroDesc: 'Turn advertising spend into measurable growth with targeted Google and Meta campaigns built around your audience, offer and business goals.',
    whatIsIt: 'Performance marketing is disciplined paid acquisition across Meta (Instagram, Facebook) and Google (Search, YouTube, Performance Max). Rather than spending blindly on boost buttons, every rupee is allocated with specific conversion intent.',
    problem: 'Most businesses waste media budget on disjointed campaigns, weak creative formats, and zero conversion tracking rigor, resulting in vanity clicks without actual customer inquiries.',
    approach: 'We engineer tight audience geofencing, build conversion-focused video ad creative sets, verify Google Tag Manager & Meta Pixel signals, and monitor ad pacing daily.',
    expectedOutcome: 'Clear visibility into cost-per-lead and acquisition metrics, predictable customer pipeline volume, and complete ownership of your ad accounts.',
    benefits: [
      'Direct ad account ownership with 0% spend markup',
      'High-converting video creative tested specifically for paid feeds',
      'Multi-touch conversion tracking across forms, calls, and sales',
      'Fortnightly clear reporting without vanity metric jargon'
    ],
    deliverables: [
      'Custom campaign structure on Meta (Instagram/Facebook) and Google',
      'Creative format variants (9:16 Video Reels, 1:1 Feeds, Search Text)',
      'Google Search keyword mapping & negative query hygiene',
      'Event conversion tracking (Purchases, Calls, Form Fills)',
      'Fortnightly unvarnished reporting dashboards directly from platform data'
    ],
    process: [
      'Account Audit & Conversion Pixel Verification',
      'Target Audience & Keyword Research',
      'Ad Creative Production & Copywriting',
      'Campaign Architecture Setup & Live Launch',
      'Weekly Bid & Query Optimization'
    ],
    faqs: [
      { q: 'Who pays the ad platforms?', a: 'You pay Meta and Google directly on your business card. We never take a percentage markup on your media spend.' },
      { q: 'Do we own our ad accounts?', a: 'Yes. 100% master ownership of your Meta Business Portfolio and Google Ads account belongs to you.' },
      { q: 'What is the minimum recommended ad budget?', a: 'We typically recommend a minimum ad budget of ₹30,000 to ₹50,000 per month for meaningful data collection and testing.' }
    ]
  },
  {
    slug: 'web-development',
    title: 'Custom Web Development & IT Solutions',
    category: 'Technology',
    heroDesc: 'Build fast, secure and high-converting websites, web applications and customer portals engineered for business growth.',
    whatIsIt: 'Full-stack web engineering and IT infrastructure for all business types. We build responsive corporate websites, web applications, booking portals, and ecommerce systems that load in under 1 second.',
    problem: 'Slow, outdated template websites fail to convert visitors, break on mobile devices, and score poorly on Google Core Web Vitals, actively losing customers to competitors.',
    approach: 'We engineer websites using modern frameworks (React, Next.js, WordPress) with responsive layouts, clean semantic code, SSL security, and integrated lead capture forms.',
    expectedOutcome: 'Lightning-fast digital flagship that builds trust instantly, ranks effectively on Google, and converts ad traffic into verified inquiries.',
    benefits: [
      'Sub-1 second load speeds with 95+ Google PageSpeed scores',
      'Fully responsive UX optimized for mobile, tablet, and desktop',
      'Integrated WhatsApp, CRM, and conversion lead routing',
      '100% client ownership of code, domain, and hosting accounts'
    ],
    deliverables: [
      'Custom Corporate & Business Websites (Full-Stack React/Next.js/WP)',
      'Web Application Portals, Client Dashboards & Booking Systems',
      'Ecommerce Store Development (Shopify, Custom Cart & Razorpay/Stripe)',
      'Speed Optimization & Google Core Web Vitals Engineering',
      'Cloud Hosting Setup, SSL Certificates & Domain DNS Configuration'
    ],
    process: [
      'Requirements Discovery & System Architecture Planning',
      'UI/UX Wireframing & Responsive Interface Design',
      'Full-Stack Frontend & Backend Development',
      'Speed Optimization & Cross-Browser Quality Assurance',
      'Live Production Deployment & Technical Handover'
    ],
    faqs: [
      { q: 'What technologies do you build websites with?', a: 'We build with modern technologies including React, Next.js, Node.js, and custom WordPress depending on your business requirements.' },
      { q: 'Do we own the website code and hosting?', a: 'Yes. You own 100% of the codebase, domain name, and cloud hosting accounts with zero vendor lock-in.' },
      { q: 'How long does a website take to build?', a: 'Standard corporate websites take 2 to 3 weeks; complex custom web applications and portals typically take 4 to 6 weeks.' }
    ]
  },
  {
    slug: 'video-production',
    title: 'Professional Video Production & Reels',
    category: 'Production',
    heroDesc: 'Turn your products, people and ideas into professional visual content built for modern digital platforms.',
    whatIsIt: 'End-to-end commercial cinematography and video post-production executed entirely by our in-house crew. We combine scripting, on-location shooting, studio lighting, sound engineering, and color grading.',
    problem: 'Attention spans on social platforms are under 3 seconds. Low-quality amateur phone videos dilute brand credibility and get scrolled past immediately, wasting your distribution effort.',
    approach: 'Our dedicated videographers and editors utilize 4K cinema cameras, prime macro lenses, gimbal stabilizers, and studio lighting to produce scroll-stopping 9:16 reels and brand films.',
    expectedOutcome: 'Commercial-grade video assets that command customer attention, elevate brand perception, and deliver higher retention when deployed in paid ads and organic channels.',
    benefits: [
      'Cinema 4K sensor clarity with real optical depth of field',
      'Dedicated sound design, Foley ASMR effects, and licensed audio included',
      'Fast 3-5 day post-production turnaround with custom color grading',
      'Both single-shoot and monthly retainer pricing options'
    ],
    deliverables: [
      'Pre-production concepting, moodboards, and shot list development',
      'On-location filming with cinema cameras and dedicated sound/lighting',
      'Food, product, and facility macro & atmospheric captures',
      'Bespoke color grading tailored to your brand mood',
      'Custom sound engineering with realistic ASMR effects & licensed audio'
    ],
    process: [
      'Creative Briefing & Visual Moodboard Alignment',
      'Shot List & Script Preparation',
      'On-Location Cinema Shoot with Production Gear',
      'Editorial Cut, Color Grading & Sound Mix',
      'Delivery of Ready-to-Post 4K Master Files'
    ],
    faqs: [
      { q: 'How is video production charged?', a: 'We offer single per-video shoot & edit pricing, or predictable monthly retainer packages (4 to 8 reels per month).' },
      { q: 'Do you manage our social media posting?', a: 'No. We produce, grade, and deliver ready-to-post 4K video files. You and your team post them on your own accounts.' },
      { q: 'Where do you travel for shoots?', a: 'Our production crew is based in Noida & Delhi NCR, and travels across Uttar Pradesh and major Indian metros.' }
    ]
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Growth',
    heroDesc: 'Build long-term organic visibility and attract customers who are actively searching for your products or services.',
    whatIsIt: 'Technical and architectural search engine optimization designed to position your website for commercial and local intent queries without relying indefinitely on paid ads.',
    problem: 'Algorithmic updates continually wipe out low-quality spam techniques and doorway pages. Many websites suffer from slow load times, poor mobile indexing, and shallow content that fails to rank.',
    approach: 'We optimize Core Web Vitals, implement semantic schema markups, audit site crawlability, and build topic clusters targeting commercial search intent.',
    expectedOutcome: 'Compounding organic search presence, improved local Google Maps visibility, and a steady flow of high-intent searchers discovering your brand.',
    benefits: [
      'Compounding organic traffic that does not vanish when ad spend stops',
      'Enhanced Core Web Vitals and lightning-fast page loading speeds',
      'Rich Google snippet eligibility with JSON-LD schemas',
      'Local search dominance on Google Maps in your operating territory'
    ],
    deliverables: [
      'Technical site health & Core Web Vitals audits',
      'Target commercial keyword mapping & competitive gap analysis',
      'On-page content optimization & semantic heading hierarchy',
      'Local SEO setup (Google Business Profile & localized schema)',
      'Transparent search console & keyword ranking tracking'
    ],
    process: [
      'Comprehensive Technical Site Audit',
      'Keyword Mapping & Search Intent Analysis',
      'On-Page Schema & Metadata Implementation',
      'Content Structure & Internal Link Optimization',
      'Monthly Rank Tracking & Performance Reporting'
    ],
    faqs: [
      { q: 'How long before SEO results show?', a: 'Technical fixes take effect within weeks; organic ranking and compounding search traffic typically mature over 3 to 6 months.' },
      { q: 'Do you guarantee #1 ranking on Google?', a: 'No ethical SEO professional guarantees #1 rankings because search algorithms are owned by Google. We guarantee sound technical execution and verified organic progress.' }
    ]
  },
  {
    slug: 'branding',
    title: 'Brand Identity & Visual Systems',
    category: 'Creative',
    heroDesc: 'Build a distinctive brand identity that communicates who you are, what you stand for and why customers should remember you.',
    whatIsIt: 'Complete visual identity design that translates your strategic positioning into memorable logos, color palettes, typographic scales, packaging, and digital style guides.',
    problem: 'Inconsistent graphics, amateur Canva templates, and mismatched branding make businesses look unestablished, causing prospective clients to doubt their service quality.',
    approach: 'We translate your market positioning into cohesive visual guidelines: logo marks, typography scales, color palettes, and social media creative rules.',
    expectedOutcome: 'A unified, premium brand aesthetic that immediately sets you apart from competitors and commands pricing authority.',
    benefits: [
      'Distinct visual identity that stands out in crowded categories',
      'Consistent design system for all future marketing touchpoints',
      'Full commercial vector source files (SVG, AI, PDF)',
      'Clear brand manual so your in-house team remains consistent'
    ],
    deliverables: [
      'Primary logo mark, secondary lockups, and favicon icons',
      'Curated brand color palette & typographic hierarchy',
      'Social media creative templates (Figma/Photoshop deliverables)',
      'Brand guidelines manual (voice, usage dos & don’ts)',
      'Stationery, business cards, and packaging assets where required'
    ],
    process: [
      'Brand Discovery & Category Visual Audit',
      'Concept Exploration & Moodboard Alignment',
      'Identity Design: Logo, Typography & Colors',
      'Collateral & Social Template Development',
      'Brand Book Delivery with Full Vector Exports'
    ],
    faqs: [
      { q: 'What files do we receive?', a: 'You receive vector master files (SVG, AI, PDF) along with web-optimized WebP and PNG assets with complete commercial ownership.' },
      { q: 'Do you design packaging and physical collateral?', a: 'Yes. We design business cards, stationery, menus, packaging labels, and signage systems.' }
    ]
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing & Creative Content',
    category: 'Creative',
    heroDesc: 'Build a recognizable digital presence through strategic content, creative storytelling and consistent audience engagement.',
    whatIsIt: 'Creative development of high-impact social assets—educational carousels, striking infographics, motion covers, and narrative copy designed for Instagram, LinkedIn, and YouTube.',
    problem: 'Feeds are saturated with dull, generic stock photos that audiences scroll past without noticing, leaving brands talking to empty rooms.',
    approach: 'We engineer visually arresting carousels, infographics, and reel covers designed to educate, entertain, and convert followers into prospective buyers.',
    expectedOutcome: 'Higher profile engagement, greater content saves and shares, and a cohesive social grid that immediately validates your authority.',
    benefits: [
      'Distinct aesthetic tailored to your brand personality',
      'High save and share rates from value-dense carousel frameworks',
      'Seamless alignment with your paid ad creative campaigns',
      'Ready-to-post batches delivered ahead of schedule'
    ],
    deliverables: [
      'Monthly social media content calendar themes',
      'High-converting carousel slides and single-post designs',
      'Story graphics and highlight covers',
      'Engaging post captions with relevant keyword tags',
      'Exported in high-resolution PNG/WebP and Figma templates'
    ],
    process: [
      'Monthly Theme & Content Pillar Planning',
      'Copywriting & Narrative Scripting',
      'Visual Asset Design & Layout Styling',
      'Client Review & Revision Window',
      'Delivery of Batch Content Ready for Posting'
    ],
    faqs: [
      { q: 'Do you manage our daily comments and DMs?', a: 'We focus on producing the creative assets and strategy. We do not handle daily customer support or direct messaging.' },
      { q: 'How many posts are included each month?', a: 'Packages typically range from 12 to 20 designed assets per month, often paired with our in-house video reels.' }
    ]
  },
  {
    slug: 'google-ads',
    title: 'Google Ads & Search Marketing',
    category: 'Digital Growth',
    heroDesc: 'Capture high-intent buyers at the exact moment they search for your products or professional services.',
    whatIsIt: 'Targeted pay-per-click search, display, and Performance Max advertising capturing qualified commercial intent on Google.',
    problem: 'Unoptimized Google Ads accounts burn through budget on broad match terms and irrelevant search queries, generating unqualified clicks and high costs.',
    approach: 'We establish granular phrase and exact match keyword structures, extensive negative keyword lists, localized bid adjustments, and high-converting landing pages.',
    expectedOutcome: 'Direct acquisition of prospects actively looking to buy, lower cost-per-click through high quality scores, and transparent query reports.',
    benefits: [
      'Target prospects who are actively searching to purchase right now',
      'Strict budget controls preventing accidental ad spend spikes',
      'Conversion tracking on verified telephone calls and form fills',
      'Transparent search term query reports delivered fortnightly'
    ],
    deliverables: [
      'Google Search, Call-Only, and Performance Max campaign setup',
      'Comprehensive keyword research & negative keyword list hygiene',
      'Compelling ad copy with responsive search ad headline testing',
      'Google Tag Manager conversion trigger configuration',
      'Google Local Services & Maps integration where applicable'
    ],
    process: [
      'Commercial Keyword Discovery & Competitor Ad Scraping',
      'Campaign & Ad Group Structuring',
      'Ad Copy Creation & Extension Setup',
      'Tag Manager Conversion Verification',
      'Weekly Bid Adjustments & Search Term Filtering'
    ],
    faqs: [
      { q: 'How quickly can Google Ads generate leads?', a: 'Google Ads can begin driving qualified search clicks within 24 to 48 hours of campaign approval.' },
      { q: 'Do you handle the landing page?', a: 'Yes. We audit your existing page or build a dedicated, high-speed landing page to maximize conversion rates.' }
    ]
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads (Instagram & Facebook)',
    category: 'Digital Growth',
    heroDesc: 'Generate demand and scale customer acquisition with visual video and carousel campaigns on Instagram and Facebook.',
    whatIsIt: 'Paid media advertising across Instagram Reels, Feed, and Facebook using cinematic video creatives and structured Advantage+ campaign architecture.',
    problem: 'Static images and generic product catalog ads no longer capture attention on Instagram, driving up customer acquisition costs and causing ad fatigue.',
    approach: 'We pair our in-house cinematic 9:16 video production directly with Meta Advantage+ structures, broad demographic testing, and retargeting custom audiences.',
    expectedOutcome: 'Scroll-stopping video ads that lower CPMs, expand top-of-funnel brand awareness, and retarget interested prospects until conversion.',
    benefits: [
      'Native video creative that feels natural within Reels and Stories',
      'Audience segmentation across cold interest, lookalikes, and warm visitors',
      'Meta Conversions API (CAPI) server-side tracking resilience',
      'Creative refresh cadences to avoid ad fatigue'
    ],
    deliverables: [
      'Meta Business Portfolio and Ad Account configuration',
      'Video ad editing with hooks, subtitles, and calls to action',
      'Audience targeting research and lookalike modeling',
      'Conversions API and Meta Pixel health check',
      'Weekly performance monitoring and budget re-allocation'
    ],
    process: [
      'Audience Profiling & Creative Hook Ideation',
      'Production & Formatting of Video & Static Creatives',
      'Campaign Launch across Reels, Stories, and Feeds',
      'Signal Verification & Event Tracking Testing',
      'Scale Top-Performing Creative Variants'
    ],
    faqs: [
      { q: 'Why do Meta Ads need video creative?', a: 'Reels and vertical video formats dominate user screen time on Instagram, delivering substantially lower CPMs and higher engagement.' },
      { q: 'Can we run ads for local businesses?', a: 'Absolutely. We geofence ads within specific kilometer radii around your business location in Delhi NCR or other cities.' }
    ]
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing & Copywriting',
    category: 'Creative',
    heroDesc: 'Authoritative content and compelling copy that educates your market, answers buyer objections, and builds organic trust.',
    whatIsIt: 'Strategic written content—in-depth guides, case studies, website copy, and thought leadership articles crafted to establish authority and drive organic traffic.',
    problem: 'Generic AI-generated filler and corporate jargon fail to build authentic trust with serious buyers who want real subject-matter depth.',
    approach: 'We craft human-first, insightful content based on deep subject-matter research, customer interviews, and strategic keyword positioning.',
    expectedOutcome: 'High-ranking educational articles, reduced buyer skepticism, and marketing copy that clearly articulates your value proposition.',
    benefits: [
      'Establishes your leadership team as category authorities',
      'Provides high-value collateral for sales and pitch conversations',
      'Generates compounding organic search visits from long-tail queries',
      'Reduces sales cycles by answering common customer objections in advance'
    ],
    deliverables: [
      'Comprehensive content strategy and editorial calendar',
      'In-depth SEO articles, case studies, and customer guides',
      'Website conversion copy (hero headlines, benefits, objection handling)',
      'Email newsletters and nurture sequence copywriting',
      'Lead magnet PDFs, checklists, and whitepapers'
    ],
    process: [
      'Customer Pain Point & Search Query Research',
      'Editorial Outline & Narrative Framework',
      'Drafting with Real Industry Depth & Citations',
      'SEO Keyword Integration & Readability Polish',
      'Publishing & Repurposing across Social Channels'
    ],
    faqs: [
      { q: 'Do you use generic AI writing tools?', a: 'No. While AI can assist with outlining, all our content is researched, written, and refined by human marketing strategists.' },
      { q: 'Can you write technical or B2B content?', a: 'Yes. We specialize in translating complex B2B products and services into clear, compelling business propositions.' }
    ]
  },
  {
    slug: 'lead-generation',
    title: 'High-Intent Lead Generation',
    category: 'Digital Growth',
    heroDesc: 'End-to-end customer acquisition systems that turn anonymous web visitors into qualified sales conversations.',
    whatIsIt: 'Integrated lead generation engines combining targeted ads, high-speed landing pages, qualification questions, and instant WhatsApp/CRM routing.',
    problem: 'Traffic without a disciplined conversion mechanism results in 98%+ bounce rates and sales teams wasting hours chasing unqualified inquiries.',
    approach: 'We integrate high-intent ad traffic, friction-free landing page forms, instant WhatsApp follow-up triggers, and CRM pipeline handoffs.',
    expectedOutcome: 'A steady, predictable influx of qualified sales inquiries with verified contact details ready for commercial discussion.',
    benefits: [
      'Consistent stream of qualified commercial inquiries',
      'Frictionless mobile form experiences optimized for Indian buyers',
      'Real-time lead alerts to your sales team via WhatsApp and email',
      'Validation checks to minimize spam and junk inquiries'
    ],
    deliverables: [
      'High-converting landing page design and rapid development',
      'Multi-step inquiry forms with qualification questions',
      'Automated email and WhatsApp confirmation workflows',
      'CRM integration (HubSpot, Zoho, Google Sheets, Supabase)',
      'Fortnightly pipeline quality reviews with your sales team'
    ],
    process: [
      'Lead Qualification Criteria Definition',
      'Landing Page & Offer Positioning Build',
      'Form & CRM Automation Integration',
      'Targeted Paid Media Campaign Activation',
      'Weekly Cost-Per-Qualified-Lead Optimization'
    ],
    faqs: [
      { q: 'How do leads reach our team?', a: 'Inquiries are instantly routed to your sales team’s inbox, CRM, and optional WhatsApp business notifications.' },
      { q: 'What qualifies a lead?', a: 'We include custom filtering questions such as project budget, required timeline, and company size to filter out casual window-shoppers.' }
    ]
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy & Growth Architecture',
    category: 'Strategy',
    heroDesc: 'Clarify your value proposition, define your category moat, and build a cohesive roadmap for commercial growth.',
    whatIsIt: 'Foundational business positioning that defines your target audience, core differentiation, messaging hierarchy, and omnichannel go-to-market plan.',
    problem: 'Executing marketing tactics without a clear strategic foundation leads to wasted budget, confused customers, and commoditized pricing.',
    approach: 'We conduct in-depth market positioning audits, analyze your customer economics, and establish the narrative foundation that guides all creative and ad spend.',
    expectedOutcome: 'Unshakable market clarity that aligns founders, sales, and marketing around one unified, defensible growth trajectory.',
    benefits: [
      'Crystal-clear positioning that elevates you above price competition',
      'Actionable growth roadmap aligned with your financial targets',
      'Unified brand narrative for founders, sales teams, and marketers',
      'Clear definition of which customer segments to pursue and avoid'
    ],
    deliverables: [
      'Brand positioning statement and core value proposition framework',
      'Competitive landscape analysis and differentiation matrix',
      'Ideal Customer Profile (ICP) and customer journey mapping',
      'Omnichannel marketing roadmap with 90-day action milestones',
      'Brand voice and messaging architecture playbook'
    ],
    process: [
      'Stakeholder Discovery & Business Model Review',
      'Competitive Intelligence & Market Analysis',
      'Positioning & Messaging Framework Creation',
      'Strategic Roadmap Workshop Presentation',
      'Action Playbook Handover for Execution'
    ],
    faqs: [
      { q: 'Who is brand strategy best suited for?', a: 'Founders launching a new venture, established brands rebranding, or businesses wanting to move upmarket to higher-margin clients.' },
      { q: 'How long does a brand strategy engagement take?', a: 'Typically 2 to 4 weeks from initial stakeholder discovery to final playbook delivery.' }
    ]
  }
];

export const caseStudies = [
  {
    id: 'lumina-corporate',
    title: 'Lumina Tech Showroom & Brand Film',
    client: 'Lumina Technologies (Delhi NCR)',
    industry: 'Enterprise Technology',
    image: '/images/commercial_brand_shoot.jpg',
    challenge: 'Lumina needed to showcase its new 12,000 sq.ft innovation hub to enterprise decision-makers and tier-1 tech talent, but relied on static smartphone snapshots that failed to convey scale.',
    strategy: 'Deploy a multi-angle cinema 4K production crew to film architectural walkthroughs, engineer interactions, and executive vision interviews, packaged for B2B channels.',
    execution: 'Half-day production with cinema cameras and Aputure softboxes, delivered as 1 main 16:9 brand film and four 9:16 vertical reels for LinkedIn & Meta.',
    result: 'Zero vanity claims. Client secured full board sign-off on the corporate launch asset and active deployment across talent acquisition pipelines.',
    tags: ['Brand Film', 'Cinematography', 'Corporate Showroom']
  },
  {
    id: 'kinetic-athletics',
    title: 'Kinetic High-Intensity Apparel Launch',
    client: 'Kinetic Athletic Wear (D2C India)',
    industry: 'Fashion & Fitness',
    image: '/images/meta_ads_display_campaign.jpg',
    challenge: 'A newly launched sportswear label was generating low engagement with standard flat-lay catalog photos on Instagram.',
    strategy: 'Deploy full-funnel Meta Ads Manager campaigns paired with Google Performance Max and live 9:16 sponsored video ads.',
    execution: 'Filmed dynamic slow-motion video ads and tested variants across Meta Advantage+ feed placements, scaling top ROAS ad sets.',
    result: 'Campaigns achieved a verified 5.2x ROAS in Meta Ads Manager with over 1,100 qualified conversions within 30 days.',
    tags: ['Meta Ads Manager', 'Live Sponsored Ads', 'ROAS Scaling']
  },
  {
    id: 'trattoria-experience',
    title: 'Aether Studio Brand Architecture & Instagram Growth',
    client: 'Aether Creative Living & Retail',
    industry: 'Hospitality & Retail',
    image: '/images/instagram_profile_phone.jpg',
    challenge: 'The brand suffered from an inconsistent, amateur social media presence that failed to attract premium clientele.',
    strategy: 'Rebuild the Instagram brand profile from the ground up: verified bio architecture, custom highlight story icons, and a cohesive dark aesthetic reels grid.',
    execution: 'Delivered an editorial 9-post visual grid system, synchronized organic reels schedule, and localized ad boost strategy.',
    result: 'Transformed the profile into a high-converting digital storefront with 3.4x organic profile visits and consistent customer inquiries.',
    tags: ['Instagram Profile System', 'Verified Brand Aesthetic', 'Curated Grid Retainer']
  },
  {
    id: 'apex-healthcare',
    title: 'Apex Orthopedic & Sports Medicine Clinic',
    client: 'Apex Healthcare Center (Noida Sector 62)',
    industry: 'Healthcare & Wellness',
    image: '/images/commercial_brand_shoot.jpg',
    challenge: 'Patients were finding it difficult to understand modern robotic therapy services, causing high drop-off on generic directory listings.',
    strategy: 'Produce professional doctor introduction reels, high-resolution patient care walkthroughs, and optimize local Google Maps profiles.',
    execution: 'Filmed consultation rooms and state-of-the-art rehabilitation equipment; deployed Google Search Ads targeting specific joint therapy queries.',
    result: 'Achieved top 3 local pack presence for targeted therapy keywords in Noida and steady influx of verified specialist appointments.',
    tags: ['Healthcare Video', 'Google Maps SEO', 'Lead Generation']
  },
  {
    id: 'solis-interiors',
    title: 'Solis Architectural Living & Spaces',
    client: 'Solis Living Studio (Delhi NCR)',
    industry: 'Real Estate & Interiors',
    image: '/images/restaurant_cinematic_dish.jpg',
    challenge: 'High-end interior architecture firm needed portfolio assets that reflected their premium ₹20L+ residential projects.',
    strategy: 'Architectural photography combined with cinematic slow-glide gimbal tours of finished luxury penthouses and bespoke joinery.',
    execution: 'Captured soft natural daylight walkthroughs and textured detail close-ups; deployed targeted Meta Ads to high-net-worth pin codes.',
    result: 'Generated 14 high-budget consultation inquiries within the first 6 weeks of targeted local campaign deployment.',
    tags: ['Architectural Film', 'Brand Identity', 'Meta Ads']
  }
];

export const whyUpswingPillars = [
  {
    num: '01',
    title: 'Strategy Before Execution',
    desc: 'We understand your business, audience, and goals before creating campaigns. No generic tactics without strategic purpose.'
  },
  {
    num: '02',
    title: 'Creative That Performs',
    desc: 'We create content that isn\'t just visually attractive—it supports a clear business objective and drives conversion.'
  },
  {
    num: '03',
    title: 'Production + Marketing Under One Roof',
    desc: 'Connect professional on-location content production with the paid marketing strategy that actually distributes it.'
  },
  {
    num: '04',
    title: 'Business-Focused Outcomes',
    desc: 'Focus on meaningful commercial outcomes such as visibility, qualified leads, and brand equity—not vanity follower metrics alone.'
  },
  {
    num: '05',
    title: '100% Direct Media Billing',
    desc: 'You pay Meta and Google directly on your own card. We charge a transparent service retainer. Zero hidden spend markups.'
  }
];

export const processSteps = [
  {
    step: '01',
    name: 'Discover',
    title: 'Discover & Understand',
    desc: 'Understand your business, audience, and commercial objectives before proposing a single creative asset or budget.'
  },
  {
    step: '02',
    name: 'Strategize',
    title: 'Strategize & Plan',
    desc: 'Build the marketing architecture, creative direction, target keyword mapping, and budget pacing plan.'
  },
  {
    step: '03',
    name: 'Create',
    title: 'Create & Produce',
    desc: 'Develop campaigns, on-location video shoots, graphic assets, ad copy, and tracking tag configurations.'
  },
  {
    step: '04',
    name: 'Launch',
    title: 'Launch & Distribute',
    desc: 'Put the strategy into disciplined action with strict daily budget guardrails and real-time delivery checks.'
  },
  {
    step: '05',
    name: 'Optimize',
    title: 'Optimize & Measure',
    desc: 'Measure real search queries, conversion events, and creative retention—refining bids and creative iterations continuously.'
  }
];

export const industriesServed = [
  { name: 'Healthcare & Clinics', icon: 'HeartPulse', desc: 'Patient trust building, doctor introduction reels & local search dominance' },
  { name: 'Real Estate & Living', icon: 'Home', desc: 'Architectural walkthroughs, property reels & high-intent Google search' },
  { name: 'Technology & B2B', icon: 'Building2', desc: 'B2B brand films, tech showroom tours & leadership interviews' },
  { name: 'D2C & E-Commerce', icon: 'ShoppingBag', desc: 'High-converting product videos, Meta Ads scaling & creative testing' },
  { name: 'Education & Coaching', icon: 'GraduationCap', desc: 'Student success stories, course promos & structured lead generation' },
  { name: 'Hospitality & Venues', icon: 'Utensils', desc: 'Sensory kitchen theater, craft cocktail reels & local radius ads' },
  { name: 'Fashion & Lifestyle', icon: 'Activity', desc: 'Kinetic apparel reels, dynamic product shoots & brand storytelling' },
  { name: 'Local Businesses', icon: 'MapPin', desc: 'Google Maps presence, geofenced campaigns & walk-in customer footfall' }
];

export const testimonials = [
  {
    quote: 'Upswing brought cinema-level camera gear directly to our location. The video reels they produced became our best-performing creative assets across Instagram and LinkedIn.',
    author: 'A. Sharma',
    role: 'Founder & CEO',
    company: 'Fintech Solutions (Noida)'
  },
  {
    quote: 'What sets them apart is that they do not just make pretty videos—they understand how to hook attention in the first three seconds and configure our Google Ads properly.',
    author: 'R. Singhania',
    role: 'Operations Director',
    company: 'Urban Living Spaces (Delhi NCR)'
  },
  {
    quote: 'Clear scope, transparent ad spend with direct billing, and zero exaggerated claims. It is refreshing to work with a team that focuses on execution and honest reporting.',
    author: 'V. Mehta',
    role: 'Brand Manager',
    company: 'Artisan Retail Brands'
  }
];

export const insightsArticles = [
  {
    slug: 'why-reels-fail-without-performance-ads',
    category: 'Video Marketing',
    title: 'Why Great Instagram Reels Fail Without Targeted Distribution',
    date: 'October 2026',
    readTime: '4 min read',
    summary: 'Even the most beautiful cinematic video will underperform if left solely to organic algorithm luck. Here is how paid media distribution transforms video ROI.',
    content: 'Creating a high-end cinematic reel is only the first half of the modern marketing equation. In a crowded digital space, brands must combine creative production with targeted Meta Ads to guarantee delivery to the exact customers in their target geography. By pairing in-house cinematography with Advantage+ audience segmentation, brands achieve scalable customer acquisition rather than hoping for fleeting algorithmic luck.'
  },
  {
    slug: 'technical-seo-vs-content-fluff',
    category: 'SEO',
    title: 'Technical Search Architecture vs. Generative Content Spam',
    date: 'October 2026',
    readTime: '5 min read',
    summary: 'How Google evaluates site hierarchy, Core Web Vitals, and localized schema markups in 2026, and why genuine structural depth wins over AI-generated word salad.',
    content: 'Search engines are aggressively deprioritizing superficial content generated without real-world expertise. Winning in organic search today demands rock-solid technical hygiene: zero layout shifts, sub-second TTFB, verified Organization and LocalBusiness schemas, and structured topic clusters that comprehensively solve commercial buyer search queries.'
  },
  {
    slug: 'direct-media-spend-transparency',
    category: 'Performance Ads',
    title: 'Why Agencies Should Never Mark Up Media Spend',
    date: 'October 2026',
    readTime: '3 min read',
    summary: 'Understanding the conflict of interest in agency markups, and why direct client-billing on Meta and Google ensures total operational transparency.',
    content: 'When an agency takes a commission on ad spend or marks up platform invoices, their financial incentive is to inflate your expenditure rather than maximize efficiency. Upswing operates strictly on transparent monthly retainers. You pay Meta and Google directly from your business card with 100% account ownership.'
  },
  {
    slug: 'cinematic-video-production-for-modern-brands',
    category: 'Branding & Video',
    title: 'Why Phone Videos Are Costing Your Brand High-Value Clients',
    date: 'October 2026',
    readTime: '4 min read',
    summary: 'Perception dictates pricing power. How commercial lighting, optical depth of field, and sound design immediately signal premium market authority.',
    content: 'When customers encounter your brand on social media or search, their subconscious perception of your service quality is anchored in seconds. Amateur smartphone recordings with harsh ambient lighting signal amateur operations. Cinema-grade 4K production signals enterprise competence and commands pricing respect.'
  }
];
