<template>
  <div class="navigation-container">
    <div class="navigation-content">
      <div class="navigation-header">
        <h1>Spotify Top 50 Songs</h1>
      </div>
      <div class="navigation-body">
        <div class="navigation-links">
          <ul>
            <li>
              <v-btn variant="elevated" class="dashboard-btn">
                <router-link to="/">Dashboard</router-link>
              </v-btn>
            </li>
            <li>
              <v-btn variant="elevated" class="login-btn" rounded>
                <router-link to="/login">Login</router-link>
              </v-btn>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
}
</script>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1vw 0;
  gap: 2em;
  background-color: #000000;
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

.navigation-container .navigation-content .navigation-header h1 {
  font-size: 2em;
  color: #ffffff;
}

.navigation-container .navigation-content .navigation-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navigation-container .navigation-content .navigation-body .navigation-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-body .navigation-links ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  gap: 2em;
}

.navigation-container .navigation-content .navigation-body .navigation-links ul li .dashboard-btn {
  background-color: #741ed6;
  color: white;
  transition: background-color 0.3s ease;
}

.navigation-container .navigation-content .navigation-body .navigation-links ul li .login-btn {
  background-color: #1ed65e;
  color: white;
  transition: background-color 0.3s ease;
}

.navigation-container .navigation-content .navigation-body .navigation-links ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
}
</style>
