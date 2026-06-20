<template>
  <div class="container">

    <div class="row justify-content-center align-items-center vh-100">

      <div class="col-md-5">

        <div class="card shadow">

          <div class="card-body p-4">

            <h2 class="text-center mb-4">
              Login
            </h2>

            <div class="mb-3">
              <label>Email</label>

              <input
                v-model="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div class="mb-3">
              <label>Password</label>

              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>

            <button
              class="btn btn-primary w-100"
              @click="login"
            >
              Login
            </button>

            <button
              class="btn btn-outline-secondary w-100 mt-2"
              @click="goRegister"
            >
              Register
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const router = useRouter();

const email = ref("");
const password = ref("");

const login = async () => {
  try {

    const response = await api.post("/auth/login", {
      email: email.value,
      password: password.value
    });

    localStorage.setItem(
      "token",
      response.data.token
    );

    router.push("/profile");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      error.message
    );
  }
};

const goRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
body {
  background: #f8fafc;
}

.card {
  border-radius: 20px;
}

h2 {
  font-weight: bold;
}
</style>