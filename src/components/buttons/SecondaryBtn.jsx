import React from 'react'

const SecondaryBtn = ({title}) => {
  return (
    <button style={{ background: 'radial-gradient(100% 100% at 50% 0%, #26314E 0%, #1E253C 100%)' }} className='w-[120px] h-[42px] border-t rounde-lg border-[#313E63] rounded-lg text-[#CEE7FF] font-medium '>{title}</button>
  )
}

export default SecondaryBtn