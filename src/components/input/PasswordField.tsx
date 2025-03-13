import React, { useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri'

type PasswordFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, any> & {
  control: Control<any>
  name: string
  className?: string
  label?: string
}

export const PasswordField = ({
  className = '',
  label,
  control,
  name,
  // defaultValue,
  // onChange: externalOnChange,
  // onBlur: externalOnBlur,
  // ref: externalRef,
  // value: externalValue,
  ...attributes
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
    // defaultValue,
  })

  return (
    <div className={`form-item ${className}`}>
      {label && (
        <label htmlFor={name} className='mb-1 text-[14px] font-bold'>
          {label} <span className='text-red-500'>{attributes?.required ? '*' : ''}</span>
        </label>
      )}

      <div className='form-item-wrapper'>
        <input
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          value={value}
          className={`w-full bg-transparent ${
            error?.message ? 'border-[#ff3d3d] focus:border-[#ff3d3d]' : 'border-slate-200 focus:border-slate-400'
          } placeholder:text-slate-400 text-slate-700 text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300`}
          id={name}
          type={showPassword ? 'text' : 'password'}
          {...attributes}
        />

        <span
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '10px',
            top: '24%',
            transform: 'translateY(20%)'
          }}
          onClick={() => setShowPassword((prev) => !prev)}
          className=''
        >
          {!showPassword ? <RiEyeCloseLine /> : <RiEyeFill />}
        </span>
      </div>

      {error ? <p className='text-red-500 text-md'>{error?.message}</p> : null}
    </div>
  )
}
