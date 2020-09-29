<template>
  <div class="about">

    <v-card class="card-1 ac mt-13 mb-5 p20" max-width="500" outlined>

          <v-text-field color="#000000" v-model="userData.name" :rules="rules" label="Nome" ></v-text-field>

        <v-text-field v-model="userData.email" autocapitalize="none" color="#000000" :rules="emailRules" label="E-mail"></v-text-field>

        <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'" name="input-10-2" label="Senha" v-model="userData.password"
        class="input-group--focused" @click:append="show2 = !show2"></v-text-field>

        <v-text-field color="#000000" type="number" v-model="userData.document" :rules="documentRules" label="CPF" ></v-text-field>

        <v-btn @click="trySignup()" color="primary ac display-b mb-2">Cadastrar</v-btn>

    </v-card>

  </div>
</template>
<script>
export default {
  data:() => ({

    url: process.env.VUE_APP_PROD_URL,
    
    show1: false,
    show2: false,


    documentRules: [
      value => !!value || 'Necessário.',
      value => (value && value.length >= 11) || 'Min 11 characters',
    ],

    rules: [
      value => !!value || 'Necessário.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],

    emailRules: [
      v => !!v || 'Necessário preencher.',
      v => /.+@.+/.test(v) || 'E-mail precisa se válido',
    ],

    userData:{
      name:'',
      email:'',
      password:'',
      document:''
    }
  }),

  methods:{
    trySignup(){
      console.log(this.userData)
    }
  }
}
</script>