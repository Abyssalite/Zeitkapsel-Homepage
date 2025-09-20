<template>
	<div class="space"></div>

	<div class="container">
		<Parallaxy speed="20" class="parallax-left">
			<img src="https://picsum.photos/400" class="img-main">
		</Parallaxy>

		<Parallaxy speed="40" direction="opposite" class="parallax-right">
			<img src="https://picsum.photos/400?2" class="img-main">
		</Parallaxy>

		<Parallaxy speed="80" class="parallax-center">
			<img src="https://picsum.photos/400?6" class="img-overlay">
		</Parallaxy>



	</div>
	<div class="parallax-scroll">
		<h1 class="text">Some Fancy Text</h1>
		<Parallaxy :speed="200" :animation="(delta: number) => `transform: translate3d(0, ${delta}px, 0);`">
			<img src="../assets/img2.png">
		</Parallaxy>
	</div>


	<div class="space"></div>

</template>

<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>

<style>

.space {
	height: 800px;
}

.container {
  display: flex;
  width: 900px;
  gap: 2rem;
}

/* Shared Parallaxy base */
.parallax-left,
.parallax-right,
.parallax-center {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
}

/* Left aligned */
.parallax-left {
  justify-content: flex-start;
}

/* Right aligned */
.parallax-right {
  justify-content: flex-end;
}

/* Overlay in center */
.parallax-center {
  position: relative;
  top: 80px;
  right: 45%;
  z-index: 100;
}

/* Images */
.img-main {
  width: 100%; /* w-3/4 */
}

.img-overlay {
  width: 50%; /* w-1/3 */

}

.parallax-scroll {
	margin-top: 100px;
	position: relative;
	overflow: hidden;
	height: 800px;
}

.text{
	display: flex;
	top: 30%;
	justify-self: center;
	position: relative;
	z-index: 10;
}
</style>