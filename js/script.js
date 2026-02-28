document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SECTION SLIDER
  ========================= */

  let currentSection = 0;
  const sections = document.querySelectorAll(".section");

  function nextSection() {
    if (currentSection < sections.length - 1) {
      sections[currentSection].classList.remove("active");
      currentSection++;
      sections[currentSection].classList.add("active");
      window.scrollTo(0, 0);
    }
  }

  window.nextSection = nextSection;


  /* =========================
     NAMA TAMU DARI URL
  ========================= */

  function getNamaTamu() {
    const urlParams = new URLSearchParams(window.location.search);
    let nama = urlParams.get("to");

    const elementNama = document.getElementById("namaTamu");

    if (nama && elementNama) {
      // Decode jika ada spasi atau karakter khusus
      nama = decodeURIComponent(nama.replace(/\+/g, " "));

      elementNama.innerHTML = `
        Kepada Yth.<br>
        <strong>${nama}</strong>
      `;
    }
  }

  getNamaTamu();

});
