<template>
  <div>
    <hero />
    <features />
    <prices />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    prices: Prices,
    'call-to-action': CallToAction
  }
}
</script>