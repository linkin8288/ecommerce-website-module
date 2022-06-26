import React from 'react'
import { Search, ShoppingCartOutlined  } from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import styled from 'styled-components'
import { mobile } from "../../response";


function Navbar() {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <Search style={{ color: "gray", fontSize: 16 }}/>
            </SearchContainer>
          </Left>
          <Center><Logo>ECFE</Logo></Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div `
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`
// Gives right, center, left flex 1 to gives them even space
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
// The text-align property specifies the horizontal alignment of text in an element.
const Center = styled.div`
  flex: 1;
  text-align: center;
`
// flex end: items are packed toward to end line.
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
// ----------------------------------------
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`
const Logo = styled.p`
  font-weight: bold;
  font-size: 14px;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

export default Navbar