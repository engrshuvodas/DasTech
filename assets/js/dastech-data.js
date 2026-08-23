/**
 * DasTech Digital Products & Projects Data Layer
 * Provides clean, structured data for products, projects, services, and tech stacks.
 */

window.DasTechData = {
  // Digital Products Catalog
  products: [
    {
      id: "dt-prod-1",
      slug: "apex-saas-dashboard",
      name: "Apex SaaS Admin & Analytics Suite",
      tagline: "Enterprise-grade dashboard starter with real-time analytics & multi-tenant auth",
      category: "SaaS",
      categoryName: "SaaS Platform",
      price: 69,
      originalPrice: 129,
      badge: "Best Seller",
      rating: 4.9,
      reviewsCount: 84,
      image: "assets/img/product-1.jpg",
      technologies: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Prisma"],
      shortDescription: "A turnkey, modular SaaS template equipped with role-based access, Stripe billing, audit logging, and responsive dark/light dashboards.",
      overview: "Apex is engineered for software teams and indie developers looking to ship B2B SaaS products at lightning speed. It features modular architecture, strict TypeScript types, pre-built charts with ApexCharts, and plug-and-play authentication.",
      features: [
        { title: "Multi-Tenant Architecture", desc: "Built-in tenant isolation, workspace switching, and role-based permissions (RBAC)." },
        { title: "Live Real-Time Charts", desc: "Over 20+ responsive interactive charts for revenue, MRR, churn, and visitor metrics." },
        { title: "Stripe Billing Integrated", desc: "Subscriptions, usage-based billing, invoice generation, and customer portal ready." },
        { title: "Dark & Light Mode", desc: "Zero-flicker theme switching with customizable CSS variables and Tailwind tokens." },
        { title: "Clean REST & GraphQL APIs", desc: "Fully typed API routes with validation via Zod and Prisma ORM." }
      ],
      whatsIncluded: [
        "Complete Full-Stack Source Code (Next.js + TypeScript)",
        "30+ Pre-built Pages & 80+ Reusable Components",
        "Figma Design System & Token Kit",
        "Lifetime Updates & Dedicated Discord Support",
        "Commercial Single or Extended License"
      ],
      requirements: [
        "Node.js 18.x or higher",
        "npm, pnpm or yarn package manager",
        "PostgreSQL or MySQL database",
        "Modern web browser (Chrome, Firefox, Safari, Edge)"
      ],
      faq: [
        { q: "Can I use this product for commercial client projects?", a: "Yes! The standard license allows you to build 1 commercial product. The extended license covers unlimited commercial deployments." },
        { q: "How do I receive future updates?", a: "All updates are pushed to your customer portal and notified via email with complete migration guides." },
        { q: "Is backend code included?", a: "Yes, fully functional API routes, auth handlers, and database migration scripts are included out of the box." }
      ],
      demoUrl: "#demo",
      featured: true
    },
    {
      id: "dt-prod-2",
      slug: "cloudguard-devops-toolkit",
      name: "CloudGuard Kubernetes & DevOps Toolkit",
      tagline: "Automated CI/CD pipelines, Terraform blueprints & Docker orchestration templates",
      category: "Automation",
      categoryName: "Automation & DevOps",
      price: 89,
      originalPrice: 149,
      badge: "Popular",
      rating: 4.8,
      reviewsCount: 52,
      image: "assets/img/product-2.jpg",
      technologies: ["Terraform", "Kubernetes", "GitHub Actions", "Docker", "AWS/GCP"],
      shortDescription: "Production-ready Infrastructure as Code (IaC) modules and automated GitHub Actions workflows for zero-downtime deployments.",
      overview: "CloudGuard provides battle-tested infrastructure blueprints for deploying resilient containerized applications on AWS, GCP, and DigitalOcean with built-in monitoring (Prometheus + Grafana) and automated SSL provisioning.",
      features: [
        { title: "Zero-Downtime Deployments", desc: "Canary and Blue-Green deployment pipelines with automatic rollback triggers." },
        { title: "Hardened Security Baselines", desc: "CIS benchmark compliance, automated vulnerability scanning (Trivy), and secret management." },
        { title: "Multi-Cloud Terraform Modules", desc: "Modular Terraform scripts for VPC, EKS/GKE, RDS, S3, and Cloudflare DNS." },
        { title: "Full Observability Stack", desc: "Pre-configured Grafana dashboards, Prometheus alerts, and centralized log shipping." }
      ],
      whatsIncluded: [
        "15+ Modular Terraform Blueprints",
        "Complete GitHub Actions & GitLab CI Workflows",
        "Docker Compose & Helm Charts",
        "Setup documentation & video walkthrough"
      ],
      requirements: [
        "Terraform 1.5+",
        "Docker 24.0+",
        "AWS CLI or Google Cloud SDK",
        "Basic Linux / Bash familiarity"
      ],
      faq: [
        { q: "Does this work with private VPCs?", a: "Yes, all modules are built with private subnets, NAT gateways, and secure bastion hosts." },
        { q: "Can I customize the Helm charts?", a: "All Helm values and manifests are 100% open and fully customizable for your stack." }
      ],
      demoUrl: "#demo",
      featured: true
    },
    {
      id: "dt-prod-3",
      slug: "nova-ui-pro-design-system",
      name: "Nova UI Pro Design System & Component Library",
      tagline: "Comprehensive Figma UI kit + Accessible React & HTML component library",
      category: "UI Kits",
      categoryName: "UI Kits & Design Systems",
      price: 49,
      originalPrice: 99,
      badge: "New",
      rating: 5.0,
      reviewsCount: 39,
      image: "assets/img/product-3.jpg",
      technologies: ["Figma", "HTML5", "CSS3 / Vanilla", "React", "WCAG 2.1 AA"],
      shortDescription: "Over 500+ handcrafted UI components, accessible tokens, interactive states, and responsive templates tailored for modern web apps.",
      overview: "Nova UI Pro is built for designers and engineers who value pristine visual hierarchy, micro-interactions, and accessibility. Every component is rigorously tested against WCAG 2.1 standards.",
      features: [
        { title: "500+ Modular Components", desc: "Buttons, inputs, navbars, modals, tables, badges, dropdowns, and data visualizations." },
        { title: "100% Responsive Grid", desc: "Flawless behavior across mobile (360px), tablet (768px), and ultra-wide displays (1920px+)." },
        { title: "Design Tokens & Variable Engine", desc: "Easily switch fonts, primary colors, radiuses, and shadow elevations in seconds." },
        { title: "Zero Heavy Dependencies", desc: "Pure CSS and lightweight Vanilla JS / React wrappers for optimal bundle size." }
      ],
      whatsIncluded: [
        "Figma Community Pro UI File with Auto-Layout 5.0",
        "HTML/CSS & React Component Source Code",
        "Interactive Storybook Styleguide",
        "Icon Pack (600+ SVG Vector Icons)"
      ],
      requirements: [
        "Figma account (Free or Pro)",
        "Any modern web framework or plain HTML/CSS"
      ],
      faq: [
        { q: "Is this compatible with plain HTML?", a: "Yes! Both vanilla HTML5/CSS and React components are supplied." }
      ],
      demoUrl: "#demo",
      featured: true
    },
    {
      id: "dt-prod-4",
      slug: "pulse-flow-crm-engine",
      name: "PulseFlow CRM & Lead Pipeline Engine",
      tagline: "Automated customer relations, sales pipeline & email dispatch system",
      category: "Software",
      categoryName: "Business Software",
      price: 99,
      originalPrice: 179,
      badge: "Hot",
      rating: 4.9,
      reviewsCount: 67,
      image: "assets/img/product-4.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "Vue 3", "WebSocket"],
      shortDescription: "Full-fledged lead tracking, deal stages, automated email sequences, and customer engagement analytics for sales teams.",
      overview: "PulseFlow is a complete, self-hostable CRM solution designed to give growing businesses complete ownership of customer data without ongoing monthly per-seat subscription fees.",
      features: [
        { title: "Kanban Deal Pipeline", desc: "Drag-and-drop opportunity boards with customizable stages and probability scoring." },
        { title: "Automated Email Sequences", desc: "Trigger drip campaigns based on deal status changes and contact interactions." },
        { title: "Activity Timeline & Notes", desc: "Unified history of emails, calls, tasks, meetings, and file attachments per lead." },
        { title: "Custom Webhook Integrations", desc: "Connect web forms, Stripe, Slack, and Zapier with flexible webhook endpoints." }
      ],
      whatsIncluded: [
        "Full Backend (Node.js/Express) & Frontend (Vue 3 / HTML)",
        "Database Schemas & Seed Data",
        "REST API Documentation (Swagger / OpenAPI)",
        "1-Click Docker Deployment"
      ],
      requirements: [
        "Node.js 18+",
        "MongoDB 6.0+",
        "SMTP Server or SendGrid / Postmark account"
      ],
      faq: [
        { q: "Can I host this on my own VPS?", a: "Absolutely. With Docker Compose, you can deploy PulseFlow to any $5/mo VPS in under 3 minutes." }
      ],
      demoUrl: "#demo",
      featured: false
    },
    {
      id: "dt-prod-5",
      slug: "speedcraft-ecommerce-starter",
      name: "SpeedCraft Headless E-Commerce Starter",
      tagline: "Ultra-fast headless storefront with cart, checkout & inventory sync",
      category: "Templates",
      categoryName: "Store Templates",
      price: 59,
      originalPrice: 119,
      badge: "Fast",
      rating: 4.7,
      reviewsCount: 43,
      image: "assets/img/product-5.jpg",
      technologies: ["Next.js 15", "Shopify Storefront API", "Tailwind CSS", "Stripe"],
      shortDescription: "Blazing fast 100/100 Lighthouse score headless store with instant page transitions and frictionless checkout.",
      overview: "SpeedCraft combines modern Next.js static generation with dynamic cart state and Shopify Storefront or custom REST backend integration for uncompromised shopping speed.",
      features: [
        { title: "Instant Filtering & Search", desc: "Sub-millisecond facet filtering by size, color, price range, and in-stock status." },
        { title: "Optimized Checkout Funnel", desc: "Single-page and multi-step checkout flows optimized for mobile conversion." },
        { title: "Rich Product Media Gallery", desc: "Zoom, thumbnail swiper, video support, and responsive image srcset." }
      ],
      whatsIncluded: [
        "Complete Next.js Storefront Project",
        "Shopify & Stripe SDK Integrations",
        "SEO Meta & Schema.org JSON-LD Generators",
        "Full Documentation"
      ],
      requirements: [
        "Node.js 18+",
        "Shopify Storefront access token or custom backend"
      ],
      faq: [
        { q: "Can I use Stripe without Shopify?", a: "Yes, a standalone local cart + Stripe Checkout adapter is included." }
      ],
      demoUrl: "#demo",
      featured: false
    },
    {
      id: "dt-prod-6",
      slug: "docupress-api-doc-engine",
      name: "DocuPress Developer Portal & API Engine",
      tagline: "Interactive API documentation builder with live testing console & OpenAPI 3.0",
      category: "Tools",
      categoryName: "Developer Tools",
      price: 39,
      originalPrice: 79,
      badge: "Updated",
      rating: 4.8,
      reviewsCount: 31,
      image: "assets/img/card.jpg",
      technologies: ["TypeScript", "MDX", "OpenAPI", "Vanilla JS", "PrismJS"],
      shortDescription: "Turn OpenAPI specs and markdown into gorgeous, searchable developer documentation with dark mode and code sample generators.",
      overview: "DocuPress empowers engineering teams to deliver world-class developer documentation with minimal effort. Includes interactive request builders, copyable code snippets in 6 languages, and Algolia search integration.",
      features: [
        { title: "Live API Sandbox", desc: "Test API endpoints directly from the browser with customizable headers and body." },
        { title: "Auto Code Generators", desc: "Instant snippet generation for cURL, JavaScript, Python, Go, PHP, and Ruby." },
        { title: "Deep Search Indexing", desc: "Instant keyboard-navigable search across all documentation endpoints and guides." }
      ],
      whatsIncluded: [
        "Complete DocuPress Portal Source",
        "OpenAPI 3.0 parser and UI renderer",
        "Search indexing scripts",
        "Dark/Light theme builder"
      ],
      requirements: [
        "Node.js 16+ or static web server"
      ],
      faq: [
        { q: "Can I host this on GitHub Pages?", a: "Yes, DocuPress exports completely static HTML/JS/CSS ready for GitHub Pages, Netlify, or Vercel." }
      ],
      demoUrl: "#demo",
      featured: false
    }
  ],

  // Portfolio Projects Catalog
  projects: [
    {
      id: "dt-proj-1",
      slug: "finpulse-banking-platform",
      title: "FinPulse Neo-Banking & Wealth Platform",
      client: "FinPulse Financial Ltd.",
      category: "FinTech & Cloud",
      year: "2025",
      image: "images/home-dev.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Kafka", "AWS EKS", "Redis"],
      shortDescription: "End-to-end banking application with real-time peer-to-peer transfers, investment portfolios, and automated fraud scoring.",
      overview: "DasTech was contracted to design, build, and deploy the core digital banking frontend and real-time ledger sync for FinPulse. The platform handles over 100,000 daily active users with sub-50ms latency.",
      problem: "The client operated on legacy financial micro-sites with sluggish response times, fragmented customer data, and high drop-off rates during KYC onboarding.",
      solution: "DasTech architected a high-performance modern web application with biometric web authentication, optimistic UI state updates, and an event-driven architecture powered by Kafka and PostgreSQL.",
      features: [
        "Instant peer-to-peer transfers with real-time balance push notifications",
        "Automated KYC verification with passport & identity doc OCR scanning",
        "Interactive wealth management charts and multi-currency exchange rates",
        "Bank-grade AES-256 encryption and PCI-DSS compliance posture"
      ],
      results: [
        { metric: "+240%", label: "Increase in Daily Transactions" },
        { metric: "99.99%", label: "Uptime SLA Achieved" },
        { metric: "1.2s", label: "Average Page Load Time" }
      ],
      featured: true
    },
    {
      id: "dt-proj-2",
      slug: "omnichain-logistics-erp",
      title: "OmniChain Enterprise Logistics & Fleet ERP",
      client: "Global Cargo Solutions",
      category: "Enterprise Software",
      year: "2024",
      image: "images/home-web.png",
      technologies: ["Vue.js", "Python FastAPI", "TimescaleDB", "Docker", "Mapbox GL"],
      shortDescription: "Real-time IoT fleet tracking, route optimization, automated customs manifest generation, and warehouse dispatching.",
      overview: "A comprehensive enterprise logistics ERP engineered to coordinate 5,000+ commercial transport vehicles across international border checkpoints.",
      problem: "Disjointed spreadsheets and legacy desktop applications caused delivery delays, fuel inefficiencies, and communication breakdowns across cross-border hubs.",
      solution: "DasTech delivered a unified web-based command center with live GPS telemetry on Mapbox, AI route optimization, and automated driver dispatching.",
      features: [
        "Live satellite GPS map tracking with geofencing alert triggers",
        "Automated digital bill-of-lading and customs manifest generator",
        "Fuel consumption analytics and preventive maintenance alerts",
        "Offline-capable mobile companion app for field drivers"
      ],
      results: [
        { metric: "35%", label: "Reduction in Fuel Overhead" },
        { metric: "4.8 hrs", label: "Saved per Customs Clearance" },
        { metric: "5,000+", label: "Vehicles Monitored in Real-Time" }
      ],
      featured: true
    },
    {
      id: "dt-proj-3",
      slug: "medivault-telehealth-portal",
      title: "MediVault HIPAA-Compliant Telehealth Hub",
      client: "Apex Health Network",
      category: "Healthcare & Mobile",
      year: "2024",
      image: "images/home-mobile.png",
      technologies: ["React Native", "WebRTC", "Node.js", "MongoDB", "GCP"],
      shortDescription: "Secure virtual consultation system, electronic health records (EHR) integration, and digital prescription dispatch.",
      overview: "A cross-platform telehealth platform connecting certified medical practitioners with remote patients via high-definition encrypted video.",
      problem: "Patients faced long wait times for routine consultations while medical clinics struggled with non-compliant third-party meeting tools.",
      solution: "DasTech engineered an end-to-end encrypted WebRTC video consultation portal directly connected to certified clinical EHR databases.",
      features: [
        "End-to-end encrypted HD video consultations with interactive whiteboard",
        "Automated digital prescription dispatch directly to local pharmacies",
        "Calendar booking with timezone auto-adjustment and SMS reminders",
        "HIPAA and GDPR compliant data storage with audit trail logging"
      ],
      results: [
        { metric: "150k+", label: "Completed Tele-Consultations" },
        { metric: "4.9/5", label: "Patient Satisfaction Score" },
        { metric: "0", label: "Security Breaches / Zero-Trust" }
      ],
      featured: true
    },
    {
      id: "dt-proj-4",
      slug: "cloudscale-devops-automation",
      title: "CloudScale Infrastructure & CI/CD Pipeline",
      client: "TechStream Networks",
      category: "DevOps & Cloud",
      year: "2025",
      image: "images/home-qa.png",
      technologies: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "AWS"],
      shortDescription: "Multi-region Kubernetes deployment architecture with automated GitOps continuous deployment and observability.",
      overview: "Complete cloud modernization replacing legacy manual server provisioning with automated GitOps workflows.",
      problem: "Deployments took 3 hours with frequent human errors and downtime during peak weekend traffic.",
      solution: "Designed immutable infrastructure with Terraform and automated zero-downtime rollouts via ArgoCD.",
      features: [
        "Declarative infrastructure as code with automated linting and security scans",
        "Multi-region auto-scaling Kubernetes cluster deployment",
        "Centralized distributed tracing and APM performance monitoring"
      ],
      results: [
        { metric: "92%", label: "Faster Deployment Cycles (3h -> 14m)" },
        { metric: "99.995%", label: "System Availability" },
        { metric: "40%", label: "Cloud Infrastructure Cost Savings" }
      ],
      featured: false
    }
  ],

  // Core DasTech Services
  services: [
    {
      id: "srv-1",
      title: "Custom Software Engineering",
      icon: "bi-code-slash",
      subtitle: "Tailored enterprise solutions built from the ground up for performance, scalability, and security.",
      description: "We engineer resilient, scalable web and desktop applications engineered specifically to solve your organization's unique operational challenges and drive financial return on investment.",
      deliverables: ["Full-Stack Architecture", "Custom Business Logic", "Database Design & Optimization", "Third-Party API Integrations"]
    },
    {
      id: "srv-2",
      title: "Modern Web & SaaS Applications",
      icon: "bi-window-stack",
      subtitle: "Ultra-responsive, fast, and conversion-optimized web platforms built with contemporary web stacks.",
      description: "From client portals to high-concurrency SaaS products, we deliver frontends with exceptional design, fast load times, and intuitive UX.",
      deliverables: ["Single Page Apps (SPA)", "Progressive Web Apps (PWA)", "Multi-Tenant Architecture", "Payment & Subscription Gateways"]
    },
    {
      id: "srv-3",
      title: "Mobile App Development",
      icon: "bi-phone",
      subtitle: "Native and cross-platform iOS & Android apps that deliver seamless user experiences.",
      description: "We develop feature-rich mobile applications that run smoothly across devices, leveraging device capabilities, offline persistence, and smooth animations.",
      deliverables: ["iOS & Android Cross-Platform", "Push Notifications Engine", "Offline First Sync", "App Store & Play Store Deployment"]
    },
    {
      id: "srv-4",
      title: "Cloud Infrastructure & DevOps",
      icon: "bi-cloud-check",
      subtitle: "Scalable cloud architectures, automated CI/CD pipelines, and high-availability server setups.",
      description: "Automate your release cycles, reduce cloud hosting overhead, and protect your data with modern container orchestration and infrastructure as code.",
      deliverables: ["Kubernetes & Docker Setup", "Automated CI/CD Workflows", "AWS / GCP / Azure Architecture", "24/7 Health Monitoring & Alerts"]
    },
    {
      id: "srv-5",
      title: "UI/UX & Product Design",
      icon: "bi-palette",
      subtitle: "User-centric interface design, design systems, and interactive interactive prototypes.",
      description: "We bridge aesthetics and functionality. Every interface is designed after thorough user journey analysis to maximize engagement and conversion.",
      deliverables: ["Wireframing & Prototyping", "Design Systems & Component Kits", "Accessibility Audits (WCAG)", "User Testing & Iteration"]
    },
    {
      id: "srv-6",
      title: "Quality Assurance & Security Auditing",
      icon: "bi-shield-check",
      subtitle: "Rigorous automated testing, security vulnerability scans, and performance benchmarking.",
      description: "Ensure your software is resilient, secure, and ready for high traffic with our automated end-to-end test suites and compliance verification.",
      deliverables: ["Automated E2E Testing", "Load & Stress Benchmarking", "Vulnerability Assessments", "Code Quality & Security Audits"]
    }
  ],

  // DasTech Stats & Trust Metrics
  stats: [
    { number: "150+", label: "Software Projects Delivered" },
    { number: "99.8%", label: "Client Satisfaction Rate" },
    { number: "15+", label: "Ready-to-Deploy Digital Products" },
    { number: "24/7", label: "Engineering Support & SLA" }
  ]
};
