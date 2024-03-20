export const QUESTIONS = [
    {
      category: "Business",
      questions: [
        {
          key: "business",
          type: "textfield",
          title: "Define Your Business",
          question: "What kind of business are you building your webpage for?",
          placeholder: "Ex. Resturant",
        },
      ],
    },
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
  