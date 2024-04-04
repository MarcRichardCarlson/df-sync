/*buttons, textarea, range, dropdown, options, textfield*/

export const QUESTIONS = [
  {
    category: "question-name-category",
    questions: [
      {
        key: "name",
        type: "textfield",
        title: "question-name-title",
        question: "question-name-text",
        placeholder: "question-name-placeholder",
      },
      {
        key: "company_name",
        type: "textfield",
        title: "question-company_name-title",
        question: "question-company_name-text",
        placeholder: "question-company_name-placeholder",
      },
    ],
  },
  {
    category: "question-industry-category",
    questions: [
      {
        key: "industry",
        type: "dropdown",
        options: ["question-industry-options"],
        maxOptions: 2,
        title: "question-industry-title",
        question: "question-industry-text",
        instruction: "question-industry-instruction",
        placeholder: "question-industry-placeholder",
      },
    ],
  },
  {
    category: "question-type-category",
    questions: [
      {
        key: "type",
        type: "dropdown",
        options: "question-industry-options",
        maxOptions: 6,
        title: "Functionality",
        question: "What type of website are you planning to build?",
        placeholder: "Select key features",
      },
      {
        key: "type_of_work",
        type: "textfield",
        title: "Type of work",
        placeholder: "Enter here...",
        question: "What type of work do you want to be done?",
        instruction: "Ex.. a new project, maintenance or maybe SEO",
        optional: true,
      },
      {
        key: "audience",
        type: "textfield",
        title: "Targeted audience",
        placeholder: "Enter here...",
        question: "What is you're Targeted audience?",
        optional: true,
      },
      {
        key: "timeline",
        type: "buttons",
        options: ["Less than a month", "1-2 months", "2-3 months", "6+ months"],
        title: "Timeline",
        question: "What is the approximate timeline for this project?",
      },
      {
        key: "specific_date",
        type: "buttons",
        options: ["Yes", "No"],
        title: "Specific Date",
        question: "Do you have a specific date for when the project should be finished?",
      },
      {
        key: "specific_date_input",
        type: "textfield",
        title: "Specific Date",
        placeholder: "Enter Specific Date...",
        question: "If you want to add that date you can do it here.",
        instruction: "This is optional..",
        optional: true,
      },
      {
        key: "budget",
        type: "range",
        min: 0,
        max: 500.000,
        title: "Budget",
        question: "What is the approximate budget for this project?",
      }
    ],
  },
  {
    category: "question-brief-category",
    questions: [
      {
        key: "brief",
        type: "textarea",
        placeholder: "Type here..",
        optional: true,
        title: "A short brief",
        instruction: "This is optional..",
        question: "Please explain a litle about the project at hand",
      },
    ]
  },
  {
    category: "question-current_project-category",
    questions: [
      {
        key: "current_project",
        type: "buttons",
        options: ["Yes", "No"],
        title: "Current Project",
        question: "Do you have a existing website/project?",
      },
      {
        key: "domain",
        type: "textfield",
        title: "Domain",
        placeholder: "Enter domain...",
        question: "Do you have a domain for the website/project?",
        instruction: "This is optional..",
        optional: true,
      },
      {
        key: "hosting",
        type: "textfield",
        title: "Hosting",
        placeholder: "Enter hosting service...",
        question: "What hosting service are you using?",
        instruction: "This is optional..",
        optional: true,
      }
    ]
  },
  {
    category: "question-content-category",
    questions: [
      {
        key: "content",
        type: "buttons",
        options: ["Yes", "No"],
        title: "Current Content",
        question: "Do you have a existing website/project?",
      },
      {
        key: "updating",
        type: "buttons",
        title: "Content update",
        options: ["Very often", "Every 1-2 months", "Every 2-3 months", "Every 3-6 months", "Never"],
        question: "How often will the content on the page/project be updated?",
      },
    ]
  },
  {
    category: "question-cms-category",
    questions: [
      {
        key: "cms",
        type: "buttons",
        options: ["Yes", "No"],
        title: "CMS",
        question: "Do you have an existing cms?",
      },
      {
        key: "usage",
        type: "buttons",
        options: ["Yes", "No"],
        title: "CMS Usage",
        question: "Do you intend to keep this cms?",
      },
      {
        key: "selected_cms",
        type: "textfield",
        title: "Select CMS",
        question: "Is there any particular cms you would want to use?",
        placeholder: "Enter here...",
      }
    ]
  },
  {
    category: "question-third_party-category",
    questions: [
      {
        key: "third_party",
        type: "textarea",
        placeholder: "(e.g., payment gateways, CRM systems, hubspots)",
        optional: true,
        title: "About",
        instruction: "This is optional..",
        question: "Are there any integrations required with third-party services?",
      },
    ]
  },
  {
    category: "question-ecom-category",
    questions: [
      {
        key: "ecom",
        type: "textfield",
        title: "E-commerce",
        question: "What ecom platform are you using?",
        placeholder: "Write here..",
      },
      {
        key: "desired_ecom",
        type: "textfield",
        title: "Desired E-commerce",
        question: "What ecom platform do you want to use?",
        placeholder: "Write here..",
      },
      {
        key: "payment_services",
        type: "textfield",
        title: "Payment Services",
        question: "What payment service do you want to use?",
        placeholder: "Write here..",
      },
    ]
  },
  {
    category: "Website",
    questions: [
      {
        key: "template",
        type: "range",
        min: 0,
        max: 25,
        title: "Page templates",
        question: "What is the approximate amount of, pages/templates for this website?",
      },
      {
        key: "components_modules",
        type: "range",
        min: 0,
        max: 50,
        title: "Components & Modules",
        question: "What is the approximate amount of components/modules for this website?",
      },
      {
        key: "accounts",
        type: "buttons",
        options: ["Yes", "No"],
        title: "User accounts",
        question: "Will your website require user accounts?",
      },
    ]
  },
  {
    category: "question-hosting_package-category",
    questions: [
      {
        key: "hosting_package",
        type: "buttons",
        options: ["Yes", "No"],
        title: "Hosting package",
        question: "Do you want to include a hosting package?",
      },
      {
        key: "seo",
        type: "buttons",
        options: ["Yes", "No"],
        title: "SEO package",
        question: "Do you want to include a SEO package?",
      },
      {
        key: "seo_marketing",
        type: "textfield",
        title: "Agency",
        question: "Do you have an existing SEO & or marketing handling?",
        placeholder: "Write here..",
      }
    ]
  },
  {
    category: "question-maintenance-category",
    questions: [
      {
        key: "maintenance",
        type: "buttons",
        options: ["None", "Minimal", "Moderate", "Significant"],
        title: "Maintenance and Support",
        question: "Will you require ongoing maintenance and support after the website is launched?",
      },
      {
        key: "internal_resources",
        type: "textfield",
        title: "Internal Resources",
        question: "Do you have internal resources available for website maintenance or will you need assistance with this?",
        placeholder: "Write here..",
      }
    ]
  },
  {
    category: "question-other-category",
    questions: [
      {
        key: "other",
        type: "textarea",
        placeholder: "Write here...",
        optional: true,
        title: "Others",
        instruction: "This is optional..",
        question: "Here you have the oppertunities to add anything you want if needed. Feel free to add anything",
      },
      {
        key: "refrences",
        type: "textarea",
        placeholder: "Write here...",
        optional: true,
        title: "Refrences",
        instruction: "This is optional..",
        question: "Do you have any refrences?",
      },
    ]
  },
  {
    category: "question-estimation-category",
    questions: [
      {
        key: "estimation",
        type: "buttons",
        options: ["Yes", "No"],
        title: "Rough Estimation",
        question: "Do you need a rough estimation of the project?",
      },
    ]
  },
]