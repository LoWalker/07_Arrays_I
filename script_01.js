"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
output(getSentence("ich","bin","Max","Mütze"));
function getSentence(word1,word2, word3,word4) {
    const GAP = " ";
    const PUNKT = ".";
    let str = word1 + GAP + 
              word2 + GAP + 
              word3 + GAP + 
              word4 + 
              PUNKT;
              
    return str;
}





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


