<template>
    <div>
        <v-tabs
          v-model="active"
          color="sv_purple"
          dark
          slider-color="sv_purple_light"
          grow
        >
          <v-tab
            v-for="item in items"
            :key="item.id"
            ripple
          >
          {{ item.text }}
          </v-tab>
          <v-tab-item
            v-for="item in items"
            :key="item.id"
          >
            <v-data-table
              :items="desserts"
              class="elevation-1"
              hide-actions
              hide-headers
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.uid }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.phone }}</td>
                <td class="text-xs-right">{{ props.item.remarks }}</td>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs>
      </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { id: 0, text: '已签到', value: 'Attendanced' },
          { id: 1, text: '未签到', value: 'UnAttendance' }
        ],
        active: null,
        desserts: [
          {
            value: false,
            name: '廖欣',
            uid: 0,
            phone: '150***9658',
            remarks: '内部人员',
          },
          {
            value: false,
            name: '邓登举',
            uid: 1,
            phone: '180***0658',
            remarks: '高级客户',
          },
          {
            value: false,
            name: '朱永涛',
            uid: 2,
            phone: '135***9258',
            remarks: '普通客户',
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
