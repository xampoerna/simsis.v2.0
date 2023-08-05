// Tugas Akhir/Jurnal Pages
const tugasAkhirLink = document.getElementById("tugas-akhir-link");
const jurnalLink = document.getElementById("jurnal-link");
const tugasAkhirContent = document.getElementById("tugas-akhir-content");
const jurnalContent = document.getElementById("jurnal-content");

tugasAkhirLink.addEventListener("click", () => {
    tugasAkhirContent.classList.remove("hidden");
    jurnalContent.classList.add("hidden");
    tugasAkhirLink.classList.add("text-primary");
    tugasAkhirLink.classList.remove("text-secondary");
    jurnalLink.classList.remove("text-primary");
    jurnalLink.classList.add("text-secondary");
});

jurnalLink.addEventListener("click", () => {
    tugasAkhirContent.classList.add("hidden");
    jurnalContent.classList.remove("hidden");
    tugasAkhirLink.classList.remove("text-primary");
    tugasAkhirLink.classList.add("text-secondary");
    jurnalLink.classList.add("text-primary");
    jurnalLink.classList.remove("text-secondary");
});

// Action Reset in Journal
const resetButton1 = document.getElementById("reset-button1");
const resetButton2 = document.getElementById("reset-button2");
const titleInput1 = document.getElementById("title1");
const titleInput2 = document.getElementById("title2");
const avatarInput = document.getElementById("user_avatar1");
const publikasi = document.getElementById("pubs");
const url = document.getElementById("url");

// Reset Button in Journal
resetButton1.addEventListener("click", () => {
    titleInput1.value = ""; // Mengatur input judul menjadi kosong
    avatarInput.value = ""; // Mengatur input file menjadi kosong
});

resetButton2.addEventListener("click", () => {
    titleInput2.value = "";
    publikasi.value = "";
    url.value = "";
});

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