import React from 'react'
import styled from 'styled-components'
import { HeroAbout, Article, Founders, ManagementTeam } from '../components'

const StoryPage = () => {
  return (
    <Wrapper>
      <HeroAbout />
      <Article />
      <Founders />
      <ManagementTeam />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default StoryPage
