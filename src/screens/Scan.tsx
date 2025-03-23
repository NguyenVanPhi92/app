import Goback from '../components/Goback'
import WebcamComponent from '../components/WebCame'
import Navbar from './Navbar'

const ScanPage = () => {
  return (
    <div className=' main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Scan QR</p>
      </div>

      <div className='p-4 '>
        <WebcamComponent />
      </div>

      <Navbar />
    </div>
  )
}

export default ScanPage
