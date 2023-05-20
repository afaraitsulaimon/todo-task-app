import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .modalShowHolder{
        width: 100%;
        height: 100vh;
        background: rgb(183,203,232,0.5);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
  
    .modalHideHolder{
     display: none;
    }


    .modalShowHolder .fatimesHolder{
        width: 100%;
        position: relative;
    }

    .modalShowHolder .fatimesHolder .faTimes{
        position: absolute;
        top: -2.5em;
        left: 76em;
        cursor: pointer;
        
    }

    
  
    .modalShowHolder .formHolder{
        width: 40%;
        height: 80%;
        border-radius: 5px;
        background-color: rgb(34,59,99,0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
  
    }

    .modalShowHolder .formHolder form{
        width: 85%;
        margin-top: 2.5em;
      
    }


    .modalShowHolder .formHolder h3{
        text-align: center;
        color: white;
        font-family: Inter;
    }

    .modalShowHolder .formHolder form .form-control{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;

    }

    .modalShowHolder .formHolder form .form-control 
    label{
       padding-bottom: 0.3em;
       font-family: 'Comfortaa', cursive;

    }

    .modalShowHolder .formHolder form .form-control 
    input[type='text']{
       width: 100%;
       height: 40px;
       box-sizing: border-box;
       font-family: 'Comfortaa', cursive;
       padding-left: 1em;

    }

    .modalShowHolder .formHolder form .form-control 
    input[type='text']:focus{
            
    }
   
    .modalShowHolder .formHolder form .submitButtonHolder
    {
         margin-top: 2em;
    }


    .modalShowHolder .formHolder form .submitButtonHolder button{
            width: 100%;
            height: 40px;
            font-size: 1em;
            cursor: pointer;
            font-family: Inter;
            border-radius: 5px;
            border: none;
    }

    
    .modalShowHolder .formHolder form .submitButtonHolder
     button:hover{
            background-color: rgb(0,128,0,0.5);
            color: white;
    }


    /* styling for modal for edit form */

    .editModalShowHolder{
        width: 100%;
        height: 100vh;
        background: rgb(183,203,232,0.5);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
  
    .editModalHideHolder{
     display: none;
    }


    .editModalShowHolder .fatimesHolder{
        width: 100%;
        position: relative;
    }

    .editModalShowHolder .fatimesHolder .faTimes{
        position: absolute;
        top: -2.5em;
        left: 76em;
        cursor: pointer;
        
    }
    .editModalShowHolder .formHolder{
        width: 40%;
        height: 80%;
        border-radius: 5px;
        background-color: rgb(34,59,99,0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
  
    }

    .editModalShowHolder .formHolder form{
        width: 85%;
        margin-top: 2.5em;
      
    }


    .editModalShowHolder .formHolder h3{
        text-align: center;
        color: white;
        font-family: Inter;
    }

    .editModalShowHolder .formHolder form .form-control{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;

    }

    .editModalShowHolder .formHolder form .form-control 
    label{
       padding-bottom: 0.3em;
       font-family: 'Comfortaa', cursive;

    }

    .editModalShowHolder .formHolder form .form-control 
    input[type='text']{
       width: 100%;
       height: 40px;
       box-sizing: border-box;
       font-family: 'Comfortaa', cursive;
       padding-left: 1em;

    }

    .editModalShowHolder .formHolder form .form-control 
    input[type='text']:focus{
            
    }
   
    .editModalShowHolder .formHolder form .submitButtonHolder
    {
         margin-top: 2em;
    }


    .editModalShowHolder .formHolder form .submitButtonHolder button{
            width: 100%;
            height: 40px;
            font-size: 1em;
            cursor: pointer;
            font-family: Inter;
            border-radius: 5px;
            border: none;
    }

    
    .editModalShowHolder .formHolder form .submitButtonHolder
     button:hover{
            background-color: rgb(0,128,0,0.5);
            color: white;
    }


    /* styling for displaying Task Details */
    .taskDetailsModalShowHolder{
        width: 100%;
        height: 100vh;
        background: rgb(183,203,232,0.5);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
  
    .taskDetailsModalHideHolder{
     display: none;
    }


    .taskDetailsModalShowHolder .fatimesHolder{
        width: 100%;
        position: relative;
    }

    .taskDetailsModalShowHolder .fatimesHolder .faTimes{
        position: absolute;
        top: -4.5em;
        left: 74em;
        cursor: pointer;
        
    }

    .taskDetailsModalShowHolder .taskDetailsHolder{
        width: 50%;
        height: 60%;
        background-color: rgb(34,59,99,0.9);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .taskDetailsModalShowHolder .taskDetailsHolder h3{
        text-align: center;
        color: white;
        font-size: 2em;
        font-family: Inter;
    }

    .taskDetailsModalShowHolder 
    .taskDetailsHolder .innerDetailsHolder{
       font-family: 'Courier New', Courier, monospace;
       font-size: 1.5em;
       color: white;
       width: 80%;
    }

    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .titleHolder {
      margin-bottom: 1em;
    }

    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .titleHolder span:nth-child(1){
        font-family: 'Comfortaa', cursive;

      font-family: Inter;
    }

    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .titleHolder span:nth-child(2){
        padding-left: 2.3em;
        font-size: 0.8em;
    }

    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .detailsHolder {
      margin-bottom: 1em;
    }


    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .detailsHolder span:nth-child(1){
        font-weight: bold;
        font-family: 'Comfortaa', cursive;

    }

    .taskDetailsModalShowHolder .taskDetailsHolder 
    .innerDetailsHolder .detailsHolder span:nth-child(2){
      padding-left: 1em;
      font-size: 0.8em;
    }

    @media (max-width: 576px) {
  
  .modalShowHolder .fatimesHolder .faTimes{
      position: absolute;
      top: -1.3em;
      left: 45em;
   
      
  }

  .editModalShowHolder .fatimesHolder .faTimes{
    position: absolute;
      top: -1.3em;
      left: 45em;
        
    }
}

  @media (min-width: 577px) and (max-width: 768px){
  
      .modalShowHolder .fatimesHolder .faTimes{
          position: absolute;
      top: -1.3em;
      left: 45em;
   
  }

  .editModalShowHolder .fatimesHolder .faTimes{
    position: absolute;
      top: -1.3em;
      left: 45em;
        
    }
}

@media (min-width: 769px) and (max-width: 992px){
  .modalShowHolder .fatimesHolder .faTimes{
      position: absolute;
      top: -1.3em;
      left: 45em;
  }

  .editModalShowHolder .fatimesHolder .faTimes{
    position: absolute;
      top: -1.3em;
      left: 45em;
        
    }
}

@media (min-width: 993px) and (max-width: 1024px) {

  .modalShowHolder .fatimesHolder .faTimes{
      position: absolute;
      top: -1.3em;
      left: 45em;
  }
  .editModalShowHolder .fatimesHolder .faTimes{
    position: absolute;
      top: -1.3em;
      left: 45em;
        
    }
}
`;

export const BoardHolder = styled.div`
    width: 80%;
    height: 95vh;
    /* background-color: red; */
    border-radius: 10px;
    display: flex;
    
    h1{
        margin: 0;
    }

    @media (max-width: 576px) {
   width: 100%;
   display: flex;
   flex-direction: column;
}

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
        display: flex;
   flex-direction: column;

}

@media (min-width: 769px) and (max-width: 992px){
    width: 100%;
    display: flex;
   flex-direction: column;

}

@media (min-width: 993px) and (max-width: 1024px) {
    width: 100%;
    display: flex;
   flex-direction: column;

}
`;

export const LeftSideBar = styled.div`
   /* background: rgb(54,83,126); */
   background: rgb(183,203,232);
   width: 25%;
   height: 100%;
   border-top-left-radius:10px;
   border-bottom-left-radius:10px;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 576px) {
   width: 100%;
}

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;

}

@media (min-width: 769px) and (max-width: 992px){
    width: 100%;

}

@media (min-width: 993px) and (max-width: 1024px) {
    width: 100%;

}
   
`;


export const InnerLeftSideBar = styled.div`
     background: rgb(34,59,99);
   width: 95%;
   height: 95%;
   border-radius:10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   

   ul li{
    list-style: none;
    margin: 2em 0;
   }

   ul li button{
    font-family: 'Inter', sans-serif;
    width:160px;
    padding: 1em 1.5em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
   }

   ul li button:hover{
    background: rgb(183,203,232);
    color: rgb(34,59,99);
    font-weight: bold;

   }


   .logoutHolder {
    display: flex;
    justify-content: center;

   }

   .logoutHolder button{
    padding: 0.5em 2.5em;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Inter', sans-serif;
    margin-bottom: 30px;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
   
   }

   .logoutHolder button:hover{
        background-color: orange;
        border: none;
        border-radius: 5px;
        color: white;
   }

   @media (max-width: 576px) {
   display: flex;
   flex-direction:row;

   ul {
     display: flex;
   }

   ul li button{
    width:150px;

 
   }

   ul li{
    list-style: none;
    margin: 0.5em 0;
   }
}

    @media (min-width: 577px) and (max-width: 768px){
        display: flex;
   flex-direction:row;
   width: 100%;
   height: 40%;
   box-sizing: border-box;

   ul {
    margin: 0;
     display: flex;
     justify-content: space-between;
     align-items: center;
     /* background-color: orange; */
     height: 100%;
     box-sizing: border-box;
     width: 70%;
     height: 100%;
   }

   ul li button{
    width:145px;
 
   }

   ul li{
    list-style: none;
    /* margin: 0.5em 0; */
   }

   .logoutHolder {
    display: flex;
align-items: center;
   }

   .logoutHolder button{
    height: 65%;
    padding: 0 2.5em;
    font-size: 1em;
    margin-bottom: 0;
    margin-right: 0.5em;
   
   }
}

@media (min-width: 769px) and (max-width: 992px){
    display: flex;
   flex-direction:row;
   justify-content: space-between;

   ul {
     display: flex;
   }

   ul li button{
    width:150px;

   }

   ul li{
    list-style: none;
    margin: 0.5em 0;
   }

}

@media (min-width: 993px) and (max-width: 1024px) {
    display: flex;
   flex-direction:row;

   ul {
     display: flex;
   }

   ul li button{
    width:150px;
 
   }

   ul li{
    list-style: none;
    margin: 0.5em 0;
   }

}
`;

export const RightSideBar = styled.div`
   background: rgb(183,203,232);
   width: 75%;
   height: 100%;
   border-top-right-radius:10px;
   border-bottom-right-radius:10px;
   display: flex;
   justify-content: center;
   align-items: center;

   
   @media (max-width: 576px) {
  width: 100%;
}

    @media (min-width: 577px) and (max-width: 768px){
      width: 100%;

 
}

@media (min-width: 769px) and (max-width: 992px){
   
  width: 100%;

}

@media (min-width: 993px) and (max-width: 1024px) {
  
  width: 100%;

}
`;


export const InnerRightSideBar = styled.div`
 background: rgb(237,242,248);
   width: 98%;
   height: 95%;
   border-radius:10px;

   .header{
    width: 100%;
    min-height: 10vh;
    background-color:rgb(34,59,99,0.5);
    display: flex;
    justify-content: center;
    align-items: center;


   }

   .header p{
    margin: 0;
    font-size: 1.5em;
    font-family: Inter;
    color:white;
   }

   .taskDetailsHolder{

    display: flex;
    flex-direction: column;
    align-items: center;
    
   }

   .taskDetailsHolder .taskHolder{
    width: 90%;
    height: 3em;
    background-color: blueviolet;
    border-radius: 5px;
    margin: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
  

  
`;