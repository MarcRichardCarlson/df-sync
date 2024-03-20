import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const RTL = false;

interface RangeSliderProps {
  setValue: (value: number[]) => void;
  min: number;
  max: number;
  step?: number;
  formatter?: (value: number) => string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  setValue,
  min,
  max,
  step = 1,
  formatter
}) => {
  const [rangeValues, setRangeValues] = useState<number[]>([min, max]);

  useEffect(() => {
    setValue([min, max]);
  }, [max, min, setValue]);

  return (
    <div className="mt-20">
      <Range
        values={rangeValues}
        step={step}
        min={min}
        max={max}
        rtl={RTL}
        onChange={(values) => {
          setRangeValues(values);
          setValue(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="relative flex w-full"
          >
            <div
              ref={props.ref}
              className="hello-22 h-2 w-full rounded-lg bg-bright-red"
              style={{
                background: getTrackBackground({
                  values: rangeValues,
                  colors: ["#FFFFFF", "#E82155", "#FFFFFF"],
                  min: min,
                  max: max,
                  rtl: RTL,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }) => {
          const rawVal = rangeValues[index];
          const value = formatter ? formatter(rawVal) : rawVal;
          return (
            <div
              {...props}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-bright-red !bg-white"
            >
              <div className="tootltip absolute top-0 -translate-y-[120%] rounded-lg bg-bright-red px-3 py-2 text-[12px] font-semibold leading-[18px] text-white">
                {value + (rawVal === max ? "+" : "")}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default RangeSlider;
