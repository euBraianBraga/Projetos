<template>
  <div>
    <router-link target="_blank" to="/quizVue">
      <button class="button">Abrir questionário sobre vue.</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background-color: #4caf50; /* Green */
}
</style>