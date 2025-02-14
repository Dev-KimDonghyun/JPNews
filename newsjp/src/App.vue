<template>

<h1>{{ titleData }}, {{ urlData }}</h1> <!-- 임시로 변수 지정함 -->
  
</template>


<script setup>

import { ref } from 'vue';
import { onMounted } from 'vue';
import { run } from './api/api.js';
import { forExportTitle } from './api/api.js';
import { forExportUrl } from './api/api.js';

const titleData = ref(null); // 반응형 상태 변수 생성 - Vue3 Composition API
const urlData = ref(null); // 반응형 상태 변수 생성 - Vue3 Composition API

async function bringFetchData () {
  await run();
  titleData.value = forExportTitle; // ref()는 값을 value에 저장
  urlData.value = forExportUrl; // ref()는 값을 value에 저장
}

onMounted(() => {
  bringFetchData();
});

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
