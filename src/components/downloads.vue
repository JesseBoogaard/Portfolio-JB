<template>
<v-container grid-list-md>
    <v-flex xs12 sm12 md8 xl8 offset-md2 offset-xl2>
      <h3 class='display-2' align='center'>Downloads</h3><br/><br/>
    <v-card>
    <v-data-table
      dark
      :headers="headers"
      :items="downloads"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.filename }}</td>
        <td>{{ props.item.subject }}</td>
        <td>{{ props.item.filetype }}</td>
        <td><v-btn icon :href="props.item.url" target="_blank" download><v-icon>get_app</v-icon></v-btn></td>
        <td v-if="props.item.filetype == `PDF`"><v-btn icon :href="props.item.url" target="_blank"><v-icon>pageview</v-icon></v-btn></td>
        <td v-else><v-btn click.disabled icon><v-icon>close</v-icon></v-btn></td>

      </template>
    </v-data-table>
    </v-card>
    </v-flex>
</v-container>
</template>

<script>
  export default{
    data () {
      return {
        headers: [
          {
            text: 'Bestand',
            align: 'left',
            sortable: false,
            value: 'filename'
          },
          { text: 'Vak', value: 'subject', sortable: false },
          { text: 'Bestandstype', value: 'filetype', sortable: false },
          { text: 'Download', value: 'url', sortable: false },
          { text: 'Online weergave', value: 'url', sortable: false }
        ],
        downloads: [
          {
            filename: 'Zelfportret Jesse Boogaard',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Zelfportret_Jesse_Boogaard.pdf',
            value: false
          },
          {
            filename: 'Verslag eerste gesprek',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Verslag_eerste_gesprek.pdf',
            value: false
          },
          {
            filename: 'Combikeuze',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Combikeuze.pdf',
            value: false
          },
          {
            filename: 'Leerdoelen periode 2',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Leerdoelen_periode_2_Jesse_Boogaard.pdf',
            value: false
          },
          {
            filename: 'Terugblikken & vooruit kijken',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Verslag_tweede_gesprek.pdf',
            value: false
          },
          {
            filename: 'Evaluatie P1',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Evaluatie_verslag_P1.pdf',
            value: false
          },
          {
            filename: 'PO Spel',
            filetype: 'JPG',
            subject: 'PO',
            url: '/static/files/PO_spel.jpg',
            value: false
          },
          {
            filename: 'Eigen project Software',
            filetype: 'PDF',
            subject: 'Software',
            url: '/static/files/Opdracht_1_OIS11.pdf',
            value: false
          },
          {
            filename: 'Reflectie verslag OIS11',
            filetype: 'PDF',
            subject: 'Software',
            url: '/static/files/Reflectie_verslag_OIS11.pdf',
            value: false
          },
          {
            filename: 'Afronding OIT11',
            filetype: 'PDF',
            subject: 'Technology',
            url: '/static/files/Afronding_OIT11_Jesse_Boogaard.pdf',
            value: false
          },
          {
            filename: 'Presentatie Embedded Systems',
            filetype: 'PPTX',
            subject: 'Technology',
            url: '/static/files/Presentatie_OIT11.pptx',
            value: false
          },
          {
            filename: 'Wireframe_portfolio.xd',
            filetype: 'XD',
            subject: 'Media',
            url: '/static/files/Wireframe_portfolio.xd',
            value: false
          },
          {
            filename: 'Afronding OIM11',
            filetype: 'PDF',
            subject: 'Media',
            url: '/static/files/Afronding_OIM11_Jesse_Boogaard.pdf',
            value: false
          }
        ]
      }
    }
  }
</script>