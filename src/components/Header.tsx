import Search from '../assets/icons/Search'
import Goback from './Goback'

interface HeaderProps {
  title: string
  icon?: boolean
}

const Header = ({ title, icon }: HeaderProps) => {
  return (
    <div className='flex justify-between p-2'>
      <Goback />
      <p className='font-bold'>{title}</p>
      <div className=''>{icon && <Search />}</div>
    </div>
  )
}

export default Header
