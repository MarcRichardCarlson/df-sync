import { useRef } from "react";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";
import InputWrapper from "../InputWrapper";

interface TextareaProps {
  setValue: (value: string) => void;
  placeholder?: string;
}

const Textarea = ({ setValue, placeholder }: TextareaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  const translatedPlaceholder = placeholder ? t(placeholder) : '';

  return (
    <div>
      <InputWrapper placeholder={translatedPlaceholder}>
        <textarea
          ref={textAreaRef}
          rows={5}
          cols={50}
          className="w-full rounded-md border border-indigo-500 bg-white bg-opacity-10 text-CustomWhite px-6 py-6 outline-none"
          onBlur={() => {
            if (textAreaRef.current !== null) {
              setValue(textAreaRef.current.value);
            }
          }}
          />
      </InputWrapper>
    </div>
  );
};

export default Textarea;
