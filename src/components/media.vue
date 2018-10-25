<template>
  <v-container grid-list-md>
    <v-flex xs12 sm12 md8 xl8 offset-md2 offset-xl2>
      <v-dialog v-model="dialog" width="500px">
        <v-card>
          <v-card-title class="headline" primary-title>
            MFAAS
          </v-card-title>
          <v-card-text align="center">
            <iframe width="390" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/MFAAS"></iframe>
          </v-card-text>
          <v-card-actions>
            <v-btn @click.native="MFAAS = false" color="green">close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card style="padding: 2%;">
        <v-card-title>
          <div class="headline">
            <h2>Reflectie media</h2>
          </div>
        </v-card-title>
        <v-timeline>
          <v-timeline-item v-for='(week, index) in weeks' :key='index' :color="week.color" small>
            <span
              slot="opposite"
              :class="`headline font-weight-bold ${week.color}--text`"
            >Week {{ week.weekno }}</span>
            <div class="py-3">
              <h2 :class="`headline font-weight-light mb-3 ${week.color}--text`">{{ week.title }}</h2>
              <div>
               {{ week.details }}
              </div>
              <v-img v-if="week.img != ''" :src="week.img" aspect-ratio="2.0"></v-img>
              <v-btn v-if="week.weekno == 4" :color="week.color" @click.native="dialog = true">see more</v-btn>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-flex>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      weeks: [
          { weekno: 1, color: 'blue', img: '', details: 'In week 1 hebben we kennis gemaakt met het vak media, daarnaast hebben wij gekeken naar de data die mensen online achter laten zonder er een 2e keer over na te denken. We kregen de opdracht om 1 klasgenoot te "stalken" online en zoveel mogelijk data van deze klasgenoot te verzamelen. Dit was een leuke opdracht en resulteerde in leuke/creatieve collages.', title: 'Digital footprint' },
          { weekno: 2, color: 'yellow', img: '', details: 'Deze week moesten wij de stad in, om een beeld te krijgen (en dit vast te leggen) van hoe belangrijk media is in onze samenleving en waar het allemaal te vinden is. (overal!) Aan het eind van de dag hebben we individueel het verzamelde beeldmateriaal verwerkt in een video. Die dag was voor mij een reminder dat ik liever fotografeer dan dat ik dingen op video vast leg, 1 perfect moment vastleggen geeft mij meer voldoening dan een video.', title: 'A Day in the Life' },
          { weekno: 3, color: 'orange', img: '/static/img/media/week3.png', details: 'Tijdens deze les hebben wij de opdracht gekregen inspiratie op te doen voor een logo, en vervolgens een logo te ontwerpen, ik had al meteen een idee hoe ik mijn logo vorm wilde geven en ben dan ook zeer tevreden met het resultaat. (zie downloads)', title: 'No Logo' },
          { weekno: 4, color: 'green', img: '', details: 'In week 4 hebben we de les van week 5 gedaan, omdat het merendeel de voorbereiding voor de les van week 4 waren vergeten, we hebben deze les een chatbot gemaakt met behulp van "DialogFlow", voorgaand aan deze opdracht hebben we gezamenlijk gebrainstormed over robotisering, onderwerpen als "natural language processing" en "machine learning" kwamen aan bot.', title: 'We Are The Robots' },
          { weekno: 5, color: 'red', img: '/static/img/media/week5.png', details: 'De opdracht van deze week vond ik zeker te weten de leukste opdracht, ik heb van jongs af aan al een enorme interesse in data en statistiek en wil ook afstuderen in de richting data science. De opdracht om data te verzamelen en te visualizeren was dan ook erg leuk en heb deze opdracht met veel plezier gemaakt, om de data te visualizeren heb ik een Javascript framework gebruikt (te vinden onder projecten op de home pagina).', title: 'Big Data' },
          { weekno: 6, color: 'lime', img: '', details: 'Helaas was ik deze les afwezig, gelukkig heb ik van mijn groepsgenoten wel meegekregen wat de bedoeling was en heb dit uiteindelijk dan ook kunnen realiseren (een media onderdeel voor proftaak 1), helaas was dit niet op tijd en was mijn communicatie naar de docent over mijn afwezigheid niet goed, dit is dan ook een les voor de volgenden keer. Om achterstand en mogelijke verwarring te voorkomen.', title: 'User Experience' },
          { weekno: 7, color: 'pink', img: '', details: 'Dit is voor mij bekend gebied, mijn vooropleiding was MBO4 Applicatie Ontwikkeling, hier hebben we voornamelijk web development gedaan en dus weet ik hier dan ook wat ik moet doen. Ik had al meerdere jaren een portfolio website, maar die was met een template gemaakt, nu heb ik besloten een portfolio website opnieuw te maken met behulp van Webpack, Vue, Vue Router en Vuetify. Dit is niet alleen voor media maar voor alle vakken uit periode 1.', title: 'Portfolio' },
          { weekno: 8, color: 'cyan', img: '', details: 'Tijdens week 8, de laatste les, heb ik alle content bijgewerkt op mijn portfolio website en alles wat ik de afgelopen weken gedaan heb kort doorlopen. Ook heb ik een laatste checkpoint ingevuld in FeedPulse en dit verwerkt in een PDF, om samen met de link naar mijn portoflio website in te leveren.', title: 'Afronding' }
      ]
    }
  }
}
</script>

