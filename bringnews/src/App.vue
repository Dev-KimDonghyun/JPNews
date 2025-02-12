<template>

<h1>{{ titleData }}, {{ urlData }}</h1> <!-- 임시로 변수 지정함 -->

</template>

<script>

import { run } from './api/api.js';

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
