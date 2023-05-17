<template>
      <div class="container-fluid">
            <header>
                  <NavbarVue/>
            </header>
            <main>
                  <section>
                        <Content/>
                  </section>
                  <section>
                        <Abouthelp/>
                  </section>
                  <section>
                        <platformBox/>
                  </section>
                  <section>
                        <count/>
                  </section>
                  <section>
                        <FiendJob/>
                  </section>
                  <section>
                        <Company/>
                  </section>
                  <section>
                        <ContactHelp/>
                  </section>
            </main>
            <footer>
                  <Footers/>
            </footer>
      </div>
</template>

<script>
import NavbarVue from '@/components/Navbar.vue'
import Content from '@/components/main/Content.vue'
import Abouthelp from '@/components/main/Abouthelp.vue'
import platformBox from '@/components/main/PlatformBox.vue'
import count from '@/components/main/Count.vue'
import FiendJob from '@/components/main/FindJob.vue'
import Company from '@/components/main/Company.vue'
import ContactHelp from '@/components/main/ContactHelp.vue'
import Footers from '@/components/main/Footer.vue'

export default {
      components: {
            NavbarVue,
            Content,
            Abouthelp,
            platformBox,
            count,
            FiendJob,
            Company,
            ContactHelp,
            Footers
      }
}
</script>