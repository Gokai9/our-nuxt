<template>
  <div>
    <Header />
    <pre>blue</pre>
    <slot />
    <Footer />
  </div>
</template>

<style scoped >
  div {
    background-color: blue;
  }
</style>