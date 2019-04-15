<template>
  <md-content class="md-layout md-gutter md-size-100 md-alignment-left-center">
      <friend-element v-for="friend in friends" v-bind:key="friend.id" v-bind:friend="friend" v-on:add-follow="addFollow" v-on:delete-follow="deleteFollow" v-on:unfollow="unFollow"></friend-element>
    </md-content>
</template>
<script>
import FriendElement from '@/components/FriendElement';

export default {
  name: 'FriendElementList',
  props: {
    friends: Array,
  },
  components: {
    'friend-element': FriendElement
  },
  methods: {
    addFollow(value) {
      const index = this.friends.findIndex(e => e.id === value);
      this.friends[index].doIfollow = true;
    },
    deleteFollow(value) {
      console.log('ok');
      const index = this.friends.findIndex(e => e.id === value);
      this.friends[index].doIfollow = false;
      this.friends.splice(index, 1);
    },
    unFollow(value) {
      const index = this.friends.findIndex(e => e.id === value);
      this.friends[index].doIfollow = false;
    }
  }
};
</script>
<style>

</style>
