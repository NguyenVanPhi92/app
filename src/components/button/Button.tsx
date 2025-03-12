import { Link } from 'react-router'

export const Button = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      to={'/' + path}
      className='button bg-[#354f79] py-2 font-[500] w-[90%] flex justify-center mx-auto text-white text-md rounded-xl'
    >
      {name}
    </Link>
  )
}
