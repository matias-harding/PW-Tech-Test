import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import ProductItems from './ProductItem'
import './Products.scss'

const Products = () => {

  const [prodList,setProdList] = useState([]);
  const [searchValue,setSearchValue] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
        console.log(data)
        setProdList(data.data)
    });
  },[])

  const handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return <div className="App">
          <header className="App-header">
            Productos
          </header>
          <main className="products-container">
            {/* Product Search */}
            <div className='product-search'>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={searchValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>

            {/* Product List */}
            <table >
              <tr>
                <td>id</td><td>Nombre</td><td>Marca</td><td>Precio</td>
              </tr>
              <ProductItems products={prodList} />
            </table>
          </main>
          <footer>
            <p>Dev: Matias Harding</p>
          </footer>
        </div>
  }
  
  export default Products
  