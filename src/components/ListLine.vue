<template>
  <v-row
    v-for="item in result"
    :key="item">
    <v-col cols="2">
      <image-card image-url="https://picsum.photos/510/300?random" />
    </v-col>
    <v-col>
      <v-sheet>{{ item }}</v-sheet>
    </v-col>
    <v-col
      cols="3"
      justify="end">
      <v-btn style="margin-right: 8px">編集</v-btn>
      <v-btn @click="deleteMenu(item)">削除</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import ImageCard from '@/components/ImageCard.vue'
import type { PropType } from 'vue'

export default {
  components: { ImageCard },
  props: {
    result: Array as PropType<string[]>,
    menuList: Array as PropType<string[]>,
  },
  emits: ['onDataChange'],
  methods: {
    deleteMenu: function (deleteItem: string) {
      //一定要自己定义一个  因为只有data的数据是自己可以修改的 别人传过来的数据只能读取 所以要定义一个在下面接值
      // let newArray = this.menuList
      //这个地方如果没有写if/？/！的话会报错“Object is possibly undefined”
      //意思是有可能是undefined 所以有三种解决这个问题的方法
      //第一种  如果不是undefined就执行下面这个 不是undefined的话就是string[]
      // if(menuListSend !== undefined) {
      //   menuListSend = menuListSend.filter((item) => item !== deleteItem)
      // }
      //第二种  如果是undefined就不执行问号后面了 如果不是undefined的话就执行问好后面
      const newArray = this.menuList?.filter((item) => item !== deleteItem)
      //第三种  告诉他一定有值用！ 比较危险
      // menuListSend = menuListSend!.filter((item) => item !== deleteItem)
      this.$emit('onDataChange', newArray)
    },
  },
}
</script>
