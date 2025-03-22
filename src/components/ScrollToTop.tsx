import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]) // Chạy mỗi khi đường dẫn thay đổi

  return null
}

export default ScrollToTop
