<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h2
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Planos
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <price name="Grátis" price="R$ 0" :limited="true" :list="listFree" />
        <price-highlighted
          name="Sem limites"
          price="em breve"
          :limited="false"
          :list="listUnlimited"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Price from '@/components/Price'
import PriceHighlighted from '@/components/PriceHighlighted'

export default {
  name: 'Prices',
  data() {
    return {
      listFree: ['Brasileirão - A (Resultados)', 'Brasileirão - B (Resultados)', 'Loteca'],
      listUnlimited: ['Brasileirão - A (Todos Modelos)', 'Brasileirão - B (Todos Modelos)', 'Loteca', 'Bundesliga (Todos Modelos)', 
      'La Liga (Todos Modelos)', 'Francês (Todos Modelos)', 'Premier League (Todos Modelos)', 'Italiano (Todos Modelos)', 
      'Português (Todos Modelos)'],
    }
  },
  components: {
    price: Price,
    'price-highlighted': PriceHighlighted
  }
}
</script>
