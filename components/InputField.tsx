import React, { useEffect, useState } from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  icon?: React.ReactNode;
  helpText?: string;
  min?: number;
  max?: number;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, icon, helpText, min = 0, max }) => {
  // We use local state to handle the input display to allow for typing decimals (e.g., "0.") 
  // without the parent state immediately re-rendering "0" and eating the decimal point.
  const [displayValue, setDisplayValue] = useState(value.toString());

  // Sync local state when prop changes externally (but be careful not to override while typing)
  useEffect(() => {
    // We only update if the parsed local value is different from the prop value
    // to avoid interrupting active typing (like "1.0" being turned into "1")
    if (parseFloat(displayValue) !== value) {
       setDisplayValue(value.toString());
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    setDisplayValue(rawVal);

    // If empty, treat as 0 for the parent state, but keep "" locally so user can type
    if (rawVal === '') {
      onChange(0);
      return;
    }

    const parsed = parseFloat(rawVal);
    
    // Valid number check
    if (!isNaN(parsed)) {
      // Prevent negatives
      let finalVal = parsed;
      if (finalVal < 0) finalVal = 0;
      
      // We don't enforce max strictly on type to allow intermediate states (like typing 100 when max is 30 -> 30)
      // but usually standard behavior is to let parent validate or just clamp on blur. 
      // For this specific request "don't leave empty / no negative", we clamp negative immediately.
      
      onChange(finalVal);
    } else {
      // If NaN (e.g. "-"), defaulting to 0 is safe
      onChange(0);
    }
  };

  const handleBlur = () => {
    // On blur, strict formatting to ensure "0." becomes "0" or empty becomes "0"
    let parsed = parseFloat(displayValue);
    if (isNaN(parsed) || displayValue === '') {
      parsed = 0;
    }
    if (parsed < 0) parsed = 0;
    
    // Re-sync display value to formatted version
    setDisplayValue(parsed.toString());
    onChange(parsed);
  };

  // Determine if the value is functionally 0 (for styling)
  const isZero = parseFloat(displayValue) === 0 || displayValue === '';

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          {icon && <span className="text-slate-400">{icon}</span>}
          {label}
        </label>
      </div>
      <input
        type="number"
        min={min}
        max={max}
        step="any"
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`
          block w-full rounded-lg border-slate-200 bg-white p-2.5 text-sm shadow-sm 
          focus:border-indigo-500 focus:ring-indigo-500 transition-colors border outline-none
          ${isZero ? 'text-slate-400' : 'text-slate-900'}
        `}
      />
      {helpText && <p className="text-[11px] text-slate-400 leading-tight">{helpText}</p>}
    </div>
  );
};