<template>
  <div id="search">
    <search-input />
    <search-hot />
    <search-list :data="search.result" />
    <search-history />
  </div>
</template>

<script>
import searchInput from '@/components/search/search_input'
import searchHot from '@/components/search/search_hot'
import searchList from '@/components/search/search_list'
import searchHistory from '@/components/search/search_history'
import { mapState } from 'vuex'
export default {
  components: {
    searchInput,
    searchHot,
    searchList,
    searchHistory
  },
  computed: {
    ...mapState(['search'])
  }
}
</script>
