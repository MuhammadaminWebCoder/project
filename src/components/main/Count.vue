<template>
      <div class="count bg-light my-5 p-5">
            <p class="fs-1 fw-bold text-center"><span class="text-primary">Raqamlar</span> biz <br> haqimizda so’zlaydi</p>
            <div class="row mt-3 mx-auto justify-content-center container gap-3">
                  <div class="col-3 p-4 bg-white" v-for="col in cols" :key="col.id">
                        <p class="text-primary fs-1 fw-bold">{{ counter }}+</p>
                        <h5>{{ col.title }}</h5>
                        <span class="span mt-2">{{ col.about }}</span>
                  </div>
            </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          counter: 0,
          cols: [
            { title: 'Companies', count: '40+', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
            { title: 'Actual vacancies ', count: '86+', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
            { title: 'Vacants ', count: '120+', about: 'More then 100 jobs waiting for you. Continue to raising in your favouriteee major.'},
            ],
        };
      },
      mounted() {
        setInterval(() => {
          if (this.counter < 200) {
            this.counter++;
          }
        }, 20);
      },
    };
    </script>