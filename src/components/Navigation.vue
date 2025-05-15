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
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
