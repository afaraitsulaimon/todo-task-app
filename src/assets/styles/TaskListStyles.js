import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  .forTitles{
        margin-left: 10px;
   }

  .forTitles p{
       font-family: 'Comfortaa', cursive;
       cursor: pointer;
   }

   .forTitles p:hover{
       font-weight: bold;
   }

   .forTitles .titleText{
      text-decoration: line-through;
   }

   .forButtons{
        margin-right: 10px;
   }

  .forButtons button{
        width: 80px;
        margin: 1em;
        padding: 0.5em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: inter;
        font-weight: bold;
   }

   .forButtons .viewTaskdetails{
        cursor: pointer;
   }


  
  
`;