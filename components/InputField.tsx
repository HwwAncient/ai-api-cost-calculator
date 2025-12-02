import React from 'react';

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
        value={value || ''}
        onChange={(e) => {
          let val = parseFloat(e.target.value);
          if (isNaN(val)) val = 0;
          // Note: We don't strictly enforce max on change to allow typing, 
          // but we pass standard props so parent can validate on blur if needed
          // or standard HTML5 validation will trigger on form submit.
          onChange(val);
        }}
        className="block w-full rounded-lg border-slate-200 bg-white p-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors border outline-none"
      />
      {helpText && <p className="text-[11px] text-slate-400 leading-tight">{helpText}</p>}
    </div>
  );
};