<template>
    <md-content>
      <friend-element v-for="friend in friends" v-bind:key="friend.id" v-bind:friend="friend" v-on:update-follow="UpdateDialog"></friend-element>
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
    UpdateDialog(index, value) {
      this.friends[index].doIfollow = value;
    }
  }
};
</script>
<style scoped>

</style>
