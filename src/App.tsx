import React, { useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { breweryType, optionType } from './types';
import Brewery from './components/Brewery';


function App() {
  //const [city, setCity] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  //const [options, setOptions] = useState<[]>([]);
  const [breweries, setBreweries] = useState<[]>([])

  /* const getSearchOptions =(value: string) => {
      fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${value}&per_page=1`
      ).then(res => res.json()
      ).then((data) => setOptions(data))

      //console.log(options);
  } */

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      
      setSearch(e.target.value);

      //console.log(search);
  } 


  const handleSubmit = (search: string) => {
    
    getBreweries(search);

    //console.log(breweries);
  }

  /* const onOptionSelect = (option: optionType) => {

    setCity(option.city);
    
    //console.log(option.city);
  } */

  async function getBreweries (search: string) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${search}&per_page=10`);
    let brewFetch = await response.json();

    setBreweries(brewFetch);
    

   console.log(brewFetch);

  }

  const breweryList = breweries.map((item: breweryType, id: number): JSX.Element => (
    <Brewery 
      key={item.id}
      id={item.id} 
      name={item.name} 
      address_1={item.address_1}
      city={item.city}
      state={item.state}
      postal_code={item.postal_code}
      phone={item.phone}
    
    />
  ))


  return (
    <>
    <main className='flex justify-center items-center bg-gradient-to-br from-zinc-100 via-gray-900 h-[auto] w-full'>
      <section 
      className='w-full md:max-w-[500px] p-4 flex flex-col items-center justify-center 
      md:px-10 lg:p-24 h-full lg:h-[auto] text-center rounded
      bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg'
      >
        <div className='font-black text-2xl'>Brewery Finder</div>
          <Search handleSubmit={handleSubmit}/> 
          {breweryList && breweryList}
      </section>
    </main>
    </>
  );
}

export default App;
