import { IoMdCheckmark } from 'react-icons/io'
import { Button } from '../../components/button'

const Two = () => {
  return (
    <div className='main'>
      <div className='relative bg-[#e8e9f1] h-2 w-[90%] mx-auto rounded-full'>
        <p className='absolute bg-[#354f79] transition duration-300 h-2 rounded-full w-[80%] top-0 left-0'></p>
      </div>

      <div className='p-4'>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-bold'>
            Personalize your travel plan at <span className='text-[#354f79]'>Ho Chi Minh City</span>
          </h3>
          <p className='text-[#71727A]'>Choose your interests.</p>
        </div>

        <form action='' className='flex flex-col py-8 gap-y-4'>
          <p className='px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-xl border-slate-200 text-slate-700 ease hover:border-slate-300'>
            Historical & Cultural
          </p>
          <p className='px-3 py-2 flex justify-between items-center text-sm transition duration-300 bg-[#eaf2ff] rounded-xl text-slate-700 ease'>
            <span>Shopping & Markets</span> <IoMdCheckmark color='#354f79' />
          </p>
        </form>
      </div>
      <Button name='Next' path='three' />
    </div>
  )
}

export default Two
