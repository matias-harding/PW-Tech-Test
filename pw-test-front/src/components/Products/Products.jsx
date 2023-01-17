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
    setSearchValue(event.target.value);
  }

  const handleSelect = (event) => {
    setSelectValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("🚀 ~ file: Products.jsx:25 ~ handleSubmit ~ event", event)
    event.preventDefault();
    if(parseInt(selectValue) === 0 ){
      // Axios.get(`http://localhost:3001/api/products/byNameOrBrand/${searchValue}`).then((data)=>{
      //   console.log(data)
      //   setProdList(data.data)
      // });
    } else {
      Axios.get(`http://localhost:3001/api/products/${searchValue}`).then((data)=>{
        console.log(data)
        setProdList(data.data)
      });
    }
  }

  return <div className="App">
          <header className="App-header">
            Productos
          </header>
          <main className="products-container">
            {/* Product Search */}
            <div className='product-search'>
              <form onSubmit={handleSubmit}>
                <input type="text" value={searchValue} onChange={handleChange} />
                <select defaultValue={selectValue} onChange={handleSelect} >
                  <option value="0">Nombre/Marca</option>
                  <option value="1">Id</option>
                </select>
                <input type="submit" value="Buscar" />
              </form>
            </div>

            {/* Product List */}
            <ProductItems products={prodList} selectValue={selectValue} />
          </main>
          <footer>
            <p>Dev: Matias Harding</p>
          </footer>
        </div>
  }
  
  export default Products
  