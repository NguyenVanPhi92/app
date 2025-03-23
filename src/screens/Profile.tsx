import Goback from '../components/Goback'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className=' main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Profile</p>
      </div>

      <div className='p-4 '>User</div>

      <Navbar />
    </div>
  )
}

export default Profile
