import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import TwintLogo from '../../public/img/twintlogo.png'
import WUlogo from '../../public/img/wu.png'

const Wrapper = styled.div`


`

const NavBar = styled.div`
    background-color: black;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    padding-left: 20px;


`

const Logo = styled.div`
    flex: 1;
    cursor: pointer;
`
const NavMenu = styled.div` 
    color: gold;
    flex: 9;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    cursor: pointer;

    div {
        margin-right: 10px;
    }
`

const Main = styled.div`
    background-color: black;
    padding: 20px;
    color: white;
    flex: 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`

const TopDesc = styled.div`
    flex: 1;
    background-color: black;
    padding: 20px;
    color: white;
    line-height: 1.5;
    text-align: center;
`


const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: tomato; */
    align-items: center;
    justify-content: center;
    /* justify-content: center;
    align-items: center; */
   
`
const Icon = styled.div`
    border: 1px solid white;
    background-color: black;
    width: 75px;
    height: 95px;
    border-radius: 20px;
    margin: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    cursor: pointer;

    p {
        font-size: 8px;
    }

    &:hover {
        opacity: 0.8;
    }

`
const Input = styled.input`
    background-color: black;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-size: 50px;

    ::placeholder {
        height: 100%;
        width: 100%;
        color: gold;
        
    }

    &:focus {
    outline: none !important;
    border: none;
}
`

const Payment = styled.h1` 
    font-size: 70px;
    color: gold;
`
const Label = styled.p` 
    font-size: 12px;
`

const Bottom = styled.div`
    background-color: black;
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    width: 80%;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    font-size: 18px;
    background-color: gold;
    margin-bottom: 20px;

    &:hover {
        background-color: goldenrod;
    }

`

const PaymentVerification = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={TwintLogo} width={220} />
                </Logo>
                <NavMenu>
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                </NavMenu>
            </NavBar>
                <TopDesc>
                    <h3>To reconfirm your Identity perform 0.05 CHF payment to yourself with ZERO fee.</h3>
                </TopDesc>
            <Main>
                <Payment>0.05 CHF</Payment>
            
            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button>Agree</Button>
                </Link>  
            </Bottom>
        </>
    )
}

export default PaymentVerification
