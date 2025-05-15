<template>
  <div class="callback-container">
    <div class="callback-content">
      <div class="auth-details">
        <div class="auth-success" v-if="token">
          <h2>Authentication successful!</h2>
          <v-btn variant="elevated" rounded>
            <router-link to="/">Redirect</router-link>
          </v-btn>
        </div>
        <div class="auth-failure" v-else>
          <h2>Authentication failed!</h2>
          <v-btn variant="elevated" rounded>
            <router-link to="/login">Try Again</router-link>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const token = ref('')

onMounted(async () => {
  const code = new URLSearchParams(window.location.search).get('code')
  const verifier = localStorage.getItem('verifier')

  if (!code || !verifier) return

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    code_verifier: verifier,
  })

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  const data = await res.json()
  token.value = data.access_token
  localStorage.setItem('spotify_token', token.value)
})
</script>

<style scoped>
.callback-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.callback-container .callback-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.callback-container .callback-content .auth-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
}

.callback-container .callback-content .auth-details .auth-success,
.callback-container .callback-content .auth-details .auth-failure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em;
}

.v-btn {
  background-color: #1ed65e;
  color: white;
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #1db954;
}
</style>
