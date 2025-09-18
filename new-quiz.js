// quiz.js
const folderMP4 = "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/";

// Toggle quiz mode
const showWordFirst = false; // true: word first, false: video first


// START QUIZ DATA
const quizData = [

  ["Italie", "https://github.com/stefbrame-nawlou/quiz-videos/blob/main/italie_2.mp4"],
  ["Danemark", "https://github.com/stefbrame-nawlou/quiz-videos/blob/main/danemark_1.mp4"]
  /*
  ["Janvier", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/janvier_1.mp4"],
  ["Février", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/fevrier_1.mp4"],
  ["Mars", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/mars_1_A.mp4"],
  ["Avril", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/avril_2_A.mp4"],
  ["Mai", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/mai_1.mp4"],
  ["Juin", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/juin_1_A.mp4"],
  ["Juillet", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/juillet_1.mp4"],
  ["Août", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/aout_1_B.mp4"],
  ["Septembre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/septembre_2.mp4"],
  ["Octobre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/octobre_1.mp4"],
  ["Novembre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/novembre_1.mp4"],
  ["Décembre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/decembre_2.mp4"],
  */
  
  /*
  ["Anvers", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/anvers_1_A.mp4"],
  ["Charleroi", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/charleroi_1.mp4"],
  ["Arlon", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/arlon_1.mp4"],
  ["Gand", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/gand_1.mp4"],
  ["Hasselt", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/hasselt_1_A.mp4"],
  ["Bruges", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/bruges_1_A.mp4"],
  ["Verviers", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/verviers_1.mp4"],
  ["Wavre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/wavre_2.mp4"],
  ["Malines", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/malines_1.mp4"],
  ["Courtrai", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/courtrai_1.mp4"],
  ["Hasselt", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/hasselt_1_A.mp4"],
  ["Saint-Nicolas", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/stnicolas_1_B.mp4"],
  ["Ostende", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/ostende_1.mp4"],
  ["Anderlecht", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/anderlecht_ville_1.mp4"],
  ["Auderghem", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/auderghem_1.mp4"],
  ["Berchem-Sainte-Agathe", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/berchem_1_B.mp4"],
  ["Bruxelles", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/bruxelles_1_A.mp4"],
  ["Etterbeek", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/etterbeek_1.mp4"],
  ["Evere", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/evere_1.mp4"],
  ["Forest", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/forest_1.mp4"],
  ["Ganshoren", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/ganshoren_1.mp4"],
  ["Ixelles", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/ixelles_1_A.mp4"],
  ["Jette", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/jette_ville_1.mp4"],
  ["Koekelberg", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/koekelberg_1.mp4"],
  ["Molenbeek-Saint-Jean", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/molenbeek_ville_1.mp4"],
  ["Saint-Gilles", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/saint_gilles_ville_1.mp4"],
  ["Saint-Josse-ten-Noode", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/saint_josse_ten_noode_1.mp4"],
  ["Schaerbeek", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/schaerbeek_1.mp4"],
  ["Uccle", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/uccle_1.mp4"],
  ["Watermael-Boitsfort", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/watermael_boitsfort_1.mp4"],
  ["Woluwe", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/woluwe_1_B.mp4"],
  ["Louvain-la-Neuve", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/louvain_1_A.mp4"],

  */

  /*
  ["Banane", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/banane_2.mp4"],
  ["Cerise", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/cerise_1.mp4"],
  ["Citron", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/citron_1_A.mp4"],
  ["Fraise", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/fraise_1.mp4"],
  ["Pomme", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/pomme_1.mp4"],
  ["Prune", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/prune_1.mp4"],
  ["Raisin", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/raisin_1.mp4"],
  ["Pamplemousse", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/pamplemousse_1.mp4"],
  ["Fruit", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/avocat_fruit_1.mp4"],
  ["Poire", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/poire_2.mp4"],
  */

  /*
  ["Estonie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/estonie_1.mp4"],
  ["Vatican", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/vatican_1.mp4"],
  ["Finlande", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/finlande_1.mp4"],
  ["Malte", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/malte_1.mp4"],
  ["Luxembourg", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/luxembourg_1_B.mp4"],
  ["Islande", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/islande_1.mp4"],
  ["Autriche", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/autriche_1.mp4"],
  ["Kosovo", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/kosovo_1.mp4"],
  ["Hongrie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/hongrie_1.mp4"],
  ["Monténégro", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/montenegro_2.mp4"],
  ["Norvège", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/norvege_1.mp4"],
  ["Turquie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/turquie_2.mp4"],
  ["Roumanie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/roumanie_1.mp4"],
  ["Pologne", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/pologne_1.mp4"],
  ["Bosnie-Herzégovine", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/bosnie_1.mp4"],
  ["Chypre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/chypre_1.mp4"],
  ["Bulgarie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/bulgarie_1.mp4"],
  ["Lituanie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/lituanie_1.mp4"],
  ["Saint-Marin", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/saint_marin_1.mp4"],
  ["Monaco", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/monaco_1.mp4"],
  ["Croatie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/croatie_1.mp4"],
  ["Slovénie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/slovenie_1.mp4"],
  ["Suède", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/suede_1_A.mp4"],
  ["Serbie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/serbie_1.mp4"],
  ["Lettonie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/lettonie_1.mp4"],
  ["Kazakhstan", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/kazakhstan_1.mp4"],
  ["Europe", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/europe_2.mp4"],
  ["Allemagne", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/allemagne_2.mp4"],
  ["Danemark", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/danemark_1.mp4"],
  ["Espagne", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/espagne_1.mp4"],
  ["France", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/france_1.mp4"],
  ["Grèce", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/grece_1.mp4"],
  ["Irlande", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/irlande_1.mp4"],
  ["Pays", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/pays_1.mp4"],
  ["Italie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/italie_2.mp4"],
  ["Hollande/Pays-Bas", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/hollande_2.mp4"],
  ["Portugal", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/portugal_1.mp4"],
  ["Tchéquie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/tchequie_1.mp4"],
  ["Belgique", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/belgique_1_A.mp4"],
  ["Slovaquie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/slovaquie_1.mp4"],
  ["Russie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/russie_1.mp4"],
  ["Moldavie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/moldavie_1.mp4"],
  ["Suisse", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/suisse_2_A.mp4"],
  ["Pays de Galles", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/pays_de_galles_1.mp4"],
  ["Géorgie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/georgie_1.mp4"],
  ["Liechtenstein", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/liechtenstein_1.mp4"],
  ["Biélorussie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/bielorussie_1.mp4"],
  ["Arménie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/armenie_1.mp4"],
  ["Macédonie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/macedonie_1.mp4"],
  ["Royaume-Uni", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/angleterre_1.mp4"],
  ["Angleterre", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/angleterre_1.mp4"],
  ["Écosse", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/ecosse_1.mp4"],
  ["Azerbaïdjan", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/azerbaidjan_2.mp4"],
  ["Ukraine", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/ukraine_1.mp4"],
  ["Albanie", "C:/Users/BrameS/Documents/Mio/LSFB - IFC/mp4/albanie_1.mp4"]
*/

];

