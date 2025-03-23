import { useState } from 'react'
import { optionTagTerminal } from '../constants/data'

// how use
export default function TerminalSelected() {
  const [activeFilterTerminal, setActiveFilterTerminal] = useState<number | undefined>(1)

  return (
    <div className='flex font-[600] justify-between'>
      {optionTagTerminal.map((e, i) => (
        <div
          className={`cursor-pointer text-[10px]  p-2 py-1 rounded-2xl ${
            activeFilterTerminal === e.id ? 'bg-[#354f79] text-white' : 'text-[#354f79] bg-[#eaf2ff]'
          }`}
          key={i}
          onClick={() => setActiveFilterTerminal(e.id)}
        >
          {e.name}
        </div>
      ))}
    </div>
  )
}
