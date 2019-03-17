<template>
 <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{artist.artistName}}</div>
        </md-card-header-text>

        <md-card-media>
          <md-avatar class="md-avatar-icon md-large">
            <md-icon>personne_outline</md-icon>
          </md-avatar>
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button @click="">Details</md-button>
      </md-card-actions>
    </md-card>
</template>
<script>
export default {
    name: 'ArtistElement',
    props:{
        artist: {
            type: Object,
            required: true,
            defaut: () => ({
                artistId: 0,
                artistName: 'Unknown',
                primaryGenreName: 'Unknown',
                artistLinkUrl: 'Unknown'
            })
        }
    }
}
</script>
<style>

</style>

