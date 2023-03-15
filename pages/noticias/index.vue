<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <h1
        class="w-full text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Últimas notícias
      </h1>
      
      <News :pieces="pieces"></News>

    </div>
  </section>
</template>

<script>

import News from '~/components/News'

export default {
  
  data() {
    return {
      pieces: [],
    }
  },
  components: {
    News
  },

  async asyncData({ $axios }) {
    let res = await $axios.get("/pieces?_sort=published_at:DESC");
    return { pieces: res.data };
  },
  
}
</script>