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
        align-items: center;

        
        box-sizing: border-box;

        border-top: 1px solid white ;
        border-bottom: 1px solid white ;

        width: 95%;
        max-width: 395px;
        padding-block: 30px;
    }

    .colum{
        border-left: 2px solid var(--primary-blue);

    }

    .linksDesktop{

        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    .linksMobile{

        display: none;

    }




    @media (max-width: 920px) {

        .linksMobile{

            display: flex;

            }

        .linksDesktop{
            display: none;
        }


        .colum{
           background-color: red;
        }

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