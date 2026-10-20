import {
  PersonalInfo,
  SkillCategory,
  Project,
  Experience,
  Achievement,
} from '../models/portfolio.models';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Selvaraj T',
  firstName: 'Selvaraj',
  title: 'Full Stack Developer',
  subtitle: 'Angular & Node.js Developer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'selvarajpersonal24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/selvaraj-t-0013222',
  github: 'https://github.com/T-selva-raj',
  bio: `I'm a Computer Science graduate and passionate Full Stack Developer with 3.5+ years of experience building enterprise-grade web applications. I specialize in Angular for rich client-side experiences and Node.js for scalable, maintainable backend services. I've worked across education management platforms, e-commerce systems, REST API ecosystems, and payment integrations — always focused on performance, code quality, and real engineering impact.`,
  resumeUrl: 'assets/resume/Selvaraj_T_Full_Stack_Developer_Resume.pdf',
};

export const ROLES: string[] = [
  'Angular Developer',
  'Node.js Developer',
  'Full Stack Engineer',
  'API & Database Engineer',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'monitor',
    skills: [
      { name: 'Angular', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'HTML5 & CSS3', level: 'expert' },
      { name: 'SCSS / Sass', level: 'proficient' },
      { name: 'RxJS', level: 'proficient' },
      { name: 'Angular Signals', level: 'proficient' },
      { name: 'Angular Material', level: 'proficient' },
      { name: 'Reactive Forms', level: 'expert' },
      { name: 'Component Architecture', level: 'expert' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'REST API Design', level: 'expert' },
      { name: 'JWT Authentication', level: 'proficient' },
      { name: 'RabbitMQ', level: 'familiar' },
      { name: 'Background Jobs', level: 'proficient' },
      { name: 'Socket.IO', level: 'familiar' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'Sequelize ORM', level: 'expert' },
      { name: 'SQL Optimization', level: 'proficient' },
      { name: 'JSONB Modeling', level: 'proficient' },
      { name: 'Relational Data Modeling', level: 'proficient' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Integrations',
    icon: 'tool',
    skills: [
      { name: 'Stripe Payments', level: 'proficient' },
      { name: 'SendGrid', level: 'proficient' },
      { name: 'Firebase', level: 'familiar' },
      { name: 'Git & GitHub', level: 'expert' },
      { name: 'Swagger / Postman', level: 'proficient' },
      { name: 'AWS Deployment', level: 'familiar' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'school-management',
    title: 'Enterprise School Management System',
    category: 'Enterprise Platform',
    context:
      'A large-scale education management platform serving enrollment, finance, student lifecycle, and parent engagement workflows for a premium early-childhood education brand.',
    overview:
      'Built and maintained a comprehensive school management system featuring student enrollment pipelines, finance and fee collection modules, student portfolios, event management, and multi-channel parent communication. The system integrates with Stripe for payments, Facebook Lead Ads for enquiry capture, and WhatsApp/SendGrid for notifications.',
    contribution:
      'Developed Angular modules for enrollment intake and student portfolio workflows. Built Node.js APIs for finance processing, PDF report generation via background queues, and email/WhatsApp notification dispatch. Designed and optimized PostgreSQL schemas handling thousands of student records with JSONB-based configuration data.',
    stack: [
      { name: 'Angular', color: '#dd0031' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#404040' },
      { name: 'PostgreSQL', color: '#4169e1' },
      { name: 'Sequelize', color: '#52B0E7' },
      { name: 'Stripe', color: '#635bff' },
      { name: 'SendGrid', color: '#1a82e2' },
      { name: 'RabbitMQ', color: '#ff6600' },
    ],
    challenges: [
      'Handling concurrent enrollment submissions with consistent financial record creation',
      'Generating PDF fee receipts asynchronously without blocking API responses',
      'Optimizing complex multi-join SQL queries across student, enrollment, and finance tables',
      'Integrating Facebook Lead Ads webhook payload parsing and deduplication',
    ],
    outcomes: [
      'Delivered a fully functional enrollment-to-finance pipeline used across multiple school branches',
      'Background PDF queue eliminated API timeout issues for bulk fee receipt generation',
      'SQL index tuning and query restructuring reduced report query response times significantly',
      'Multi-channel notification system (email + WhatsApp) improved parent communication reach',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform — ZenBasket',
    category: 'E-commerce',
    context:
      'A full-featured e-commerce platform built at Centizen Infotech, providing product management, shopping workflows, checkout, and extensibility via plugins and badges.',
    overview:
      'Contributed to ZenBasket, an enterprise e-commerce solution covering product catalog management, product specification builders, cart and checkout flows, discount and badge systems, and a plugin architecture for extending platform capabilities. Worked across both the Angular frontend and Node.js backend layers.',
    contribution:
      'Built Angular product listing and detail views with dynamic specification renderers. Developed Node.js APIs for product CRUD, badge assignment, discount rule application, and checkout order processing. Implemented database-layer operations in MySQL/PostgreSQL using Sequelize ORM. Contributed to the plugin module system that allowed merchants to extend platform behaviour.',
    stack: [
      { name: 'Angular', color: '#dd0031' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#404040' },
      { name: 'MySQL', color: '#4479a1' },
      { name: 'Sequelize', color: '#52B0E7' },
      { name: 'REST APIs', color: '#6c757d' },
    ],
    challenges: [
      'Designing a flexible product specification schema supporting arbitrary attribute types per category',
      'Implementing a badge and discount rule engine that composed multiple conditions without performance degradation',
      'Keeping Angular component state in sync with frequently updated cart and pricing data',
      'Maintaining backward compatibility in plugin APIs as new merchant features were introduced',
    ],
    outcomes: [
      'Delivered product and checkout modules on schedule as part of a multi-developer team',
      'Flexible specification schema enabled merchants to define complex product variants without schema migrations',
      'Plugin module architecture allowed feature extensions with zero core-platform changes',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
  },
  // {
  //   id: 'api-integration-projects',
  //   title: 'REST API & Integration Projects',
  //   category: 'Backend Engineering',
  //   context:
  //     'A collection of backend API and integration work spanning authentication systems, third-party service integrations, and data processing pipelines across professional projects.',
  //   overview:
  //     'Designed and implemented RESTful APIs for various business domains including JWT-based authentication and authorization middleware, Stripe payment processing flows, SendGrid transactional email services, and Socket.IO real-time event broadcasting. Applied Swagger documentation and Postman collections for API contracts.',
  //   contribution:
  //     'Architected authentication middleware with role-based access control for multi-tenant platforms. Built secure Stripe webhook handlers for payment confirmation and refund workflows. Implemented SendGrid email templating for transactional notifications. Set up RabbitMQ-backed job queues for deferred processing tasks such as PDF generation and bulk notifications.',
  //   stack: [
  //     { name: 'Node.js', color: '#339933' },
  //     { name: 'Express.js', color: '#404040' },
  //     { name: 'JWT', color: '#d63aff' },
  //     { name: 'Stripe', color: '#635bff' },
  //     { name: 'SendGrid', color: '#1a82e2' },
  //     { name: 'RabbitMQ', color: '#ff6600' },
  //     { name: 'Socket.IO', color: '#010101' },
  //     { name: 'Swagger', color: '#85ea2d' },
  //     { name: 'PostgreSQL', color: '#4169e1' },
  //   ],
  //   challenges: [
  //     'Handling Stripe webhook idempotency to avoid duplicate payment processing',
  //     'Designing role-based middleware that was composable and easy to extend per route',
  //     'Managing RabbitMQ consumer error handling and dead-letter queue strategies',
  //     'Ensuring email template rendering remained consistent across email clients',
  //   ],
  //   outcomes: [
  //     'Idempotent payment webhook handler prevented duplicate order creation in all tested edge cases',
  //     'Modular auth middleware reduced per-route authorization code by centralizing access logic',
  //     'Queue-based job system decoupled long-running tasks from API response cycles',
  //     'Swagger documentation improved onboarding speed for new team members',
  //   ],
  //   featured: false,
  //   gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  // },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'openwave',
    company: 'Openwave Computing Services Pvt Ltd',
    role: 'Software Engineer (Angular & Node.js)',
    period: '2025 – Present',
    startDate: 'July 2025',
    endDate: null,
    location: 'Chennai, Tamil Nadu, India',
    type: 'Full-time',
    description:
      'Software Engineer on an enterprise School Management System for MindChamps, Singapore. Contributing to a 6-module platform (Lead Management, Enrollment, Portfolio, Finance, Events, Project Management) with Angular frontends, Node.js/Express APIs, and PostgreSQL.',
    responsibilities: [
      'Built the Enrollment module full stack covering onboarding, attendance, invoice drafting, royalty calculation, and refunds, replacing manual spreadsheet processes with a digital workflow',
      'Delivered the Portfolio module end to end with 6 features (Child Progress, Moments, Announcements, Documents, Messaging, Surveys) using Angular reactive forms and REST APIs',
      'Launched the Lead Management module integrating Facebook Lead Ads, WhatsApp notifications, and SendGrid email automation',
      'Integrated Stripe across the Angular checkout and Node.js backend with webhook handling and payment-status synchronization with PostgreSQL for accurate invoice settlement',
      'Implemented RBAC with Angular route guards, permission-based UI rendering, and API-level authorization',
      'Applied Angular lazy loading with modular feature routing and structured the Node.js backend into routes, controllers, services, and data layers',
      'Designed PostgreSQL schemas with foreign keys, constraints, and strategic indexes, and tuned SQL queries for reporting, dashboards, and transactional operations',
      'Engineered secure media and document handling using Angular upload components, Node.js services, and Amazon S3, with standardized validation, exception handling, and logging',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Stripe',
      'SendGrid',
      'WhatsApp API',
      'Facebook Lead Ads',
      'AWS S3',
      'RBAC',
      'Git',
    ],
    current: true,
  },
  {
    id: 'centizen',
    company: 'Centizen Inc',
    role: 'Software Engineer – ZenBasket (Angular & Node.js)',
    period: '2023 – 2025',
    startDate: 'February 2023',
    endDate: 'June 2025',
    location: 'Tirunelveli, Tamil Nadu, India',
    type: 'Full-time',
    description:
      'Software Engineer on ZenBasket, a high-traffic e-commerce platform. Owned five core modules (Product Catalog, Checkout, Plugins, Specifications, Badges), building reusable Angular components and Node.js/Express REST and GraphQL APIs.',
    responsibilities: [
      'Owned 5 core modules (Product Catalog, Checkout, Plugins, Specifications, Badges) with reusable Angular components and Node.js/Express REST and GraphQL APIs',
      'Streamlined merchant onboarding with catalog migration workflows that import, transform, validate, and sync products from Shopify, WooCommerce, and BigCommerce',
      'Integrated Razorpay and Stripe with multi-currency payments, webhook handling, and payment reconciliation to enable international sales',
      'Delivered a multilingual Angular UI with backend locale support',
      'Enforced secure access for 3 roles (admin, merchant, customer) through full-stack RBAC using Angular guards, permission-based rendering, and backend access controls',
      'Built upload workflows with an image compression and optimization pipeline on Amazon S3 for product images, invoices, and merchant documents',
      'Reduced production regressions by authoring Swagger/OpenAPI documentation and writing Jest unit tests for backend services',
      'Resolved critical production issues across frontend, APIs, database workflows, and third-party integrations while collaborating with UI/UX, QA, and Product teams in Agile sprints',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Node.js',
      'Express.js',
      'GraphQL',
      'PostgreSQL',
      'MySQL',
      'Sequelize',
      'Stripe',
      'Razorpay',
      'AWS S3',
      'Swagger',
      'Jest',
      'Git',
    ],
    current: false,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'enterprise-delivery',
    title: 'Enterprise Platform Delivery',
    description:
      'Successfully delivered full-stack modules for a school management system serving multiple branches, covering enrollment, finance, and student lifecycle management.',
    icon: 'award',
    year: '2024',
  }, {
    id: 'sql-optimization',
    title: 'SQL Performance Optimization',
    description:
      'Applied SQL index tuning and query restructuring across multi-join reporting queries, significantly improving response times on large datasets.',
    icon: 'zap',
    year: '2024',
  },
  {
    id: 'payment-integration',
    title: 'Stripe Payment Integration',
    description:
      'Implemented end-to-end Stripe payment processing with idempotent webhook handling, resolving duplicate transaction issues in production.',
    icon: 'credit-card',
    year: '2023',
  },
  {
    id: 'queue-architecture',
    title: 'Queue-Based Architecture',
    description:
      'Designed RabbitMQ-backed job queue system that eliminated API timeout issues for bulk PDF generation and notification dispatch.',
    icon: 'layers',
    year: '2023',
  },

];
