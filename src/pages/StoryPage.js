import React from 'react'
import styled from 'styled-components'
import { HeroAbout, Article, TeamManagement } from '../components'

const StoryPage = () => {
  return (
    <Wrapper>
      <HeroAbout />
      <Article />
      <TeamManagement />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default StoryPage
