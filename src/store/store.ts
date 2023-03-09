import { reactive } from "vue";

export const store = reactive({
  menuList: ['牛肉', '鶏肉', '野菜', 'バナナ', 'スープ'],
  // addMenu: function() { }
  addMenu(item: string) {
    this.menuList.push(item)
    // this.menuList = [...this.menuList, item]
  }
})