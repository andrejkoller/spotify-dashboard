<template>
  <main class="dashboard">
    <div class="dashboard-header">
      <Searchbar :tracks="tracks" @search="handleSearch" />
    </div>
    <div class="dashboard-container">
      <div class="dashboard-content">
        <div class="spotify-top-tracks" v-if="filteredTracks.length > 0">
          <SongCard
            v-for="(track, index) in filteredTracks"
            :key="index"
            :track="track"
            :index="index"
          />
        </div>
        <div class="spotify-notification" v-else>
          <p>
            No tracks found. Please try a different search term or check your Spotify access token.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
import SongCard from '@/components/SongCard.vue'
import { fetchTopTracks } from '@/services/spotifyService'

export default {
  components: {
    Searchbar,
    SongCard,
  },
  data() {
    return {
      tracks: [],
      filteredTracks: [],
    }
  },
  async mounted() {
    const token = localStorage.getItem('spotify_token')
    if (token) {
      const data = await fetchTopTracks(token)
      if (data) {
        this.tracks = data.items
        this.filteredTracks = data.items
      } else {
        console.error('Failed to fetch top tracks')
      }
    } else {
      console.error('No access token found in local storage')
    }
  },
  methods: {
    handleSearch(filtered) {
      this.filteredTracks = filtered
    },
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 100px;
}

.dashboard .dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dashboard .dashboard-container .dashboard-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2em;
}

.dashboard .dashboard-container .dashboard-content .spotify-top-tracks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2em;
}
</style>
