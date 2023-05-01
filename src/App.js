import "./App.css";
import React from 'react'
import Nabbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";

function App() {
  const productList=[
    {
      price:49999,
      name:"Google Pixel 2",
      quantity:0,
    },
    {
      price:13999,
      name:"Realme U1",
      quantity:0,
    }
  ]
  return (
    <>
    <Nabbar/>
    <main className="container mt-5">
    <ProductList productList={productList}/>
    </main>
    </>
  )
  }

export default App;
