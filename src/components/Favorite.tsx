import { useState } from 'react'
import { GoHeart } from 'react-icons/go'

const Favorite = () => {
  const [favarite, setFavarite] = useState(false)
  return (
    <div className='p-4 px-0'>
      <div
        onClick={() => setFavarite(!favarite)}
        className={`border-[1.4px] py-3 cursor-pointer border-[#354f79] rounded-xl flex justify-center items-center gap-x-2 text-[#354f79] ${
          favarite ? 'bg-[#f8f9ff] border-[#f8f9ff]' : ''
        }`}
      >
        {favarite ? (
          <>
            <svg xmlns='http://www.w3.org/2000/svg' width='13' height='12' viewBox='0 0 13 12' fill='none'>
              <mask
                id='mask0_3647_1213'
                style={{ maskType: 'alpha' }}
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='13'
                height='12'
              >
                <path
                  d='M3.875 0.693604C2.08628 0.693604 0.625 2.13087 0.625 3.91735C0.625 4.58725 0.759877 5.67584 1.50343 6.96578C2.24493 8.25215 3.57209 9.70478 5.90388 11.1383L5.90633 11.1398C6.08522 11.2486 6.2906 11.3062 6.5 11.3062C6.7094 11.3062 6.91478 11.2486 7.09367 11.1398L7.09612 11.1383C9.42791 9.70478 10.7551 8.25215 11.4966 6.96578C12.2401 5.67584 12.375 4.58725 12.375 3.91735C12.375 2.13087 10.9137 0.693604 9.125 0.693604C8.18264 0.693604 7.38537 1.19782 6.87009 1.6249C6.73202 1.73934 6.60801 1.8534 6.5 1.95958C6.39199 1.8534 6.26798 1.73934 6.12991 1.6249C5.61463 1.19782 4.81736 0.693604 3.875 0.693604Z'
                  fill='#354F79'
                />
              </mask>
              <g mask='url(#mask0_3647_1213)'>
                <rect x='0.5' width='12' height='12' fill='#354F79' />
              </g>
            </svg>
            <span className='font-bold'>Interested</span>
          </>
        ) : (
          <>
            <GoHeart />
            <span className='font-bold'>Interest</span>
          </>
        )}
      </div>
    </div>
  )
}

export default Favorite
