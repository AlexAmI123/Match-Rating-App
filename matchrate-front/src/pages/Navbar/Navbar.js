import React, {useState,useEffect,Fragment} from "react";
import styled from "styled-components";
import {Route, Link} from "react-router-dom"
import { Component } from "react";
import axios from "axios"

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: white;
  color: black;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 10%;
  align-self: flex-end !important;
  margin-right: 24px;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  font-weight: bold;
  font-size: 20px;
  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: black;
    text-decoration: none;
  }
`

  const Navbar = (props) => {

    const logout = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3000/api/v1/Logout`)

        window.location.href = "/Login"
    }
    return(
      <Wrapper>
        <Container>
          <Nav>
            <Left>
              <Logo><Link to="/">MatchRate</Link></Logo>
            </Left>
            <Right>
              <Menu>
                  {
                  props.isLoggedIn?
                  <Fragment>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/AddMatch">Add Match!</Link></li>
                      <li><a onClick={logout}>Log Out</a></li>
                  </Fragment> 
                  :
                  <Fragment>
                      <li><Link to="/Login">Login</Link></li>
                      <li><Link to="/Signup">Signup</Link></li>
                  </Fragment>
                  }
              </Menu>
            </Right>
          </Nav>  
        </Container>
      </Wrapper>
    )
}
export default Navbar