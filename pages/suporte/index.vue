<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <h1
        class="w-full text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Suporte
      </h1>

      <Soon></Soon>
      
    </div>
  </section>
</template>

<script>

import Soon from '~/components/Soon'

export default {
  
  data() {
    return {
      articles: [],
    }
  },
  components: {
    Soon
  },
  
}
</script>