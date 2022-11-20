<script setup>
const tabList = [
  {
    label: '首页',
    icon: ''
  },
  {
    label: '收藏',
    icon: ''
  },
  {
    label: '订单',
    icon: ''
  },
  {
    label: '我的',
    icon: ''
  }
]

// 折线图
{
  dayCount: [12,12,31,312,3] // 日数量
  monthData: [11, 121]    //月数量
}

// 区域图
[
  {
    province: '浙江',  // 省份
    count: 2
  },
  {
    province: '四川',  // 省份
    count: 122
  },
]
</script>

<template>
  <div class="tab_bar">
    <div class="tab_bar_item" v-for="item in tabList">
      <img :src="item.icon" alt="" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab_bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  height: 50px;

  .tab_bar_item {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
