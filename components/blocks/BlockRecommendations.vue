<template>
  <block-wrapper>
    <h1>{{ $t('pages.recommendations.title') }}</h1>
    <h2>Read what people are saying about our company and service.</h2>
    <p class="intro">
      {{ $t('pages.recommendations.intro') }}
    </p>
    <p>
      {{ $t('pages.recommendations.text.part1') }}
      <nuxt-link to="contact/">
        {{ $t('pages.recommendations.text.part2') }}
      </nuxt-link>
      {{ $t('pages.recommendations.text.part3') }}
    </p>
    <ul>
      <li v-for="review in recommendations" :key="review.title">
        <app-review :review="review" />
      </li>
    </ul>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import AppReview from '@/components/AppReview.vue'

export default {
  components: {
    BlockWrapper,
    AppReview
  },
  data () {
    return {
      recommendations: [
        {
          rating: 5,
          cite: 'Recommendation of Tercaribe - Republica de Panama',
          title: 'Outstanding service and speed',
          text: `
<p>A quien Concierna,</p>
<p>El Giral Power Station es una planta de generacion electrica de 50 MW, perteneciente a Termica del Caribe compuesta de motores MAN y se encuentra localizada en la provincia de Colon Republica de Panama, como ex gerente de esta planta certifico que hicimos varlos servicios de reparacion de equipos y partes de repuestos donde estubo involucrado el señor Bastiaan van Duinen, cuyos servicios fueron prestado con calidad y puntualidad, de igual manera dejo constancia que la participacion del señor van Duinen siempre fue garantia de exito en la prestacion de los mencionados servicios.</p>
<p>Sin otro particular, quedo atentamente,</p>
<p>Aderito Pastor Cabrera</p>`
        },
        {
          rating: 5,
          cite: 'Recommendation Caribbean Turbochargers & Diesel - Republica Dominicana',
          title: 'Always spare parts available',
          text: `
<p>Caribbean Turbochargers & Diesel - Republica Dominicana</p>
<p>Distinguidos Señores,</p>
<p>Por medio de la presente tenemos a bien informar que El señor Jeroen Bastiaan van Duinen, Gerente Director de Turbo Solutions Europe, mantiene una relación comercial con nuestra empresa desde el año 2011 realizando gestiones de oportunidades de negocios en el area de turbocargadores en instalaciones marítimas y de energía, tanto en Europa como en la region de Centroamérica con base en Holanda y Panama. Durante Este Periodo Hemos sostenido una relación satisfactoria entre ambas empresas en el ámbito profesional y de manera personal con el señor van Duinen.</p>
<p>La presente se expide a solitud de la parte interesada, para los fines de lugar.</p>
<p>Muy Atentamente,</p>
<p>Carvel Lorenzo Rodríguez - Gerente General Caribbean Turbochargers</p>`
        },
        {
          cite: 'Recommendation MEC Panama',
          rating: 5,
          title: '24/7 service is what we needed and what we got',
          text:
            `It is great pleasure that I recommend Bastian van Duinen, supplied turbocharger services and spare for ABB, MET, MAN and Napier turbocharger. I have known Bastiaan for several years, both on a professional and personal basis, while I was working as a General Manager at MEC Panamåa Shipyard, branch Veracruz; and Project Manager in the main yard.
<p>MEC Shipyard, for sure, can recommend his services as we know that he can sort every turocharger related issue.</p>
<p>About the spare parts, he always works with the highest quality, good economic value and on fast delivery time, never with delay.</p>
<p>Bastiaan is diligent, hardworking and has a keen eye for details.</p>
<p>These are the reasons that we always enjoyed to do business with him and hope continue making it in the future.</p>
<p>Sincerely yours,</p>
<p>Nelson Aguirre, Naval Electric Engineer = General and Project Manager MAC Panama</p>`
        },
        {
          cite: 'Recommendation Tercaribe - Republica de Panama',
          rating: 5,
          title: '24/7 service is what we needed and what we got',
          text:
            `<p>El Giral Power Station is a powerplant of 50 MW, with MAN motors located in Colon, Republic of Panama, as former general manager of this utility I do certifies that in the time I was director at El Giral we do many services and spares supply where mister Bastiaan van Duinen was involved he always given high quality service and spares, also I certifies that his personal involvement always made this services a succes.</p>
<p>Truly yours,</p>
<p>Aderito Pastor Cabrera</p>
`
        },
        {
          cite: 'Recommendation Dipper Dredge Rialto M. Christensen',
          rating: 5,
          title: '24/7 service is what we needed and what we got',
          text:
            `<p>Who subscribes, Engineer Victor A. Palma R., Chief Enginees in Charge of Dipper Dredge Rialto M. Christensen, belonging to the Authority of the Canal of Panama (ACP), hereby, attest that Turbo Solutions Europe,  has given us supply services and repair of units of the model  VTR320 turbochargers, which are installed in our two internal combustion engines brand FUJI.</p>
<p>Turbo Solutions Europe in the last two years has provided  us with new turbocharger units and provided the service of repair of two others with very good results, at very good prices and with short delivery times, which has resulted in a greater reliability in our internal combustion engines and thus impacted our dredging operation.</p>
<p>The times that we have needed their service, has always been attentive to meet our needs.</p>
<p>Sincerely,<br>
Victor A. Palma R.
Chief Engineer in Charge<br>
Dippor Dredge<br>
Rialto M. Christensen
</p>`
        }

      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;
  padding-top: 1em;
}

li {
  padding: var(--gutter) calc(var(--gutter) / 2);
  background: #f2f4fb;
  margin: 0 calc(var(--gutter) / -2) 1em;

  &:nth-child(2n) {
    background: #dadef2;
  }
}
</style>
