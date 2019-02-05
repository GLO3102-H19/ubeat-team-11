<template> 
    <nav>
        <ul class="navBarContainer">
            <li>
                <router-link to="/">Home</router-link>
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
