<template>
    <md-content class="md-layout md-size-100 md-alignment-left-center md-gutter">
      <friend-element v-for="friend in friends" v-bind:key="friend.id" v-bind:friend="friend" v-on:add-follow="addFollow" v-on:delete-follow="deleteFollow"></friend-element>
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
      const index = this.friends.findIndex(e => e.id === value);
      this.friends[index].doIfollow = false;
    }
  }
};
</script>
<style scoped>

</style>
