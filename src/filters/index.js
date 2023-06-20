export function truncateWords(str, count) {
  if (!str){      //Αν η μεταβλητή str είναι κενή ή undefined
    return str;
  }
  return str.split(" ").slice(0, count).join(" ")    //Επιστρέφει μια συμβολοσειρά που περιέχει τις πρώτες 'count' λέξεις της αρχικής συμβολοσειράς
}