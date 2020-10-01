<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Prova do senai
        </q-toolbar-title>

        <div>User Senai v1.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        User Plataform
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Inicio',
    caption: 'Lista de usuários',
    icon: 'home',
    link: 'https://quasar.dev',
  },
  {
    title: 'Novo Usuário',
    caption: 'Cadastrar novo usuário',
    icon: 'people',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github do projeto',
    icon: 'code',
    link: 'https://github.com/Pedrolopesh/java-test',
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
