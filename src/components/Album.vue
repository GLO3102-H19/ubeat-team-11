<template>
    <div id="Album">

      <div class="Album">

        <md-card style="background-color: black">
            <md-card-header >
              <md-card-header-text >
                <div class="md-title" style="color: white"  >Album</div>
                <div class="md-subhead" style="color: white" >Artist</div>
                <p class="albumDescription">  Studio album by the Beatles                       </p>
                <p class="albumDescription">  Released	26 September 1969                       </p>
                <p class="albumDescription">  Recorded	22 February – 20 August 1969            </p>
                <p class="albumDescription">  Length	47:23                                     </p>
               </md-card-header-text>

              <md-card-media-big class="imageAlbum" >
                <img class="img" align="left" width="250" height="250" src="https://upload.wikimedia.org/wikipedia/pt/3/3d/Abbey_Road.jpg" alt="Album Pic">
              </md-card-media-big>
            </md-card-header>

            <md-card-actions class="buttonAlbum" >
              <md-button >  <md-icon>fast_rewind</md-icon>   </md-button>
              <md-button >  <md-icon>play_arrow</md-icon>   </md-button>
              <md-button >  <md-icon>fast_forward</md-icon>   </md-button>
            </md-card-actions>
         </md-card>

      </div>

      <div class="song" > <h3>song 1</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 2</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 3</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 4</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 5</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 6</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 7</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 8</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>
      <div class="song"> <h3>song 9</h3> <md-button class="md-accent" align="top">  <md-icon>play_arrow</md-icon></md-button> </div>


    </div>
</template>

<style>




  #Album
  {
    background-size: cover;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
  }


  .albumDescription{
    color: #bbc3c8;
    font-family: Verdana sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin: 0;
    position: relative;
    padding-left: 2%;
    padding-right: 50%;
    text-align:justify;
    text-indent: 30px;

  }

  .buttonAlbum{
    color: black;
    position: page;
    padding-left: 2%;
    padding-right: 30%;

  }
  .imageAlbum{
    justify-content: revert;
    position: page;
    padding-left: 2%;
    padding-right: 30%;
  }


  .md-accent {
    color: white;
  }

  .song{
    color: white;
    display: flex;
    height: unset;
    justify-content: space-around;
    width:250px;
  }


</style>
