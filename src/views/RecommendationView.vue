<template>
  <Navbar />

  <div class="main-content">

    <Header />

    <div class="container-fluid">

      <div class="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h3 class="mb-0">
            Recommended Resources
          </h3>

          <small class="text-muted">
            Personalized recommendations based on your profile
          </small>
        </div>

        <button
          class="btn btn-success"
          @click="getRecommendations"
        >
          <i class="bi bi-arrow-repeat"></i>
          Refresh Recommendations
        </button>

      </div>

      <div class="row">

        <div
          class="col-lg-6 mb-4"
          v-for="resource in recommendations"
          :key="resource.id"
        >

          <div class="card shadow border-0 h-100">

            <div class="card-body">

              <div
                class="d-flex justify-content-between align-items-start"
              >

                <h5 class="fw-bold">
                  {{ resource.title }}
                </h5>

                <i
                  class="bi bi-bookmark-star-fill
                         text-warning fs-3"
                ></i>

              </div>

              <div class="mb-3">

                <span class="badge bg-primary">
                  {{ resource.category }}
                </span>

                <span class="badge bg-success ms-2">
                  {{ resource.level }}
                </span>

              </div>

              <p class="text-muted">
                {{ resource.description }}
              </p>

            </div>

            <div class="card-footer bg-white border-0">

              <a
                :href="resource.url"
                target="_blank"
                class="btn btn-outline-primary w-100"
              >
                Open Resource
              </a>

            </div>

          </div>

        </div>

      </div>

      <div
        v-if="recommendations.length === 0"
        class="text-center mt-5"
      >

        <i
          class="bi bi-journal-bookmark fs-1 text-secondary"
        ></i>

        <h5 class="mt-3">
          No Recommendations Yet
        </h5>

        <p class="text-muted">
          Complete your profile and generate recommendations.
        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import api from "../services/api";

import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";

const recommendations = ref([]);

const getRecommendations = async () => {
  try {

    const response =
      await api.get("/recommendations");

    recommendations.value =
      response.data.recommendations;

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      error.message
    );
  }
};

onMounted(() => {
  getRecommendations();
});
</script>

<style scoped>
.main-content {
  margin-left: 260px;
  padding: 30px;
  min-height: 100vh;
  background: #f8fafc;
}

.card {
  border-radius: 15px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>