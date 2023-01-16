

const ProductItem = (props) => {
  return <>
    {
    props.products.map((prod) => {
        return <tr>
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