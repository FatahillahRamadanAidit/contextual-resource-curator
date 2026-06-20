<template>
  <Navbar />

  <div class="main-content">

    <Header />

    <div class="container-fluid">

      <!-- Dashboard Cards -->
      <div class="row mb-4">

        <div class="col-md-4">
          <div class="card shadow border-0">
            <div class="card-body text-center">
              <h6 class="text-muted">Skill Level</h6>
              <h4>{{ skillLevel || "-" }}</h4>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow border-0">
            <div class="card-body text-center">
              <h6 class="text-muted">Interest</h6>
              <h4>{{ interest || "-" }}</h4>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow border-0">
            <div class="card-body text-center">
              <h6 class="text-muted">Goal</h6>
              <h4>{{ goal || "-" }}</h4>
            </div>
          </div>
        </div>

      </div>

      <!-- Profile Form -->
      <div class="card shadow border-0">

        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">User Profile</h5>
        </div>

        <div class="card-body">

          <div class="mb-3">
            <label class="form-label">
              Skill Level
            </label>

            <select
              v-model="skillLevel"
              class="form-select"
            >
              <option value="">
                Select Skill Level
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">
              Interest
            </label>

            <input
              v-model="interest"
              class="form-control"
              placeholder="Backend, Frontend, AI"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">
              Goal
            </label>

            <input
              v-model="goal"
              class="form-control"
              placeholder="Become Backend Developer"
            />
          </div>

          <button
            class="btn btn-primary"
            @click="saveProfile"
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";

const router = useRouter();

const skillLevel = ref("");
const interest = ref("");
const goal = ref("");

const saveProfile = async () => {
  try {

    await api.post("/profile", {
      skillLevel: skillLevel.value,
      interest: interest.value,
      goal: goal.value
    });

    alert("Profile saved successfully");

    router.push("/recommendations");

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      error.message
    );
  }
};
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
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
}
</style>