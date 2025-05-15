<script>
export default {
  name: 'AppNavigation',
}
</script>

<template>
  <div class="navigation-container">
    <div class="navigation-content">
      <div class="navigation-links">
        <ul>
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
}

.navigation-container .navigation-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.navigation-container .navigation-content .navigation-links ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-container .navigation-content .navigation-links ul li {
  margin: 0 15px;
}

.navigation-container .navigation-content .navigation-links ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;
}
</style>
