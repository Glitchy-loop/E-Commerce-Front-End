import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Container from "../components/Container/Container"
import Product from "../components/Product/Product"
import PropTypes from "prop-types"
import Title from "../components/Title/Title"
import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"
import { addProductToCart } from "../redux/Cart/cartSlice"
import { useDispatch } from "react-redux"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    dispatch(addProductToCart(item.id))
    navigate("/cart")
  }

  return (
    <>
      <Container>
        {!product && <Loader />}
        {error && <Notification>{error}</Notification>}
        {!product && <div>No product found.</div>}
        {product && (
          <>
            <Title title={`${product.title} product details`} />
            <div className='productView'>
              <div className='leftProductView'>
                <Product img={product.img} />
              </div>
              <div className='rightProductView'>
                <Product
                  key={product.title}
                  price={product.price}
                  description={product.description}
                  addToCart={() => addToCart(product)}
                />
              </div>
            </div>
          </>
        )}
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
