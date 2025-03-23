const Explore = ({ color }: { color: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
      <g clipPath='url(#clip0_3336_1276)'>
        <mask
          id='mask0_3336_1276'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='21'
          height='20'
        >
          <path
            d='M11.75 10C11.75 10.6914 11.1914 11.25 10.5 11.25C9.80859 11.25 9.25 10.6914 9.25 10C9.25 9.30859 9.80859 8.75 10.5 8.75C11.1914 8.75 11.75 9.30859 11.75 10ZM0.5 10C0.5 4.47656 4.97656 0 10.5 0C16.0234 0 20.5 4.47656 20.5 10C20.5 15.5234 16.0234 20 10.5 20C4.97656 20 0.5 15.5234 0.5 10ZM13.1992 11.9805L15.3672 6.34375C15.6602 5.55078 14.9141 4.83984 14.1562 5.13281L8.51953 7.30078C8.1875 7.42578 7.92578 7.6875 7.80078 8.01953L5.63281 13.6562C5.33984 14.4141 6.05078 15.1602 6.84375 14.8672L12.4805 12.6992C12.8125 12.5742 13.0742 12.3125 13.1992 11.9805Z'
            fill='black'
          />
        </mask>
        <g mask='url(#mask0_3336_1276)'>
          <rect x='0.5' y='-0.000976562' width='20' height='20' fill={color} />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_3336_1276'>
          <rect width='20' height='20' fill='white' transform='translate(0.5)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Explore
