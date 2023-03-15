<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo2 />
        </div>

        <!--


        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/faq"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Perguntas Frequentes</NuxtLink
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/suporte"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Suporte</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Políticas</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/termos"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Termos de uso</NuxtLink
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/politica"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Política de Privacidade</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.youtube.com/channel/UC6zgL689WeykMsS1j5SnQeQ"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Youtube</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.instagram.com/futscience_"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Instagram</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/fut_science"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Projeto</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/blog"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Blog Oficial</NuxtLink
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/equipe"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Equipe</NuxtLink
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="/contato"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Contato</NuxtLink
              >
            </li>
          </ul>
        </div>

        -->
      </div>
    </div>

  </footer>
</template>

<script>
import Logo2 from '@/components/Logo2'

export default {
  name: 'TheFooter',
  components: {
    logo2: Logo2
  }
}
</script>
