import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import ProductItems from './ProductItem'
import './Products.scss'

const Products = () => {

  const [prodList,setProdList] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState(0)


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
        console.log(data)
        setProdList(data.data)
    });
  },[])

  const handleChange = (event) => {
    console.log("🚀 ~ file: Products.jsx:24 ~ handleChange ~ event.target.value", event.target.value)
    setSearchValue(event.target.value);
  }

  const handleSelect = (event) => {
    console.log("🚀 ~ file: Products.jsx:26 ~ handleSelect ~ event", event.target.value)
    setSelectValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("🚀 ~ file: Products.jsx:25 ~ handleSubmit ~ event", event)
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
                  Buscar:
                  <input type="text" value={searchValue} onChange={handleChange} />
                </label>
                <select defaultValue={selectValue} onChange={handleSelect} >
                  <option value="0">Nombre/Marca</option>
                  <option value="1">Id</option>
                </select>
                <input type="submit" value="Buscar" />
              </form>
            </div>

            {/* Product List */}
            <table >
              <thead>
                <tr>
                  <td>id</td><td>Nombre</td><td>Marca</td><td>Precio</td>
                </tr>
              </thead>
              <tbody>
                <ProductItems products={prodList} />
              </tbody>
            </table>
          </main>
          <footer>
            <p>Dev: Matias Harding</p>
          </footer>
        </div>
  }
  
  export default Products
  