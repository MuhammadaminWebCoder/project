<template>
      <div class="footer">
            <div class="foter">
            <div class="container p-5">
                  <div class="row justify-conten-center text-white">
                        <div class="col-6">
                        <img src="/src/assets/telegram-cloud-document-2-5325675080997427588 2 (1).svg">
                        <p class="w-50 mt-4">Create amazing digital experiences that make the world a happier place.</p>
                        </div>
                        <ul class="col-2" v-for="footer in footerin" :key="footer.id">
                              <h6>{{ footer.title }}</h6>
                              <li><a href="#">{{ footer.href1 }}</a></li>
                              <li><a href="#">{{ footer.href2 }}</a></li>
                              <li><a href="#">{{ footer.href3 }}</a></li>
                              <li><a href="#">{{ footer.href4 }}</a></li>
                              <li><a href="#">{{ footer.href5 }}</a></li>
                        </ul>
                  </div>
            </div>
            </div>
            <div class="footerlink align-items-center p-5">
                  <p class="ms-5 mb-0">© Barcha huquqlar himoyalangan.</p>
                  <div class="icon d-flex me-5">
                        <i class="fab fa-instagram mx-2"></i>
                        <i class="fab fa-facebook-f mx-2"></i>
                        <i class="fab fa-twitter mx-2"></i>
                        <i class="fab fa-linkedin-in mx-2"></i>
                  </div>
            </div>
      </div>
</template>

<script>
  export default {
    data: () => ({
      footerin: [
      { title:'Resurslar',href1:'Blog',href2:'Yangiliklar',href3:'Tadbirlar',href4:'FAQ',href5:'Yordam'},
      { title:'Kompaniya',href1:'Biz haqimizda',href2:'Karyera',href3:'Yangiliklar',href4:'Galereya',href5:'Kontaktlar'},
      { title:'Qonun-qoidalar',href1:'Qoidalar',href2:'Maxfiylik',href3:'Cookies',href4:'Litsenziyalar',href5:'Sozlamalar'},
      ],
    }),
  }
</script>