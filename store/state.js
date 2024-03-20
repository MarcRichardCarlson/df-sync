import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { QUESTIONS } from "../data/questions"
import { confirmAssignment, deleteDraft, editDraft, saveDraft, saveQuestion } from "../api/assignments"

export const QUESTIONS_STATUS = {
  LOADING: 0,
  QUESTIONS: 1,
  SUMMARY: 3,
  DONE: 4,
}

export const useAppStore = create(() => ({
  status: QUESTIONS_STATUS.LOADING,
}))

export const useQuestionStore = create(
  immer((set, get) => ({
    assignmentId: null,
    categoryIndex: 0,
    questionIndex: 0,
    calibrationIndex: 0,
    questions: [],
    calibrationAnswers: [],
    summary: null,
    assignmentDetails: {},
    showDots: false,
    next: async answer => {
      const {
        assignmentId,
        questions,
        categoryIndex,
        questionIndex,
        calibrationIndex,
        assignmentDetails,
        calibration,
      } = get()
      const status = useAppStore.getState().status
      let newStatus = status

      // QUESTIONS_STATUS.QUESTIONS
      if (status === QUESTIONS_STATUS.QUESTIONS) {
        const currentQuestion = questions[categoryIndex].questions[questionIndex]

        let newCategoryIndex = categoryIndex,
          newQuestionIndex = questionIndex

        if (categoryIndex < questions.length) {
          useAppStore.setState({ status: QUESTIONS_STATUS.LOADING })

          const isSuccess = await saveQuestion(
            generateSaveQuestionParams(answer, assignmentId, currentQuestion.key, currentQuestion.type),
          )

          if (isSuccess) {
            // ! NOTE !
            // If optional and no answer
            if (currentQuestion.optional && (!answer || answer.length === 0)) {
              console.log("Optional Question and No Answer")

              // If last question for this category, increment the category index
              // and reset question index
              if (questionIndex === questions[categoryIndex].questions.length - 1) {
                newCategoryIndex += 1
                newQuestionIndex = 0
              } else {
                newQuestionIndex += 1
              }
            }
            // ! NOTE !
            // If Yes / No question and the answer is NO, proceed to next category
            // But this must be updated if an optional question is
            // followed by a mandatory question in the same category
            else if (currentQuestion.ifYes && Array.isArray(answer) && answer[0] === "No") {
              console.log("Conditional Yes/No question and the answer is No")
              newCategoryIndex += 1
              newQuestionIndex = 0
            }
            // ! NOTE !
            // Special case for 'visa_sponsorship'
            // for it to proceed to the next sub-question
            // the answer must be NO and 'language_required' must be YES
            else if (
              currentQuestion.key === "visa_sponsorship" &&
              ((Array.isArray(answer) && answer[0] === "Yes") || assignmentDetails.language_required[0] === "No")
            ) {
              newCategoryIndex += 1
              newQuestionIndex = 0
            } else {
              // If last question for this category, increment the category index
              // and reset question index
              if (questionIndex === questions[categoryIndex].questions.length - 1) {
                newCategoryIndex += 1
                newQuestionIndex = 0
              } else {
                newQuestionIndex += 1
              }
            }

            if (newCategoryIndex === questions.length) {
              newStatus = QUESTIONS_STATUS.SUMMARY
            } else {
              const nextQuestion = questions[newCategoryIndex].questions[newQuestionIndex]

              console.log({ nextQuestion })

              // Peek to the next question, and see if it has dependencies and skip if necessary
              if (
                nextQuestion.dependency &&
                ((assignmentDetails[nextQuestion.dependency] &&
                  assignmentDetails[nextQuestion.dependency].length === 0) ||
                  (nextQuestion.dependency === currentQuestion.key && answer.length === 0))
              ) {
                // console.log("Dependency Answer is empty")
                if (newQuestionIndex === questions[newCategoryIndex].questions.length - 1) {
                  // console.log("Skip to next category...")
                  newCategoryIndex += 1
                  newQuestionIndex = 0
                } else {
                  // console.log("Skip to next question...")
                  newQuestionIndex += 1
                }
              }
            }

            set(state => {
              // Set the answer for the current question
              state.assignmentDetails[currentQuestion.key] = answer

              // Increment category/question/status index
              state.categoryIndex = newCategoryIndex
              state.questionIndex = newQuestionIndex
              state.status = newStatus
            })
          } else {
            console.warn("Sending Question data failed!")
          }
          useAppStore.setState({ status: newStatus })
        }
      }

      // // QUESTIONS_STATUS.CALLIBRATION
      // if (status === QUESTIONS_STATUS.CALLIBRATION) {
      //   let calibrationData = null

      //   useAppStore.setState({ status: QUESTIONS_STATUS.LOADING })

      //   if (calibrationIndex === 0) {
      //     calibrationData = await getCalibrationData(assignmentId)
      //   } else {
      //     calibrationData = await saveCalibration({
      //       assignment_id: assignmentId,
      //       calibration_step: calibration.calibration_step,
      //       choice_id: answer,
      //     })
      //   }

      //   if (calibrationData) {
      //     const maxCalibrationStep = +calibration?.total_calibration_steps

      //     set(state => {
      //       if (calibrationIndex === maxCalibrationStep) {
      //         useAppStore.setState({ status: QUESTIONS_STATUS.SUMMARY })

      //         // ! NOTE !
      //         // Assuming it is the reply of the last calibration step
      //         state.summary = calibrationData
      //         state.showDots = false
      //       } else {
      //         state.calibrationIndex = calibrationData.calibration_step
      //         state.calibration = calibrationData

      //         if (calibrationIndex > 0) {
      //           state.calibrationAnswers.push(answer)
      //         }
      //         useAppStore.setState({ status: QUESTIONS_STATUS.CALLIBRATION })
      //       }
      //     })
      //   } else {
      //     console.warn("Sending Question data failed!")
      //     useAppStore.setState({ status: QUESTIONS_STATUS.CALLIBRATION })
      //   }
      // }
    },
    confirm: async satisfaction => {
      const { assignmentId } = get()
      const status = useAppStore.getState().status

      useAppStore.setState({ status: QUESTIONS_STATUS.LOADING })
      const isSuccess = await confirmAssignment(assignmentId, satisfaction)

      if (!isSuccess) {
        console.warn("Sending Question data failed!")
        useAppStore.setState({ status })
      }

      return isSuccess
    },
    saveDraft: async () => {
      const { assignmentId, showDots } = get()
      const status = useAppStore.getState().status

      useAppStore.setState({ status: QUESTIONS_STATUS.LOADING })
      set(state => {
        state.showDots = false
      })

      const isSuccess = await saveDraft(assignmentId)

      if (!isSuccess) {
        console.warn("Saving Draft failed!")
        set(state => {
          state.showDots = showDots
        })
        useAppStore.setState({ status })
      }

      return isSuccess
    },
    deleteDraft: async assignmentId => {
      const isSuccess = await deleteDraft(assignmentId)

      if (!isSuccess) {
        console.warn("Delete Draft failed!")
      }

      return isSuccess
    },
    initState: async (assignmentId, draftId = null) => {
      if (assignmentId || draftId) {
        if (draftId !== null) {
          // Edit draft mode
          const data = await editDraft(draftId)

          if (!data) {
            console.warn("Editing Draft failed!")
            useAppStore.setState({ status: QUESTIONS_STATUS.QUESTIONS })
          }

          const draftData = getDraftsData(data, QUESTIONS)

          if (draftData.status === QUESTIONS_STATUS.QUESTIONS) {
            set(state => {
              state.questions = QUESTIONS
              state.categoryIndex = draftData.data.categoryIndex
              state.questionIndex = draftData.data.questionIndex
              state.assignmentDetails = draftData.data.assignmentDetails
              state.showDots = true
              state.assignmentId = draftId
            })

            useAppStore.setState({
              status:
                draftData.data.categoryIndex === QUESTIONS.length ? QUESTIONS_STATUS.CALLIBRATION : draftData.status,
            })
          } else {
            set(state => {
              state.questions = QUESTIONS
              state.showDots = true
              //state.calibrationIndex = 0
              state.assignmentId = draftId
              state.categoryIndex = QUESTIONS.length
            })

            useAppStore.setState({ status: draftData.status })
          }
        } else {
          // Reset state for new Assignments
          set(state => {
            state.categoryIndex = 0
            state.questionIndex = 0
            state.calibrationIndex = 0
            state.assignmentDetails = {}
            state.questions = QUESTIONS
            state.assignmentId = assignmentId
            state.showDots = true
            useAppStore.setState({ status: QUESTIONS_STATUS.QUESTIONS })
          })
        }
      } else {
        // Reset state from home page
        set(state => {
          state.categoryIndex = 0
          state.questionIndex = 0
          state.calibrationIndex = 0
          state.assignmentDetails = {}
          state.questions = QUESTIONS
          state.showDots = false
          useAppStore.setState({ status: QUESTIONS_STATUS.LOADING })
        })
      }
    },
  })),
)

