<!-- Πρότυπο html της ιστοσελίδας -->
<template>        
  <navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </main>
</template>
<!------------------------------------>


<!-- Συνδυασμός της Javascript (Navbar) με το παραπάνω πρότυπο -->
<script setup>
  import Navbar from "../components/Navbar.vue";
</script>
