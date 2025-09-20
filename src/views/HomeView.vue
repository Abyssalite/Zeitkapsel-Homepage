<!-- components/FloatingBackground.vue -->
<template>
  <div class="background">
    <div class="shape circle" v-for="n in 20" :key="n" :style="getShapeStyle()"></div>
  </div>  
  <div class="counter">
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
// Generate random styles for each shape
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

const getShapeStyle = () => {
  const size = Math.random() * 10 + 10; // Random size between 20-70px
  const left = Math.random() * 100; // Random x position
  const top = Math.random() * 100; // Random y position
  const duration = Math.random() * 20 + 10; // Random animation duration
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${Math.random() * 5}s`,
  };
};
</script>

<style scoped>
.counter {
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Behind other content */
}

.shape {
  position: absolute;
  background: rgba(100, 150, 255, 0.3); /* Semi-transparent blue */
  border-radius: 50%;
  animation: float infinite linear;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
