<template>
    <nav>
      <div class="phone-viewport">
        <md-bottom-bar md-acent="shift">
          <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"  to="/"  ></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-artist" md-label="Artist" md-icon="people" to="/artist"></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-album" md-label="Album" md-icon="book" to="/album"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>






        <ul class="navBarContainer">





            <li>
                <router-link to="/" >Home</router-link>
            </li>
            <li>
                <router-link to="/artist">Artist</router-link>
            </li>
            <li>
                <router-link to="/album">Album</router-link>
            </li>
            <li class="search">
                <input type="text" class="searchInput" placeholder="Search...">
            </li>

        </ul>
    </nav>

</template>

<style>
.navBarContainer{
    display: flex;
    justify-content:space-around;
}
.searchInput{
    flex:1;
}
.navBarContainer>li{
    flex:1;
}



</style>
