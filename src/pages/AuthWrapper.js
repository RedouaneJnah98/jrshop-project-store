import React from 'react'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  if (error) {
    return (
      <Wrapper>
        <h2>Ooops... {error.message}</h2>
      </Wrapper>
    )
  }

  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
`

export default AuthWrapper
