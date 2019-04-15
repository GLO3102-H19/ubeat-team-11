<template>
    <main>
     <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
     <h1 class="md-display-1">My Friends</h1>
    <friend-element-list v-bind:friends="this.dataFriends"></friend-element-list>
    </main>    
</template>
<script>
import FriendElementList from '@/components/FriendElementList';
import * as api from '../api';

export default {
  name: 'MyFiends',
  data: () => ({
    dataFriends: [],
    progressStatus: true
  }),
  components: {
    'friend-element-list': FriendElementList
  },
  beforeMount() {
    if (api.checkIfCookieIsAlive() === false) {
      this.$router.push({ name: 'Login' });
    }
  },
  async mounted() {
    if (api.checkIfCookieIsAlive() === false) {
      this.progressStatus = false;
      this.$router.push({ name: 'Login' });
    } else {
      const user = await api.getTokenInfo();
      console.log(user);
      console.log(user.data.following);
      user.data.following.forEach((element) => {
        const item = element;
        item.doIfollow = true;
        this.dataFriends.push(item);
      });
      this.progressStatus = false;
    }
  }

};
</script>

<style scoped>

</style>
