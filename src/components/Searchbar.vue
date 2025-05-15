<script>
export default {
  name: 'AppSearchbar',
}
</script>

<template>
  <div class="searchbar-container">
    <div class="searchbar-content">
      <v-text-field label="Search" variant="outlined"></v-text-field>
    </div>
  </div>
</template>

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
