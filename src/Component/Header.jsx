import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux';
const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    return <>
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a >
            <Menu>
                {cars && cars.map((cars, index) => (
                    <a href="#" key={index}>{ cars}</a>

                ))}


            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href=""> Tesla Account</a>

                <CustomeMenu onClick={ ()=>setBurgerStatus(true)} />


                



            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrap>
                    <CustomeClose onClick={ ()=>setBurgerStatus(false)}/>
                </CloseWrap>
                <li><a href="#"> Exsting Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-in</a></li>
                <li><a href="#"> Cybertruck</a></li>
                <li><a href="#"> Demo Drive</a></li>
                <li><a href="#"> Insurance</a></li>
                <li><a href="#"> Roadster</a></li>
                <li><a href="#"> Semi</a></li>
                <li><a href="#"> Charging</a></li>
                <li><a href="#"> Powerwall</a></li>
                <li><a href="#"> Commercial Energy</a></li>
                    
                
            </BurgerNav>



        </Container>
    </>
}

export default Header;
const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;


`
const Menu = styled.div` 
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:Center;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    margin-right:10px;
    
}`
const CustomeMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:999;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:all 0.5s ease ;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
        font-weight:600;
    }
}
`
const CustomeClose = styled(CloseIcon)`

cursor:pointer;
transition:transform 0.07 ease-in-out;
&:hover{
    transform:rotate(350deg);
}
`
const CloseWrap = styled.div`
display:flex;
justify-content:flex-end;
`