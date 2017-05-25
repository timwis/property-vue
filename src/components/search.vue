<template>
  <form class="search" v-on:submit.prevent="onSubmit">
    <input type="text" id="address" placeholder="ex. 1234 Market St">
    <input type="submit">
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit: function (evt) {
      const addressValue = evt.target.address.value
      window.location.hash = `/address/${addressValue}`
    }
  }
}
</script>
