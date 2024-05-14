import { useState, useCallback, useRef, useEffect } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";
import closeIcon from "../../public/assets/CarbonCloseOutline.svg"
import Image from "next/image";

interface DropDownProps {
  setValue: (value: any) => void;
  options: string[];
  placeholder?: string;
  maxOptions?: number;
}

const DropDown: React.FC<DropDownProps> = ({ setValue, options, placeholder, maxOptions = 1 }) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const fromSelectedOption = useRef(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');  

  useEffect(() => {
    if (selectedOptions.length === 0) setIsOpen(false)

    setValue(selectedOptions)
  }, [selectedOptions, setValue])

  const clickHandler = useCallback(
    (option: string) => {
      if (maxOptions === 1) {
        setSelectedOptions([])
      } else {
        setSelectedOptions(options => options.filter(item => item !== option))
      }
      // setIsOpen(false)
      fromSelectedOption.current = true
    },
    [maxOptions],
  )

  const closeHandler = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    timer.current = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, []);

  const translatedPlaceholder = placeholder ? t(placeholder) : '';

  return (
    <Listbox
      multiple
      as="div"
      value={selectedOptions}
      onChange={options => {
        if (options.length <= maxOptions) {
          setSelectedOptions(options)
          // setValue(maxOptions === 1 && options.length > 0 ? options[0] : options)
        }
      }}
    >
      <Listbox.Button
      className="z-20 flex min-h-[56px] w-full items-center space-x-4 rounded border border-indigo-500 bg-CustomWhite bg-opacity-10 px-4 py-2 text-left"
      onClick={() => {
        if (!fromSelectedOption.current) {
          setIsOpen(open => !open)
        }

        fromSelectedOption.current = false
      }}
    >
        <div className="flex w-full flex-wrap gap-2">
          {selectedOptions.length <= 0 ? (
            <span className="py-[7px] text-body-large opacity-50">{translatedPlaceholder}</span>
          ) : maxOptions === 1 ? (
            <DropDownItem text={selectedOptions[0]} onClick={() => clickHandler(selectedOptions[0])} open={isOpen} />
          ) : (
            selectedOptions.map((option, i) => (
              <DropDownItem key={i} text={option} onClick={() => clickHandler(option)} open={isOpen} />
            ))
          )}
        </div>
      </Listbox.Button>
      <Transition
        unmount={false}
        show={isOpen}
        enter="transition ease-in duration-300"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0 z-0"
        leave="transition ease-out duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        className="relative z-10"
      >
        <Listbox.Options
          static
          className="absolute z-10 max-h-[40svh] w-full overflow-y-auto rounded bg-CustomWhite text-CustomBlack text-link-medium"
        >
          {options.map(option => (
            <Listbox.Option
            key={option}
            value={option}
            className="link-transition cursor-pointer px-5 py-3 hover:bg-indigo-500 hover:bg-opacity-15"
            onClick={closeHandler}
            >              
              {t(option)}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export default DropDown;

interface DropDownItemProps {
  text: string;
  onClick: () => void;
  open: boolean;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ open, text, onClick }) => {
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  return (
    <div
      className="inline-flex items-center justify-between space-x-2 rounded-md bg-white bg-opacity-15 text-CustomBlack px-4 py-2 text-link-medium text-CustomWhite"
      onClick={onClick}
      >
      <span className="flex gap-2 justify-center items-center">{t(text)}</span>
      <Image src={closeIcon} alt="close icon" className="h-4 w-4" style={{filter: "brightness(0) invert(1)" }}/>
    </div>
  )
};
