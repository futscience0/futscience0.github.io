<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo2 />
        </div>

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
