import { useNavigate } from 'react-router'
import Close from '../assets/icons/Close'

const CloseTab = () => {
  const navigate = useNavigate()
  return (
    <button className='absolute top-4 left-4' onClick={() => navigate(-1)}>
      <Close />
    </button>
  )
}

export default CloseTab
