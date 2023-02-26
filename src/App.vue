<script>
  import {
    Navbar,
    Header,
    Advantage,
    Experience,
    Description,
    Catalog,
    Subscribe,
    Reviews,
    Footer,
  } from "./components/index";

  export default {
    name: "App",
    components: {
      Navbar,
      Header,
      Advantage,
      Experience,
      Description,
      Catalog,
      Subscribe,
      Reviews,
      Footer,
    },
  }
</script>

<template>
  <Navbar />
  <Header />
  <Advantage />
  <Experience />
  <Description />
  <Catalog />
  <Subscribe />
  <Reviews />
  <Footer />
</template>