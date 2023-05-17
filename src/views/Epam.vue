<template>
      <div class="Epam">
            <Navbar/>
            <div class="epContent p-170">
                  <div class="w-50"><p class="fs-1 fw-400">Orzuingizdagi ishni toping</p>
                  <span>Ish qidiryapsizmi? Murojaat qilish uchun eng so'nggi ish joylarini ko'rib <br> chiqishingiz mumkin!</span></div>
            </div>
            <div class="epMain mt-5 p-170">
                  <div class="contentCenter p-0">
                  <div class="search w-100 fs-5 border d-flex m-0">
                        <i class="fal fa-search ms-4"></i> 
                        <input type="text" placeholder="qidiruv">
                        <i class="fal fa-map-marker-alt mx-2"></i><span class="fs-5 me-5">Lokatsiya</span>
                        <button class="m-2 btn btn-primary br-12 btn-lg">Qidiruv</button>
                  </div>
            </div>
            </div>
            <div class="information mt-4 p-170 row">
                  <div class="filter border br-19 ms-2 p-4 col-36 me-4" style="height: fit-content;">
                        <div class="d-flex justify-content-between">
                              <h5>Filter</h5> 
                              <p class="text-primary fs-6 fw-bold">
                                    Tozalash
                              </p>
                        </div>
                        <input type="text" class="w-100 border fw-400 form-control br-12 ps-3" placeholder="kalit sozlar">
                        <hr>
                        <input type="text" class="w-100 border fw-400 form-control br-12 ps-3" placeholder="kalit sozlar">
                        <input type="text" class="w-100 border fw-400 form-control br-12 ps-3" placeholder="kalit sozlar">
                        <input type="text" class="w-100 border fw-400 form-control br-12 ps-3" placeholder="kalit sozlar">
                        
                  </div>
                  <div class="epChats p-0 me-2 col-8">
                        <div class="chat border mb-3 p-4 br-19" v-for="chat in chats" :key="chat.id">
                              <div class="chatHeader mb-3 d-flex align-items-center justify-content-between">
                                    <div class="left d-flex align-items-center">
                                          <div class="avatar me-3 rounded-circle bg-primary"></div>
                                          <div class="ix">
                                                <h5>{{chat.title}}</h5>
                                                <div class="d-flex align-items-center span">
                                                      <span>EPAM</span>
                                                      <i class="fas span fa-circle mx-2 fs-10"></i><p class="border mx-2 px-2 m-0 rounded"
                                                      v-for="Citem in chat.ath" :key="Citem.id">{{Citem}}</p>
                                                      <i class="fas span fa-circle mx-2 fs-10"></i><span>{{chat.uzs}}</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="right text-end">
                                          <h6><i class="fal fa-map-marker-alt"></i> {{chat.local}}</h6>
                                          <span class="span">{{chat.ago}}</span>
                                    </div>
                              </div>
                              <span class="span">{{ chat.description }}</span>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
      components: {
            Navbar
      },
      data: () => ({
            chats: [
                  {title: 'Produkt dizayner',ath:['Junior','Frilans'],local: 'Marina East, Singapore',uzs: '$400', ago: '5 daqiqa oldin', description: 'Biz ma’lum UI elementlarini chiza oladigan freelancer grafik rassomni yollaymiz. Boshqaruv paneli, mobil ilovalarni loyihalashda malakali bo’lishi kerak.'},
                  {title: 'Produkt dizayner',ath:['Junior','Frilans'],local: 'Marina East, Singapore',uzs: '$400', ago: '5 daqiqa oldin', description: 'Biz ma’lum UI elementlarini chiza oladigan freelancer grafik rassomni yollaymiz. Boshqaruv paneli, mobil ilovalarni loyihalashda malakali bo’lishi kerak.'},
                  {title: 'Produkt dizayner',ath:['Junior','Frilans'],local: 'Marina East, Singapore',uzs: '$400', ago: '5 daqiqa oldin', description: 'Biz ma’lum UI elementlarini chiza oladigan freelancer grafik rassomni yollaymiz. Boshqaruv paneli, mobil ilovalarni loyihalashda malakali bo’lishi kerak.'},
                  {title: 'Produkt dizayner',ath:['Junior','Frilans'],local: 'Marina East, Singapore',uzs: '$400', ago: '5 daqiqa oldin', description: 'Biz ma’lum UI elementlarini chiza oladigan freelancer grafik rassomni yollaymiz. Boshqaruv paneli, mobil ilovalarni loyihalashda malakali bo’lishi kerak.'},
            ]
      })
}
</script>