import { FaSortDown } from 'react-icons/fa'
import Select from 'react-select'
import { Button } from '../components/button'
import { SelectLanguage, SelectMoney, SelectTerminal } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import { useState } from 'react'
import SelectField from '../components/fields/SelectField'

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
      <div className='mt-8'>
        <div>
          <h1 className='text-[24px] mb-2 font-bold'>
            Personalize your <span className='text-[#354f79]'>WITH</span> <p>experience</p>
          </h1>
          <p className='text-[16px] text-[#71727A]'>WITH accompany you at Tan Son Nhat Airport!</p>
        </div>

        <div className='mt-16'>
          <SelectField
            label='You are in'
            data={SelectTerminal}
            onChange={(e: any) => setTerminal(e)}
            value={terminal}
          />
          <SelectField
            label='Prefer Language'
            data={SelectLanguage}
            onChange={(e: any) => setLanguage(e)}
            value={language}
          />
          <SelectField label='Currency' data={SelectTerminal} onChange={(e: any) => setMoney(e)} value={money} />
        </div>
      </div>

      <Button name='Start' path='home' onClick={handelTerminal} />
    </div>
  )
}

export default SelectPage
