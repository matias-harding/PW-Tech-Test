

const ProductItem = (props) => {

  const productsList = (products) => {
    let displayRows = <tr><td colSpan="4">No hay Resultados</td></tr>
    if(products !== undefined && products.length ){
      displayRows = products.map((prod) => {
        return <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.description}</td>
        <td>{prod.branch}</td>
        <td>{prod.price}</td>
      </tr>
      })
    }
    return displayRows
  }

  return <>
          <table >
            <thead>
              <tr>
                <td>id</td><td>Nombre</td><td>Marca</td><td>Precio</td>
              </tr>
            </thead>
            <tbody>    
            {
              productsList(props.products)
            }
            </tbody>
          </table>
      </>

}

export default ProductItem