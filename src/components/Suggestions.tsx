import React from 'react'
import { optionType } from '../types'

type Props = {
    options: []
    onSelect: (optionType: optionType) => void
}

const Suggestions = ({options, onSelect}: Props): JSX.Element => {
  return (
    <ul className='absolute top-9 bg-white ml-1 rounded-b-md'>
        {options.map((option:optionType, index: number) => (
            <li key={index}>
                <button
                className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor pointer'
                onClick={() => onSelect(option)}
                >
                    {option.city} {option.country}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default Suggestions