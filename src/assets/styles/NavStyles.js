import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
    box-shadow: 5px 10px 10px #888888;

  
   p{
    margin: 0;
   }

   p:nth-child(1){
        padding-left: 5px;
        font-family: 'Comfortaa', cursive;
   }

   p:nth-child(2){
    padding-right: 5px;
    font-family: 'Comfortaa', cursive;

}
`;

