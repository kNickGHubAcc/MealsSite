<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />    <!--Για κάθε object meal του πίνακα meals, θα δημιουργείται ένα component MealItem-->
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">   <!--Με την v-if ελέγχουμε αν ο πίνακας meals είναι κενός-->
    There are no meals
  </div>
</template>


<script setup>
import MealItem from './MealItem.vue';

const {meals} = defineProps({
  meals: 
  {
    required: true,
    type: Array,
  }
})
</script>
