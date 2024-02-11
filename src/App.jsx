import React from "react";

import './index.CSS'
import pizzaData from './data.jsx';
import Header from './Header.jsx';
import Menu from './menu.jsx';
import PizzaList from './pizzaList.jsx';


function App() {
  

  return (
    <>
       <div className="container">
        <Header />
        <Menu />
        <PizzaList pizzaData={pizzaData}/>
      </div>
    </>
  )
}


export default App
