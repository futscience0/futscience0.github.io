<template>
  <section class="bg-white border-b py-8">
    <div class="w-full flex flex-wrap">
        <!-- Login Section -->
        <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32  text-gray-800">
                <p class="text-center text-3xl">Olá, tudo bem?</p>
                <p class="text-center text-3xl">Estamos finalizando nossa comunidade. Equanto isso</p>
                <div class="text-center pt-12 pb-12">
                    <a class="button text-gray-800 hover:underline font-bold text-lg p-2 mt-8" 
                    style="background-color: #ffc722;" 
                    href="https://futscience.launchrock.com/?utm_source=futscience&utm_medium=button&utm_campaign=none">Cadastre-se gratuitamente</a>
                </div>
                <!--form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" id="email" placeholder="seu@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Senha</label>
                        <input type="password" id="password" placeholder="Senha" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
    
                    <input type="submit" value="Entrar" class="text-gray-800 hover:underline font-bold text-lg p-2 mt-8" style="background-color: #ffc722;">
                </form-->
                <!--div class="text-center pt-12 pb-12">
                    <p>Não tem uma conta? <NuxtLink to="/cadastro" class="underline font-semibold">Cadastre-se gratuitamente.</NuxtLink></p>
                </div-->
            </div>

        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/dks8yvelk/image/upload/v1599231163/main-slider-img1_yrcfhe.jpg">
        </div>
      
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>