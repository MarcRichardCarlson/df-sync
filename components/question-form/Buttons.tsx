import PropTypes from "prop-types";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";

interface ButtonsProps {
  setValue: (value: string[]) => void;
  options: string[];
  maxOptions?: number;
  fieldClassName?: string;
}

function Buttons({ options, maxOptions = 1, setValue, fieldClassName }: ButtonsProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setValue(selectedOptions);
    // setValue(maxOptions === 1 && selectedOptions.length > 0 ? selectedOptions[0] : selectedOptions)
  }, [selectedOptions, setValue]);

  const clickHandler = useCallback(
    (option: string) => {
      if (selectedOptions.length < maxOptions) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        setSelectedOptions(options => [...options.slice(1), option]);
      }
    },
    [maxOptions, selectedOptions],
  );

  return (
    <div className={classNames("inline-flex flex-wrap items-start gap-4", fieldClassName)}>
      {options.map((option, index) => (
        <Button key={index} text={option} clickHandler={clickHandler} activeOptions={selectedOptions} />
      ))}
    </div>
  );
}

export default Buttons;

interface ButtonProps {
  text: string;
  clickHandler: (text: string) => void;
  activeOptions: string[];
}

function Button({ text, clickHandler, activeOptions }: ButtonProps) {
  const isActive = activeOptions.includes(text);
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  return (
    <button
      className={classNames(
        "group overflow-hidden !rounded-md text-left text-pre-title-link-small uppercase transition border border-transparent bg-opacity-10 bg-CustomWhite hover:bg-indigo-500 hover:bg-opacity-50",
        {
          "gradient-border": !isActive,
          "border border-indigo-500": isActive,
        },
      )}
      onClick={() => clickHandler(text)}
    >
      <span
        className={classNames("inline-block w-full px-4 py-3", {
          "bg-gradient-border": !isActive,
          "bg-indigo-500/[0.15] border border-indigo-500": isActive,
        })}
      >
        {t(text)}
      </span>
    </button>
  );
}