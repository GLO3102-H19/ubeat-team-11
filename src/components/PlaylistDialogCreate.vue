<template>
   <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Create a Playlist</md-dialog-title>

      <md-field :class="{ 'md-invalid': error }">
      <label>Title</label>
      <md-input v-model="required" required></md-input>
      <span class="md-error" :v-if="error">the Title is required</span>
    </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">Close</md-button>
        <md-button class="md-primary" @click="validation()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-fab md-primary" @click="showDialog = true"><md-icon>add</md-icon></md-button>
  </div>
</template>

<script>
 import * as api from '../api';

export default {
   name: 'PlaylistDialogCreate',
   data: () => ({
     required: '',
     showDialog: false,
     error: false,
     output: {}

   }),
   methods: {
     validation() {
       if (!this.required) {
         this.error = true;
       } else {
         this.output = api.createPlayList(this.required, 'tommy@ubeat.ca');
         this.required = '';
         this.showDialog = false;
       }
     },
     close() {
       this.required = '';
       this.showDialog = false;
       this.error = false;
     }
   }
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