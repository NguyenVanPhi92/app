import { useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { Button } from '../../components/button'
import { TravelCate } from '../../constants/data'
import { useStoreAction } from '../../store/zustand'

const Two = () => {
  const dispathTravel = useStoreAction((state) => state.dispathTravel)
  const travel = useStoreAction((state) => state.travel)
  const categories = TravelCate.filter((e) => e.id === travel.id)[0]?.cate

  // handle
  const [selected, setSelected] = useState<any[]>([])
  const handleAddress = () => dispathTravel({ id: travel.id, categories: selected })

  console.log('categories', categories)

  const handleSelect = (option: any) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item: any) => item !== option))
    } else {
      setSelected([...selected, option])
    }
  }
  const isSelected = (option: any) => selected.includes(option)
  console.log('Select categoris: ', selected)

  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div className='scroll'>
        <div className='relative bg-[#e8e9f1] h-2 w-[100%] mt-4 mx-auto rounded-full mb-8'>
          <p className='absolute bg-[#354f79] transition duration-300 h-2 rounded-full w-[80%] top-0 left-0'></p>
        </div>

        <div className='flex flex-col mb-6 gap-y-2'>
          <h3 className='text-xl font-bold'>
            Personalize your travel <br /> plan at{' '}
            <span className='text-[#354f79]'>{TravelCate.filter((e) => e.id === travel.id)[0]?.name}</span>
          </h3>
          <p className='text-[#71727A] text-[14px]'>Choose your interests.</p>
        </div>

        <form action='' className='flex flex-col py-8 gap-y-4'>
          {categories &&
            categories.map((e, i) => (
              <p
                key={i}
                onClick={() => handleSelect(e)}
                className={`px-3 py-4 cursor-pointer flex justify-between items-center text-sm transition duration-300 border rounded-xl ${
                  isSelected(e) && 'bg-[#eaf2ff] border-[#eaf2ff]'
                } border-[#C5C6CC] text-slate-700 ease`}
              >
                <span>{e.name}</span> {isSelected(e) && <IoMdCheckmark color='#354f79' />}
              </p>
            ))}
          <p className='flex items-center justify-between px-3 py-4 text-sm transition duration-300 rounded-xl ease'></p>
        </form>
      </div>

      <Button name='Next' path='three' onClick={handleAddress} />
    </div>
  )
}

export default Two
