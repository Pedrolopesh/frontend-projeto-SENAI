<template>
    <div>



        <v-card class="card-1 ac mt-13 mb-5 p20" max-width="1000" outlined>
            <v-btn color="primary" @click="goToSinup">ADICONAR NOVO USUÁRIO</v-btn>

            <div>
                <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
                >
                    <template v-slot:top>
                        <v-text-field
                        v-model="search"
                        label="Search (UPPER CASE ONLY)"
                        class="mx-4"
                        ></v-text-field>
                    </template>
                    
                <template v-slot:item.actions="{ item }">
                    <v-btn color="primary" outlined @click="edituser">editar</v-btn>
                </template>
                </v-data-table>
            </div>

        </v-card>

     <v-dialog
      v-model="editUserModal"
      persistent
      max-width="500"
    >
    
    <v-card class="p20">
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        
            <div>
                <FormFields />
            </div>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error darken-1"
            text
            @click="editUserModal = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="tryUpdateUser"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    
    
    </v-dialog>
        


    
    </div>
</template>
<script>
import FormFields from '../formFields'

export default {
    components:{
        FormFields
    },
    data:() => ({
        url: process.env.VUE_APP_PROD_URL,

        editUserModal: false,
        search: '',
        calories: '',
        desserts:[]
        // desserts: [
        //   {
        //     name: 'Frozen Yogurt',
        //     email: 'pedro@teste',
        //     cpf: '1234567890',
        //   },
        //   {
        //     name: 'Ice cream sandwich',
        //     email: 'pedro@teste',
        //     cpf: '1234567890',
        //   },
        //   {
        //     name: 'Eclair',
        //     email: 'pedro@teste',
        //     cpf: '1234567890',
        //   },
        // ],
      
    }),

    computed: {
      headers () {
        return [
          {
            text: 'id do usuário',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          {
            text: 'Nome do usuário',
            align: 'start',
            sortable: false,
            value: 'nome',
          },
          {
            text: 'Email do usuário',
            value: 'email',
            filter: value => {
              if (!this.calories) return true

              return value < parseInt(this.calories)
            },
          },
          { text: 'CPF', value: 'cpf' },
          { text: 'ações', value: 'actions' },
        ]
      },
    },

    created(){
        this.$http.get(this.url + '/users').then(resp => {
            let results = resp.data
            console.log(results)
            this.desserts = results
        })
    },

    methods:{
        edituser(){
            this.editUserModal = true
        },

        goToSinup(){
            this.$router.push('/Signup')
        },

        tryUpdateUser(){

        },
        filterOnlyCapsText (value, search, item) {
            return value != null &&
            search != null &&
            typeof value === 'string' &&
            value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    }

}
</script>