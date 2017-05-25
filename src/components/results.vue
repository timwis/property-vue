<template>
  <div class="row column">
    <h2>{{ $route.params.address }}</h2>
    <div class="loading" v-if="loading">Loading...</div>
    <table v-if="results" class="results no-borders">
      <thead>
        <tr>
          <th>Address</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results">
          <td>{{ result.opa_address }}</td>
          <td>{{ result.opa_owners[0] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      results: []
    }
  },
  created () {
    this.fetchResults()
  },
  methods: {
    async fetchResults () {
      this.loading = true
      const address = encodeURIComponent(this.$route.params.address)
      const url = `https://api.phila.gov/ais_ps/v1/addresses/${address}?include_units&opa_only`
      const response = await fetch(url)
      const responseData = await response.json()
      this.results = responseData.features.map((feature) => feature.properties)
      this.loading = false
    }
  }
}
</script>
