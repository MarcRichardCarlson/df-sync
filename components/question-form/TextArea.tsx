import { useRef } from "react";

interface TextareaProps {
  setValue: (value: string) => void;
  placeholder?: string;
}

const Textarea = ({ setValue, placeholder }: TextareaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        rows={1}
        cols={50}
        className="w-full rounded-md border border-indigo-500 bg-white px-6 py-6 outline-none"
        placeholder={placeholder}
        onBlur={() => {
          if (textAreaRef.current !== null) {
            setValue(textAreaRef.current.value);
          }
        }}
      />
    </div>
  );
};

export default Textarea;
