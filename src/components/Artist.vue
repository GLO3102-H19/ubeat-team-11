<template>
    <div>
          <div class="artistBanner">
     <h4 class="artistName">Artist Name</h4>
     <p class="artistDescription">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis 
         adipisci culpa nihil sed corporis assumenda enim ex hic sint odio, tempora vero omnis fuga aliquid necessitatibus, 
         exercitationem repudiandae ducimus.
     </p>
    </div>

    </div>
    
 
  
</template>

<style>
.artistBanner{

background: url(https://dummyimage.com/600x400/000/fff) no-repeat center center fixed; 
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content:space-between;
width: 100%;
}
.artistName{
    border-bottom: #555;
    color:#c9d0d4;
    font-family: Helvetica, sans-serif;
    font-size: 46px;
    font-weight: 100;
    line-height: 50px;
    letter-spacing: 1px;
    padding: 20px 0 40px;
    margin-bottom: auto;
    margin-top: 15px;
    
}
.artistDescription{
    color: #bbc3c8; 
    font-family: 'Verdana', sans-serif; 
    font-size: 16px; 
    line-height: 26px; 
    margin: 0;
    text-align: inherit; 
    text-indent: 25px;
    text-justify: newspaper;
   
}

</style>