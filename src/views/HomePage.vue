<template>
  <v-container>
    <!-- 跳转按钮行 -->
    <v-row justify="end">
      <v-col cols="2">
        <v-btn>追加メニュー</v-btn>
      </v-col>
    </v-row>

    <!-- 功能行 -->
    <v-row>
      <!-- icon -->
      <v-col cols="2">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover>
        </v-img>
      </v-col>
      <!-- tabs -->
      <v-col>
        <v-card>
          <v-tabs v-model="tab">
            <v-tab
              value="one"
              @click="homeSelect"
              >ホーム</v-tab
            >
            <v-tab
              value="two"
              @click="meetSelect"
              >肉</v-tab
            >
            <v-tab
              value="three"
              @click="vagetableSelect"
              >野菜</v-tab
            >
            <v-tab
              value="four"
              @click="soupSelect"
              >スープ</v-tab
            >
            <v-tab
              value="five"
              @click="otherSelect"
              >その他</v-tab
            >
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-text-field
          placeholder="検索条件を入力してください"
          variant="outlined"
          v-model="keyword"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="changeMenuList">検索</v-btn>
      </v-col>
    </v-row>
    <!-- list行 -->

    <v-row
      v-for="item in result"
      :key="item">
      <v-col cols="2">
        <v-img
          src="https://picsum.photos/510/300?random"
          cover>
        </v-img>
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
  </v-container>
</template>

<script lang="ts">
export default {
  // vue对象
  data: () => {
    return {
      tab: null,
      title: 'Home Page',
      menuList: ['牛肉', '鶏肉', '野菜', 'バナナ', 'スープ'],
      keyword: '',
      result: ['牛肉', '鶏肉', '野菜', 'バナナ', 'スープ'],
    }
  },
  methods: {
    changeMenuList: function () {
      // 1 => 你先把你的检索结果，给我

      // 我从我自己找过一次的结果里面，再去找 => X
      // this.result = this.result.filter((item) => item.includes(this.keyword))

      // 我要知道之前的人是怎么找的？
      // => 点击tab，跟据不同的tab用不同的keyword搜索
      // => 为了模拟之前的人的操作，我需要知道 现在是什么tab，以及每个tab分别用什么关键字去检索的？

      // 现在是什么tab？
      this.tab

      // 每个tab分别用什么关键字
      const tabOptions = [
        { tabKey: 'one', tabValue: 'ホーム' },
        { tabKey: 'two', tabValue: '肉' },
        { tabKey: 'three', tabValue: '野菜' },
        { tabKey: 'four', tabValue: 'スープ' },
        { tabKey: 'five', tabValue: 'その他' },
      ]

      // 通过现在的tab，找到他的对应的检索的关键字
      const tabKeyword = tabOptions.find(
        (item) => item.tabKey === this.tab
      )?.tabValue

      // 其他情况都OK，唯独ホーム的时候，这种情况下，他做的事情不一样
      // this.result = this.menuList.filter((item) => item.includes(tabKeyword!))
      if (tabKeyword === 'ホーム') {
        // 2 => 你再把你想找的关键字给我

        // 之前的人做的事情
        this.result = this.menuList

        // 我在之前的人做的事情的前提上，用现在的关键字再搜索一遍
        this.result = this.result.filter((item) => item.includes(this.keyword))
      } else {
        // 之前的人做的事情
        // => 点击tab，跟据不同的tab用不同的keyword搜索
        const currentResult = this.menuList.filter((item) =>
          item.includes(tabKeyword!)
        )

        // 我在之前的人做的事情的前提上，用现在的关键字再搜索一遍
        this.result = currentResult.filter((item) =>
          item.includes(this.keyword)
        )
      }

      // 把menuList的元素减少
      // 页面上就会显示剩下的元素
      // this.menuList = [12345, 123456, 1234567, 12345678, 123456789, 12345678910]

      // ---
      // 需要
      // 1 => 菜单一览 => 最终需要操作的对象 => menuList
      // 2 => 关键字 => 过滤数组的根据 => this.keyword
      // 3 => 过滤器 => 过滤的逻辑 => Array.filter方法
      // const self = this
      // this.menuList = this.menuList.filter(function(item) {
      //   return (item+'').includes(self.keyword)
      // })
      // this.menuList = this.menuList.filter(item => String(item).includes(this.keyword))

      // tab的信息
      // const tabOptions = [
      //   { tabKey: 'one', tabValue: 'ホーム' },
      //   { tabKey: 'two', tabValue: '肉' },
      //   { tabKey: 'three', tabValue: '野菜' },
      //   { tabKey: 'four', tabValue: 'スープ' },
      //   { tabKey: 'five', tabValue: 'その他' },
      // ]
      // // 1 现获取当前的result（tab的检索结果)
      // const tabKeyword = tabOptions.find(
      //   (item) => item.tabKey === this.tab
      // )?.tabValue
      // if (tabKeyword === 'ホーム') {
      //   this.result = this.menuList

      //   this.result = this.result.filter((item) =>
      //     String(item).includes(this.keyword)
      //   )
      // } else {
      //   const tabResult = this.menuList.filter((item) =>
      //     item.includes(tabKeyword!)
      //   )
      //   // 2 在tab检索结果的前提下，检索包含keyword的内容
      //   this.result = tabResult.filter((item) =>
      //     String(item).includes(this.keyword)
      //   )
      // }

      // 从menuList里面，把不包含关键字的元素都拿掉
      // 页面上就会显示剩下包含关键字的元素
    },
    deleteMenu: function (deleteItem: string) {
      // 需要什么
      // 原本的数组 =》 menuList
      // 要删除的对象 =》 ？
      //filter最重要的是是 会被保留
      this.menuList = this.menuList.filter((item) => item !== deleteItem)
      this.result = this.result.filter((item) => item !== deleteItem)
    },
    //TABでホーム検索
    homeSelect: function () {
      this.keyword = ''
      this.result = this.menuList
    },
    //TABで肉検索
    meetSelect: function () {
      this.keyword = ''
      this.result = this.menuList.filter((item) => item.includes('肉'))
    },
    //TABで野菜検索
    vagetableSelect: function (deleteItem: string) {
      this.keyword = ''
      this.result = this.menuList.filter((item) => item.includes('野菜'))
    },
    //TABでスープ検索
    soupSelect: function (deleteItem: string) {
      this.keyword = ''
      this.result = this.menuList.filter((item) => item.includes('スープ'))
    },
    //TABでその他検索
    otherSelect: function (deleteItem: string) {
      this.keyword = ''
      this.result = this.menuList.filter(
        (item) =>
          !item.includes('肉') &&
          !item.includes('野菜') &&
          !item.includes('スープ')
      )
    },
  },
  // computed: {
  //   //实时检索
  //   menuResult: function () {
  //     return this.menuList.filter((item) => item.includes(this.keyword))
  //   },
  // },
}
</script>
