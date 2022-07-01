import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Container from "../components/Container/Container"
import Product from "../components/Product/Product"
import PropTypes from "prop-types"
import Title from "../components/Title/Title"
import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()

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

  const addToCart = (item) => {
    buyProduct(item)
  }

  // Create order
  const buyProduct = async (item) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/add`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: Number(localStorage.getItem("userId")),
            productId: item.id,
          }),
        }
      )
      const data = await res.json()

      if (data.msg === "Successfully added an order.") {
        navigate("/dashboard/orders")
      }
      // console.log(data)
      if (data.err) {
        return setError(data.err)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <Title title={`Product details`} />
        {!product && <Loader />}
        {error && <Notification>{error}</Notification>}
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
              addToCart={() => addToCart(item)}
            />
          ))}
      </Container>
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
