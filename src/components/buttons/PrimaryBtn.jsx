import React from 'react'

const PrimaryBtn = ({title}) => {
  return (
    <button style={{ background: 'radial-gradient(100% 100% at 50% 0%, #66CBF9 0%, #0FB5FF 100%)'}} className='w-[120px] h-[42px] border-t rounde-lg border-[#313E63] rounded-lg text-[#CEE7FF] font-medium '>{title}</button>
  )
}

export default PrimaryBtn