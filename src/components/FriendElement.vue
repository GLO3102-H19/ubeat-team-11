<template>
  <md-card>
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
      <md-switch v-model="friend.doIfollow" :change="UpdateFollow()">{{this.followStatusText}}</md-switch>
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
      const editName = this.name.split(' ');
      this.initial = editName[0].charAt(0) + editName[1].charAt(0);
    }
  },
  UpdateFollow() {
    if (this.friend.doIfollow) {
      // mettre API for follow someone
      const result = api.postFollow(this.friend.id);
      console.log(result);
      this.followStatusText = 'follow';
      this.$emit('update-follow', this.friend.doIfollow);
    } else {
      // mettre API for unfollow someone
      const result = api.deleteFollow(this.friend.id);
      console.log(result);
      this.followStatusText = 'unfollow';
      this.$emit('update-follow', this.friend.doIfollow);
    }
  }
};
</script>
<style scoped>
</style>
