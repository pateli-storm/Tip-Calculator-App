let allBtnPercent = document.getElementsByName("btnPercent");

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
