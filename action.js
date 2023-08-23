// Tugas Akhir/Jurnal Pages
const tugasAkhirLink = document.getElementById("tugas-akhir-link");
const jurnalLink = document.getElementById("jurnal-link");
const tugasAkhirContent = document.getElementById("tugas-akhir-content");
const jurnalContent = document.getElementById("jurnal-content");

tugasAkhirLink.addEventListener("click", () => {
    tugasAkhirContent.classList.remove("hidden");
    jurnalContent.classList.add("hidden");
    tugasAkhirLink.classList.add("bg-primary");
    tugasAkhirLink.classList.remove("bg-secondary");
    jurnalLink.classList.remove("bg-primary");
    jurnalLink.classList.add("bg-secondary");
});

jurnalLink.addEventListener("click", () => {
    tugasAkhirContent.classList.add("hidden");
    jurnalContent.classList.remove("hidden");
    tugasAkhirLink.classList.remove("bg-primary");
    tugasAkhirLink.classList.add("bg-secondary");
    jurnalLink.classList.add("bg-primary");
    jurnalLink.classList.remove("bg-secondary");
});

// Action Reset in Journal
const resetArtikel = document.getElementById("resetArtikel");
const resetTA = document.getElementById("resetTA");

const judulArtikel = document.getElementById("judulArtikel");
const dosbim1Artikel = document.getElementById("dosbim1Artikel");
const dosbim2Artikel = document.getElementById("dosbim2Artikel");
const dosbIngArtikel = document.getElementById("dosbIngArtikel");
const linkArtikel = document.getElementById("linkArtikel");

const judulTA = document.getElementById("judulTA");
const dosbim1TA = document.getElementById("dosbim1TA");
const dosbim2TA = document.getElementById("dosbim2TA");
const dosbIngTA = document.getElementById("dosbIngTA");
const fileTA = document.getElementById("fileTA")

// Reset Button in Artikel
resetArtikel.addEventListener("click", () => {
    judulArtikel.value = "";
    dosbim1Artikel.value = "";
    dosbim2Artikel.value = "";
    dosbIngArtikel.value = "";
    linkArtikel.value = "";
});

// Reset Button in TA
resetArtikel.addEventListener("click", () => {
    judulTA.value = "";
    dosbim1TA.value = "";
    dosbim2TA.value = "";
    dosbIngTA.value = "";
    fileTA.value = "";
});


// Action Reset in MBKM
const resetMBKM = document.getElementById("resetMBKM");
const sertifMBKM = document.getElementById("sertifMBKM");
const jenisMBKM = document.getElementById("jenisMBKM");
const tanggalMBKM = document.getElementById("tanggalMBKM");
const tahapMBKM = document.getElementById("tahapMBKM");
const deskripsiMBKM = document.getElementById("deskripsiMBKM");

// Action Reset in Update Mahasiswa
document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("reset-button3");
    const form = document.getElementById("myForm1");

    resetButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Reset the form to its initial state
        form.reset();
    });
});