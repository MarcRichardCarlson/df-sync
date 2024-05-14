"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import PageLoading from "../components/PageLoading";
import Question from "../components/Question";
import {
  useAppState,
  useQuestionActions,
  useQuestionData,
} from "../store/selectors";
import { QUESTIONS_STATUS } from "../store/state";
import Summary from "./summary";
import { createAssignment } from "./api/assignments";

const Questions = () => {
  const { status } = useAppState();
  const { initState } = useQuestionActions();
  const { questions, categoryIndex, questionIndex } = useQuestionData();

  /* console.log({"Question-index": questionIndex});
  console.log({"Category-index": categoryIndex});
  console.log({"Questions": [questionIndex]}); */

  // Initialize state by creating a new assignment.
  useEffect(() => {
    const getAssignmentId = async () => await createAssignment();

    getAssignmentId().then((data) => initState(data.assignment_id));
  }, [initState]);

  // Cache the current question to avoid re-computation unless indexes or questions change.
  const currentQuestion = useMemo(
    () => questions[categoryIndex]?.questions[questionIndex],
    [categoryIndex, questionIndex, questions]
  );

  // Memoize a unique key for each question, updating only when index values change.
  const questionKey = useMemo(
    () => `${categoryIndex}_${questionIndex}`,
    [categoryIndex, questionIndex]
  );
  
  // Destructures `currentQuestion` to separate `key` (which is ignored) and the rest of the properties.
  // If `currentQuestion` is undefined, it defaults to an empty object to prevent errors during destructuring.
  // The remaining properties, excluding `key`, are then spread into the <Question /> component.
  // This ensures that `currentQuestion` can be safely accessed and used even if it's initially undefined,
  // avoiding runtime errors and maintaining the component's functionality.
  const { key: ignoredKey, ...questionProps } = currentQuestion || {};

  return (
    <Layout
      showGradientFill
      showHeaderCTA
      className="relative flex items-center justify-center"
    >
      <AnimatePresence mode="sync">
        {status === QUESTIONS_STATUS.LOADING && <PageLoading />}
      </AnimatePresence>
      <AnimatePresence mode="sync">
        {/* TODO: {...currentQuestion} is throwing an error because its a spread and
        wants all keys to be defined directly on <Question/> */}
        {status === QUESTIONS_STATUS.QUESTIONS && (
          // <Question key={questionKey} {...currentQuestion} />
          <Question key={questionKey} {...questionProps} />
        )}
        {/* TODO: Change the data summary if needed */}
        {status === QUESTIONS_STATUS.SUMMARY && <Summary />}
      </AnimatePresence>
    </Layout>
  );
};

export default Questions;
