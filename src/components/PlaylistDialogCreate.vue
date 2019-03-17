<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Create a Playlist</md-dialog-title>
  
     
      <md-progress-bar md-mode="indeterminate" v-if="sending" />

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" type="submit" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>

    </md-dialog>
  </div>
</template>

<script>
 

export default {
   name: 'PlaylistDialogCreate',
   data: () => ({
     name: '',
     showDialog: false,
     sending: false
   })
};
</script>

<style scoped>
 .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>