<template>
  <v-container grid-list-md>
    <v-flex xs12 sm10 md10 lg10 offset-sm1 offset-md1 offset-lg1>
    <v-card>
        <a :href='url.photography.album' target='_blank'>
          <v-img
            :src='url.me'
            aspect-ratio='2.3'
          >
          </v-img>
        </a>
      <v-card-title primary-title>
        <div>
          <h3 class='headline mb-0'>Wie ben ik?</h3>
        </div>
      </v-card-title>
      <v-card-text>
        Mijn naam is Jesse Boogaard, ik ben een student aan Fontys Hogeschool Tilburg, hier volg ik de studie HBO ICT, ik hoop hier dan ook af te studeren in de richting Software Engineering en Data Science.<br><br>
        Ik ben van kleins af aan al zeer geïnteresseerd in technologie, maar <a :href='url.github' target='_blank'>programmeren</a> (voornamelijk web development) is voor mij een recentere hobby (~3 jaar), ook ben ik erg geïnteresseerd in <a :href='url.photography.main' target='_blank'>fotografie</a>, <a :href='url.music' target='_blank'>muziek</a>, natuur, schietsport, literatuur, <a :href='url.map' target='_blank'>reizen</a>, scheikunde, geschiedenis. Kortom, ik heb een érg brede interesse.<br><br>
        Ik ben een leergierig en assertief persoon, daarnaast ben ik een rustige werker die graag de leiding neemt, dit gaat mij dan ook goed af en heb veel plezier in het leiden van een team.
      </v-card-text>
    </v-card>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex>
      <br/><br/><br/>
      <h3 class='display-2' align='center'>Projecten & opdrachten</h3><br/><br/>
    </v-flex>
    <v-layout wrap>
      <v-flex xs12 md6 xl4 v-for='(project, index) in projects' :key='index'>
        <v-card>
          <v-img :src='project.image' height='250px'></v-img>
          <v-card-title class='text-xs-left'>
            <h3 class='headline mb-0'>{{ project.name }}</h3><br/><br/>
              <div><b>{{ project.description }}</b></div><br/><br/><br/>
              <div class='grey--text'>Languages used: <b>{{ project.stack }}</b><br/>Role: <b>{{ project.role }}</b></div>
          </v-card-title>
          <v-card-actions>
            <v-btn color='secondary' :href='project.link' target='_blank'>See more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex>
      <br/><br/><br/>
      <h3 class='display-2' align='center'>Vaardigheden</h3><br/><br/>
    </v-flex>
      <v-layout wrap>
        <v-flex xs12 md6 xl6 offset-3>
          <v-card>
            <v-toolbar color='secondary'>
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
            <v-toolbar color='secondary'>
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
    <br/>
  </v-container>
</template>

<script>
  export default{
    data () {
      return {
        url: {
          photography: {
            main: 'https://www.flickr.com/photos/65460613@N08/',
            album: 'https://www.flickr.com/photos/65460613@N08/albums/72157702349803594'
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
            name: 'ASA (P1 event)',
            stack: 'C#, RobotC, Javascript',
            description: 'First team assignment at Fontys University. Conceptualization and creation of an early prototype for a product that solves a hindrance people face.',
            role: 'Project Manager, Backend developer, Frontend developer',
            link: 'http://asa.jesseboogaard.com/index.html',
            image: '/static/img/projects/ASA.png'
          },
          {
            name: 'ShreKraft',
            stack: 'Java',
            description: 'Loved Shrek as a kid, then, recently, a friend jokingly suggested I make a Minecraft Shrek mod. I decided to go for it, as I wanted to improve my OOP skills as well.',
            role: 'Backend developer',
            link: 'https://github.com/JesseBoogaard/ShreKraft',
            image: '/static/img/projects/shrek.png'
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
            title: 'Photography',
            details: '4+ years experience'
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