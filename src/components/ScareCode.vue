<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <qrcode-stream @decode="onDecode"></qrcode-stream>

    <!-- 扫码读条 -->
    <div class="text-xs-center">
      <v-dialog
        v-model="progress"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            二维码识别中...
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <!-- 扫码结果弹窗 -->
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Success</v-card-title>

        <v-card-text>
          {{msg}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="sv_purple_light"
            flat="flat"
            to='/Attendance'
          >
            查看更多
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'ScareCode',
    data () {
      return {
        msg: '',
        dialog: false,
        progress: true,
      }
    },
    methods: {
      onDecode (decodedString) {
        this.msg = decodedString;
        this.progress = false;
        this.dialog = true;
      },
    }
  }
</script>

<style>

</style>
