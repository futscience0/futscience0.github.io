<template>
  <NuxtLink
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    to="/"
    style="font-family: Oswald, Impact, 'Franklin Gothic Bold', sans-serif;"
  >
  FUT<span class="text-white">SCIENCE</span></NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-900' : 'text-gray-900'
      } else {
        classList = 'text-gray-900'
      }
      return classList
    }
  }
}
</script>
