import React from 'react'
import { breweryType } from '../types'

type Props = {
    key: string
    id: string
    name: string
    address_1: string
    city: string
    state: string
    postal_code: string
    phone: string
    
}

const Brewery = ({id, name, address_1, city, state, postal_code, phone}: Props): JSX.Element => {

  function formatPhoneNumber(phone: string) {
    const formated_phone = `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6,11)}`;
    

    return formated_phone;
 }

  return (
    <div
    className='w-[auto] h-[auto] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded-md drop-shadow-1g p-2 mb-5 flex flex-col justify-between'
    >
      <div key={id}>
        <h2 className='font-black'>{name}</h2>
        <p>{address_1}</p>
        <p>{city}, {state} {postal_code}</p>
        <p>Phone: {phone ? formatPhoneNumber(phone) : "N/A"}</p>
    </div>
    </div>
  )
}

export default Brewery