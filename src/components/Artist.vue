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

        <h5 class="artistContentSubTitles">Popular Songs</h5>
        <!--Par il faudrait design afin qu'il accepte plusieurs chanson-->
        <div class="artistPopularSong">

            <div class="SongRow">
            <img src="https://dummyimage.com/32x32/4558ff/000000.jpg" alt="Album Pic">
            <h6 class="titleSong">Title Song</h6>
            <h6 class="albumSong">Album Song</h6>
            <h6 class="timeSong">Time</h6>
            </div>
            <div class="SongRow">
            <img src="https://dummyimage.com/32x32/4558ff/000000.jpg" alt="Album Pic">
            <h6 class="titleSong">Title Song</h6>
            <h6 class="albumSong">Album Song</h6>
            <h6 class="timeSong">Time</h6>
            </div>
            <div class="SongRow">
            <img src="https://dummyimage.com/32x32/4558ff/000000.jpg" alt="Album Pic">
            <h6 class="titleSong">Title Song</h6>
            <h6 class="albumSong">Album Song</h6>
            <h6 class="timeSong">Time</h6>
            </div>
            <div class="SongRow">
            <img src="https://dummyimage.com/32x32/4558ff/000000.jpg" alt="Album Pic">
            <h6 class="titleSong">Title Song</h6>
            <h6 class="albumSong">Album Song</h6>
            <h6 class="timeSong">Time</h6>
            </div>
            <div class="SongRow">
            <img src="https://dummyimage.com/32x32/4558ff/000000.jpg" alt="Album Pic">
            <h6 class="titleSong">Title Song</h6>
            <h6 class="albumSong">Album Song</h6>
            <h6 class="timeSong">Time</h6>
            </div>

        </div>


        <h5 class="artistContentSubTitles">Albums</h5>
        <div class="artistAlbum">
            <figure>
                <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album Pic">
                <figcaption>AlbumTitle • Year</figcaption>
            </figure>
             <figure>
                <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album Pic">
                <figcaption>AlbumTitle • Year</figcaption>
            </figure>
             <figure>
                <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album Pic">
                <figcaption>AlbumTitle • Year</figcaption>
            </figure>
             <figure>
                <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album Pic">
                <figcaption>AlbumTitle • Year</figcaption>
            </figure>
             <figure>
                <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album Pic">
                <figcaption>AlbumTitle • Year</figcaption>
            </figure>

        </div>
    </div>
    </div>

</template>

<style>
.artistAlbum{
    color:#c9d0d4;
    display: flex;
    flex-flow: row wrap;
    font-family: Helvetica, sans-serif;
    justify-content: center;
}
.artistBackGround{
    background-color:#ccc;
    height:100%;
    left:0;
    opacity:0.8;
    position:fixed;
    top:0;
    width:100%;
    z-index:1000;
}
.artistBanner{
background: url(https://dummyimage.com/600x400/000/fff) no-repeat center center fixed;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content:space-between;
width: 100%;
}
.artistContent{
    background:black;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.artistContentSubTitles{
    color:#c9d0d4;
    font-family: Helvetica, sans-serif;
    font-size: 23px;
    font-weight: 100;
    letter-spacing: 1px;
    padding: 20px 0 5px;
    margin: 15px 0px auto 15px;
}
.artistDescription{
    color: #bbc3c8;
    font-family: Verdana sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin: 0;
    padding-left: 2%;
    padding-right: 50%;
    text-align:justify;
    text-indent: 30px;

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
    margin: 15px 0px auto 15px;

}
.artistPopularSong{
    align-items: center;
    color: #bbc3c8;
    display: flex;
    flex-direction:column;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    justify-content:space-around;
    margin: 0 10%;
    width: 50%;


}
.artistPopularSong>*{
    padding: auto;
    margin: auto;


}
figure>*{
    text-align: center;
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
.songInfo{
    display:flex;

}
.SongRow{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
}

</style>
