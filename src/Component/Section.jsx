import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';



const Section = ({title,description,leftBtnTxt,rightBtnTxt,backgroundImg}) => {
    return <>
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>

                </ItemText>
                </Fade> 
            <Button>
                
                <ButtonGroup>
                    <Fade left>
                   <LeftButton>
                        {leftBtnTxt}
                        </LeftButton>
                    </Fade>
                    <Fade right>
                        
                    {
                        rightBtnTxt &&  <RightButton>
                        {rightBtnTxt}
                    </RightButton>
                    }
                    </Fade>
                   
                    </ButtonGroup>
                    
             <DownArrow src="/images/down-arrow.svg">
              
             </DownArrow>
            </Button>
            
            </Wrap>
    </>
}

export default Section;
const Wrap = styled.div`
width:100vw;
height:100vh;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
align-items:Center;
justify-content:space-between;
background-image:${props=>`url("/images/${props.bgImage}")`}


`;


const ItemText = styled.div`
padding:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:15px;
@media(max-width:768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin:10px;

`
const RightButton = styled(LeftButton)`
background: white; 
opacity:0.60; 
color:black;
`

const DownArrow = styled.img`
height:40px;
animation:animateDown infinite 1.5s;




`
const Button = styled.div`
display:flex;
flex-direction:column;
`









