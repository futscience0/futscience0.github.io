<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h2
      class="w-full my-2 text-5xl font-bold leading-tight text-center  text-gray-900"
    >
      Participe da comunidade FutScience
    </h2>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <h3 class="my-4 text-3xl leading-tight text-gray-900">
      Receba nossas análises gratuitamente.
    </h3>

    <br>
    
    <btnCadastro button_text='Criar conta'/>
  </section>
</template>

<script>

import BtnCadastro from '@/components/BtnCadastro'

export default {
  name: 'CallToActionContent',
  components: {
    btnCadastro: BtnCadastro,
  }
}
</script>
