<template>
  <v-container grid-list-md>
    <v-fab-transition>
        <v-btn @click.native="socials = true;" style="margin-bottom: 42px;" color="primary" fixed dark absolute bottom right fab>
          <v-icon>person_add</v-icon>
        </v-btn>
      </v-fab-transition>
    <v-toolbar flat app dense>
      <v-btn depressed icon ripple href="/#/en">
        <v-img src="static/img/favicon.png" aspect-ratio="1"></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed icon ripple href="/#/">
        <v-img src="static/img/flag_NL.png" aspect-ratio="1.25"></v-img>
      </v-btn>
    </v-toolbar>
    <v-layout row justify-center>
    <v-dialog v-model="socials" max-width="500">
      <v-card>
        <v-toolbar color="secondary" flat depressed>
          <v-toolbar-title>
            <div>
              <h2 class="headline">Let's connect!</h2>
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
            <h3 class='headline mb-0'>About me</h3>
          </div>
        </v-card-title>
        <v-card-text>
          I am currently studying at Fontys University of Applied Sciences. Working towards a BSc in Software Engineering & Data Science.<br><br>
          I have always taken a huge interest in technology, but <a :href='url.github' target='_blank'>programming</a>
          (namely web development) is a more gratifying hobby for me, spanning around 3 years. My personal pass times and hobbies also include <a
            :href='url.photography.main' target='_blank'>photography</a>, <a :href='url.music' target='_blank'>music</a>,
          nature, shooting sports, literature, <a :href='url.map' target='_blank'>traveling</a>, and chemistry.<br><br>
          I am enthused to learn new things, and am always looking for ways to further improve myself. I am a calm and collected worker who very much enjoys leading a motivated team, and take great satisfaction in doing so successfully.
        </v-card-text>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex>
      <br /><br /><br />
      <h3 class='display-2' align='center'>Projects</h3><br /><br />
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
      <h3 class='display-2' align='center'>Skills</h3><br /><br />
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
            stack: 'JavaScript (Vue), CSS',
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
            details: '5+ years experience'
          }
        ],
        soft_skills: [
          {
            title: 'Scrum',
            details: '3+ years experience working with Scrum (agile).'
          },
          {
            title: 'Leadership',
            details: 'Leading a team comes naturally for me, and I enjoy leading a highly motivated team.'
          },
          {
            title: 'Metacognition',
            details: 'I am a very self-aware person when it comes to capabilities, and applying skills.'
          },
          {
            title: 'Project Management',
            details: '3+ years of experience as project manager for several software projects.'
          },
          {
            title: 'Bilingual',
            details: 'Fluent in English & Dutch.'
          },
          {
            title: 'Motivated',
            details: 'Highly motivated for every project I work on, I am driven to bring every project I am part of to a successful end.'
          },
          {
            title: 'Assertive',
            details: 'Self-assured and confident, not afraid to make myself clear, but will always respect others while doing so.'
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