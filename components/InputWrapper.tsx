import React, { useState, cloneElement, ReactElement } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface InputWrapperProps {
  children: ReactElement;
  placeholder: string;
  className?: string;
  duration?: number;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  placeholder,
  className,
  duration = 0.25,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') setIsFocused(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  // Enhancing the input child with necessary props
  const enhancedChild = cloneElement(children, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    value,
  });

  return (
    <div className={classNames("relative w-full text-slate-400", className)}>
      <motion.label
        initial={{ y: '0%', x: '0%', fontSize: '1rem', opacity: 1 }}
        animate={{
          y: isFocused || value ? '-13px' : '0%',
          x: isFocused || value ? '-12px' : '0%',
          left: isFocused || value ? '0.75rem' : '0.75rem',
          fontSize: isFocused || value ? '0.75rem' : '1rem',
          opacity: value ? 0 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          duration,
        }}
        className="absolute pointer-events-none"
        style={{ paddingLeft: '0.75rem', paddingTop: '1rem' }}
      >
        {placeholder}
      </motion.label>
      {enhancedChild}
    </div>
  );
};

export default InputWrapper;
