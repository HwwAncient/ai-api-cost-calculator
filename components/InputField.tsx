import React from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  icon?: React.ReactNode;
  helpText?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, icon, helpText }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          {icon && <span className="text-slate-400">{icon}</span>}
          {label}
        </label>
      </div>
      <input
        type="number"
        min="0"
        value={value || ''}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 hover:bg-white transition-colors border"
      />
      {helpText && <p className="text-xs text-slate-400">{helpText}</p>}
    </div>
  );
};