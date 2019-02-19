<template>
  <v-container grid-list-md>
    <v-fab-transition>
        <v-btn @click.native="socials = true;" style="margin-bottom: 42px;" color="primary" fixed dark absolute bottom right fab>
          <v-icon>person_add</v-icon>
        </v-btn>
      </v-fab-transition>
    <v-toolbar flat app dense>
      <v-btn depressed icon ripple href="/#/">
        <v-img src="static/img/favicon.png" aspect-ratio="1"></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed icon ripple href="/#/en">
        <v-img src="static/img/flag_EN.png" aspect-ratio="1.4"></v-img>
      </v-btn>
    </v-toolbar>
    <v-layout row justify-center>
    <v-dialog v-model="socials" max-width="500">
      <v-card>
        <v-toolbar color="secondary" flat depressed>
          <v-toolbar-title>
            <div>
              <h2 class="headline">Voeg mij toe!</h2>
            </div>
          </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(medium, index) in media">
            <v-list-tile :key="index" :href="medium.url" target="_blank">
                <v-list-tile-title>{{ medium.name }}</v-list-tile-title>
                <v-icon>{{ medium.icon }}</v-icon>
            </v-list-tile>
            <v-divider :key='index'></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-flex xs12 sm12 md12 xl12>
      <v-card>
        <v-img :src='url.me' aspect-ratio='2.1' gradient="rgba(0,0,0,0.32), rgba(0,0,0,0.5), rgba(0,0,0,0.65)">
          <v-layout align-center column>
            <h1 class="display-2" color="white" style="margin-top: 22%; padding-left: 2%;">Jesse Boogaard</h1>
          </v-layout>
        </v-img>
        <v-card-title primary-title>
          <div>
            <h3 class='headline mb-0'>Over mij</h3>
          </div>
        </v-card-title>
        <v-card-text>
          Op het moment ben ik een student aan Fontys Hogeschool Tilburg, hier volg ik de studie HBO
          ICT, ik hoop hier dan ook af te studeren in de richting Software Engineering en Data Science.<br><br>
          Van jongs af aan al zeer geïnteresseerd in technologie, maar <a :href='url.github' target='_blank'>programmeren</a>
          (voornamelijk web development) is voor mij een recentere hobby (~3 jaar), ook ben ik erg geïnteresseerd in <a
            :href='url.photography.main' target='_blank'>fotografie</a>, <a :href='url.music' target='_blank'>muziek</a>,
          natuur, schietsport, literatuur, <a :href='url.map' target='_blank'>reizen</a>, scheikunde, geschiedenis.
          Kortom, ik heb een érg brede interesse.<br><br>
          Daarnaast ben ik een leergierig en assertief persoon, een rustige werker die graag de leiding neemt, dit gaat
          mij dan ook goed af en heb veel plezier in het leiden van een team.
        </v-card-text>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex>
      <br /><br /><br />
      <h3 class='display-2' align='center'>Projecten & opdrachten</h3><br /><br />
    </v-flex>
    <v-layout wrap>
      <v-flex xs12 md6 xl4 v-for='(project, index) in projects' :key='index'>
        <v-card hover raised>
          <v-img :src='project.image' height='250px'></v-img>
          <v-card-title class='text-xs-left'>
            <h3 class='headline mb-0'>{{ project.name }}</h3>
            <div><b>{{ project.description }}</b></div>
            <div class='grey--text'>Languages used: <b>{{ project.stack }}</b><br />Role: <b>{{ project.role }}</b></div>
          </v-card-title>
          <v-card-actions>
            <v-btn color='primary' :href='project.link' target='_blank'>See more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex>
      <br /><br /><br />
      <h3 class='display-2' align='center'>Vaardigheden</h3><br /><br />
    </v-flex>
    <v-layout wrap>
      <v-flex xs12 md6 xl6 offset-3>
        <v-card>
          <v-toolbar color='primary'>
            <v-toolbar-title>
              <div>
                <h3>Hard skills</h3>
              </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>code</v-icon>
          </v-toolbar>
          <v-list three-line light>
            <template v-for='(skill, index) in hard_skills'>
              <v-list-tile :key='index'>
                <v-list-tile-content>
                  <v-list-tile-title v-html='skill.title'></v-list-tile-title>
                  <v-list-tile-sub-title v-html='skill.details'></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key='skill.details'></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl6 offset-3>
        <v-card>
          <v-toolbar color='primary'>
            <v-toolbar-title>
              <div>
                <h3>Soft skills</h3>
              </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>people</v-icon>
          </v-toolbar>
          <v-list three-line light>
            <template v-for='(skill, index) in soft_skills'>
              <v-list-tile :key='index'>
                <v-list-tile-content>
                  <v-list-tile-title v-html='skill.title'></v-list-tile-title>
                  <v-list-tile-sub-title v-html='skill.details'></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key='skill.details'></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <br />
  </v-container>
</template>

