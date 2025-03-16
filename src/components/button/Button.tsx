import { Link } from 'react-router'

export const Button = ({ name, path, onClick }: { name: string; path: string; onClick?: any }) => {
  return (
    <div className='' onClick={onClick}>
      <Link
        to={'/' + path}
        className='button text-sm bg-[#354f79] w-full py-3 font-[500] flex justify-center text-white text-md rounded-xl'
      >
        {name}
      </Link>
    </div>
  )
}
