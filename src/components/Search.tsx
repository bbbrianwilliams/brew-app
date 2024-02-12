import { ChangeEvent, MouseEvent, useState } from "react"
import { optionType } from "../types";
import React from 'react'
import { breweryType } from "../types"
import Suggestions from "./Suggestions";

type Props = {
    handleSubmit: (search: string) => void
}

const Search = ({handleSubmit} :Props): JSX.Element => {

    const [search, setSearch] = useState<string>('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }

    function handleOnClick () {
        handleSubmit(search)
        setSearch("");
    }


  return (
    <>
    <h1>Search a city</h1>
    <div className="relative flex mt-10 md:mt-4">
        <input
        type="text" 
        value={search}
        className="px-2 py-1 mb-5 rounded-l-md border-2 border-white"
        onChange={handleInputChange}
        />

        <button
        type="submit"
        className="rounded-r-md border-2 border-zinc-100
        hover:border-zinc-500 hover:text-zinc-900 text-zinc-200
        px-2 py-1 mb-5 cursor-pointer"
        onClick={handleOnClick}
        >
        Search
        </button>
    </div>
    </>
  )
}

export default Search