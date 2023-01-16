import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import ProductItems from './ProductItem'
import './Products.scss'

const Products = () => {

  const [postList,setPostList] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
        console.log(data)
        setPostList(data.data)
    });
  },[])


  return <div className="App">
          <header className="App-header">
            Productos
          </header>
          <main className="products-container">     
            <table >
              <tr>
                <td>id</td><td>Nombre</td><td>Marca</td><td>Precio</td>
              </tr>
              <ProductItems products={postList} />
            </table>
          </main>
          <footer>
            <p>Dev: Matias Harding</p>
          </footer>
        </div>
  }
  
  export default Products
  