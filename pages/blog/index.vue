<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <h1
        class="w-full text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Blog Oficial
      </h1>

      <Blog :articles="articles"></Blog>
      
    </div>
  </section>
</template>

<script>

import Blog from '~/components/Blog'

export default {
  
  data() {
    return {
      articles: [],
    }
  },
  components: {
    Blog
  },
  
  async asyncData({ $axios }) {
    let res = await $axios.get("/articles?_sort=published_at:DESC");
    console.log(res)
    return { articles: res.data };
  },
}
</script>