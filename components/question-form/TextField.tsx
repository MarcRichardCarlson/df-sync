import { useCallback, useRef } from "react"
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";

interface TextFieldProps {
  setValue: (value: string) => void;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ setValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  const changeHandler = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (inputRef.current) {
        setValue(inputRef.current.value);
      }
    }, 300);
  }, [setValue]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="w-full rounded-md border border-indigo-500 text-CustomWhite bg-CustomWhite bg-opacity-10 text-md md:text-lg p-4 md:p-6 outline-none"
        placeholder={t(placeholder)}
        onChange={changeHandler}
      />
    </div>
  )
}

export default TextField
