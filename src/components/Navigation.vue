<template>
  <md-toolbar class="md-layout md-transparent">
    <div class="md-toolbar-row md-layout">
      <div class="md-layout-item md-toolbar-section-start md-layout-item">
        <h3 class="md-title" style="flex: 1">
          <a href="/" id="titleDesign">Ubeat</a>
        </h3>
      </div>

      <md-autocomplete
        class="md-layout-item md-medium-hide md-small-hide md-xsmall-hide search"
        v-model="selectSong"
        :md-options="songs"
        md-layout="box"
      >
        <label>Search...</label>
      </md-autocomplete>

      <div class="md-layout-item md-toolbar-section-end">
      
        <md-button v-for="item in navElement" :key="item.key" :to="item.routing" class="md-medium-hide md-small-hide md-xsmall-hide">{{item.navItem}}</md-button>    
        </md-button>

        <md-button v-for="item in navElement" :key="item.key" :to="item.routing" class="md-medium-hide md-large-hide md-xlarge-hide showIcon">
          <md-icon>{{item.icon}}</md-icon>
          
        </md-button>

        <md-button class="md-medium-hide md-large-hide md-xlarge-hide showIcon">
          <md-icon>search</md-icon>
        </md-button>
      </div>
    </div>
  </md-toolbar>
</template>
<script>
export default {
  name: 'navigation',
  data: () => ({
    selectSong: null,
    songs: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
    navElement: [
      { navItem: 'Sign in', icon: 'how_to_reg', routing: '/signin' },
      { navItem: 'Log In', icon: 'account_box', routing: '/login' },
      { navItem: 'Artiste', icon: 'recent_actors', routing: '/artist' },
      { navItem: 'Album', icon: 'library_music', routing: '/album' }
    ]
  })
};
</script>



<style>
@media screen and (max-width: 599px) {
  .showIcon {
    display: flex;
  }
}
@media screen and (min-width: 600px) and (max-width: 959px) {
  .showIcon {
    display: flex;
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px) {
  .showIcon {
    display: flex;
  }
}

.search {
  background: gray !important;
  max-width: 500px;
}

#titleDesign {
  color: black;
}
</style>
