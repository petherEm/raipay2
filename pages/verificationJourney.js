import React from 'react'
import Image from 'next/image'

import VerificationJourneyIntro from '../components/fulljourney/VerificationJourneyIntro'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
  
`

const verificationJourney = () => {
    return (
        <Container>
            <VerificationJourneyIntro />
        </Container>
    )
}

export default verificationJourney
