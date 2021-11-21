import React from 'react'
import Image from 'next/image'

import FullJourneyIntro from '../components/fulljourney/FullJourenyIntro'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
  
`

const fullJourney = () => {
    return (
        <Container>
            <FullJourneyIntro />
        </Container>
    )
}

export default fullJourney
