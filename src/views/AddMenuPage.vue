<template>
  <v-container>
    <!-- 组件自带的 但是太丑了 -->
    <!-- <v-file-input/> -->
    <!-- 这个符合要求 但是还想试试更难的 -->
    <!-- <input type="file"> -->

    <!-- アップロード用input hidden -->
    <input
      type="file"
      hidden
      ref="imageRef"
      @change="handleFileChanged($event)" />
    <!-- アップロード提示 -->
    <p style="color: red">{{ fileHint }}</p>
    <!-- アップロード用button -->
    <v-row>
      <v-col>
        <v-btn
          variant="outlined"
          @click="handleClick">
          画像をアップロード
        </v-btn>
        <!-- アップロードしたファイル名 -->
        <span style="margin-left: 8px">{{ fileName }}</span>
      </v-col>
    </v-row>
    <!-- タイトル提示 -->
    <p style="color: red">{{ titleHint }}</p>
    <!-- タイトル -->
    <v-row>
      <v-col cols="4">
        <v-text-field
          label="タイトルを入力してください"
          variant="outlined"
          v-model="titleValue"
          @change="titleValueChange"></v-text-field>
      </v-col>
    </v-row>
    <!-- 原材料提示 -->
    <p style="color: red">{{ materialHint }}</p>
    <v-row>
      <!-- 原材料 -->
      <v-col cols="6">
        <v-text-field
          label="原材料を入力してください"
          variant="outlined"
          v-model="materialValue"
          @change="materialValueChange"></v-text-field>
      </v-col>
    </v-row>
    <!-- 料理手順提示 -->
    <p style="color: red">{{ cookStepHint }}</p>
    <v-row>
      <!-- 料理手順 -->
      <v-col cols="8">
        <v-textarea
          label="料理手順を入力してください"
          variant="outlined"
          v-model="cookStepValue"
          @change="cookStepValueChange"></v-textarea>
      </v-col>
    </v-row>
    <!-- 保存ボタン -->
    <v-row>
      <v-col cols="2">
        <v-btn @click="saveHandleClick">保存</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { store } from "@/store/store";

export default {
  data: () => {
    return {
      fileName: '',
      fileHint: '',
      titleValue: '',
      titleHint: '',
      materialValue: '',
      materialHint: '',
      cookStepValue: '',
      cookStepHint: '',
    }
  },
  methods: {
    /**
     * 在这个函数里面，点击input标签，弹出文件选择框
     */
    handleClick: function () {
      // 1: 找到想点击的元素
      /**
       * 考一个问题？
       * 12, 45, 0.12 这些是什么类型? => number
       * '你好', 'filename' 这些是什么类型? => string
       * 那么，<input /> 等标签（DOM元素）是什么类型？ => 不知道 => ref
       */
      type ImageRef = { click: () => void }

      // 2: 点击该元素
      ;(this.$refs.imageRef as ImageRef).click()
    },
    handleFileChanged: function (event: Event) {
      const target = event.target as HTMLInputElement
      if (target.files && target.files.length) {
        // console.log('event:', target.files[0].name)
        this.fileName = target.files[0].name
        this.fileHint = ''
      }
    },
    titleValueChange: function () {
      if (this.titleValue.length > 10) {
        this.titleHint = 'タイトルは10文字以下を入力してください'
      } else {
        this.titleHint = ''
      }
    },
    materialValueChange: function () {
      if (this.materialValue.length > 30) {
        this.materialHint = '原材料は30文字以下を入力してください'
      } else {
        this.materialHint = ''
      }
    },
    cookStepValueChange: function () {
      if (this.cookStepValue.length > 250) {
        this.cookStepHint = '料理手順は250文字以下を入力してください'
      } else {
        this.cookStepHint = ''
      }
    },
    saveHandleClick: function () {
      if (
        this.fileName == '' ||
        this.titleValue == '' ||
        this.titleHint !== ''|| 
        this.materialValue == '' ||
        this.materialHint !== ''||
        this.cookStepValue == ''||
        this.cookStepHint !== ''
      ) {
        if (this.fileName == '') {
          this.fileHint = '画像をアップロードしてください'
        } 
        if (this.titleValue == '') {
          this.titleHint = 'タイトルを入力してください'
        } 
        if (this.materialValue == '') {
          this.materialHint = '原材料を入力してください'
        } 
        if (this.cookStepValue == '') {
          this.cookStepHint = '料理手順を入力してください'
        }
      } else {
        console.log('ファイル名は：',this.fileName)
        console.log('ファイル名は：',this.titleValue)
        console.log('ファイル名は：',this.materialValue)
        console.log('ファイル名は：',this.cookStepValue)
      }
      //
      // store.addMenu('新的肉')
    },
  },
}
</script>
