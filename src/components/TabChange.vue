<template>
  <!-- icon -->
  <v-col cols="2">
    <image-card
      image-url="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
  </v-col>
  <!-- tabs -->
  <v-col>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab
          v-for="option in tabOptions"
          :key="option"
          :value="option"
          @click="handleTabClick"
          >{{ option }}</v-tab
        >
      </v-tabs>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import ImageCard from './ImageCard.vue'
export default {
  components: { ImageCard },
  data: () => {
    return {
      tab: 'ホーム',
    }
  },
  emits: ['onTabChange'],
  methods: {
    handleTabClick: function () {
      this.$emit('onTabChange', this.tab)
    },
  },
  computed: {
    tabOptions: () => ['ホーム', '肉', '野菜', 'スープ', 'その他'],
  },
}
</script>
