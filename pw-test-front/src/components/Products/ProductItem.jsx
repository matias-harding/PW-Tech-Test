

const ProductItem = (props) => {
  return <>
          <table >
            <thead>
              <tr>
                <td>id</td><td>Nombre</td><td>Marca</td><td>Precio</td>
              </tr>
            </thead>
            <tbody>    
            {
              props.products.map((prod) => {
                return <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.description}</td>
                        <td>{prod.branch}</td>
                        <td>{prod.price}</td>
                      </tr>
              })
            }
            </tbody>
          </table>
      </>

}

export default ProductItem