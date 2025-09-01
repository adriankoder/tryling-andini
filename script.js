import { teamswitshFunction } from "./js/teamswitshtoggle.js";
import { teamswitshBUTTON } from "./js/KNAPP.JS";

const TryllingID = document.getElementById("TryllingID");
const føler_meg_privilegert = document.getElementById("føler_meg_privilegertP");
let menyknapper = document.getElementsByClassName("menyvalg");
let bildeSomByttes = document.getElementById("Andini_med_kanin");
let kontaktInfo = document.getElementById("kontaktinfo");

for (let i = 0; i < menyknapper.length; i++) {
  menyknapper[i].addEventListener("mouseover", (e) => {
    if (e.target.id === "Hovedside") {
      //HOVEDSIDEKNAPP
      bildeSomByttes.src = "./asset/Andini-med-kanin-oval.jpg";
      bildeSomByttes.alt = "Andini med kanin";
      TryllingID.innerHTML = `
          <h2>Hovedside</h2>
          <p>Bor du i Bergen eller omegn og skal feire bursdag, holde firmafest,
          lage til juletrefest eller andre barnearrangement?
        Sett prikken over i-en med et fortryllende barne- og familieshow som underholder
        både voksne og barn på en lettsindig og humorisktisk måte.</p>
      <p> Jeg føler meg privilegert som får jobbe med det jeg brenner mest for, og håper
        og tror at dette er noe som gjenspeiles i kvaliteten på det jeg leverer.
    Mitt mål er at du som arrangør kan slappe helt av og se på at selv de yngste
    gjestene i ditt arrangement, koser seg med "ekte magi, massevis av humor,
    ballongfigurer, levende kanin og viltre sprell, i full visshet om at arrangementet er en
    suksess. For meg er det essensielt at barna blir engasjert og får
    delta aktivt under showet. Jeg er aldri fornøyd etter en opptreden uten at
    barna er både hese, svette, storøyd og har krampe i alle lattermusklene.
  </p>
      <p>
         Jeg har drevet med barneunderholdning siden 1994, da jeg som 14-åring
        vant min første lokale talentiade. Siden den gang er tryllingen blitt en
        del av meg, en livsstil som jeg aldri kan slutte med
      </p>`;
    }

    if (e.target.id === "Trylling") {
      //TRYLLINGKNAPP
      bildeSomByttes.src = "/asset/Andini-med-kanin-oval.jpg";
      bildeSomByttes.alt = "Andini med kanin";
      TryllingID.innerHTML = `
          <h2>TRYLLESHOW</h2>
          <p>Trylleshowene mine varer ca. 30-40 minutter, og inneholder mye humor
          og gimmicks der barna sitter igjen med en opplevelse av at det var de
          som tryllet. Jeg aktiviserer dem mye, bruker dem som assistenter og
          til å rope trylleord etc. Alle som hjelper til får ballongdyr, og om
          ønskelig kan alle barna få hvert sitt, etter showet. Showets klimaks
          er fremtrylling av en sprell levende hvit kanin eller due (verierer fra år til år), og den får barna
          klappe. Etter showet er det veldig populært med ballongdyrbretting til
          alle barna, gjerne i kombinasjon med at alle får klappe Pelle kanin
          og/eller trylleduene Trylleliten og Spirrevippen. Jeg bretter ca 50-60
          ballonger pr halvtime. Ved behov, medbringer jeg eget trådløst
          mini-micanlegg</p>
          `;
    } else {
      bildeSomByttes.style.opacity = 1;
    }

    if (e.target.id === "Balonggjøgling") {
      //GJØGLINGKNAPP
      bildeSomByttes.src = "./asset/BallongOval.jpg";
      bildeSomByttes.alt = "en man som bretter balonger";
      TryllingID.innerHTML = `
          <h2>BALLONGGJØGLING</h2> 
          <p>Ballongbretting er en sikker suksess blant barna. Jeg
          kan lage over 50 forskjellige sorter ballongdyr, sverd,
          hatter, blomster etc. Jeg stiller i oppsiktsvekkende
          klovneklær og med et lite trylletriks i lommen.
          Fletter også inn en del ballong-gimmicks.
          Lager opp til 200 ballongdyr pr. time.</p>`;
    }

    if (e.target.id === "Sukkerspinn") {
      //SUKKERSPINNKNAPP
      bildeSomByttes.src = "./asset/sukkerspinn-oval2.jpg";
      bildeSomByttes.alt = "sukkerspinmaskin";
      TryllingID.innerHTML = `
          <h2>SUKKERSPINNMASKIN</h2>
          <p>Da jeg var liten var sukkerspinn noe av det beste og mest
          stemningsskapende jeg visste. Jeg har derfor anskaffet meg en meget
          produksjonseffektiv og solid maskin som jeg leier ut i kombinasjon med
          mine opptredener. Sukkerspinn er en original og populær erstatning for
          den tradisjonelle godteposen. Til større arrangementer, kan salg av
          sukkerspinn i forkant av min opptreden også være meget innbringende
          for arrangøren, og kan i praksis regnes som avslag i prisen for showet
          jeg leverer. Leveres komplett med maskin, rosa sukkermix, pinner og
          lynkurs i betjening.</p>
          `;
    }

    if (e.target.id === "Kontakt") {
      // KONTAKTKNAPP
      bildeSomByttes.style.display = "./asset/Andini-med-kanin-oval.jpg";
      TryllingID.innerHTML = ` `;
      const num1 = "neren";
      const num2 = " andini";
      const num3 = "@";
      const num4 = "try";
      const num5 = "kunst";
      const num6 = "lle";
      const num7 = ".no";
      const kontakt = "<br><br>Email";
      const tegn = ":";
      const mellomroim = "";
      const forBestiling =
        " For bestilling, forespørsler eller annen informasjon kan jeg kontaktes på følgende måter:";
      const tlf = "<br>tlf nr 40834567";
      // Kombinerer strenger
      const email = num2 + num3 + num4 + num6 + num5 + num1 + num7;
      const emailLink = `<a href="mailto:${email}">${email}</a>`;
      const combined =
        forBestiling +
        mellomroim +
        kontakt +
        tegn +
        mellomroim +
        emailLink +
        mellomroim +
        tlf;
      kontaktInfo.innerHTML = combined;

      føler_meg_privilegert.style.display = "none";
    } else if (e.target.id === "føler_meg_privilegert") {
      føler_meg_privilegert.style.display = "block";
      console.log("kontakt");
    }
  });
}

