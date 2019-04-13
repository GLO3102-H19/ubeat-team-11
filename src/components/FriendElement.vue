<template>
  <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{friend.name}}</div>
        <div class="md-subhead">{{friend.email}}</div>
      </md-card-header-text>

      <md-card-media>
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{this.initial}}</md-ripple>
        </md-avatar>
      </md-card-media>
    </md-card-header>
    <md-card-actions>
       <md-switch v-model="friend.doIfollow" @change="UpdateFollow()">{{this.followStatusText}}</md-switch>
    </md-card-actions>
  </md-card>
</template>
<script>
import * as api from '../api';

export default {
  name: 'FriendElement',
  props: {
    friend: {
      type: Object,
      required: false
    },
  },
  data: () => ({
    initial: '',
    followStatusText: 'unfollow',
  }),
  mounted() {
    this.getIntial();
  },
  methods: {
    getIntial() {
      const editName = this.friend.name.split(' ');
      if (editName.length !== 1) {
        this.initial = editName[0].charAt(0) + editName[1].charAt(0);
      } else {
        this.initial = editName[0].charAt(0);
      }
    },
    async UpdateFollow() {
      console.log(this.friend.doIfollow);
      if (this.friend.doIfollow) {
        // mettre API for follow someone
        const result = await api.postFollow(this.friend.id);
        console.log(result);
        this.followStatusText = 'follow';
        this.$emit('add-follow', this.friend.id);
      } else {
        // mettre API for unfollow someone
        const result = await api.deleteFollow(this.friend.id);
        console.log(result);
        this.followStatusText = 'unfollow';
        this.$emit('delete-follow', this.friend.id);
      }
    }
  },
};
</script>
<style scoped>
</style>
