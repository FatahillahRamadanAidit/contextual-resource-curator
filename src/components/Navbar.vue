<template>
  <div class="sidebar">

    <div class="text-center py-4">
      <h4 class="text-white">
        <i class="bi bi-robot"></i>
        CRC
      </h4>
      <small class="text-light">
        Resource Curator
      </small>
    </div>

    <hr class="text-secondary">

    <router-link
      to="/profile"
      class="menu-item"
    >
      <i class="bi bi-person-circle"></i>
      Profile
    </router-link>

    <router-link
      to="/recommendations"
      class="menu-item"
    >
      <i class="bi bi-journal-bookmark-fill"></i>
      Recommendations
    </router-link>

    <router-link
        to="/history"
        class="menu-item"
    >
        <i class="bi bi-clock-history"></i>
        History
    </router-link>

    <button
      class="btn btn-danger m-3 mt-auto"
      @click="logout"
    >
      <i class="bi bi-box-arrow-right"></i>
      Logout
    </button>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #0f172a,
    #1e293b
  );
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

.menu-item {
  color: #e2e8f0;
  text-decoration: none;
  padding: 15px 25px;
  margin: 5px 10px;
  border-radius: 10px;
  transition: .3s;
}

.menu-item:hover {
  background: #334155;
  color: white;
}

.router-link-active {
  background: #2563eb;
  color: white;
}
</style>