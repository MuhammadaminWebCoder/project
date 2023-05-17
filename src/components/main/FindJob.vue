<template>
      <div class="FiendJob position-relative mb-5">
            <p class="fs-1 fw-bold text-center">Ish topishingiz uchun <br> <span class="text-primary">4 qadam</span></p>
            <img class="position-absolute image" src="Vector.svg">
            <div class="row mx-auto mt-5 justify-content-center gap-3">
                  <div class="col pb-5 col-2_5 p-4 border" v-for="col in cols" :key="col.id">
                        <div class="bg-primary col-box mb-2"><i :class="col.icon"></i></div>
                        <h5 class="my-3">{{ col.title }}</h5>
                        <span class="span">{{ col.about }}</span>
                  </div>
            </div>
      </div>
</template>

<script>
  export default {
    data: () => ({
      cols: [
      { title: 'Akkaunt oching', icon: 'fas icon fa-user', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Ish qidiring', icon: 'icon fal fa-phone-laptop', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Rezyume to’diring', icon: 'icon fas fa-file-alt', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      { title: 'Ishga ega bo’ling', icon: 'icon fas fa-shopping-bag', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
      ],
    }),
  }
</script>