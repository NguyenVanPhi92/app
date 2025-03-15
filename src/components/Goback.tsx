import { useNavigate } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'

export default function Goback() {
  const navigate = useNavigate()

  return (
    <button className='' onClick={() => navigate(-1)}>
      <LeftArrow />
    </button>
  )
}
