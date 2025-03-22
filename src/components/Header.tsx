import Search from '../assets/icons/Search'
import Goback from './Goback'

interface HeaderProps {
  title: string
  icon?: boolean
  bag?: React.ReactNode
}

const Header = ({ title, icon, bag }: HeaderProps) => {
  return (
    <div className='fixed top-0 z-10 p-4 flex justify-between bg-white w-[430px]'>
      <Goback />
      <p className='font-bold'>{title}</p>
      {icon && (
        <div className=''>
          <Search />
        </div>
      )}

      {bag && bag}
    </div>
  )
}

export default Header
