import { useCallback, useRef } from "react"

interface TextFieldProps {
  setValue: (value: string) => void;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ setValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

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
        className="w-full rounded-md border border-indigo-500 text-CustomBlack text-lg bg-White bg-opacity-50 px-6 py-6 outline-none"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  )
}

export default TextField
