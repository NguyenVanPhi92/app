import { useState } from 'react'
import { Button } from '../components/button'
import Header from '../components/Header'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

const Map = () => {
  const [activeTab, setActiveTab] = useState('arrival')
  return (
    <div className='flex flex-col justify-between main'>
      <div className=''>
        <Header title='Maps' />
        <div className='p-4'>
          <div className='flex p-1 rounded-lg bg-[#f8f9fe]'>
            <button
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
                activeTab === 'arrival' ? 'bg-white' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('arrival')}
            >
              <FaPlaneArrival color='#354f79' />
              <span className='text-[#354f79] font-bold'>Arrival</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
                activeTab === 'departure' ? 'bg-white' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('departure')}
            >
              <FaPlaneDeparture color='#354f79' />
              <span className='text-[#71727A] font-bold'>Departure</span>
            </button>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Button name='order' path='menu' />
      </div>
    </div>
  )
}

export default Map
