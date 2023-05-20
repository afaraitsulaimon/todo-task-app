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

@media (max-width: 576px) {
    width: 100%;
   p{
    font-size: 1em;
   }
}

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;

        p{
    font-size: 1em;
   }
}

@media (min-width: 769px) and (max-width: 992px){
    width: 100%;

    p{
    font-size: 1em;
   }
}

@media (min-width: 993px) and (max-width: 1024px) {
    width: 100%;

    p{
    font-size: 1em;
   }
}
`;

