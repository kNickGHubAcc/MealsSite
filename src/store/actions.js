import axiosClient from '../axiosClient';


export function searchMeals({commit}, keyword) {    //Το object commit χρησιμοποιείται για κλήση ενος mutation στο store της εφαρμογής
  axiosClient.get(`search.php?s=${keyword}`)      //Αποστολή ενός GET request
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)    //Ενημέρωση του state της εφαρμογής με τα γεύματα που επέστρεψαν ως response από το request
    })
}

export function searchMealsByLetter({commit}, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({commit}, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({data}) => {
      commit('setMealsByIngredients', data.meals)
    })
}