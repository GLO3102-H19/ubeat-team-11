<template>

    
    <md-toolbar class="md-transparent">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
         <h3 class="md-title" style="flex: 1"><a href="/" id="titleDesign">Ubeat</a></h3>
        </div>

        <md-autocomplete
        
          class="search"
          v-model="selectSong"
          :md-options="songs"
          md-layout="box">
          <label>Search...</label>
        </md-autocomplete>

        <div class="md-toolbar-section-end">

           <md-button to="/artist">Artist</md-button>
      <md-button to="/album">Album</md-button>
         
        </div>
      </div>
    </md-toolbar>
   
  
</template>
<script>
  export default {
    name: 'AutocompleteBox',
    data: () => ({
      selectSong: null,
      songs: [
        'Alpha',
        'Beta',
        'Charlie',
        'Delta',
        'Echo'
      ]
    })
  };
</script>

<style>

 .search {
   background: gray !important;
    max-width: 500px;
   
  }
  
#titleDesign{
 color: black; 
}
</style>
