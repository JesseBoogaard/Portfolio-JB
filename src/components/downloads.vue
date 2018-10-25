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
        <td><v-btn icon :href="props.item.url" target="_blank" download><v-icon>get_app</v-icon></v-btn></td>
        <td>{{ props.item.filename }}</td>
        <td>{{ props.item.subject }}</td>
        <td>{{ props.item.filetype }}</td>
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
            text: 'Download',
            align: 'left',
            sortable: false,
            value: 'url'
          },
          { text: 'Bestand', value: 'filename', sortable: false },
          { text: 'Vak', value: 'subject', sortable: false },
          { text: 'Bestandstype', value: 'filetype', sortable: false },
          { text: 'Online weergave', value: 'url', sortable: false }
        ],
        downloads: [
          {
            filename: 'Zelfportret Jesse Boogaard',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/Zelfportret_Jesse_Boogaard.pdf'
          },
          {
            filename: 'Verslag eerste gesprek',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/PO/Verslag_eerste_gesprek.pdf'
          },
          {
            filename: 'Combikeuze',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/PO/Combikeuze.pdf'
          },
          {
            filename: 'PO Spel',
            filetype: 'JPG',
            subject: 'PO',
            url: '/static/files/PO/PO_spel.jpg'
          },
          {
            filename: 'Leerdoelen periode 2',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/PO/Leerdoelen_periode_2_Jesse_Boogaard.pdf'
          },
          {
            filename: 'Terugblikken & vooruit kijken',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/PO/Verslag_tweede_gesprek.pdf'
          },
          {
            filename: 'Evaluatie P1',
            filetype: 'PDF',
            subject: 'PO',
            url: '/static/files/PO/Evaluatie_verslag_P1.pdf'
          },
          {
            filename: 'Eigen project Software',
            filetype: 'PDF',
            subject: 'Software',
            url: '/static/files/Software/Opdracht_1_OIS11.pdf'
          },
          {
            filename: 'Reflectie verslag OIS11',
            filetype: 'PDF',
            subject: 'Software',
            url: '/static/files/Software/Reflectie_verslag_OIS11.pdf'
          },
          {
            filename: 'Afronding OIT11',
            filetype: 'PDF',
            subject: 'Technology',
            url: '/static/files/Technology/Afronding_OIT11_Jesse_Boogaard.pdf'
          },
          {
            filename: 'Presentatie Embedded Systems',
            filetype: 'PPTX',
            subject: 'Technology',
            url: '/static/files/Technology/Presentatie_OIT11.pptx'
          },
          {
            filename: 'Opdrachten OIM11',
            filetype: 'ZIP',
            subject: 'Media',
            url: '/static/files/Media/OIM11_Opdrachten_Jesse_Boogaard.zip'
          },
          {
            filename: 'Afronding OIM11',
            filetype: 'PDF',
            subject: 'Media',
            url: '/static/files/Media/Afronding_OIM11_Jesse_Boogaard.pdf'
          },
          {
            filename: 'Business Portfolio',
            filetype: 'DOCX',
            subject: 'Business',
            url: '/static/files/Business/Portfolio_OIB11.docx'
          }
        ]
      }
    }
  }
</script>