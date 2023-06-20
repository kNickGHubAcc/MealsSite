//Mutations για την ενημέρωση της κατάστασης, στο store της εφαρμογής 

//Ενημέρωση του πεδίου searcedhMeals της state, είτε με την τιμή των meals
//είτε με έναν κενό πίνακα (αν τα meals δεν παρέχονται)
export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
  state.mealsByIngredient = meals || []
}

export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}