"use client";

import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: { [key: string]: unknown };
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  important?: boolean;
  href?: string;
  customClass?: string;
  isPinCreated?: boolean;
  defaultValue?: string;
}

export const Input = ({
  // id,
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  // important,
  customClass,
  // isPinCreated,
  defaultValue,
  ...inputProps
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-1 flex-col py-1">
      <div className="flex justify-between w-full">
        {label && (
          <label className="font-light relative mb-2">
            {label}
            {required && <span className="text-xl ml-1 absolute top-0">*</span>}
          </label>
        )}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`border w-full pl-3 focus:outline-none focus:ring-green-500 focus:border-green-500 ${
            errorMessage ? "border-red-500" : "border-[#0000001a]"
          }  bg-grey rounded-md px-2 py-2 disabled:bg-gray-100 ${
            errorMessage && "outline-red-500"
          } ${customClass}`}
          autoComplete="off"
          onChange={onChange}
          value={value}
          {...(register || {})}
          disabled={disabled}
          required={required}
          {...inputProps}
          defaultValue={defaultValue}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 bg-transparent border-transparent"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
          </button>
        )}
      </div>
      <div className="h-3">
        {errorMessage && (
          <div>
            <p className="text-red-500 mt-1 text-[10px]">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
