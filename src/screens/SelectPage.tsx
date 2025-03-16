import { FaSortDown } from 'react-icons/fa'
import Select from 'react-select'
import { Button } from '../components/button'
import { SelectLanguage, SelectMoney, SelectTerminal } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import { useState } from 'react'

const SelectPage = () => {
  const home = useStoreAction((state) => state.home)
  const choose = useStoreAction((state) => state.choose)
  const [terminal, setTerminal] = useState(SelectTerminal[0])
  const [language, setLanguage] = useState(SelectLanguage[0])
  const [money, setMoney] = useState(SelectMoney[0])

  // handle

  const handelTerminal = () =>
    choose({
      country: terminal.value,
      language: language.value,
      money: money.value
    })
  console.log('data: ', home)

  return (
    <div className='flex flex-col justify-between p-4 main '>
      <div className=''>
        <button>hello</button>
        <div>
          <h1 className='text-[22px] mb-2 font-bold'>
            Personalize your <span className='text-[#354f79]'>WITH</span> <p>experience</p>
          </h1>
          <p className='text-[16px] text-[#71727A]'>WITH accompany you at Tan Son Nhat Airport!</p>
        </div>

        <div className='mt-16'>
          {/* SelectTerminal */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold '>You are in</label>
            <Select
              options={SelectTerminal}
              value={terminal}
              onChange={(e: any) => setTerminal(e)}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <FaSortDown className='text-gray-900' size={16} /> }}
            />
          </div>

          {/* SelectLanguage */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold '>Prefer Language</label>
            <Select
              options={SelectLanguage}
              value={language}
              onChange={(e: any) => setLanguage(e)}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <FaSortDown className='text-gray-900' size={16} /> }}
            />
          </div>

          {/* SelectMoney */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold'>Currency</label>
            <Select
              options={SelectMoney}
              value={money}
              onChange={(e: any) => setMoney(e)}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <FaSortDown className='text-gray-900' size={16} /> }}
            />
          </div>
        </div>
      </div>

      <Button name='Start' path='home' onClick={handelTerminal} />
    </div>
  )
}

export default SelectPage
