

const ProductItem = (props) => {
  return <>
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
  </>

}

export default ProductItem