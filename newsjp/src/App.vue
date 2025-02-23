<template>

  <div>

    <h1>今の日本は？</h1>
    <h2>今、日本で注目されてるニュース記事は、これです！</h2>

    <div>
      
      <p class="news-title-data">{{ titleData }}</p>
      <p class="news-url-data">もっと詳しく見たいなら、ここ！ <a :href="urlData">{{ urlData }}</a></p>

      <p class="web-information">The News APIを利用して、いま日本で注目されているニュースを表出するサービスです</p>
      <p class="dev">Developed By Kim Donghyun, Contact: hyungus723@gmail.com</p>
      
    </div>

  </div>

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

body {
  height: auto;
}

h1 {
  margin-top: 0px; font-size: 75px;
}

h2 {
  margin-top: -30px; font-size: 20px;
}

.news-title-data {
  margin-top: 150px; font-size: 30px;
}

.news-url-data {
  margin-top: -20px; font-size: 20px;
}

.web-information {
  margin-top: 150px; font-size: 20px;
}

.dev {
  margin-top: -10px;
}

@media (max-width: 1440px) {
  h1 {
  margin-top: 0px; font-size: 55px;
  }

  h2 {
  margin-top: -30px; font-size: 15px;
  }

  .news-title-data {
  margin-top: 150px; font-size: 20px;
  }

  .news-url-data {
  margin-top: -20px; font-size: 15px;
  }

  .web-information {
  margin-top: 150px; font-size: 15px;
  }

  .dev {
  margin-top: -10px; font-size: 15px;
  }
}

@media (max-width: 720px) {
  h1 {
  margin-top: 0px; font-size: 40px;
  }

  h2 {
  margin-top: -20px; font-size: 15px;
  }

  .news-title-data {
  margin-top: 100px; font-size: 15px;
  }

  .news-url-data {
  margin-top: -10px; font-size: 15px;
  }

  .web-information {
  margin-top: 100px; font-size: 10px;
  }

  .dev {
  margin-top: -10px; font-size: 10px;
  }
}

</style>
