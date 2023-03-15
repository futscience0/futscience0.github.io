<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h2
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Conteúdo de qualidade
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-right
        headline="Análises de Resultado"
        content1="Ajudamos nossos usuários a acertar mais nas brincadeiras com os amigos, bolões, cartola ou até mesmo apostando pra valer."
        content2="Utilizamos inteligência artificial para criar modelos que prevêm resultados, placares, total de gols, combinações de resultados, intervalos de placares. A cada semana adicionamos novas funcionalidades.">
        <img src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231157/undraw_Artificial_intelligence_oyxx_qgqop1.svg" alt slot="svg" />
      </feature-right>
      <feature-left
        headline="Comunidade"
        content1="Estamos construindo uma comunidade para compartilhar conteúdo com nossos usuários via e-mail e na plataforma futscience (estamos quase lá)."
        content2="Temos conteúdos gratuitos e pagos (por enquanto todo o conteúdo é gratuito) sobre futebol brasileiro e europeu."
      >
        <img src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231157/undraw_stepping_up_g6oo_nt14xb.svg" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
