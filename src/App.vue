<template>
  <div class="site" id="page">
    <phl-header></phl-header>
    <article data-swiftype-name="body" data-swiftype-type="text">
      <div class="row column">
        <h1 class="contrast">Property Search</h1>
        <p>Use this tool to view valuation, tax, and physical details of properties within the City of Philadelphia.</p>
      </div>
      <div class="row column">
        <search-form></search-form>
      </div>
      <router-view></router-view>
    </article>
    <phl-footer></phl-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Search from './components/search.vue'

export default {
  name: 'app',
  components: {
    'phl-header': Header,
    'phl-footer': Footer,
    'search-form': Search
  }
}
</script>
