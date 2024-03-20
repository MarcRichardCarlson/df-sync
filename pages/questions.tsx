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
import { createAssignment } from "../api/assignments";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useSearchParams } from "next/navigation";

const Questions = () => {
  const draftId = useSearchParams()?.get("draftId");
  const { status } = useAppState();
  const { initState } = useQuestionActions();
  const { questions, categoryIndex, questionIndex } = useQuestionData();

  //console.log({ draftId });

  useEffect(() => {
    if (draftId && typeof draftId === "string") {
      initState(null, draftId);
    } else {
      const getAssignmentId = async () => await createAssignment();

      getAssignmentId().then((data) => initState(data.assignment_id));
    }
  }, [draftId, initState]);

  const currentQuestion = useMemo(
    () => questions[categoryIndex]?.questions[questionIndex],
    [categoryIndex, questionIndex, questions]
  );

  const questionKey = useMemo(
    () => `${categoryIndex}_${questionIndex}`,
    [categoryIndex, questionIndex]
  );

  return (
    <Layout
      showGradientFill
      showHeaderCTA
      className="relative flex items-center justify-center"
    >
      <Navbar />
      <AnimatePresence mode="sync">
        {status === QUESTIONS_STATUS.LOADING && <PageLoading />}
      </AnimatePresence>
      <AnimatePresence mode="sync">
        {/* TODO: {...currentQuestion} is throwing an error because its a spread and
        wants all keys to be defined directly on <Question/> */}
        {status === QUESTIONS_STATUS.QUESTIONS && (
          <Question key={questionKey} {...currentQuestion} />
        )}
        {/* TODO: Change the data summary if needed */}
        {status === QUESTIONS_STATUS.SUMMARY && <Summary />}
      </AnimatePresence>
      <Footer />
    </Layout>
  );
};

export default Questions;
