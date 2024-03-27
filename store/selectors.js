import { shallow } from "zustand/shallow"

import { useAppStore, useQuestionStore } from "./state"

// Defines custom hooks, managing various parts of application and question states using zustand. 
// Each hook selectively retrieves state slices or actions, ensuring component re-renders are optimized with shallow comparison.

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
    ({ initState, next, confirm}) => ({
      initState,
      next,
      confirm,
    }),
    shallow,
  )

export const useSummaryState = () => useQuestionStore(({ summary }) => ({ summary }), shallow)
