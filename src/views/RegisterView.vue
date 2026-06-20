<template>
  <div class="container">

    <div class="row justify-content-center align-items-center vh-100">

      <div class="col-md-5">

        <div class="card shadow">

          <div class="card-body p-4">

            <h2 class="text-center mb-4">
              Register
            </h2>

            <input
              v-model="name"
              class="form-control mb-3"
              placeholder="Name"
            />

            <input
              v-model="email"
              class="form-control mb-3"
              placeholder="Email"
            />

            <input
              v-model="password"
              type="password"
              class="form-control mb-3"
              placeholder="Password"
            />

            <button
              class="btn btn-success w-100"
              @click="register"
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

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  try {

    await api.post("/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value
    });

    alert("Register berhasil");

    router.push("/");

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
.card {
  border-radius: 20px;
}

h2 {
  font-weight: bold;
}
</style>