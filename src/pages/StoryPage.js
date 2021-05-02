import React from 'react'
import styled from 'styled-components'
import { HeroAbout, Article } from '../components'

const StoryPage = () => {
  return (
    <Wrapper className="section-center">
      <HeroAbout />
      <Article />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default StoryPage
