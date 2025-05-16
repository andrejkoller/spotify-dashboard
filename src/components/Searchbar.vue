<template>
  <div class="searchbar-container">
    <div class="searchbar-content">
      <v-text-field
        label="Search"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        v-model="searchQuery"
        :placeholder="'Search for tracks or artists...'"
        @input="filterTracks"
        clearable
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSearchbar',
  props: {
    tracks: {
      type: Array,
    },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    filterTracks() {
      const query = this.searchQuery.toLowerCase()
      const filtered = this.tracks.filter(
        (track) =>
          track.name.toLowerCase().includes(query) ||
          track.artists.some((artist) => artist.name.toLowerCase().includes(query)) ||
          track.album.name.toLowerCase().includes(query),
      )
      this.$emit('search', filtered)
    },
  },
}
</script>

<style scoped>
.searchbar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.searchbar-container .searchbar-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
