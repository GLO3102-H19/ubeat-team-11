<template>
  <md-toolbar>
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title" style="flex: 1"><a href="/" id="titleDesign">Ubeat</a></h3>
        </div>


  <v-select v-if="isLogin" label="name" style="width: 500px" :filterable="true" :options="searchResult" @change="changeRoute" @search="wichFilter">
    <template slot="no-options">
      No Result Found
    </template>
    <template slot="option" slot-scope="option" >
     {{ option.name }}     
    </template>
    <template slot="selected-option" slot-scope="option">
      <div class="selected d-center"> 
        {{ option.name }}
      </div>
    </template>
  </v-select>
      
    <md-menu md-size="small" v-if="isLogin">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
       <md-menu-item v-for="option in choices" v-bind:key="option.key">
            <md-radio v-model="radioChoice" :value="option.choice">{{option.choice}}</md-radio>
       </md-menu-item>
      </md-menu-content>
    </md-menu>
        <div class="md-toolbar-section-end">
               
          <md-menu v-if="isLogin" md-size="big" md-direction="bottom-end">
            <md-avatar class="md-avatar-icon" md-menu-trigger>{{this.userName}}</md-avatar>
            <md-menu-content>
                <md-menu-item @click="myPlaylist()">My PlayList</md-menu-item>
                <md-menu-item @click="logOut()" class="md-accent">Log Out</md-menu-item>
            </md-menu-content>
          </md-menu>
           <md-button v-if="!isLogin" @click="LoginIn()" >Log in</md-button>
            <md-button v-if="!isLogin" @click="SignUp()">Sign Up</md-button>
        </div>
    </div>
    </md-toolbar>

</template>

<script>
import * as api from '../api';


export default {
  name: 'navigation',
  data: () => ({
    isLogin: false,
    selected: {},
    radioChoice: 'Global',
    userName: '',
    searchResult: [],
    choices: [{ key: 0, choice: 'Artist' },
              { key: 1, choice: 'Album' },
              { key: 4, choice: 'Global' },
              { key: 2, choice: 'Tracks' },
              { key: 3, choice: 'Utilisateur' }],
    navElement: [
      { navItem: 'Log In', icon: 'account_box', routing: '/login' }
    ],
    loaded: false
  }),
  async beforeMount() {
    if (api.checkIfCookieIsAlive() === false) {
      this.$router.push({ name: 'Login' });
    } else {
      const user = await api.getTokenInfo();
      this.userName = user.data.name.substring(0, 1);
      this.isLogin = true;
    }
  },
  created() {
    this.$bus.$on('logged', async (msg) => {
      if (msg === true) {
        const user = await api.getTokenInfo();
        this.userName = user.data.name.substring(0, 1);
        this.isLogin = msg;
        this.$router.replace({ name: 'Playlists' });
        this.$router.go();
      }
      return msg;
    });
  },
  methods: {
    wichFilter(search, loading) {
      if (this.radioChoice === 'Artist') {
        loading(true);
        this.getSearchArtist(loading, search, this);
      } else if (this.radioChoice === 'Album') {
        loading(true);
        this.getSearchAlbum(loading, search, this);
      } else if (this.radioChoice === 'Utilisateur') {
        loading(true);
        this.getSearchUser(loading, search, this);
      } else if (this.radioChoice === 'Tracks') {
        loading(true);
        this.getSearchTrack(loading, search, this);
      } else {
        loading(true);
        this.getSearchItem(loading, search, this);
      }
    },
    async getSearchItem(loading, search, vm) {
      const element = await api.globalSearched(search);
      window.setTimeout(async () => {
        if (element.status === 400 || search === '') {
          this.searchResult = [];
        } else {
          element.data.results.forEach((item) => {
            if (item.wrapperType === 'track') {
              vm.searchResult.push({ name: item.trackCensoredName, id: item.collectionId, direct: 'Album', params: { collectionId: item.collectionId } });
            } else if (item.wrapperType === 'collection') {
              vm.searchResult.push({ name: item.collectionName, id: item.collectionId, direct: 'Album', params: { collectionId: item.collectionId } });
            } else {
              vm.searchResult.push({ name: item.artistName, id: item.artistId, direct: 'Artist', params: { artistId: item.artistId } });
            }
          });
        }
        loading(false);
      }, 750);
    },
    async getSearchArtist(loading, search, vm) {
      const element = await api.artistSearched(search);
      window.setTimeout(() => {
        if (element.status === 400 || search === '') {
          this.searchResult = [];
        } else {
          element.data.results.forEach(item => (
            vm.searchResult.push({ name: item.artistName, id: item.artistId, direct: 'Artist', params: { artistId: item.artistId } })
            )
          );
        }
        loading(false);
      }, 500);
    },
    async getSearchAlbum(loading, search, vm) {
      const element = await api.albumSearched(search);
      console.log(element);
      window.setTimeout(() => {
        if (element.status === 400 || search === '') {
          this.searchResult = [];
        } else {
          element.data.results.forEach(item => vm.searchResult.push({ name: item.collectionName,
            id: item.collectionId,
            direct: 'Album',
            params: { collectionId: item.collectionId } }));
        }
        loading(false);
      }, 500);
    },

    async getSearchUser(loading, search, vm) {
      const element = await api.userSearched(search);
      window.setTimeout(() => {
        if (element.status === 400 || search === '') {
          this.searchResult = [];
        } else {
          element.data.forEach(item => vm.searchResult.push(
            { name: item.name, id: item.id, direct: 'UserProfile', params: { id: item.id } }
          ));
        }
        loading(false);
      }, 500);
    },
    async getSearchTrack(loading, search, vm) {
      const element = await api.trackSearched(search);
      window.setTimeout(() => {
        if (element.status === 400 || search === '') {
          this.searchResult = [];
        } else {
          element.data.results.forEach(item => vm.searchResult.push(
            { name: item.trackCensoredName, id: item.collectionId, direct: 'Album', params: { collectionId: item.collectionId } }
          ));
        }
        loading(false);
      }, 500);
    },
    changeRoute(option) {
      this.$router.push({ name: option.direct, params: option.params });
      this.$router.go();
    },
    logOut() {
      api.logOut();
      this.$router.replace({ name: 'Login' });
      this.$router.go();
    },
    LoginIn() {
      this.$router.push({ name: 'Login' });
    },
    SignUp() {
      this.$router.push({ name: 'SignUp' });
    },
    myPlaylist() {
      this.$router.push({ name: 'Playlists' });
    }
  },

};
</script>



<style>
@media screen and (max-width: 599px) {
  .showIcon {
    display: flex;
  }
}
@media screen and (min-width: 600px) and (max-width: 959px) {
  .showIcon {
    display: flex;
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px) {
  .showIcon {
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

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-siz
  color: #3c3c3c;
}
</e: 1.25em;style>