// Lytte etter klikk på hamburgermeny-knappen
const hamburgerimg = document.getElementById("hamburgermeny");
hamburgerimg.alt = "meny knapp";
hamburgerimg.addEventListener("click", function () {
  hamburgertoggle("active", "hidden");
  function hamburgertoggle(active, hidden) {
    //get  a element from html
    const ul = document.getElementById("buttondiv");
    //set up a if/else statment to check wat
    if (ul.classList.contains(active)) {
      ul.classList.remove(active);
      ul.classList.add(hidden);
      console.log("active");
    } else if (ul.classList.contains(hidden)) {
      ul.classList.remove(hidden);
      ul.classList.add(active);
      console.log("hidden");
    } else {
    }
  }
});


const today = new Date();
const bgvideo = document.getElementById('bgvideo');

if (today.getDate() === 24 && today.getMonth() === 11) {
  // Julaften
  document.body.classList.add('jul');
  document.body.classList.remove('moon');
  document.body.classList.remove('moonHaloween');
  bgvideo.classList.remove('ikkeJul');
  console.log("Det er julaften!");
} else if (today.getDate() === 1 && today.getMonth() === 8) {
  // Halloween
  document.body.classList.add('moonHaloween');
  document.body.classList.remove('moon');
  document.body.classList.remove('jul');
  bgvideo.classList.remove('jul');
   const iconzize = document.getElementById('iconzize');
 const icons = document.getElementsByClassName('iconzize');
for (let i = 0; i < icons.length; i++) {
  icons[i].style.display = "none";
}
  document.style.iconzize = "display: none";
  console.log("Det er Haloween!");
} else {
  // Standard: Moon-utgaven
  document.body.classList.remove('moonHaloween');
  document.body.classList.remove('jul');
  document.body.classList.add('moon');
  bgvideo.classList.add('ikkeJul');
}

// ...existing code...


// ...existing code...

// ...existing code...

// ...existing code...