<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },

  mounted() {
    this.id = this.$route.params.id; // Assign id from route params to component data
  },
};
</script>
