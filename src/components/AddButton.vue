<template>
  <!-- 跳转按钮行 -->
  <v-row justify="end">
    <v-col cols="2">
      <v-btn @click="goToAddMenu">追加メニュー</v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  methods: {
    goToAddMenu: function () {
      this.$router.push('/AddMenuPage')
    },
  },
}
</script>
