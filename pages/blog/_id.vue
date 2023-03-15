<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <BlogPost :article="article"></BlogPost>
    </div>
  </section>
</template>

<script>

import BlogPost from '~/components/BlogPost'

export default {
 data() {
    return {
      article: {},
    }
  },
  components: {
    BlogPost
  },
  
  async asyncData({ $axios, params  }) {
    let res = await $axios.get(`articles/?slug=${params.id}`);
    return { piece: res.data[0] };
  }
}

</script>