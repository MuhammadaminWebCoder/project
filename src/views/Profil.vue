<template>
      <div class="Profile">
            <Navbar/>
            <div class="information mt-5 p-170 row">
                  <div class="filter border br-19 ms-2 p-4 col-36 me-4">
                        <div class="prAvatar mx-auto mb-3"></div>
                        <h5 class="text-center">EPAM</h5>
                        <div class="local text-center"><i class="fal fa-map-marker-alt mx-2"></i>Tashkent UZbekistan</div>
                        <hr>
                        <span class="fs-5 fw-400 d-block mb-2">Malumotlar</span>
                        <span class="fs-5 fw-400">website: </span> <span class="span">{{ profil.site }}</span><br>
                        <span class="fs-5 fw-400">vakansiyalar: </span> <span class="span">{{ profil.vakansiya }}</span><br>
                        <span class="fs-5 fw-400">kompaniya hajmi:</span> <span class="span">{{ profil.hajm }}</span>
                        <button class="btn btn-primary w-100 mt-4 py-2 fw-400">ishga topshirish</button>
                        <button class="btn btn-outline-primary w-100 mt-2 py-2 fw-400"><i class="fal fa-save"></i> saqlash</button>
                  </div>
                  <div class="epChats p-0 border br-19 p-4 me-2 col-8">
                        <h5>Senior Front-end Developer</h5>
                              <span class="d-block mt-2 fw-400 span fs-19">Talabalar:</span>
                              <li class="span">Mijozlarning muammolarini oson tushunish va yechim taklif eta olishlik;</li>
                              <li class="span">Kuchli muloqot qobiloyati va jamoaviy ishlash;</li>
                              <li class="span">Mijozlar tahlilini mustaqil ravishda ishlab chiqish uchun ma'lumotlarni tahlil qilish va qidirish imkoniyati;</li>
                              <li class="span mb-2">Kompaniya bilan tez o'sishga tayyor;</li>

                              <span class="d-bock fw-400 span fs-19">Qo’shimcha:</span>
                              <li class="span">Elektron tijorat yoki mijoz/marketing tahlillari bo'yicha tajriba (asosiy texnikalar, ko'rsatkichlar);</li>
                              <hr>
                              <h5>Talablar</h5>
                              <div class="d-flex talab span gap-3">
                                    <p v-for="talab in talablar" :key="talab.id">{{talab}}</p>
                              </div>
                              <h5>Konikmalar</h5>
                              <div class="d-flex talab span gap-3">
                                    <p class="m-0" v-for="talab in kons" :key="talab.id">{{talab}}</p>
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
            talablar:[  
                  'Senior','full-Tile','office','$1000'
            ],
            kons:[
                  'Analystic','Adobe Suit'
            ],
            profil:{
                  site:'company.io',vakansiya:'14',hajm:'56-100 ta xodim'
            }
      })
}
</script>