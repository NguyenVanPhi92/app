import { FaSortDown } from 'react-icons/fa'
import Select from 'react-select'

interface SelectFieldProps {
  data: any
  label: string
  value: any
  onChange: any
  defaultInputValue?: string
}

const SelectField = ({ data, onChange, value, label }: SelectFieldProps) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: '12px',
      borderColor: '#d1d5db',
      boxShadow: 'none',
      padding: '6px'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#111827',
      fontSize: '14px',
      fontWeight: '400'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#9ca3af'
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#9ca3af'
    })
  }

  return (
    <div className='mb-4'>
      <label className='block mb-1 text-sm font-semibold'>{label}</label>
      <Select
        styles={customStyles}
        options={data}
        value={value}
        onChange={onChange}
        // defaultInputValue={defaultInputValue}
        className='mt-1 text-[12px] custom-select'
        components={{ DropdownIndicator: () => <FaSortDown className='mb-1 text-gray-900' size={16} /> }}
      />
    </div>
  )
}

export default SelectField
