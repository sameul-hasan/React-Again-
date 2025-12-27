
import './App.css';
import Countries from './countries.jsx';
import { Suspense } from 'react';

const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {
  

  return (
    <>
     
      <h1>M38-React-Again</h1>
      <Suspense fallback={<h2>Loading...</h2>}> 
      <Countries countriesPromise = {CountriesPromise} ></Countries>
      </Suspense>
      
     
    </>
  )
}

export default App
