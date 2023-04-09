import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Section from './Section';

const Home = () => {
    return <>
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnTxt="Custome order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnTxt="Custome order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                 title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnTxt="Custome order"
                rightBtnTxt="Existing inventory"
            />
            <Section title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnTxt="Custome order"
                rightBtnTxt="Existing inventory"
            />
            <Section title="Lowest Cost Solar Panel"
                description="Money-back gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section title="Solar For New Roof"
                description="Solar Roof Cost Less Than a New Roof plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
             <Section title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnTxt="Shop Now"
                
            />
            <Footer/>


        </Container> 
     </>
}

export default Home;
const Container=styled.div `height:100vh;`