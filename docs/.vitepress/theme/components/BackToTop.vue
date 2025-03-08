<template>
  <transition name="fade">
    <div
      v-show="show"
      class="back-to-top"
      @click="scrollToTop"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <span v-if="!isMobile" class="tooltip" :class="{ 'tooltip-show': showTooltip }">回到顶部</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="{ 'icon-hover': showTooltip }"
      >
        <path
          fill="currentColor"
          d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12z"
        />
      </svg>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
const showTooltip = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  showTooltip.value = false
}

const handleScroll = () => {
  show.value = window.pageYOffset > 300
}

onMounted(() => {
  checkMobile()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #1976D2;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  z-index: 100;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.back-to-top:active {
  transform: scale(0.95);
}

.back-to-top svg {
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease;
}

.icon-hover {
  transform: translateY(-2px);
}

.tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  pointer-events: none;
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px 6px 0 6px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
}

.tooltip-show {
  opacity: 1;
  visibility: visible;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .back-to-top {
    right: 1rem;
    bottom: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .back-to-top svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
