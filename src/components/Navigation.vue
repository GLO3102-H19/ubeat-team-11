<template>
  <md-toolbar class="md-layout md-transparent">
    <div class="md-toolbar-row md-layout">
      <div class="md-layout-item md-toolbar-section-start md-layout-item">
        <h3 class="md-title" style="flex: 1">
          <a href="/" id="titleDesign">Ubeat</a>
        </h3>
      </div>

      <md-autocomplete class="md-layout-item md-medium-hide md-small-hide md-xsmall-hide search" v-model="selectSong" :md-options="songs" md-layout="box">
        <label>Search...</label>
      </md-autocomplete>

      <div class="md-layout-item md-toolbar-section-end">
      
        <md-button class="md-medium-hide md-small-hide md-xsmall-hide" to="/artist">Artist</md-button>
        <md-button class=" md-medium-hide md-small-hide md-xsmall-hide" to="/album">Album</md-button>
          <md-button class="md-medium-hide md-large-hide md-xlarge-hide showIcon">
          <md-icon>
            search
          </md-icon>
     
        </md-button>
         
         
         <md-button class="md-medium-hide md-large-hide md-xlarge-hide showIcon" to="/artist">
          <md-icon >
            recent_actors
          </md-icon>
         </md-button>
        
        <md-button class="md-medium-hide md-large-hide md-xlarge-hide showIcon" to="/album">
          <md-icon >
            library_music
          </md-icon>
        </md-button>

         
      </div>
      <!--<div class="md-layout-item md-medium-hide md-large-hide md-xlarge-hide md-toolbar-section-end">
         <md-button class="md-medium-hide md-large-hide md-xlarge-hide">
         
      </div>-->
    </div>
  </md-toolbar>
</template>
<script>
export default {
  name: 'AutocompleteBox',
  data: () => ({
    selectSong: null,
    songs: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo']
  })
};
</script>



<style>

@media screen and (max-width: 599px){
  .showIcon{
    display: flex ;
  }
}
@media screen and (min-width: 600px) and (max-width: 959px) {
  .showIcon{
    display: flex;
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px) {
    .showIcon{
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
