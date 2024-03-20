import { useAppState, useQuestionData } from "../../store/selectors";
import { QUESTIONS_STATUS } from "../../store/state";
import Dot from "./Dot";

interface FooterDotsProps {
  category: any;
}

const FooterDots = () => {
  const { status } = useAppState();
  const { categoryIndex, questionIndex, questions } = useQuestionData();

  return (
    <div className="flex justify-between w-full bg-opacity-30 bg-indigo-500 rounded-full text-CustomWhite">
      {questions &&
        questions.map((category: FooterDotsProps, i: any) => (
          <Dot
            key={i}
            index={i}
            activeIndex={categoryIndex}
            isTransitioning={
              questionIndex ===
                questions[categoryIndex]?.questions.length - 1 &&
              status === QUESTIONS_STATUS.LOADING
            }
            title={category.category}
          />
        ))}
    </div>
  );
};

export default FooterDots;