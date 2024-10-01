<script>
export default {
  name: 'app',
  title: 'hartford',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        /*{ label: 'Examiners', to: '/examiners' },
        { label: 'MentalStateExams', to: '/mentalStateExams' },*/
        { label: 'Overview', to: '/overview'}
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <!-- Logo a la izquierda -->
      <template #start>
        <img src="/src/assets/HIGN-logo-1200.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
        <h3>Hartford</h3>
      </template>

      <!-- Opciones del menú a la derecha -->
      <template #end>
        <div class="flex-row">
          <router-link v-for="item in items" :key="item.label" :to="item.to">
            <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <router-view/>
</template>