function generateSaveQuestionParams(data, assignmentId, key, type) {
  const param = { assignment_id: assignmentId, field_name: key }

  switch (type) {
    case "range":
      param["min_value"] = data[0]
      param["max_value"] = data[1]
      break

    case "dropdown":
    case "buttons":
      param["select_values"] = data
      break

    case "options":
      param["ratings"] = data
      break

    case "textfield":
    case "textarea":
      param["text_value"] = data
      break

    default:
      break
  }

  return param
}

function getDraftsData(apiData, questions) {
  // if 'calibration_detail' is present automatically set to calibration mode.
  // 'calibration_detail' here is used as a flag because 'getCalibrationData' will return the current calibration step
  // if (apiData.calibration_detail && apiData.calibration_detail.length > 0) {
  //   return {
  //     status: QUESTIONS_STATUS.CALLIBRATION,
  //   }
  // } else {
    // Contsrtucting assignment details state
    const apiAssignmentDetails = apiData.assignment_detail
    const tempAssignmentDetails = {}

    let tempCategoryIndex = 0
    let tempQuestionIndex = 0
    let hasQuestionKey = true

    // Loop through all the question categories
    for (let i = 0; i < questions.length && hasQuestionKey; i++) {
      const { questions: categoryQuestions } = questions[i]
      tempQuestionIndex = 0

      hasQuestionKey = true

      // Loop through all the questions in the category
      for (let j = 0; j < categoryQuestions.length && hasQuestionKey; j++) {
        const { key, type, ifYes, maxOptions, dependency } = categoryQuestions[j]

        if (key in apiAssignmentDetails) {
          const value = apiAssignmentDetails[key]

          switch (type) {
            case "textfield":
            case "textarea":
            case "dropdown":
            case "options":
            case "range":
              tempAssignmentDetails[key] = value
              break

            case "buttons":
              tempAssignmentDetails[key] = maxOptions && maxOptions > 1 ? value : [value]
              break

            default:
              break
          }

          // Special Case Question, proceed to next if the answer is 'Yes', if 'No' break the loop
          if (ifYes && Array.isArray(value) && value[0] === "No") break

          // Special Case Question, proceed to next if the anser for 'visa_sponsorship' is 'No' and 'language_required' is 'Yes'
          if (
            key === "visa_sponsorship" &&
            ((Array.isArray(value) && value[0] === "Yes") || tempAssignmentDetails.language_required[0] === "No")
          )
            break

          tempQuestionIndex++
        } else if (
          dependency &&
          (!tempAssignmentDetails[dependency] ||
            (tempAssignmentDetails[dependency] && tempAssignmentDetails[dependency].length === 0))
        ) {
          // console.log("Dependency Answer is empty, Skipping " + key)
          tempQuestionIndex++
        } else {
          hasQuestionKey = false
        }
      } // questions loop

      if (hasQuestionKey) tempCategoryIndex++
    } // category loop

    return {
      status: QUESTIONS_STATUS.QUESTIONS,
      data: {
        categoryIndex: tempCategoryIndex,
        questionIndex: tempQuestionIndex,
        assignmentDetails: tempAssignmentDetails,
      },
    }
  //}
}
