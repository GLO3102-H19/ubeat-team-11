<template>
    <div id="album">


       <md-content style="background-color: black;color: white">
              <div class="imageAlbum" >
                  <figure>
                     <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album">
                     <figcaption  >Album name </figcaption>
                     <md-button > <md-icon style="color: white">shuffle </md-icon></md-button>
                   </figure>
                 <p class= "textAlbum"  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In quod, cum eum beatae aperiam nobis laudantium necessitatibus
                    perferendis,
                    laboriosam natus dignissimos reprehenderit suscipit deserunt eos eligendi,
                    perspiciatis molestiae sit minima.
                  </p>
              </div>
      </md-content>



      <div class="artistContent">
        <md-table md-card>


          <md-table-row style="background:black">
            <md-table-head style="color:white">Track</md-table-head>
            <md-table-head style="color: white">Title</md-table-head>
            <md-table-head style="color:white">Time</md-table-head>
            <md-table-head style="color:white"> </md-table-head>
          </md-table-row>

          <md-table-row class="song">
            <md-table-cell>1</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>



          </md-table-row><md-table-row class="song">
            <md-table-cell>2</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

        </md-table-row>

          <md-table-row class="song">
            <md-table-cell>3</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>


          </md-table-row><md-table-row class="song">
            <md-table-cell>4</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

        </md-table-row>

          <md-table-row class="song">
            <md-table-cell>5</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

          </md-table-row><md-table-row class="song">
            <md-table-cell>6</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

           </md-table-row>

          <md-table-row class="song">
            <md-table-cell>7</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

          </md-table-row><md-table-row class="song">
            <md-table-cell>8</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

           </md-table-row>


          </md-table-row><md-table-row class="song">
            <md-table-cell>9</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

           </md-table-row>

          <md-table-row class="song">
            <md-table-cell>10</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

          </md-table-row><md-table-row class="song">
            <md-table-cell>11</md-table-cell>
            <md-table-cell>Beta</md-table-cell>
            <md-table-cell>1:47</md-table-cell>
            <md-table-cell><md-icon style="color: red">play_arrow</md-icon></md-table-cell>

           </md-table-row>

        </md-table>
      </div>




    </div>


</template>

<style>



  #album
  {
    background-size: cover;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
  }


  .imageAlbum{
    align-content:space-evenly;
   display: flex;

  }


  .song{
    background-color: black;
    color: white;

  }
.textAlbum{
  align-self:center;
  justify-content: center;
  text-align: justify;
  width: 40%;

;

}

</style>
