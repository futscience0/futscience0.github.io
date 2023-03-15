<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left text-gray-900"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Receba as previsões do Campeonato Brasileiro
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Palpites para séries A, B & Loteca toda semana. Sem pagar nada!
        </p>
        
        <btnCadastro button_text='Criar conta'/>
      </div>

      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <img class="w-full md:w-4/5 z-50" src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231157/undraw_goal_0v5v_fpmoen.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>

import BtnCadastro from '@/components/BtnCadastro'

export default {
  name: 'HeroContent',
  components: {
    btnCadastro: BtnCadastro,
  }
}
</script>
