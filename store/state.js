import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { QUESTIONS } from "../data/questions"
import { confirmAssignment, saveQuestion } from "../api/assignments"

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
    questions: [],
    summary: null,
    assignmentDetails: {},
    showDots: false,
    next: async answer => {
      const {
        assignmentId,
        questions,
        categoryIndex,
        questionIndex,
        assignmentDetails,
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