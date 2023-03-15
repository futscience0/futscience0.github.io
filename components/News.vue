<template>
    <div id="news_pieces" class="text-gray-800">
      <main class="max-w-5xl mx-auto pb-10 pt-10">
        <div class="flex flex-wrap overflow-hidden">
            <ul class="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-5/6">
                <li class="mr-2 md:mr-4 ml-2" v-for="item in pieces" :key="item.id">
                    <div class="pb-10">
                        <h2 class="text-gray-900 text-3xl my-5">
                          <NuxtLink :to="'/noticias/' + item.slug">{{item.title}}</NuxtLink>
                        </h2>
                        <span class="text-xs text-gray-800 block mb-5">{{ moment(item.published_at).format("DD-MMM-YYYY") }}</span>
                        <p class="text-gray-900 tracking-wider leading-loose">{{item.teaser}}</p>
                        <NuxtLink class="inline-block pt-5 font-bold text-sm tracking-wider;" 
                          :to="'/noticias/' + item.slug">Continuar lendo ...</NuxtLink>
                    </div>
                </li>
            </ul>
        </div>
      </main>
    </div>
</template>

<script>

var moment = require("moment");

export default {
  data: function() {
    return {
      api_url: process.env.strapiBaseUri,
      moment: moment
    };
  },
  props: {
    pieces: Array
  }
}
</script>