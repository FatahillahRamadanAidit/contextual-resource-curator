<template>
  <Navbar />

  <div class="main-content">

    <Header />

    <div class="container-fluid">

      <div class="card shadow border-0">

        <div class="card-header bg-dark text-white">
          Recommendation History
        </div>

        <div class="card-body">

          <table class="table">

            <thead>
              <tr>
                <th>Resource</th>
                <th>Reason</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr
                v-for="item in history"
                :key="item.id"
              >
                <td>
                  {{ item.resource.title }}
                </td>

                <td>
                  {{ item.recommendationReason }}
                </td>

                <td>
                  {{ item.createdAt }}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import api from "../services/api";

import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";

const history = ref([]);

const loadHistory = async () => {

  const response =
    await api.get("/recommendations/history");

  history.value =
    response.data;
};

onMounted(() => {
  loadHistory();
});
</script>

<style scoped>
.main-content {
  margin-left: 260px;
  padding: 30px;
  background: #f8fafc;
  min-height: 100vh;
}
</style>