<template>
  <md-toolbar class="md-layout md-transparent" >
    <div class="md-toolbar-row md-layout">
      <div class="md-layout-item md-toolbar-section-start md-layout-item">
        <h3 class="md-title" style="flex: 1">
          <a href="/" id="titleDesign">Ubeat</a>
        </h3>
      </div>

      <div>

        <md-autocomplete
        md-input-placeholder="Search"
        class="md-layout-item md-medium-hide md-small-hide md-xsmall-hide search"
        v-model="selectSong"
        :md-options="searchResult"
        md-layout="box"
        @md-changed="getSearchAlbum"
        @md-opened="getSearchAlbum"
        @md-selected="pageSearched(this.$el)"
        >
          <template slot="md-autocomplete-item" slot-scope="{ item,term }">{{ item.name }}</template>
          <template slot="md-autocomplete-empty" slot-scope="{ term }"></template>
          <md-progress-spinner v-if="loaded" class="md-accent" md-mode="indeterminate"></md-progress-spinner>
        </md-autocomplete>

        <md-radio v-if="selectSong!=null"  v-for="option in options"  v-model="radioChoice" :value="option.choice">{{option.choice}}</md-radio>

      </div>
      <div class="md-layout-item md-toolbar-section-end">
        <md-button v-for="item in navElement" :key="item.key" :to="item.routing" class="md-medium-hide md-small-hide md-xsmall-hide">{{item.navItem}}</md-button>
        <md-button v-for="item in navElement" :key="item.key" :to="item.routing" class="md-medium-hide md-large-hide md-xlarge-hide showIcon">
          <md-icon>{{item.icon}}</md-icon>
        </md-button>
        <md-button class="md-medium-hide md-large-hide md-xlarge-hide showIcon">
          <md-icon>search</md-icon>
        </md-button>

      </div>
    </div>
    <search-element-list  v-bind:visible="visible" :selectSong="selectSong" :radioChoice="radioChoice"></search-element-list>

  </md-toolbar>



</template>

<script>

import Search from '@/components/Search';

import * as api from '../api';

export default {
  name: 'navigation',
  data: () => ({
    visible: false,
    selectSong: null,
    radioChoice: 'Global',
    songsList: [],
    searchResult: [],
    options: [{ choice: 'Artiste' },
              { choice: 'Album' },
              { choice: 'Chanson' },
              { choice: 'Utilisateur' },
              { choice: 'Global' }],
    navElement: [
      { navItem: 'Log In', icon: 'account_box', routing: '/login' }
    ],
    loaded: false
  }),

  components: {
    'search-element-list': Search
  },

  methods: {

    async getSearchItem(searchTerm) {
      console.log(searchTerm);
      const x = await api.globalSearched(searchTerm);
      window.setTimeout(() => {
        if (!searchTerm) {
          this.searchResult = x.results;
        } else {
          x.results.filter((item) => {
            console.log(item);
            if (item.wrapperType === 'track') {
              return this.searchResult.push({
                name: item.trackCensoredName, id: item.collectionId
              });
            } else if (item.wrapperType === 'collection') {
              return this.searchResult.push({ name: item.collectionName, id: item.collectionId });
            }
            return this.searchResult.push({ name: item.artistName, id: item.artistId });
          });
        }
      });
      console.log(this.searchResult);
    },

    async getSearchArtist(searchTerm) {
      console.log(searchTerm);
      const x = await api.artistSearched(searchTerm);
      window.setTimeout(() => {
        if (!searchTerm) {
          this.searchResult = x.results;
        } else {
          x.results.filter((item) => {
            console.log(item);
            return this.searchResult.push({ name: item.artistName,
              id: item.artistId });
          });
        }
      });
      console.log(this.searchResult);
    },

    async getSearchAlbum(searchTerm) {
      console.log(searchTerm);
      this.loaded = true;
      window.setTimeout(async () => {
        const x = await api.albumSearched(searchTerm);
        if (!searchTerm) {
          this.searchResult = x.results;
        } else {
          x.results.filter(item => this.searchResult.push({ name: item.collectionName,
            id: item.collectionId }));
        }
        console.log(this.searchResult.length);
      }, 600);
      this.loaded = false;
    },

    async getSearchUser(searchTerm) {
      const x = await api.userSearched(searchTerm);
      window.setTimeout(() => {
        if (searchTerm === '') {
          this.searchResult = x.results;
        } else {
          x.results.filter((item) => {
            console.log(item);
            return this.searchResult.push({ name: item.name, id: item.id });
          });
        }
      });
      console.log('searchResult ', this.searchResult);
    }
  },
  pageSearched(value) {
    console.log('teste50000', value);
    // this.selectSong = this.searchResult[value].name;
  }


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
</style>
