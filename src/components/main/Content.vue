<template>
      <div class="Content">
            <div class="contentCenter">
                  <div class="display-6 fw-bold">Orzuingizdagi ishni toping</div>
                  <span class="text">Ish qidiryapsizmi? Murojaat qilish uchun eng so'nggi ish joylarini ko'rib chiqishingiz mumkin!</span>
                  <div class="search rounded d-flex">
                        <i class="fal fa-search ms-2"></i> <input type="text" placeholder="qidiruv">
                        <i class="fal fa-map-marker-alt mx-2"></i><span>Lokatsiya</span><button class="m-2 btn btn-primary btn-sm">Qidiruv</button>
                  </div>
            </div>
            <div class="hiden">
                  <div class="contentInter">
                        <div class="item"><div v-for="(item, i) in oneitems" :key="i">{{item.title}}</div></div>
                        <div class="item"><div v-for="(item, i) in twoitems" :key="i">{{item.title}}</div></div>
                  </div>
            </div>
      </div>
</template>

<script>
export default{
      data: () => ({
      oneitems: [
        { title: 'Senior Accauntant' },{ title: 'Back-end Developer' },{ title: 'Full Stack Developer' },
        { title: 'Graphic Designer' },{ title: 'UI Designer' },{ title: 'UX Designer' },{ title: 'Product Designer' },{ title: 'Sales Manager' },{ title: 'Business Development Manager' },{ title: 'Project Manager' },{ title: 'SEO' },
        { title: 'Team Lead' },{ title: 'CEO' },{ title: 'CTO' },{ title: 'English Teacher' },{ title: 'Dev-Ops Manager' },{ title: 'Product Designer' },{ title: 'Senior Accauntant' },{ title: 'Back-end Developer' },{ title: 'Full Stack Developer' },
      ],
      twoitems: [
        { title: 'Team Lead' },{ title: 'CEO' },{ title: 'CTO' },{ title: 'English Teacher' },{ title: 'Dev-Ops Manager' },{ title: 'Product Designer' },{ title: 'Senior Accauntant' },{ title: 'Back-end Developer' },{ title: 'Full Stack Developer' },
        { title: 'Graphic Designer' },{ title: 'UI Designer' },{ title: 'UX Designer' },{ title: 'Product Designer' },{ title: 'Sales Manager' },{ title: 'Business Development Manager' },{ title: 'Project Manager' },{ title: 'SEO' },
        { title: 'Team Lead' },{ title: 'CEO' },{ title: 'CTO' },{ title: 'English Teacher' },{ title: 'Dev-Ops Manager' },{ title: 'Product Designer' },{ title: 'Product Designer' },{ title: 'Sales Manager' },{ title: 'Manager' },
      ],
    }),
}
</script>