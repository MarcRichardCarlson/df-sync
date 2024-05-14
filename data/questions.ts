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
        options: ["agriculture", "architecture", "arts-and-entertainment", "automotive", "biotechnology", "construction", "consulting", "consumer-goods", "education", "energy", "engineering", "environmental", "fashion", "finance", "food-&-beverage", "government", "healthcare", "hospitality", "information-technology", "insurance", "legal", "manufacturing", "marketing", "media", "non-profit", "pharmaceuticals", "real-estate", "retail", "software", "sports", "telecommunications", "transportation", "travel", "utilities", "other"],
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
      /*  {
         key: "type_of_project",
         type: "textarea",
         title: "question-type-title",
         question: "question-type-text",
         placeholder: "question-type-placeholder",
         optional: true,
       },
       {
         key: "type",
         type: "textarea",
         title: "question-type-title",
         question: "question-type-text",
         placeholder: "question-type-placeholder",
         optional: true,
       },
      {
         key: "type_of_work",
         type: "textfield",
         title: "question-type_of_work-title",
         placeholder: "question-type_of_work-placeholder",
         question: "question-type_of_work-text",
         instruction: "question-type_of_work-instruction",
         optional: true,
       },
       {
         key: "audience",
         type: "textfield",
         title: "question-audience-title",
         placeholder: "question-audience-placeholder",
         question: "question-audience-text",
         optional: true,
       },
       {
         key: "timeline",
         type: "buttons",
         options: ["less", "one-two", "two-three", "six-or-more"],
         title: "question-timeline-title",
         question: "question-timeline-text",
       },
       {
         key: "specific_date",
         type: "buttons",
         options: ["yes", "no"],
         title: "question-specific_date-title",
         question: "question-specific_date-text",
       },
       {
         key: "specific_date_input",
         type: "textfield",
         title: "question-specific_date_input-title",
         placeholder: "question-specific_date_input-placeholder",
         question: "question-specific_date_input-text",
         instruction: "question-specific_date_input-instruction",
         optional: true,
       }, */
       {
         key: "budget",
         type: "range",
         min: 0,
         max: 500.000,
         title: "question-budget-title",
         question: "question-budget-text",
       }
     ],
   },
  {
    category: "question-brief-category",
    questions: [
      {
        key: "brief",
        type: "textarea",
        placeholder: "question-brief-placeholder",
        optional: true,
        title: "question-brief-title",
        instruction: "question-brief-instruction",
        question: "question-brief-text",
      },
    ]
  },
  {
    category: "question-current_project-category",
    questions: [
      {
        key: "current_project",
        type: "buttons",
        options: ["yes", "no"],
        title: "question-current_project-title",
        question: "question-current_project-text",
      },
      {
        key: "domain",
        type: "textfield",
        title: "question-domain-title",
        placeholder: "question-domain-placeholder",
        question: "question-domain-text",
        instruction: "question-domain-instruction",
        optional: true,
      },
      {
        key: "hosting",
        type: "textfield",
        title: "Webbhotell",
        placeholder: "question-hosting-placeholder",
        question: "question-hosting-text",
        instruction: "question-hosting-instruction",
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
        options: ["yes", "no"],
        title: "question-content-title",
        question: "question-content-text",
      },
      {
        key: "content_info",
        type: "textarea",
        title: "question-content-information-title",
        placeholder: "question-content-information-placeholder",
        question: "question-content-information-text",
        instruction: "question-content-information-instruction",
        optional: true,
      },
      {
        key: "updating",
        type: "buttons",
        title: "question-updating-title",
        options: ["very-often", "every-one-two", "every-two-three", "every-six-or-more", "never"],
        question: "question-updating-text",
      },
    ]
  },
  {
    category: "question-cms-category",
    questions: [
      {
        key: "cms",
        type: "buttons",
        options: ["yes", "no"],
        title: "question-cms-title",
        question: "question-cms-text",
      },
      {
        key: "usage",
        type: "buttons",
        options: ["yes", "no"],
        title: "question-usage-title",
        question: "question-usage-text",
      },
      {
        key: "selected_cms",
        type: "textfield",
        title: "question-selected_cms-title",
        question: "question-selected_cms-text",
        placeholder: "question-selected_cms-placeholder",
        instruction: "question-selected_cms-instruction",
        optional: true,
      }
    ]
  },
  {
    category: "question-third_party-category",
    questions: [
      {
        key: "third_party",
        type: "textarea",
        placeholder: "question-third_party-placeholder",
        optional: true,
        title: "question-third_party-title",
        instruction: "question-third_party-instruction",
        question: "question-third_party-text",
      },
    ]
  },
  // {
  //   category: "question-ecom-category",
  //   questions: [
  //     {
  //       key: "ecom",
  //       type: "textfield",
  //       title: "question-ecom-title",
  //       question: "question-ecom-text",
  //       placeholder: "question-ecom-placeholder",
  //     },
  //     {
  //       key: "desired_ecom",
  //       type: "textfield",
  //       title: "question-desired_ecom-title",
  //       question: "question-desired_ecom-text",
  //       placeholder: "question-desired_ecom-placeholder",
  //     },
  //     {
  //       key: "payment_services",
  //       type: "textfield",
  //       title: "question-payment_services-title",
  //       question: "question-payment_services-text",
  //       placeholder: "question-payment_services-placeholder",
  //     },
  //   ]
  // },
  // {
  //   category: "Website",
  //   questions: [
  //     {
  //       key: "template",
  //       type: "range",
  //       min: 0,
  //       max: 25,
  //       title: "question-template-title",
  //       question: "question-template-text",
  //     },
  //     {
  //       key: "components_modules",
  //       type: "range",
  //       min: 0,
  //       max: 50,
  //       title: "question-components_modules-title",
  //       question: "question-components_modules-text",
  //     },
  //     {
  //       key: "accounts",
  //       type: "buttons",
  //       options: ["yes", "no"],
  //       title: "question-accounts-title",
  //       question: "question-accounts-text",
  //     },
  //   ]
  // },
  // {
  //   category: "question-hosting_package-category",
  //   questions: [
  //     {
  //       key: "hosting_package",
  //       type: "buttons",
  //       options: ["yes", "no"],
  //       title: "question-hosting_package-title",
  //       question: "question-hosting_package-text",
  //     },
  //     {
  //       key: "seo",
  //       type: "buttons",
  //       options: ["yes", "no"],
  //       title: "question-seo-title",
  //       question: "question-seo-text",
  //     },
  //     {
  //       key: "seo_marketing",
  //       type: "textfield",
  //       title: "question-seo_marketing-title",
  //       question: "question-seo_marketing-text",
  //       placeholder: "question-seo_marketing-placeholder",
  //     }
  //   ]
  // },
  // {
  //   category: "question-maintenance-category",
  //   questions: [
  //     {
  //       key: "maintenance",
  //       type: "buttons",
  //       options: ["none", "minimal", "moderate", "significant"],
  //       title: "question-maintenance-title",
  //       question: "question-maintenance-text",
  //     },
  //     {
  //       key: "internal_resources",
  //       type: "textfield",
  //       title: "question-internal_resources-title",
  //       question: "question-internal_resources-text",
  //       placeholder: "question-internal_resources-placeholder",
  //     }
  //   ]
  // },
  {
    category: "question-other-category",
    questions: [
      {
        key: "other",
        type: "textarea",
        placeholder: "question-other-placeholder",
        optional: true,
        title: "question-other-title",
        instruction: "question-other-instruction",
        question: "question-other-text",
      },
      // {
      //   key: "refrences",
      //   type: "textarea",
      //   placeholder: "question-refrences-placeholder",
      //   optional: true,
      //   title: "question-refrences-title",
      //   instruction: "This is optional..",
      //   question: "question-refrences-text",
      // },
    ]
  },
  {
    category: "question-estimation-category",
    questions: [
      {
        key: "estimation",
        type: "buttons",
        options: ["yes", "no"],
        title: "question-estimation-title",
        question: "question-estimation-text",
      },
    ]
  },
]