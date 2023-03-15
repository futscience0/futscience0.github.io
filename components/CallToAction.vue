<template>
  <div>
    <img src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231159/wave-top_nnlsdn.svg" alt />
    <call-to-action-content />
  </div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'

export default {
  name: 'CallToAction',
  components: {
    'call-to-action-content': CallToActionContent
  }
}
</script>
