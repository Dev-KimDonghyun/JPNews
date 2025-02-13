<template>

  <h1>{{ titleData }}, {{ urlData }}</h1> <!-- 임시로 변수 지정함 -->
  
</template>
  
<script setup>
  
  import { run } from '../../newsjp/src/api/api.js';
  
  export default {
    name: 'App',
    data () {
      return {
        titleData: '',
        urlData: '',
      };
    },
    methods: {
      async bringFetchData () {
        const { forExportTitle, forExportUrl } = await run();
        this.titleData = forExportTitle;
        this.urlData = forExportUrl;
      }
    },
    mounted () {
      this.bringFetchData();
    }
  }
  
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