<script>
  export default{
    data () {
      return {
        socials: false,
        media: [
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jesseboogaard/', icon: 'group_add' },
          { name: 'GitHub', url: 'https://www.github.com/JesseBoogaard', icon: 'code' },
          { name: '+31 6 28020731', url: '', icon: 'phone' },
          { name: 'jesse98@live.nl', url: '', icon: 'mail' }
        ],
        url: {
          photography: {
            main: 'https://www.flickr.com/photos/65460613@N08/'
          },
          music: 'https://www.last.fm/user/PsychoDuck45',
          map: 'https://www.amcharts.com/visited_countries/#BE,DK,FR,DE,GR,IE,LU,NL,NO,PT,CH,GB,CA,US,GH,NG,TN',
          github: 'https://www.github.com/JesseBoogaard',
          me: '/static/img/me.jpg',
          thumb: '/static/img/favicon.png'
        },
        projects: [
          {
            name: 'SlimeBot',
            stack: 'Node.js & NoSQL (Google Firestore)',
            description: 'A text-based adaption of the indie-game SlimeRancher. (disguised as a Discord bot) Will double as slimerancher wiki in the future.',
            role: 'Backend developer',
            link: 'https://github.com/JesseBoogaard/SlimeBot',
            image: '/static/img/projects/slimebot.png'
          },
          {
            name: 'The Konishi Project',
            stack: 'Python (Flask), Vue.js (TypeScript), SQL (PostgreSQL)',
            description: 'Collaborative open-source social media platform in favour of freedom of speech, created by me and several others.',
            role: 'Frontend Developer, Creative input & Planning',
            link: 'https://github.com/konishi-project',
            image: '/static/img/projects/konishi.png'
          },
          {
            name: 'Portfolio Website 2.0',
            stack: 'Vue (Vue-Router/Vuex/Vuetify)',
            description: 'After having a portfolio website made with a template for nearly 3 years I felt it was time to build one myself, applying some of the skills I picked up along the way.',
            role: 'Backend developer & Frontend developer',
            link: 'https://github.com/JesseBoogaard/portfolio2',
            image: '/static/img/projects/portfolio.png'
          },
          {
            name: 'ShreKraft',
            stack: 'Java',
            description: 'Loved Shrek as a kid, then, recently, a friend jokingly suggested I make a Minecraft Shrek mod. I decided to go for it, as I wanted to improve my OOP skills as well.',
            role: 'Backend developer',
            link: 'https://github.com/JesseBoogaard/ShreKraft',
            image: '/static/img/projects/shrek.png'
          },
          {
            name: 'isOddOrEven-collection',
            stack: 'Javascript, R, Fortran95, LOLCODE, C++, Python, Elixir',
            description: 'A bit of an in-joke, writing the dumbest possible isOddOrEven function, in obscure/funny programming languages. Feel free to contribute.',
            role: 'Curator, Developer',
            link: 'https://github.com/JesseBoogaard/isOddOrEven-collection',
            image: '/static/img/projects/isOddOrEven.png'
          },
          {
            name: 'Pop! Vinyl collection tracker',
            stack: 'ASP.NET Core 2.0 (MVC), JavaScript',
            description: 'A website where people can keep track of their Pop! Vinyl (Funko pops) collection. Made for an assignment at uni.',
            role: 'Backend developer & Frontend developer',
            link: 'https://github.com/JesseBoogaard/PopVinyl-collection',
            image: ''
          }
        ],
        hard_skills: [
          {
            title: 'Python',
            details: 'Flask/Django'
          },
          {
            title: 'Javascript',
            details: 'Node.js, ES6/7, Electron'
          },
          {
            title: 'SQL',
            details: 'SQLite, MySQL, MariaDB'
          },
          {
            title: 'Vue',
            details: 'Vuex, Vue-router, Vue CLI, Vuetify'
          },
          {
            title: 'Version control',
            details: 'Git'
          },
          {
            title: 'Linux',
            details: 'Ubuntu, CentOS'
          },
          {
            title: 'Fotografie',
            details: '5+ jaar ervaring'
          }
        ],
        soft_skills: [
          {
            title: 'Scrum',
            details: '3+ jaar ervaring met de Scrum methode.'
          },
          {
            title: 'Leiderschap',
            details: 'Een team leiden gaat mij goed af en heb hier dan ook veel plezier in.'
          },
          {
            title: 'Metacognitie',
            details: 'Ik ben me zéér bewust van hoe ik leer, dit kan ik dan ook zeer efficiënt.'
          },
          {
            title: 'Project Management',
            details: '3+ jaar ervaring als project manager bij verschillende software projecten.'
          },
          {
            title: 'Tweetalig',
            details: 'Vloeiend Engels & Nederlands.'
          },
          {
            title: 'Gemotiveerd',
            details: 'Voor ieder project voel ik mij enorm gemotiveerd om het succesvol af te ronden.'
          },
          {
            title: 'Assertief',
            details: 'Ik breng duidelijk mijn mening over, maar doe dit met respect voor een ander.'
          }
        ]
      }
    }
  }
</script>

<style>
  a {
    font-weight: bold;
    text-decoration: none;
  }
</style>