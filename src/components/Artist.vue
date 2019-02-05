<template>
    <div>
    <div class="artistBanner">
     <h4 class="artistName">Artist Name</h4>
     <p class="artistDescription">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis 
         adipisci culpa nihil sed corporis assumenda enim ex hic sint odio, tempora vero omnis fuga aliquid necessitatibus, 
         exercitationem repudiandae ducimus.
     </p>

     <button class="randomSong">
         Shuffle
     </button>
    </div>
    <div class="artistContent">
        <h4 class="artistContentSubTitles">Popular Songs</h4>
        <div class="artistPopularSont">Add something...</div>
        <h4 class="artistContentSubTitles">Albums</h4>
        <div class="artistAlbum">Add somethins...</div>
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
    padding-left: 2%;
    padding-right: 50%;
    text-align:justify; 
    text-indent: 30px;
    
   
}
.randomSong{
    background: whitesmoke;
    border: 2px solid #fff;
    font-family: 'Helvetica',sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 8px 15px;
    overflow: hidden; /*Pour une icone Random*/
    padding: 10px 30px;
    text-transform: uppercase;
    transition: all 0.3s;
    width: 25%;
  

}
.randomSong:hover{
  
}

</style>
