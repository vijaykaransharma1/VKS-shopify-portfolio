/**
 * Vijay Karan Sharma - Shopify Developer Portfolio
 * React Code Reference
 * 
 * NOTE: The React code in this file is also embedded inside index.html in a 
 * <script type="text/babel"> block. This is done to prevent CORS errors 
 * when opening the index.html file locally via the file:// protocol in browsers.
 */

const { useState, useEffect, useRef } = React;

// --- Resume Data Store ---
const RESUME_DATA = {
  profile: {
    name: "Vijay Karan Sharma",
    title: "Shopify Developer",
    subtitle: "Theme Specialist & Conversion Optimizer",
    email: "vijaykaransharma1@gmail.com",
    phone: "+919459009099",
    location: "Joginder Nagar (H.P)",
    summary: "Shopify Developer with nearly 3 years of hands-on experience building, customizing, and optimizing Shopify stores. Highly skilled in Shopify theme development using Liquid, HTML, CSS, and JavaScript, with strong experience converting Figma and PSD designs into fully functional, responsive Shopify websites. Experienced in creating custom features and functionalities that often replace paid Shopify apps to reduce store costs and improve performance. Proficient in integrating apps, troubleshooting store issues, and enhancing user experience to improve conversions. Possesses a strong understanding of e-commerce operations and customer behavior, and is currently expanding knowledge in digital marketing and advertising to support overall store growth.",
    stats: [
      { number: "3+", label: "Years Experience" },
      { number: "15+", label: "Themes Customised" },
      { number: "10+", label: "App Replacements" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },
  skills: [
    { name: "Shopify Theme Development", desc: "Expert in building and customizing themes using Liquid, JSON schemas, sections, and blocks.", category: "core", icon: "fa-brands fa-shopify" },
    { name: "Liquid Template Engine", desc: "Advanced liquid programming for custom template logic and metafield operations.", category: "core", icon: "fa-solid fa-code" },
    { name: "Frontend Development", desc: "Proficient in writing clean HTML5, CSS3, and ES6 JavaScript for interactive elements.", category: "core", icon: "fa-solid fa-laptop-code" },
    { name: "Figma / PSD to Shopify", desc: "Pixel-perfect conversion of modern Figma/PSD mockups to responsive Shopify themes.", category: "core", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Custom Cart Logic", desc: "Customizing drawer carts, upsells, drawer pricing logic, and ajax-based cart operations.", category: "shopify", icon: "fa-solid fa-cart-shopping" },
    { name: "Metafields & Metaobjects", desc: "Structuring store contents using custom fields, objects, and JSON database definitions.", category: "shopify", icon: "fa-solid fa-database" },
    { name: "Shopify API Integration", desc: "Integrating custom headless structures, Storefront API, and custom script apps.", category: "shopify", icon: "fa-solid fa-circle-nodes" },
    { name: "Shopify CLI & Version Control", desc: "Utilizing Shopify CLI, Git version control, and development environments for teams.", category: "shopify", icon: "fa-solid fa-terminal" },
    { name: "Performance Optimization", desc: "Diagnosing speed issues, reducing unused code/scripts, and optimizing Web Vitals.", category: "performance", icon: "fa-solid fa-gauge-high" },
    { name: "Conversion Rate Optimization (CRO)", desc: "A/B testing, UX improvements, troubleshooting checkouts, and trust metrics.", category: "performance", icon: "fa-solid fa-chart-line" },
    { name: "Search Engine Optimization (SEO)", desc: "Structured data schemas, micro-formats, meta definitions, and technical search settings.", category: "performance", icon: "fa-solid fa-magnifying-glass" },
    { name: "Marketing Platforms", desc: "Configuring Facebook Pixels, Meta Ads integration, Google Ads, and GTM setups.", category: "marketing", icon: "fa-solid fa-bullhorn" }
  ],
  experiences: [
    {
      role: "Shopify Developer",
      company: "Apex Consulting",
      type: "Remote",
      duration: "03/10/2025 - 30/04/2026",
      bullets: [
        "Converted Figma designs into responsive Shopify themes using reusable sections and scalable theme structure.",
        "Built custom features using Liquid, JavaScript, and metafields to control dynamic product and content behavior.",
        "Implemented cart logic, conditional pricing displays, and interactive product page elements based on business rules.",
        "Integrated and configured third-party apps while troubleshooting UI and functionality conflicts.",
        "Debugged live store issues and deployed production-safe fixes without affecting ongoing orders.",
        "Optimized storefront performance by reducing unused scripts, optimizing assets, and improving load speed.",
        "Coordinated with designers and project managers to translate requirements into functional storefront features."
      ]
    },
    {
      role: "Shopify Web Developer and Designer",
      company: "Infinity E Services",
      type: "Remote",
      duration: "August 2024 - November 2024",
      bullets: [
        "Designed and developed custom Shopify solutions tailored to client requirements.",
        "Implemented custom liquid coding to enhance store functionality and performance.",
        "Set up and configured Shopify apps, ensuring seamless operation.",
        "Optimized store performance, improving page load speed and user experience.",
        "Boosted blog pages SEO with targeted keyword research."
      ]
    },
    {
      role: "Web Developer - Shopify",
      company: "ThrivePix LLC",
      type: "Remote",
      duration: "May 2024 - June 2024",
      bullets: [
        "Converted Figma designs into existing Shopify themes, ensuring pixel perfect implementation and seamless responsiveness.",
        "Fixed Shopify-related issues, improving store stability.",
        "Installed and configured Shopify apps to enhance store features.",
        "Provided ongoing Shopify support and maintenance."
      ]
    },
    {
      role: "Web Developer",
      company: "Aarts Consultancy",
      type: "Remote",
      duration: "August 2023 - November 2023",
      bullets: [
        "Customized and modified Shopify themes to enhance visuals.",
        "Integrated Shopify apps to extend store capabilities.",
        "Converted mock-up designs into dynamic sections.",
        "Worked on custom metafields for convenience of clients.",
        "Learned and implemented Shopify CLI for transparency in theme changes."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Brainquest Consultancy",
      type: "Remote",
      duration: "May 2023 - June 2023",
      bullets: [
        "Identified and resolved bugs, improving store functionality.",
        "Worked on Liquid coding tasks to improve store functionality.",
        "Assisted in theme customization and Shopify store setup.",
        "Converted Figma designs to Shopify."
      ]
    },
    {
      role: "Web Developer Intern - Shopify",
      company: "Atomic House",
      type: "Remote",
      duration: "February 2023 - April 2023",
      bullets: [
        "Converted WordPress sections and templates to Shopify.",
        "Conducted SEO optimization by researching and implementing targeted keywords for store blogs to enhance search visibility and organic traffic.",
        "Analyzed store performance and optimized by reducing useless code.",
        "Implemented custom Liquid code to enhance Shopify store functionality."
      ]
    },
    {
      role: "Marketing Executive",
      company: "Hyundai Motors India",
      type: "Joginder Nagar",
      duration: "July 2022 - December 2022",
      bullets: [
        "Developed and implemented comprehensive marketing strategies aimed at enhancing brand awareness and driving overall sales growth within the regional market.",
        "Conducted extensive market research and analysis to identify evolving customer preferences, industry trends, and competitive dynamics, informing strategic decisions.",
        "Engaged proactively with customers, providing detailed product information, addressing inquiries, and resolving issues to enhance customer satisfaction and loyalty.",
        "Facilitated the entire sales process, offering personalized guidance and support to customers, from initial contact through to final purchase, ensuring a smooth and efficient experience.",
        "Contributed to the overall growth and success of Hyundai Motors by leveraging effective communication skills and implementing strategic initiatives designed to expand market share and improve brand positioning."
      ]
    }
  ],
  education: {
    degree: "B.B.A • A+",
    school: "H.P UNIVERSITY",
    duration: "2018-07-01 - 2021-08-01",
    bullets: [
      "Built a strong foundation in business management, marketing, finance, and HR practices.",
      "Conducted market research projects, analyzing consumer behavior and industry trends to support strategic decision-making.",
      "Developed problem-solving and analytical skills through case studies, simulations, and group assignments.",
      "Enhanced communication, teamwork, and leadership abilities via seminars, group presentations, and business events."
    ]
  },
  languages: [
    { name: "English", level: "Expert", score: 5 },
    { name: "Hindi", level: "Expert", score: 5 }
  ],
  projects: [
    {
      title: "Custom App-Free Bundle Engine",
      desc: "Replaced a high-cost paid Shopify application with a custom Liquid & JS solution. Developed a dynamic bundling feature with ajax add-to-cart operations, slashing store operating costs and boosting performance.",
      tag: "Theme Customization",
      tech: ["Liquid", "JavaScript", "Ajax API", "CSS3"],
      icon: "fa-solid fa-cubes"
    },
    {
      title: "Premium Figma-to-Shopify Theme Dev",
      desc: "Built a fully bespoke, responsive Shopify theme from custom Figma layouts. Developed dynamic section schema configurations allowing non-technical client team to custom-configure visual blocks.",
      tag: "Figma to Shopify",
      tech: ["Shopify Schema", "HTML5", "CSS Grid", "JS"],
      icon: "fa-solid fa-pencil-ruler"
    },
    {
      title: "Checkout & Cart Logic Upgrade",
      desc: "Implemented advanced business rules on cart elements. Programmed conditional pricing banners, trust indicators, checkout redirections, and cross-sell drawer elements.",
      tag: "Cart & Checkout",
      tech: ["Shopify Ajax", "Metafields", "Liquid", "UX"],
      icon: "fa-solid fa-basket-shopping"
    },
    {
      title: "Core Web Vitals Speed Optimization",
      desc: "Optimized storefront performance for an enterprise brand. Cleaned up legacy app scripts, lazyloaded assets, rebuilt layouts with CSS Grid replacing heavy libraries, reducing load time from 5.4s to 1.8s.",
      tag: "Performance",
      tech: ["Web Vitals", "Lighthouse", "Asset Optimization", "Liquid"],
      icon: "fa-solid fa-gauge-high"
    },
    {
      title: "WordPress to Shopify Migration",
      desc: "Handled full data, template, and design migration from WordPress/WooCommerce to Shopify. Configured page speed improvements and set up structured data mapping to preserve search authority.",
      tag: "Migration",
      tech: ["Shopify Import", "URL Redirects", "SEO Schema", "HTML5"],
      icon: "fa-solid fa-truck-ramp-box"
    },
    {
      title: "Dynamic Metafield Layout System",
      desc: "Built custom page layouts governed strictly by Shopify Metaobjects and Metafields. Enabled automatic rendering of specifications sheets and tabs based on product collections.",
      tag: "Data Modeling",
      tech: ["Metafields", "Metaobjects", "Liquid Schema", "CSS"],
      icon: "fa-solid fa-folder-tree"
    }
  ]
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [skillFilter, setSkillFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Form States
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'about-edu', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setFormError('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const filteredSkills = skillFilter === 'all' 
    ? RESUME_DATA.skills 
    : RESUME_DATA.skills.filter(s => s.category === skillFilter);

  const filteredProjects = projectFilter === 'all'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.tag.toLowerCase().includes(projectFilter) || p.tech.some(t => t.toLowerCase() === projectFilter));

  // Render logic is in index.html
}
