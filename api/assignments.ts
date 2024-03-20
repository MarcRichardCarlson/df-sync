import { sleep } from "../utils"

// Get all assignments data for Home Page
export async function getAllAssignments() {
  // Simulating fetch call
  // await sleep(1500)

  // Mock Response
  return Promise.resolve({
    assignments: [
      {
        role: "Assistant General Counsel",
        status: "Active",
        created_date: "28 Aug 2022",
      },
      {
        role: "Assistant General Counsel 2",
        status: "Active",
        created_date: "28 Aug 2022",
      },
      {
        role: "Assistant General Counsel 3",
        status: "Active",
        created_date: "28 Aug 2022",
      },
    ],
    drafts: [
      {
        id: "19ocvg-twy8c-bdcfg-1",
        role: "Assistant General Counsel D1",
        status: "Draft",
        created_date: "28 Aug 2022",
        progress: "0.72",
      },
      {
        id: "19ocvg-twy8c-bdcfg-2",
        role: "Assistant General Counsel D2",
        status: "Draft",
        created_date: "28 Aug 2022",
        progress: "0.72",
      },
    ],
  })
}

// Create new Assignment button
export async function createAssignment() {
  // Simulating fetch call
  // await sleep(1500)

  // Mock Response
  return Promise.resolve({
    assignment_id: "pkhj8-08jkl-bdcfg",
    assignment_status: "Draft",
  })
}

// Save question data every step
export async function saveQuestion(params: any) {
  console.log("API:Save Question Parameters : ")
  console.log({ params })
  // Simulating fetch call
  // await sleep(750)
  return Promise.resolve(true)
}

// Save as Draft button from header
export async function saveDraft(assignmentId: any) {
  console.log("API:Save Assigment as Draft Parameters : ")
  console.log({ assignment_id: assignmentId })
  // Simulating fetch call
  // await sleep(1000)
  return Promise.resolve(true)
}

// Edit Draft button from Home Page
export async function editDraft(assignmentId: any) {
  console.log("API:Edit Draft Parameters : ")
  console.log({ assignment_id: assignmentId })
  // Simulating fetch call
  // await sleep(1000)

  // Mock Response
  if (assignmentId === "19ocvg-twy8c-bdcfg-1") {
    return {
      assignment_id: "pkhj8-08jkl-bdcfg",
      assignment_detail: {
        business: "Assistant General Counsel",
        seniority: [8, 12],
        location: ["Japan"],
        core_experience: ["Corporate Commercial", "TMT"],
        // niche_experience: [],
        niche_experience: ["Cybersecurity", "Employment", "Outsourcing"],
        // niche_experience_ratings: [
        //   ["Cybersecurity", "Strongly prefferd"],
        //   ["Employment", "Nice to have"],
        //   ["Outsourcing", "Strongly prefferd"],
        // ],
        // preferred_background: ["International Firm", "Local Tier 1 Firm (or better)"],
        // in_house_experience_preference: "Essential",
        // // sector_experience: [],
        // sector_experience: ["Asset Management", "Aviation"],
        // sector_experience_ratings: [
        //   ["Asset Management", "Essential"],
        //   ["Aviation", "Strongly prefferd"],
        // ],
        // language_required: ["Yes"],
        // language_name: ["Cantonese"],
        // language_proficiency: ["Review / Comment on contracts"],
        // urgency: "Hold out for a better match",
        // // * 'Budget' format is updated
        // budget_range: [10, 30],
        // budget_flexibility: ["No"],
        // // compensation_other: null,
        // compensation_other: "Test...",
        // visa_sponsorship: ["No"],
        // visa_sponsorship_prompt: ["No"],
      },
      // calibration_detail: [
      //   { description: "Quality of private practice experience", rating: 1 },
      //   // { description: "Prior in-house experience", rating: 2 },
      //   // { description: "Niche telecoms experience", rating: 3 },
      // ],
    }
  } else if (assignmentId === "19ocvg-twy8c-bdcfg-2") {
    return {
      assignment_id: "pkhj8-08jkl-bdcfg",
      assignment_detail: {},
      calibration_detail: [
        { description: "Quality of private practice experience", rating: 1 },
        { description: "Prior in-house experience", rating: 2 },
        // { description: "Niche telecoms experience", rating: 3 },
      ],
    }
  } else {
    return {
      assignment_id: assignmentId,
      assignment_detail: {},
    }
  }
}

// Delete Draft button from Home Page
export async function deleteDraft(assignmentId: any) {
  console.log("API:Delete Draft Parameters : ")
  console.log({ assignment_id: assignmentId })
  // Simulating fetch call

  try {
    // await sleep(1000)
    // throw new Error("Unexpected error")
    return Promise.resolve(true)
  } catch (error) {
    return false
  }
}

// Confirm Assigment in Summary Page
export async function confirmAssignment(assignmentId: any, satisfaction: any) {
  console.log("API:Confirm Assigment Parameters : ")
  console.log({ assignment_id: assignmentId, satisfaction })
  // Simulating fetch call
  await sleep(1000)
  return Promise.resolve(true)
}
