<template>
      <div class="platformBox">
            <p class="fs-2 fw-bold text-center">Birgina <span class="text-primary">platforma</span> - ko’plab <br> yechimlar</p>
            <div class="row mx-auto justify-content-center gap-3">
                  <div class="col-3 p-4 pb-5 border" v-for="col in cols" :key="col.id">
                        <div class="bg-primary col-box mb-2"><i :class="col.icon"></i></div>
                        <h5>{{ col.title }}</h5>
                        <span class="span mt-2">{{ col.about }}</span>
                  </div>
            </div>
      </div>
</template>

<script>
  export default {
    data: () => ({
      cols: [
      { title: 'Marketing va komunikatsiya', icon: 'fas icon fa-signal-3 bg-white text-primary', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Dizayn va Dasturlash', icon: 'fas icon far fa-palette', about: 'More then 250 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Insonlar bilan ishlash', icon: 'fas icon fas fa-users', about: 'More then 250 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Moliya', icon: 'fas icon fa-calculator', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Biznes va konsalting', icon: 'fas icon fad fa-person-carry', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Projekt menejment', icon: 'fas icon fas fa-shopping-bag', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      ],
    }),
  }
</script>