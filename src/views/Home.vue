<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>


<script setup>
import {onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);    //Δημιουργία μιας αναφοράς meals με τιμή έναν κενό πίνακα

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient.get(`random.php`)     //Αποστολή ενός GET request για λήψη γευμάτων (meals)
      .then(({data}) => meals.value.push(data.meals[0]));   //To 1o γεύμα που επιστρέφεται ως response (data) προστίθεται στον πίνακα meals (melas.value)
  }
});
</script>