<template>
      <div class="platformHelp my-4">
            <p class="fs-1 fw-bold">Platformadan qanday <span class="text-primary d-block">foydalanamiz?</span></p>
            <span class="text-secondary">Worse linen an civil jokes leave offer. Parties all clothes removal cheered calling prudent her and residence for met the estimable disposing.</span>
            <div class="border my-2 p-2 px-4 d-longer" v-for="btn in btns" :key="btn.id">
                  <i class="fas fa-phone-alt col-box bg-primary text-white"></i>
                  <div class="text-start ms-3">
                        <p class="m-0">{{ btn.title }}</p>
                        <h5>{{ btn.item }}</h5>
                  </div>
            </div>
            <div class="aboImage"><img class="" src="Rectangle 10055.svg"></div>
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