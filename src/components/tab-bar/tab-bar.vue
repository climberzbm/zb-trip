<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAssetsUrl } from '@/utils'

const router = useRouter()

const tabList = [
  {
    label: '首页',
    icon: '/img/tab-bar/home.png',
    activeIcon: '/img/tab-bar/home-active.png',
    path: '/home'
  },
  {
    label: '收藏',
    icon: '/img/tab-bar/favor.png',
    activeIcon: '/img/tab-bar/favor-active.png',
    path: '/favor'
  },
  {
    label: '订单',
    icon: '/img/tab-bar/order.png',
    activeIcon: '/img/tab-bar/order-active.png',
    path: '/order'
  },
  {
    label: '消息',
    icon: '/img/tab-bar/message.png',
    activeIcon: '/img/tab-bar/message-active.png',
    path: '/message'
  }
]

const currentIndex = ref(0)
const itemClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<template>
  <div class="tab_bar">
    <template v-for="(item, index) in tabList">
      <div
        class="tab_bar_item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(item, index)"
      >
        <img
          :src="
            currentIndex === index
              ? getAssetsUrl(item.activeIcon)
              : getAssetsUrl(item.icon)
          "
          alt=""
        />
        <span>{{ item.label }}</span>
      </div>
    </template>
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

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 30px;
      margin-bottom: 2px;
    }

    span {
      font-size: 12px;
    }
  }
}
</style>
