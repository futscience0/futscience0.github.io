<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-16">
      <h1
        class="w-full text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Equipe FutScience
      </h1>

      <Team :employees="employees"></Team>
      
    </div>
  </section>
</template>

<script>

import Team from '~/components/Team'

export default {
  
  data() {
    return {
      employees: [
        {
          id : 1,
          title : 'Fundador',
          short_name : 'Felipe Santos',
          short_job : 'Big Data & Machine Learning',
          person : {
            picture : {
              url : 'https://assets-futscience.s3.sa-east-1.amazonaws.com/pic_felipe_nova_9d12c00328.jpeg'
            }
          },
          profile : {
            linkedin : 'https://www.linkedin.com/in/felipe-santos-b261916'
          }
        },
        {
          id : 2,
          title : 'Fundador',
          short_name : 'Gustavo Godinho',
          short_job : 'Estatística & Machine Learning',
          person : {
            picture : {
              url : 'https://assets-futscience.s3.sa-east-1.amazonaws.com/pic_gustavo_b3846cfe3a.jpg'
            }
          },
          profile : {
            linkedin : 'https://www.linkedin.com/in/gustavo-godinho-0b90aa141'
          }
        },
        {
          id : 3,
          title : 'Fundador',
          short_name : 'Samy Dana',
          short_job : 'Econometria & Comentarista',
          person : {
            picture : {
              url : 'https://assets-futscience.s3.sa-east-1.amazonaws.com/pic_samy_610b2dc8f9.jpg'
            }
          },
          profile : {
            linkedin : 'https://www.linkedin.com/in/samy-dana-028b84b'
          }
        }
        ],
    }
  },
  components: {
    Team
  },
  
}
</script>