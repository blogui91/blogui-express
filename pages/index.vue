<template>
  <!--Ignore this file -->
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo">
    <h1 class="title" v-text="title"></h1>
    </ul>
  </section>
</template>
<script>
export default {
  async asyncData () {
    return {
      users: []
    }
  },
  head () {
    return {
      title: 'Welcome'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
