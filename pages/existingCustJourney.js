import React from 'react'
import Image from 'next/image'
import ExistingCustomer from '../components/fulljourney/ExistingCustomer'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
   
`

const existingCustJourney = () => {
    return (
        <Container>
            <ExistingCustomer />
        </Container>
    )
}

export default existingCustJourney