quizData.sort(() => Math.random() - 0.5);
// END QUIZ DATA

document.addEventListener("DOMContentLoaded", () => {
  
  const wordDisplay = document.getElementById("wordDisplay");
  const statsContainer = document.getElementById("statsContainer");
  const progressDiv = document.getElementById("progress");
  const correctDiv = document.getElementById("totalCorrect");
  const wrongDiv = document.getElementById("totalWrong");

  const resultsContainer = document.getElementById("resultsContainer");
  const statsColumn = document.getElementById("statsColumn");
  const correctColumn = document.getElementById("correctColumn").querySelector("ul");
  const wrongColumn = document.getElementById("wrongColumn").querySelector("ul");

  const video = document.getElementById("quizVideo");
  const videoSource = document.getElementById("videoSource");
  const speedInput = document.getElementById("speedInput");
  const videoControls = document.querySelector(".video-controls");

  const btnCheck = document.getElementById("btnCheck");
  const btnOK = document.getElementById("btnOK");
  const btnWrong = document.getElementById("btnWrong");
  const btnReset = document.getElementById("btnReset");

  if (!(wordDisplay && video && videoSource && btnCheck && btnOK && btnWrong)) {
    console.error("Missing HTML elements for quiz");
    return;
  }

  // optional: randomize order
  quizData.sort(() => Math.random() - 0.5);

  let currentIndex = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let correctWords = [];
  let wrongWords = [];

  // Initialize button states
  btnOK.disabled = true;
  btnWrong.disabled = true;

  function updateStats() {
    progressDiv.textContent = `${currentIndex + 1} / ${quizData.length}`;
    correctDiv.textContent = `Correct: ${totalCorrect}`;
    wrongDiv.textContent = `Wrong: ${totalWrong}`;
  }

  function loadWord() {
    if (currentIndex >= quizData.length) {
      showResultsInline();
      return;
    }

    const [word, url] = quizData[currentIndex];

    if (showWordFirst) {
      wordDisplay.textContent = word;
      videoSource.src = url;
      video.load();
      video.style.visibility = "hidden";
      videoControls.style.display = "none";
    } else {
      wordDisplay.textContent = "";
      videoSource.src = url;
      video.load();
      video.style.visibility = "visible";
      video.muted = true;
      video.loop = true;
      video.controls = false;
      video.play();
      videoControls.style.display = "block";
    }

    speedInput.value = 100;

    // Reset buttons
    btnCheck.disabled = false;
    btnOK.disabled = true;
    btnWrong.disabled = true;

    updateStats();
  }

  function nextWord(isCorrect) {
    const [word, url] = quizData[currentIndex];

    if (isCorrect) {
      totalCorrect++;
      correctWords.push({ word, url });
    } else {
      totalWrong++;
      wrongWords.push({ word, url });
    }

    currentIndex++;
    loadWord();
  }

  function showResultsInline() {
    wordDisplay.textContent = "Quiz terminé!";
    statsContainer.style.display = "none";
    btnCheck.style.display = "none";
    btnOK.style.display = "none";
    btnWrong.style.display = "none";
    video.style.display = "none";

    const videoContainer = document.getElementById("videoContainer");
    if (videoContainer) videoContainer.remove();

    resultsContainer.style.display = "table";

    statsColumn.innerHTML = `
      <p>Total: ${quizData.length}</p>
      <p>Correct: ${totalCorrect} (${Math.round((totalCorrect / quizData.length) * 100)}%)</p>
      <p>Incorrect: ${totalWrong} (${Math.round((totalWrong / quizData.length) * 100)}%)</p>
    `;

    correctColumn.innerHTML = correctWords.map(w => `<p><a href="${w.url}" target="_blank">${w.word}</a></p>`).join('');
    wrongColumn.innerHTML = wrongWords.map(w => `<p><a href="${w.url}" target="_blank">${w.word}</a></p>`).join('');
  }

  // --- Button events ---
  btnCheck.addEventListener("click", () => {
    if (showWordFirst) {
      video.style.visibility = "visible";
      video.muted = true;
      video.loop = true;
      video.controls = false;
      video.play();
      videoControls.style.display = "block";
    } else {
      wordDisplay.textContent = quizData[currentIndex][0];
    }

    btnCheck.disabled = true;
    btnOK.disabled = false;
    btnWrong.disabled = false;
  });

  btnOK.addEventListener("click", () => nextWord(true));
  btnWrong.addEventListener("click", () => nextWord(false));

  btnReset.addEventListener("click", () => location.reload());

  // --- Keyboard shortcuts ---
  document.addEventListener("keydown", (event) => {
    switch (event.key.toLowerCase()) {
      case "v":
        if (!btnCheck.disabled) btnCheck.click();
        break;
      case "c":
        if (!btnOK.disabled) btnOK.click();
        break;
      case "f":
        if (!btnWrong.disabled) btnWrong.click();
        break;
      case "arrowdown":
        if (video.style.visibility === "visible") {
          video.playbackRate = Math.max(0.2, video.playbackRate - 0.2);
          if (speedInput) speedInput.value = Math.round(video.playbackRate * 100);
        }
        break;
      case "arrowup":
        //if (video.style.visibility === "visible") {
          video.playbackRate = Math.min(2, video.playbackRate + 0.2);
          if (speedInput) speedInput.value = Math.round(video.playbackRate * 100);
        //}
        break;
    }
  });

  // --- Video speed input ---
  if (speedInput) {
    speedInput.addEventListener("input", () => {
      const val = parseFloat(speedInput.value);
      if (!isNaN(val) && val > 0) {
        video.playbackRate = val / 100;
      }
    });
  }

  loadWord();
});

