<template>
    <NuxtLink 
        class="button mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg text-gray-900 z-30"
        style="background-color: #ffc722;"
        to='/login'
    >
    {{button_text}}
    </NuxtLink >
</template>

<script>

export default {
  name: 'BtnCadastroLoja',
  props: {
    button_text: {
      type: String,
      required: true
    }
  }
}
</script>