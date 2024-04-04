import React, { useState, useEffect } from "react";
import RangeSlider from "./question-form/RangeSlider";
import DropDown from "./question-form/DropDown";
import Buttons from "../components/question-form/Buttons";
import Textarea from "./question-form/TextArea";
import { useQuestionActions } from "../store/selectors";
import QuestionsWrapper from "./QuestionsWrapper";
import OptionsField from "./question-form/Options";
import TextField from "./question-form/TextField";
import Button from "./Button";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";

interface QuestionProps {
  type: "range" | "dropdown" | "options" | "buttons" | "textarea" | "textfield";
  title: string;
  question: string;
  instruction?: string;
  min: number;
  max: number;
  step?: number;
  options: string[];
  placeholder: string;
  fieldClassName?: string;
  maxOptions?: number;
  optional?: boolean;
  dependency?: string;
  formatter?: (value: any) => any;
}

const Question: React.FC<QuestionProps> = ({
  type,
  title,
  question,
  instruction,
  min,
  max,
  step = 1,
  options,
  placeholder,
  fieldClassName,
  maxOptions,
  optional,
  dependency,
  formatter,
}) => {
  const [showError, setShowError] = useState(false);
  const [answer, setAnswer] = useState<any>(null);
  const { next } = useQuestionActions();
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (optional || (answer && answer.length > 0)) {
          setShowError(false);
          next(answer);
        } else {
          console.log("Please select an answer!");
          setShowError(true);
        }
      }
    };
    document.addEventListener("keypress", keyPressHandler);

    return () => document.removeEventListener("keypress", keyPressHandler);
  }, [answer, next, optional]);

  let questionField: JSX.Element | null = null;

  switch (type) {
    case "range":
      questionField = (
        <RangeSlider
          min={min}
          max={max}
          step={step}
          setValue={setAnswer}
          formatter={formatter}
        />
      );
      break;

    case "dropdown":
      questionField = (
        <DropDown
          options={options}
          placeholder={placeholder}
          setValue={setAnswer}
          maxOptions={maxOptions}
        />
      );
      break;

    case "buttons":
      // Assuming this is your custom component "Buttons"
      // Replace it with your actual component
      questionField = (
        <Buttons
          options={options}
          setValue={setAnswer}
          fieldClassName={fieldClassName}
          maxOptions={maxOptions}
        />
      );
      break;

    case "textarea":
      questionField = (
        <Textarea placeholder={placeholder} setValue={setAnswer} />
      );
      break;

    case "textfield":
      questionField = (
        <TextField placeholder={placeholder} setValue={setAnswer} />
      );
      break;

    case "options":
      questionField = (
        <OptionsField
          options={options}
          setValue={setAnswer}
          dependency={dependency}
        />
      );
      break;

    default:
      console.log("No Question Type!");
      break;
  }

  return (
    <QuestionsWrapper className="max-w-[750px] px-[50px]">
      {/* Category */}
      <span className="font-ttcommons text-xl text-pre-title-link-small uppercase text-CustomWhite">
        {t(title)}
      </span>

      {/* Actual Question / Message */}
      <p className="font-ttcommons text-CustomWhite mt-1 text-header-4">
        {t(question)}
      </p>

      {instruction && (
        <span className="text-body-small text-CustomWhite">{instruction}</span>
      )}

      {/* Field */}
      <div className="font-ttcommons text-CustomWhite relative mb-12 mt-6">
        {questionField}

        {showError && (
          <span className="font-ttcommons absolute -bottom-6 left-0 z-0 !m-0 text-[12px] leading-[20px] text-CustomWhite">
            Please answer all required fields
          </span>
        )}
      </div>

      {/* OK Button */}
      <div className="flex items-center space-x-4">
        <Button
          label={t("question-btn")}
          className="font-ttcommons"
          onClick={() => {
            if (optional || answer?.length > 0) {
              setShowError(false);
              next(answer);
            } else {
              setShowError(true);
            }
          }}
        />
        <div className="font-ttcommons text-CustomWhite text-[12px] leading-[20px]">
          <span className="mr-1 font-light">{t("question-also")}</span>
          <span className="mr-1 text-lg">{t("question-enter")}</span>
          <span className="font-light">{t("question-works")}</span>
        </div>
      </div>
    </QuestionsWrapper>
  );
};

export default Question;
