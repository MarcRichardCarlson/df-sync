import { shallow } from "zustand/shallow"

import { useAppStore, useQuestionStore } from "./state"

export const useAppState = () => useAppStore(({ status }) => ({ status }), shallow)

export const useQuestionState = () =>
  useQuestionStore(
    ({ assignmentDetails, showDots }) => ({
      assignmentDetails,
      showDots,
    }),
    shallow,
  )

export const useQuestionData = () =>
  useQuestionStore(
    ({ questions, categoryIndex, questionIndex }) => ({ questions, categoryIndex, questionIndex }),
    shallow,
  )

export const useQuestionActions = () =>
  useQuestionStore(
    ({ initState, next, confirm, saveDraft, editDraft, deleteDraft }) => ({
      initState,
      next,
      confirm,
      saveDraft,
      editDraft,
      deleteDraft,
    }),
    shallow,
  )

export const useSummaryState = () => useQuestionStore(({ summary }) => ({ summary }), shallow)
