const Flight = ({ color }: { color: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <path
        d='M19.168 0C18.3359 0 17.5 0 17.0859 0.417969L13.7539 4.16797H0.832031L0 5.41797L9.16797 8.33594L6.66797 11.668H2.91797L1.66797 12.918L4.16797 13.75V15C4.19531 15.4492 4.58594 15.832 5 15.832H6.25L7.08203 18.332L8.33203 17.082V13.332L11.6641 10.832L14.582 20L15.832 19.168V6.25L19.582 2.91797C20 2.5 20 1.66797 20 0.832031C20 0.417969 19.582 0 19.168 0Z'
        fill={color}
      />
    </svg>
  )
}

export default Flight
