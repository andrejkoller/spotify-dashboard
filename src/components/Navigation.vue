<script>
import Searchbar from './Searchbar.vue'

export default {
  name: 'AppNavigation',
  components: {
    Searchbar,
  },
}
</script>

<template>
  <div class="navigation-container">
    <div class="navigation-content">
      <div class="navigation-header">
        <h1>Spotify Top 50</h1>
      </div>
      <div class="navigation-body">
        <div class="navigation-links">
          <ul>
            <li>
              <v-btn variant="outlined">
                <router-link to="/">Dashboard</router-link>
              </v-btn>
            </li>
            <li>
              <v-btn variant="outlined">
                <router-link to="/login">Login</router-link>
              </v-btn>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navigation-footer">
      <Searchbar />
    </div>
  </div>
</template>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1vw;
  gap: 2em;
}

.navigation-container .navigation-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-links ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.navigation-container .navigation-content .navigation-links ul li {
  margin: 0 15px;
}

.navigation-container .navigation-content .navigation-links ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
}

.navigation-container .navigation-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
