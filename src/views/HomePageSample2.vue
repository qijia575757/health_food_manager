<template>
  <v-container>
    <add-button />

    <!-- 这个和click的写法一样 都是触发这个事件 就执行后面的方法 @后面就是事件 @click是button的事件-->
    <function-line
      @onTabChange="handleTabChange"
      @onSearch="handleSearch" />

    <list-line
      :result="result"
      :menuList="menuList"
      @onDataChange="handleDataChange" />
  </v-container>
</template>

<script lang="ts">
import FunctionLine from '@/components/FunctionLine.vue'
import ListLine from '@/components/ListLine.vue'
import AddButton from '@/components/AddButton.vue'
import { store } from "@/store/store"
export default {
  components: { FunctionLine, ListLine, AddButton },
  // vue对象
  data: () => {
    return {
      tab: 'ホーム',
      keyword: '',
      // menuList: ['牛肉', '鶏肉', '野菜', 'バナナ', 'スープ'],
      menuList: store.menuList
    }
  },
  methods: {
    handleTabChange: function (newTab: string) {
      this.tab = newTab
      this.keyword = ''
    },
    handleSearch: function (newValue: string) {
      this.keyword = newValue
    },
    handleDataChange: function (newValue: string[]) {
      this.menuList = newValue
    },
  },
  computed: {
    result: function () {
      let fisrtStep = this.menuList
      if (this.tab === 'ホーム') {
        // ホーム的话就原封不动
      } else if (this.tab === 'その他') {
        fisrtStep = this.menuList.filter(
          (item) =>
            !item.includes('肉') &&
            !item.includes('野菜') &&
            !item.includes('スープ')
        )
      } else {
        fisrtStep = this.menuList.filter((item) => item.includes(this.tab))
      }
      return fisrtStep.filter((item) => item.includes(this.keyword))
    },
  },
}
</script>
