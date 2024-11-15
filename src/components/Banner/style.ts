import styled from "styled-components";

export const BackImg = styled.div`
    position: relative;
    display: block;
    height: 280px;
    width: 100%;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    padding-top: 25px;

    &::after {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        content:'';
        opacity: 0.5;        
    }  
    
    .containe{        
        display: flex;        
        display: flex;
        flex-direction: column;
        height: 100% ;
    }
    
`
export const Title = styled.p`
    z-index: 1;
    position: relative;   
    margin-top: 25px;
    margin-bottom: 106px;
    opacity: 0.7;
    font-weight: 100;    
    font-size: 32px;    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    
    `
    

export const Texto = styled.h2`  
z-index: 1;
position: relative;
font-size: 32px;
font-weight: 900;
line-height: 37px;

`