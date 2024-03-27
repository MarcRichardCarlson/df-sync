/*buttons, textarea, range, dropdown, options, textfield*/

export const QUESTIONS = [
    {
      category: "Information",
      questions: [
        // {
        //   key: "name",
        //   type: "textfield",
        //   title: "Welcome",
        //   question: "Please enter your full name",
        //   placeholder: "Enter full name",
        // },
        {
          key: "company_name",
          type: "textfield",
          title: "Company Name",
          question: "Please enter your company name",
          placeholder: "Enter company name",
        },
      ],
    },
    {
      category: "Nature of Business",
      questions: [
        {
          key: "industry",
          type: "dropdown",
          options: ["Agriculture", "Architecture", "Arts and Entertainment", "Automotive", "Biotechnology", "Construction", "Consulting", "Consumer Goods", "Education", "Energy", "Engineering", "Environmental", "Fashion", "Finance", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Information Technology", "Insurance", "Legal", "Manufacturing", "Marketing", "Media", "Non-Profit", "Pharmaceuticals", "Real Estate", "Retail", "Software", "Sports", "Telecommunications", "Transportation", "Travel", "Utilities", "Other"],
          maxOptions: 2,
          title: "Industry",
          question: "What industry do you operate in? ",
          instruction:"You can select multiple options",
          placeholder: "Select your industry",
        },
      ],
    },
    // {
    //   category: "Project",
    //   questions: [
    //     {
    //       key: "type",
    //       type: "dropdown",
    //       options: ["Blog", "E-commerce", "Booking System", "Protfolio Gallery", "Event Calendar", "Forums/Community Boards" , "Other"],
    //       maxOptions: 6,
    //       title: "Functionality",
    //       question: "What type of website are you planning to build?",
    //       placeholder: "Select key features",
    //     },
    //     {
    //       key: "accounts",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "User accounts",
    //       question: "Will your site require user accounts?",
    //     },
    //     {
    //       key: "timeline",
    //       type: "buttons",
    //       Options: ["Less than a month", "1-2 months", "2-3 months", "6+ months"],
    //       title: "Timeline",
    //       question: "What is the approximate timeline for this project?",
    //     },
    //     {
    //       key: "budget",
    //       type: "range",
    //       min: 0,
    //       max: 500.000,
    //       title: "Budget",
    //       question: "What is the approximate budget for this project?",
    //     },
    //     {
    //       key: "maintenance",
    //       type: "buttons",
    //       title: "Maintenance and Support",
    //       Options: ["None", "Minimal", "Moderate", "Significant"],
    //       question: "How much ongoing maintenance do you expect to need?",
    //     }
    //   ],
    // },
    // {
    //   category: "About",
    //   questions: [
    //     {
    //       key: "about",
    //       type: "textarea",
    //       placeholder: "Type here...",
    //       optional: true,
    //       title: "About",
    //       instruction: "This is optional..",
    //       question: "Here you can write details about yopur project that we might need to know.",
    //       options: ["I have an existing project/website i wish to expand", "I want to create a new project/website", "I want create a new project/website based on a current one"],
    //     },
    //   ]
    // },
    // {
    //   category: "Current project",
    //   questions: [
    //     {
    //       key: "current",
    //       type: "buttons",
    //       Options: ["Yes", "No"],
    //       title: "Current Project",
    //       question: "Do you have a current project?",
    //     },
    //     {
    //       key: "domain",
    //       type: "textfield",
    //       title: "Domain",
    //       placeholder: "Enter domain...",
    //       question: "Do you have a domain for the project?",
    //       instruction: "This is optional..",
    //       optional: true,
    //     },
    //     {
    //       key: "hosting",
    //       type: "textfield",
    //       title: "Hosting",
    //       placeholder: "Enter hosting service...",
    //       question: "What hosting service are you using?",
    //       instruction: "This is optional..",
    //       optional: true,
    //     }
    //   ]
    // },
    // {
    //   category: "Content",
    //   questions: [
    //     {
    //       key: "content",
    //       type: "buttons",
    //       Options: ["Yes", "No"],
    //       title: "Content",
    //       question: "Do you have any existing content?",
    //     },
    //     {
    //       key: "updating",
    //       type: "buttons",
    //       title: "Content update",
    //       Options: ["Often", "Never","Every 1-2 months", "Every 2-3 months", "Every 3-6 months"],
    //       question: "How often will the content be updated?",
    //     },
    //   ]
    // },
    // {
    //   category: "CMS",
    //   questions: [
    //     {
    //       key: "cms",
    //       type: "buttons",
    //       Options: ["Yes", "No"],
    //       title: "CMS",
    //       question: "Do you have an existing cms?",
    //     },
    //     {
    //       key: "usage",
    //       type: "buttons",
    //       Options: ["Yes", "No"],
    //       title: "CMS Usage",
    //       question: "Is there any particular cms you would want to use?",
    //     },
    //     {
    //       key: "selectedCms",
    //       type: "textfield",
    //       title: "Select CMS",
    //       question: "Please enter youre desired cms",
    //       placeholder: "Enter cms...",
    //     }
    //   ]
    // },
    // {
    //   category: "Third-party",
    //   questions: [
    //     {
    //       key: "thirdParty",
    //       type: "textarea",
    //       placeholder: "(e.g., payment gateways, CRM systems, hubspots)",
    //       optional: true,
    //       title: "About",
    //       instruction: "This is optional..",
    //       question: "Are there any integrations required with third-party services?",
    //     },
    //   ]
    // }
    
    








    /* {
      category: "Project",
      questions: [
        {
          key: "project",
          type: "options",
          title: "Project details",
          question: "",
          options: ["I have an existing project/website i wish to expand", "I want to create a new project/website", "I want create a new project/website based on a current one"],
        },
      ],
    }, */



    // {
    //   category: "Purpose and Audience",
    //   questions: [
    //     {
    //       key: "purpose",
    //       type: "textfield",
    //       title: "Understanding the Website's Purpose and Target Audience",
    //       question: "What is the primary goal of your website?",
    //       placeholder: "Ex. Sell products",
    //     },
    //     {
    //       key: "audience",
    //       type: "textfield",
    //       title: "The Website's Purpose and Target Audience",
    //       question: "What is the primary goal of your website?",
    //       placeholder: "Ex. Sell products",
    //     },
    //   ],
    // },
    // {
    //   category: "Functionality",
    //   questions: [
    //     {
    //       key: "functionality",
    //       type: "dropdown",
    //       options: ["Blog", "E-commerce", "Booking System", "Protfolio Gallery", "Event Calendar", "Forums/Community Boards" , "Other"],
    //       maxOptions: 6,
    //       title: "Functionality",
    //       question: "What key functionality do you want on your website?",
    //       placeholder: "Select key features",
    //     },
    //     {
    //       key: "accounts",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "User accounts",
    //       question: "Will your site require user accounts?",
    //     },
    //   ],
    // },
    // {
    //   category: "Design Preferences & Experience",
    //   questions: [
    //     {
    //       key: "preferences",
    //       type: "dropdown",
    //       options: ["Modern", "Minimalist", "Traditional", "Classic", "Artistic", "Creative", "Corporate", "Professional", "Other"],
    //       maxOptions: 6,
    //       title: "Functionality",
    //       question: "Do you have any design preferences or existing branding guidelines?",
    //       placeholder: "Select key design preferences",
    //       instruction:"You can select multiple options"
    //     },
    //     {
    //       key: "experience",
    //       type: "options",
    //       title: "Experience",
    //       question: "How important is the mobile experience for your website?",
    //       options: ["Very important", "Somewhat important", "Neutral", "Not important"],
    //     },
    //   ],
    // },
    // {
    //   category: "Content Management",
    //   questions: [
    //     {
    //       key: "content",
    //       type: "options",
    //       title: "Content",
    //       question: "How often do you plan to update the content on your website?",
    //       options: ["Daily", "Weekly", "Monthly", "Occasionally/as needed"],
    //     },
    //     {
    //       key: "management",
    //       type: "options",
    //       title: "Management",
    //       question: "Would you like to be able to update the website yourself without technical help?",
    //       options: ["Yes", "No", "Unsure"],
    //     },
    //   ],
    // },
    // {
    //   category: "Performance and Scalability",
    //   questions: [
    //     {
    //       key: "scalability",
    //       type: "options",
    //       title: "Scalability",
    //       question: "Do you expect a lot of traffic on your website?",
    //       options: ["Yes", "No", "Unsure"],
    //     },
    //     {
    //       key: "Performance",
    //       type: "options",
    //       title: "Performance",
    //       question: "Is loading speed a critical factor for your website?",
    //       options: ["Yes", "No", "Unsure"],
    //     },
    //   ],
    // },
    // {
    //   category: "Performance and Scalability",
    //   questions: [
    //     {
    //       key: "scalability",
    //       type: "options",
    //       title: "Scalability",
    //       question: "Do you expect a lot of traffic on your website?",
    //       options: ["Yes", "No", "Unsure"],
    //     },
    //     {
    //       key: "performance",
    //       type: "options",
    //       title: "Performance",
    //       question: "Is loading speed a critical factor for your website?",
    //       options: ["Yes", "No", "Unsure"],
    //     },
    //   ],
    // },
    // {
    //   category: "Security Considerations",
    //   questions: [
    //     {
    //       key: "security",
    //       type: "dropdown",
    //       options: ["Payment information", "Yes, personal data", "Yes, company data", "No", "Other sensitive data"],
    //       maxOptions: 6,
    //       title: "Security Considerations",
    //       question: "Will your website handle sensitive information?",
    //       placeholder: "Select what kind of information",
    //       instruction:"You can select multiple options"
    //     },
    //   ],
    // },



    // {
    //   category: "",
    //   questions: [
    //     {
    //       key: "urgency",
    //       type: "buttons",
    //       options: [
    //         "ASAP - happy to compromise",
    //         "Hold out for a short period to find a better match",
    //         "Willing to wait for a strongly appropriate candidate",
    //       ],
    //       title: "Urgency",
    //       question: "How quickly are you looking to fill this role?",
    //       fieldClassName: "flex-col",
    //     },
    //   ],
    // },
    // {
    //   category: "Seniority",
    //   questions: [
    //     {
    //       key: "seniority",
    //       type: "range",
    //       min: 0,
    //       max: 15,
    //       title: "Budget",
    //       question: "What is the approximate budget for this project?",
    //     },
    //   ],
    // },
    // {
    //   category: "Location",
    //   questions: [
    //     {
    //       key: "location",
    //       type: "dropdown",
    //       options: ["Australia", "Hong Kong", "Indonesia", "Japan", "Singapore", "Other"],
    //       instruction: "You can select multiple locations",
    //       maxOptions: 6,
    //       title: "Location",
    //       question: "Where is this position to be based?",
    //       placeholder: "Select location",
    //     },
    //   ],
    // },
    // {
    //   category: "Experience",
    //   questions: [
    //     {
    //       key: "core_experience",
    //       type: "dropdown",
    //       options: ["Banking", "Capital Markets", "Corporate", "Corporate Commercial", "Disputes", "Finance"],
    //       maxOptions: 3,
    //       title: "Core experience",
    //       question: "What are the core areas of experience required?",
    //       instruction: "Select up to 3 areas",
    //       placeholder: "Select areas",
    //     },
    //     {
    //       key: "niche_experience",
    //       type: "dropdown",
    //       options: ["Crypto", "Cybersecurity", "Data Privacy", "Employment", "Outsourcing", "Payments"],
    //       maxOptions: 3,
    //       title: "NICHE EXPERIENCE",
    //       question: "Select up to 3 more niche areas of experience required",
    //       instruction: "Select up to 3 areas",
    //       placeholder: "Select areas",
    //       optional: true,
    //     },
    //     {
    //       key: "niche_experience_ratings",
    //       type: "options",
    //       title: "NICHE EXPERIENCE",
    //       question: "Importance of niche areas of experience",
    //       instruction: "Choose between “Strongly preferred” or “Nice to have”",
    //       options: ["Strongly prefferd", "Nice to have"],
    //       dependency: "niche_experience",
    //     },
    //   ],
    // },
    // {
    //   category: "Background",
    //   questions: [
    //     {
    //       key: "preferred_background",
    //       type: "buttons",
    //       options: [
    //         "International firm",
    //         "Local tier 1 firm (or better)",
    //         "Open to candidates from a Tier 2/3 or boutique firm",
    //         "Minimal private practice experience is required",
    //       ],
    //       maxOptions: 2,
    //       title: "Background",
    //       question: "What is the preferred background of the ideal candidate?",
    //       instruction: "Select up to 2 options",
    //       fieldClassName: "flex-col",
    //     },
    //   ],
    // },
    // {
    //   category: "In-house",
    //   questions: [
    //     {
    //       key: "in_house_experience_preference",
    //       type: "buttons",
    //       options: ["Essential", "Strongly preferred", "Nice to have", "Not Necessary"],
    //       title: "In-house experience",
    //       question: "Prior in-house experience is:",
    //     },
    //   ],
    // },
    // {
    //   category: "Sectors",
    //   questions: [
    //     {
    //       key: "sector_experience",
    //       type: "dropdown",
    //       options: ["Agriculture", "Asset Management", "Automotive", "Aviation", "Commodities", "Defence"],
    //       maxOptions: 2,
    //       title: "Sectors",
    //       question: "Indicate any key sector-related experience required",
    //       instruction: "Select up to 2 sectors",
    //       placeholder: "Select sector",
    //       optional: true,
    //     },
    //     {
    //       key: "sector_experience_ratings",
    //       type: "options",
    //       title: "Sectors",
    //       question: "Importance of prior sector-related experience",
    //       instruction: "Pick one for each sector",
    //       options: ["Essential", "Strongly prefferd", "Nice to have"],
    //       dependency: "sector_experience",
    //     },
    //   ],
    // },
    // {
    //   category: "Language",
    //   questions: [
    //     {
    //       key: "language_required",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "Language",
    //       question: "Are there any language requirements for the role?",
    //       ifYes: true, // If YES, proceed to the next questions
    //     },
    //     {
    //       key: "language_name",
    //       type: "dropdown",
    //       options: ["Bahasa", "Cantonese", "Mandarin", "Japanese", "Korean"],
    //       title: "Language",
    //       question: "Select the required language",
    //       placeholder: "Select location",
    //       dependency: "language_required",
    //     },
    //     {
    //       key: "language_proficiency",
    //       type: "buttons",
    //       options: ["Converse / Exchange emails", "Review / Comment on contracts", "Business level"],
    //       title: "Language",
    //       question: "Level of proficiency required",
    //       dependency: "language_required",
    //       fieldClassName: "flex-col",
    //     },
    //   ],
    // },
    // {
    //   category: "Urgency",
    //   questions: [
    //     {
    //       key: "urgency",
    //       type: "buttons",
    //       options: [
    //         "ASAP - happy to compromise",
    //         "Hold out for a short period to find a better match",
    //         "Willing to wait for a strongly appropriate candidate",
    //       ],
    //       title: "Urgency",
    //       question: "How quickly are you looking to fill this role?",
    //       fieldClassName: "flex-col",
    //     },
    //   ],
    // },
    // {
    //   category: "Budget",
    //   questions: [
    //     {
    //       key: "budget_range",
    //       type: "range",
    //       min: 5,
    //       max: 30,
    //       step: 1,
    //       title: "Budget",
    //       question: "What is your budget range for this role?",
    //       instruction: "Per month for full time",
    //     //   formatter: val => {
    //     //     return `S$${val}k`
    //     //   },
    //     },
    //     {
    //       key: "budget_flexibility",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "Budget",
    //       question: "Is there potential to stretch on budget for a particularly strong candidate?",
    //     },
    //     {
    //       key: "compensation_other",
    //       type: "textarea",
    //       options: ["Essential", "Strongly preferred", "Nice to have"],
    //       title: "Budget",
    //       question: "Other notable compensation elements to be aware of?",
    //       instruction: "(i.e., share options, guaranteed bonus, other incentives etc.)",
    //       placeholder: "Type here...",
    //       optional: true,
    //     },
    //   ],
    // },
    // {
    //   category: "Overseas Visa",
    //   questions: [
    //     {
    //       key: "visa_sponsorship",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "Overseas Visa",
    //       question: "Are you able to sponsor an employment pass/work visa for an appropriate candidate?",
    //     },
    //     {
    //       key: "visa_sponsorship_prompt",
    //       type: "buttons",
    //       options: ["Yes", "No"],
    //       title: "Overseas Visa",
    //       question: "Might you be able to reconsider overseas options to get the right language skills?",
    //     },
    //   ],
    // },
  ]