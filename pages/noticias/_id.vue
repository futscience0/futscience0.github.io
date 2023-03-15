<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <NewsPiece :piece="piece"></NewsPiece>
    </div>
  </section>
</template>

<script>

import NewsPiece from '~/components/NewsPiece'

export default {
 data() {
    return {
      piece: {},
    }
  },
  components: {
    NewsPiece
  },
  
  async asyncData({ $axios, params  }) {
    let res = await $axios.get(`pieces?slug=${params.id}`);
    return { piece: res.data[0] };
  }
}

</script>