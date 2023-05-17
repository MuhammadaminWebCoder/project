<template>
      <div class="contactHelp mb-5">
            <div class="contacts">
                  <p class="fs-1 fw-bold"><span class="text-primary">Savollar bormi?</span> Javob <br>  berishga tayyormiz.</p>
                  <span class="span fs-5 d-block mb-4">Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.</span>
                  <div class="border br-12 my-2 p-2 py-3 px-4 d-longer" v-for="btn in btns" :key="btn.id">
                        <i class="fas fa-phone-alt col-box bg-primary text-white"></i>
                        <div class="text-start ms-3">
                              <p class="m-0">{{ btn.title }}</p>
                              <h5>{{ btn.item }}</h5>
                        </div>
                  </div>
            </div>
            <div class="helps">
                  <input type="text" placeholder="ismingiz" class="br-12 form-control py-3 fs-5 my-2">
                  <input type="text" placeholder="Telefon raqamingiz" class="br-12 form-control py-3 fs-5 my-2">
                  <input type="text" placeholder="Email" class="br-12 form-control py-3 fs-5 my-2">
                  <textarea placeholder="Habar" class="br-12 form-control py-3 fs-5 my-2"></textarea>
                  <div class="d-flex">
                        <input class="form-check-input p-2 me-2" type="checkbox" id="flexCheckChecked" checked>
                        I accept <a href="#" class="ms-2">Terms and Conditions</a>
                  </div>
                  <button class="w-100 py-3 fs-5 mt-2 btn btn-primary">Yuborish</button>
            </div>
      </div>
</template>

<script>
export default {
    data: () => ({
      btns: [
            {title: 'Telefon raqam', item:'+998(99) 066 76 66'},
            {title: 'Telegram', item:'@apply'},
            {title: 'Manzil', item:'Tashkent, Zulfiyakhanim'}
      ],
    }),
}
</script>