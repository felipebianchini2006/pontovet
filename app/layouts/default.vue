<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: calc(100vh - 200px);
}
</style>
