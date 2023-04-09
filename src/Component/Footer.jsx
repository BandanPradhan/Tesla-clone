import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';



const Footer = () => {
    return <>
        <Container>
            <p>Made By Bandan </p>
            <Love color="warning" />
        </Container>
    </>
    
}

export default Footer;
const Container = styled.div`
display:flex;
justify-content:center;
padding:.5rem;
`
const Love = styled(FavoriteIcon)`
font-size:1.2rem;
`


