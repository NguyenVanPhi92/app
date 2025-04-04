const Account = ({ color }: { color: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
      <mask
        id='mask0_3336_769'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='2'
        y='0'
        width='17'
        height='20'
      >
        <path
          d='M15.4998 4.99988C15.4998 7.76124 13.2614 9.99977 10.5 9.99977C7.73873 9.99977 5.50024 7.76124 5.50024 4.99988C5.50024 2.23852 7.73873 0 10.5 0C13.2614 0 15.4998 2.23852 15.4998 4.99988Z'
          fill='#354F79'
        />
        <path
          d='M2.16699 16.6667C2.16699 13.9054 4.40548 11.6669 7.1668 11.6669H13.8332C16.5945 11.6669 18.833 13.9054 18.833 16.6667V17.5001C18.833 18.8807 17.7138 20 16.3331 20H4.66689C3.28624 20 2.16699 18.8807 2.16699 17.5001V16.6667Z'
          fill='#354F79'
        />
      </mask>
      <g mask='url(#mask0_3336_769)'>
        <rect x='0.5' y='-0.000976562' width='19.9992' height='19.9995' fill={color} />
      </g>
    </svg>
  )
}

export default Account
