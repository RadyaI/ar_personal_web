<template>
  <!-- <router-view v-slot="{ Component }">
    <transition enter-active-class="animate_animated animate__backInUp" leave-active-class="animate__animated animate__backOutUp" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  /* color: white; */
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
  /* color: white; */
}

.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
