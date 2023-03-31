import './App.css';
import React, { useEffect, useState } from 'react';
import ProductForm from './form';
import Table from './table';

function App() {

  const [products, setProducts] = useState([])


  //fetch all products from server
  const fetchProductData = async () => {
    console.log("fetching")
    await fetch("http://localhost:3000/api/getAllProducts")
      .then(async (response) => {
        return await response.json()
      })
      .then(data => {
        setProducts(data)
         //setProducts(data)
      })
  }

  //re-render the main component
  function updateTable(newList){
    console.log("running");
    //setProducts([...products]);
    fetchProductData();
    console.log(products);
     //fetchProductData();
  }

  useEffect(() => {
    fetchProductData();
  }, [])



  return (
    <div className="App">
      {products.length !== 0 ? (
      <header className="App-header">
        BC Gov Test
      </header>
      ): (console.log("Loading")) }
      {products.length !== 0 ? (
      <div className ="content">
        <div>
          <ProductForm setRender={updateTable} products={[...products]}/>
        </div>
        <div>
          <Table myData={[...products]}  />
        </div>
      </div> 
      ): (console.log("Loading Table")) }
      </div>
  );
}

export default App;
