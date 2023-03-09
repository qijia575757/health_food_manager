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
              value="ホーム"
              @click="onTabClick"
              >ホーム</v-tab
            >
            <v-tab
              value="肉"
              @click="onTabClick"
              >肉</v-tab
            >
            <v-tab
              value="野菜"
              @click="onTabClick"
              >野菜</v-tab
            >
            <v-tab
              value="スープ"
              @click="onTabClick"
              >スープ</v-tab
            >
            <v-tab
              value="その他"
              @click="onTabClick"
              >その他</v-tab
            >
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-text-field
          placeholder="検索条件を入力してください"
          variant="outlined"
          v-model="inputValue"></v-text-field>
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
      tab: 'ホーム',
      inputValue: '',
      keyword: '',
      menuList: ['牛肉', '鶏肉', '野菜', 'バナナ', 'スープ'],
    }
  },
  methods: {
    changeMenuList: function () {
      this.keyword = this.inputValue
    },
    deleteMenu: function (deleteItem: string) {
      this.menuList = this.menuList.filter((item) => item !== deleteItem)
    },
    onTabClick: function () {
      this.keyword = ''
      this.inputValue = ''
    },
  },
  computed: {
    result: function () {
      let fisrtStep = this.menuList
      if (this.tab === 'ホーム') {
        // ホーム的话就原封不动
      } else if (this.tab === 'その他') {
        // fisrtStep = this.menuList.filter(
        //   (item) =>
        //     !item.includes('肉') &&
        //     !item.includes('野菜') &&
        //     !item.includes('スープ')
        // )
        fisrtStep = this.menuList.filter(
          (item) => !['肉', '野菜', 'スープ'].some((e) => item.includes(e))
        )
      } else {
        fisrtStep = this.menuList.filter((item) => item.includes(this.tab))
      }
      return fisrtStep.filter((item) => item.includes(this.keyword))
    },
  },
}
</script>
