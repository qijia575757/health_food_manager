<template>
  <v-row>
    <tab-change @onTabChange="handleTabChange" />
    <search-bar
      @onSearch="handleSearch"
      ref="searchRef" />
  </v-row>
</template>

<script lang="ts">
import ImageCard from './ImageCard.vue'
import SearchBar from './SearchBar.vue'
import TabChange from './TabChange.vue'
export default {
  components: { ImageCard, TabChange, SearchBar },
  emits: ['onTabChange', 'onSearch'],
  methods: {
    handleTabChange: function (newTab: string) {
      this.$emit('onTabChange', newTab)
      type SearchRef = { inputClear: () => void }
      ;(this.$refs.searchRef as SearchRef).inputClear()
    },
    handleSearch: function (newValue: string) {
      this.$emit('onSearch', newValue)
    },
  },
}
</script>
