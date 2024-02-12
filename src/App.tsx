import React, { useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { breweryType, optionType } from './types';
import Brewery from './components/Brewery';


function App() {
  const [search, setSearch] = useState<string>('');
  const [breweries, setBreweries] = useState<[]>([]);




  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      
      setSearch(e.target.value);

      //console.log(search);
  } 


  const handleSubmit = (search: string) => {
    
    getBreweries(search);

  }


  async function getBreweries (search: string) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${search}&per_page=10`);
    let brewFetch = await response.json();

    setBreweries(brewFetch);
    

   //console.log(brewFetch);

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

  const mainSectionHeight = breweryList.length ? 'h-[auto]' : 'h-[100vh]';


  return (
    <>
    <main
    className={`flex justify-center items-center 
    bg-gradient-to-br from-zinc-100 via-gray-900 
    w-full ${mainSectionHeight}`}>
      <section 
      className='w-full md:max-w-[500px] p-4 flex flex-col items-center justify-center 
      md:px-10 lg:p-24 h-full lg:h-[auto] text-center rounded
      bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg'
      >
        <h2 className='font-black text-2xl'>Brewery Finder</h2>
        {breweryList ? (
          <>
          <Search handleSubmit={handleSubmit}/> 
          {breweryList}
          </>
        ) : (
          <Search
          handleSubmit={handleSubmit}/>
        )}
          
      </section>
    </main>
    </>
  );
}

export default App;
