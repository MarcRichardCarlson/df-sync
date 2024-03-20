import React, { useMemo, useState, useCallback, useEffect } from "react";
import Buttons from "./Buttons";
import { useQuestionState } from "../../store/selectors";

interface OptionData {
  description: string;
  rating: string[];
}

interface OptionsFieldProps {
  setValue: React.Dispatch<React.SetStateAction<[string, string][] | null>>;
  options: any;
  dependency: any;
}

const OptionsField: React.FC<OptionsFieldProps> = ({ setValue, options, dependency }) => {
  const { assignmentDetails } = useQuestionState();
  const [selectedOptions, setSelectedOptions] = useState<OptionData[]>([]);

  const prevAnswers = useMemo(() => assignmentDetails[dependency], []);

  useEffect(() => {
    const hasEmpty = selectedOptions.find(option => option.rating.length === 0) ? true : false;

    setValue(hasEmpty ? null : selectedOptions.map(o => [o.description, o.rating[0]]));
  }, [selectedOptions, setValue]);

  return (
    <div className="space-y-7">
      {prevAnswers &&
        prevAnswers.map((ans: string, i: React.Key | null | undefined) => <Option key={i} field={ans} options={options} setOptions={setSelectedOptions} />)}
    </div>
  );
};

export default OptionsField;

interface OptionProps {
  field: string;
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<OptionData[]>>;
}

const Option: React.FC<OptionProps> = ({ field, options, setOptions }) => {
  const optionsHandler = useCallback(
    (r: any) =>
      setOptions(opts => {
        const data: OptionData = { description: field, rating: r };
        const index = opts.findIndex(e => e?.description === field);

        if (index >= 0) {
          opts[index] = data;
          return [...opts];
        } else {
          return [...opts, data];
        }
      }),
    [field, setOptions],
  );

  return (
    <div className="flex flex-col space-y-[14px]">
      <span className="text-[18px] leading-[26px]">
        <span className="font-medium">{field}</span>
        <span className="font-light"> is</span>
      </span>
      <Buttons options={options} setValue={optionsHandler} />
    </div>
  );
};