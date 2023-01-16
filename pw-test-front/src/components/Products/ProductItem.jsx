

const ProductItem = (products) => {

  return <>
    {products.data.map((prod) => {
        return <tr>
                <td>{prod.id}</td>
                <td>{prod.branch}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
              </tr>
      })
    }
  </>

}

export default ProductItem