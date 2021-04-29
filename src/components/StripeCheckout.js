import React from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCartContext } from '../context/cart_context'
import { useUserContect } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { useHistory } from 'react-router-dom'

const CheckoutForm = () => {
  return <h2>Hello from Stripe Checkout</h2>
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default StripeCheckout
