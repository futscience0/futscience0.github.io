<template>
  <div>
    <hero-content />
    <div class="relative -mt-12 lg:-mt-24">
      <img src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231159/hero-wave_fmaxod.svg" alt />
    </div>
  </div>
</template>

<script>
import HeroContent from '@/components/HeroContent'

export default {
  name: 'Hero',
  components: {
    'hero-content': HeroContent
  }
}
</script>
