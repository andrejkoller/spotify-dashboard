<template>
  <main class="dashboard">
    <div class="dashboard-header">
      <Searchbar />
    </div>
    <div class="dashboard-container">
      <div class="dashboard-content">
        <div class="spotify-top-tracks">
          <SongCard
            v-for="(track, index) in topTracks"
            :key="index"
            :track="track"
            :index="index"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SongCard from '@/components/SongCard.vue'
import { fetchTopTracks } from '@/services/spotifyService'
import { onMounted, ref } from 'vue'

const topTracks = ref([])

onMounted(async () => {
  const token = localStorage.getItem('spotify_token')
  if (token) {
    const data = await fetchTopTracks(token)
    if (data) {
      topTracks.value = data.items
    } else {
      console.error('Failed to fetch top tracks')
    }
  } else {
    console.error('No access token found in local storage')
  }
})
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
