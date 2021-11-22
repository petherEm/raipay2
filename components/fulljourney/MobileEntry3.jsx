import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import WUlogo from '../../public/img/wu.png'

import RaiPayLogo from '../../public/img/raipaypng.png'

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
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const TopDesc = styled.div`
    flex: 2;
    background-color: black;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;

    h3 {
        font-size: 30px;
        font-weight: 400;
    }
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

const MobileEntry3 = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={RaiPayLogo}  />
                </Logo>
                <NavMenu>
                    <div>Hi, Piotr!</div>
                </NavMenu>
            </NavBar>
                <TopDesc>
                    <div>
                        <h3>RaiPay Services</h3>
                    </div>
                    
                </TopDesc>
            <Main>
                <Icons>
                    <Icon style={{border:"none"}}>
                        <Image src={WUlogo} />
                        <p>Western Union</p>
                    </Icon>
                    
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                </Icons>

            </Main>
            <Bottom>
                {/* <Link href="/fullJourney">
                    <Button>Continue</Button>
                </Link>   */}
            </Bottom>
        </>
    )
}

export default MobileEntry3
