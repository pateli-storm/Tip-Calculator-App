let allBtnPercent = document.getElementsByName("btnPercent");

let napiwek = 0;

for (let btnPercent of allBtnPercent) {
  btnPercent.addEventListener("click", function (e) {
    for (let btn of allBtnPercent) {
      let cssBg =
        btn.type === "submit"
          ? "var(--very-dark-cyan)"
          : "var(--light2-grayish-cyan)";
      btn.style.backgroundColor = cssBg;
    }
    e.currentTarget.style.backgroundColor = "var(--strong-cyan)";
  });
}

let btnOblicz = document.getElementById("btnOblicz");

btnOblicz.addEventListener("click", function () {
  let rachunekInput = document.getElementById("rachunek");
  let osobyInput = document.getElementById("osoby");

  let rachunek = parseFloat(rachunekInput.value);
  let osoby = parseFloat(osobyInput.value);

  let pRachunekError = document.getElementById("pRachunekError");
  let pOsobyError = document.getElementById("pOsobyError");

  if (rachunek === 0 && osoby === 0) {
    pRachunekError.textContent = "Nie może wynosić 0";
    pOsobyError.textContent = "Nie może wynosić 0";

    rachunekInput.classList.add("errorInput");
    osobyInput.classList.add("errorInput");
  } else if (rachunek === 0) {
    pRachunekError.textContent = "Nie może wynosić 0";
    rachunekInput.classList.add("errorInput");

    pOsobyError.textContent = "";
    osobyInput.classList.remove("errorInput");
  } else if (osoby === 0) {
    pOsobyError.textContent = "Nie może wynosić 0";
    osobyInput.classList.add("errorInput");

    pRachunekError.textContent = "";
    rachunekInput.classList.remove("errorInput");
  } else {

    pRachunekError.textContent = "";
    rachunekInput.classList.remove("errorInput");
    pOsobyError.textContent = "";
    osobyInput.classList.remove("errorInput");

    let cenaNapiwekOsoba = document.getElementById("cenaNapiwekOsoba");
    let cenaRazemOsoba = document.getElementById("cenaRazemOsoba");

    for (btnNapiwek of allBtnPercent) {
      if (btnNapiwek.style.backgroundColor == "var(--strong-cyan)") {
        napiwek = btnNapiwek.value / 100;
      }
    }

    let sumaOne = rachunek * napiwek;
    let sumaNapiwku = sumaOne / osoby;
    cenaNapiwekOsoba.textContent = `${sumaNapiwku.toFixed(2)} $`;

    let sumaAll = (rachunek + sumaOne) / osoby;
    cenaRazemOsoba.textContent = `${sumaAll.toFixed(2)} $`;
  }
});

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function () {
  location.reload();
});

document.addEventListener("input", function () {
  if (btnReset.disabled) {
    btnReset.disabled = false;
  }
});
