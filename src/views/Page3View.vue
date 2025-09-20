<template>
  <div ref="scrollContainer" class="scroll-container">
    <div class="content">
      <h1>Scroll with GSAP</h1>
      <p>Objects move from left to right edge at different speeds when container is in view!</p>
      <div style="height: 1000px"></div>
    </div>

    <img src="https://picsum.photos/400?6" ref="image" class="mover image" alt="Moving image" />
    <div ref="star" class="mover star"></div>

    <div style="height: 500px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const image = ref<HTMLElement | null>(null)
const star = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(0)

const updateAnimation = () => {
  if (!scrollContainer.value) return
  containerWidth.value = scrollContainer.value.offsetWidth
  ScrollTrigger.getAll().forEach((t) => t.kill())

  const imageWidth = containerWidth.value * 0.15 // 10% of container width
  const moveDistance = window.innerWidth - imageWidth
  const starMoveDistance = (window.innerWidth - imageWidth) * 0.5

  gsap.set(image.value, { width: imageWidth, height: imageWidth * 1.5 }) // Set dynamic width
  gsap.set(star.value, { width: imageWidth, height: imageWidth * 1.5 })

  gsap.to(image.value, {
    x: moveDistance,
    scrollTrigger: {
      trigger: scrollContainer.value,
      start: '15% top',
      end: 'bottom bottom',
      scrub: 1,
    },
  })

  gsap.to(star.value, {
    x: starMoveDistance,
    scrollTrigger: {
      trigger: scrollContainer.value,
      start: '15% top',
      end: 'bottom bottom',
      scrub: 1,
    },
  })
}

onMounted(() => {
  if (scrollContainer.value) {
    containerWidth.value = scrollContainer.value.offsetWidth
    updateAnimation()
  }
  window.addEventListener('resize', updateAnimation)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateAnimation)
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>

<style scoped>
.scroll-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.mover {
  position: absolute;
}

.star {
  background: gold;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  text-align: center;
}
</style>
