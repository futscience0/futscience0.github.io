<template>
    <div class="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
        <div class="mr-2 md:mr-4 ml-2">
            <div class="pb-10">
                <div>
                    <h1 class="text-gray-900 text-3xl my-5">{{article.title}}</h1>
                    <span class="text-xs text-gray-800 block mb-5" v-if="article.published_at">{{ moment(article.published_at).format("DD-MMM-YYYY") }}</span>
                    <div 
                      class="text-gray-900 tracking-wider leading-loose" 
                      v-if="article.content"
                      v-html="$md.render(article.content)"
                      >
                     </div>
                </div>
            </div>
        </div>
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
    article: Object
  }
}
</script>