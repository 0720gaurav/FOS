import styled from 'styled-components';


export const ButtonContainer=styled.button`
text-transform:capatalize;
font-size:2.2rem;
background:transparent;
border:0.05rem solid LightBlue;

border-color:${props => (props.cart ? "(Yellow)":"(LightBlue)")};

color:${prop => (prop.cart ? "(Yellow)":"(LightBlue)")};
 border-radius:2rem;
 padding:0.2rem 0.5rem;
 cursor:pointer;
 margin:0.2rem 0.5rem 0.2rem 0rem;
 transition:all 0.5s ease-in-out;
 &:hover{
     background:${prop => prop.cart ? "(Yellow)":"(LightBlue)"};
     color:Blue;
 }
 &:focus{
     outline:none;
 }
`;