<template>
  <!-- <v-img
    v-bind:src="imageUrl"
    cover>
    //cover是抄过来的代码
  </v-img> -->
  <v-img
    :src="imageUrl"
    cover>
  </v-img>
</template>

<script lang="ts">
export default {
  // 从外面给我的参数
  props: {
    imageUrl: String,
  },
}
</script>
