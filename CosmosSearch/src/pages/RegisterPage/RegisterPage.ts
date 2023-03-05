import styled from "styled-components";

export const RegisterPageStyle = styled.main`

    width: 100%;
    min-height: 100vh;
    max-height: max-content ;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 100px;
   
    

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 26px;
        box-sizing: border-box;

        border-top: 1px solid white ;
        border-bottom: 1px solid white ;

        width: 90%;
        max-width: 395px;

        

        span{
            color: red;
            max-width: 700px;
        }
        
    }

    .colum{
        border-left: 2px solid var(--primary-blue);
    }
    @media (max-width: 920px) {

        flex-direction: column;
        justify-content: start;
        
        >div{
            display: flex;
            flex-direction: column;
        }

        div div{
            display: flex;
            gap: 20px;
        }
    }


    
    

` 