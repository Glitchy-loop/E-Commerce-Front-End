import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "../components/Container/Container"
import Product from "../components/Product/Product"
import PropTypes from "prop-types"
import Title from "../components/Title/Title"
import Loader from "../components/Loader/Loader"
import Footer from "../components/Footer/Footer"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [cartItems, setCartItems] = useState([])

  // Get product data
  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/product/${id}`
      )
      const data = await res.json()

      setProduct(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <Container>
        <Title title={`Product details`} />
        {!product && <Loader />}
        {product && product.length === 0 && <div>No product found.</div>}
        {product &&
          product.length > 0 &&
          product.map((item) => (
            <Product
              className='productView'
              key={item.title}
              title={item.title}
              img={item.img}
              category={item.category}
              price={item.price}
              description={item.description}
              addToCart={() => addToCart(item.title)}
            />
          ))}
      </Container>
      <Footer />
    </>
  )
}

ProductDetails.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
}

export default ProductDetails
