import { number } from "prop-types";
import { useState } from "react";
import styled from "styled-components"

interface ContainerProps{
    borderColor: string;
    bgColor:string;
}
interface CircleProps{ //interface : object를 설명해줌.
    bgColor: string;
    borderColor ?: string;
}
const Container = styled.div<ContainerProps>`
width:200px;
height:200px;
background-color: ${(props) => props.bgColor};
border-radius:100px;
border:10px solid${props=>props.borderColor};
`;

function Circle({bgColor, borderColor}: CircleProps){

    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
export default Circle;