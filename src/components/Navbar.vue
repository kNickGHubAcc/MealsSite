<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">      <!--Header με 4 links τα οποία και οδηγούν σε 4 διαφορετικές σελίδες-->
    <router-link
      :to="{name: 'home'}"
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold text-3xl"
    >Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{name: 'byName'}"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-2xl"
      >Meals by Name
      </router-link>
      <router-link
        :to="{name: 'byLetter'}"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-2xl"
      >Meals By Letter
      </router-link>
      <router-link
        :to="{name: 'ingredients'}"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-2xl"
      >Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>