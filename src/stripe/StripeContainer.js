import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import store from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/Cart/cartSlice'
import { connect } from 'react-redux'
import Container from '../components/Container/Container'
import './style.css'
import Button from '../components/Button/Button'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#000',
      color: '#000',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#000' },
      '::placeholder': { color: '#000' }
    },
    invalid: {
      iconColor: 'red',
      color: 'red'
    }
  }
}

const PaymentForm = props => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const CART_TOTAL = store.getState().cart.value.Cart_total

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [token] = useState(localStorage.getItem('token'))
  const [error, setError] = useState()
  const [orderId, setOrderId] = useState(localStorage.getItem('orderId'))

  const createOrder = async () => {
    const productsInfos = props.productsInfos.map(productInfo => {
      return {
        quantity: store.getState().cart.value.products[productInfo.product.id]
          .count,
        product: productInfo.product
      }
    })
    const finalCart = {
      productsInfos: productsInfos,
      userId: Number(localStorage.getItem('userId'))
    }
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/add`,
        {
          method: 'POST',
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(finalCart)
        }
      )
      const data = await res.json()
      if (!token) {
        navigate('/login')
      }
      if (data.err) {
        setError(data.err)
      }
      if (data.msg === 'Successfully added an order.') {
        setOrderId(localStorage.setItem('orderId', data.orderId))
        dispatch(reset())
        navigate(`/thankyou/${data.orderId}`)
      }
    } catch (err) {
      return setError(err.msg)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/v1/orders/payment`,
          {
            amount: 100 * CART_TOTAL,
            id
          }
        )

        if (response.data.success) {
          console.log(id)
          console.log('Successful payment')
          setSuccess(true)
          createOrder()
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!success ? (
        <Container state={store.getState()}>
          <form className='stripe-form' onSubmit={handleSubmit}>
            <fieldset>
              <CardElement options={CARD_OPTIONS} />
            </fieldset>
            <Button type='submit'>Pay</Button>
          </form>
        </Container>
      ) : (
        <div>
          <h2 style={{ textAlign: 'center' }}>Creating your order...</h2>
        </div>
      )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    productsInfos: Object.values(state.cart.value.products).map(item => {
      return item
    })
  }
}

export default connect(mapStateToProps)(PaymentForm)
