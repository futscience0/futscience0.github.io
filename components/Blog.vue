<template>
    <div id="blog_posts" class="text-gray-800">
        <div class="max-w-5xl mx-auto pt-10 pb-10">
            <ul class="flex flex-wrap -mx-2 overflow-hidden">
                <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3" v-for="item in articles" :key="item.id">
                    <NuxtLink :to="'/blog/' + item.slug">
                        <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:300px;" v-bind:style="{'background-image' : 'url(' + api_url + item.image[0].url +')'}">
                            <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                            <div class="relative z-20 text-center p-5">
                                <span class="inline-block text-white uppercase text-xs tracking-wide">{{item.articlecategory.name}}</span>
                                <h2 class="text-white font-semibold font-serif text-xl my-5">{{item.title}}</h2>
                                <span class="inline-block text-xs text-white font-sans">{{item.teaser}}</span>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  props: {
    articles: Array
  }
}
</script>