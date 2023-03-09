<template>
  <v-col cols="3">
    <v-text-field
      placeholder="検索条件を入力してください"
      variant="outlined"
      v-model="keyword" />
  </v-col>
  <v-col cols="2">
    <v-btn @click="handleClick">検索</v-btn>
  </v-col>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      keyword: '',
    }
  },
  emits: ['onSearch'],
  methods: {
    handleClick: function () {
      this.$emit('onSearch', this.keyword)
    },
    /**
     * called from parent.
     */
    inputClear: function () {
      this.keyword = ''
    },
  },
}
</script>
