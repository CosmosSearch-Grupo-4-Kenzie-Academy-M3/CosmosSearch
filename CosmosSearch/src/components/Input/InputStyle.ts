import styled from "styled-components";

export const ImputStyle = styled.fieldset`


border: none;
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;


.containerInputSpan{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 100%;
    gap: 5px;
     
}


input{
  
    background: none;
    border: solid 1px var(--primary-blue);
    color: var(--primary-blue);
    font-size: 16px;
    padding: 10px ;
    width: 90%;

}

.spanError{

    color: red;
    font-size: 14px;
    font-family: var(--ff-Inter);

    }


`