<template>
  <div class="song-card-container" @click="() => navigateToTrack(track)">
    <div class="song-card-content">
      <v-card variant="outlined" class="song-card">
        <div class="song-card-wrapper">
          <div class="song-card-index">
            <p>{{ index + 1 }}</p>
          </div>
          <div class="song-card-image">
            <v-img :src="track.album.images[0].url" height="200" width="200"></v-img>
          </div>
        </div>
        <div class="song-card-title">
          <div class="song-card-title-album">
            <v-card-title>{{ track.name }}</v-card-title>
            <p>{{ track.album.name }}</p>
          </div>
          <div class="song-card-title-artist">
            <v-card-subtitle>{{ track.artists[0].name }}</v-card-subtitle>
          </div>
        </div>
        <div class="song-card-duration">
          <v-card-text>
            <p>{{ (track.duration_ms / 60000).toFixed(2) }}</p>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
defineProps({
  track: Object,
  index: Number,
})

function navigateToTrack(track) {
  window.open(track.external_urls.spotify, '_blank')
}
</script>

<style scoped>
.song-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.song-card-container .song-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.song-card-container .song-card-content .song-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1vw;
  gap: 2em;
  height: 100%;
  width: 100%;
  border-color: #616161;
  cursor: pointer;
}

.song-card-container .song-card-content .song-card:hover {
  border-color: #ffffff;
  transition: border-color 0.3s ease;
}

.song-card-container .song-card-content .song-card .song-card-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

.song-card-container .song-card-content .song-card .song-card-title {
  width: 100%;
}

.v-card-title {
  padding: 0;
}

.v-card-subtitle {
  padding: 0;
}
</style>
