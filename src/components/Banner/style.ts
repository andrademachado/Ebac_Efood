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
    
    @media (max-width: 768px) { 
        height: 200px;
        background-size: cover;

        .containe {
            align-items: center;
            padding-top: 15px;
        }
    }

    @media (max-width: 480px) { 
        height: 150px;
        .containe {
            justify-content: center;
        }
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
    
    @media (max-width: 768px) { 
        font-size: 28px;
        margin-bottom: 80px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-top: 15px;
        margin-bottom: 50px;
    }
    `
    

export const Texto = styled.h2`  
z-index: 1;
position: relative;
font-size: 32px;
font-weight: 900;
line-height: 37px;

@media (max-width: 768px) { 
        font-size: 28px;
        line-height: 32px;
    }

    @media (max-width: 480px) { 
        font-size: 24px;
        line-height: 28px;
    }
`