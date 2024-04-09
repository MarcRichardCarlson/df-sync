import { sleep } from "../../utils"

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
  })
}

// Create new Assignment button
export async function createAssignment() {
  // Simulating fetch call
  // await sleep(1500)

  // Mock Response
  return Promise.resolve({
    assignment_id: "pkhj8-08jkl-bdcfg",
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

// Confirm Assigment in Summary Page
export async function confirmAssignment(assignmentId: any, satisfaction: any) {
  console.log("API:Confirm Assigment Parameters : ")
  console.log({ assignment_id: assignmentId, satisfaction })
  // Simulating fetch call
  await sleep(1000)
  return Promise.resolve(true)
}
