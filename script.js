// script.js
// Saat tombol "Kirim Pesan" ditekan
function showMessage() {
  alert('Terima kasih telah menghubungi saya!');
}
// script.js
const toggleButton = document.getElementById('dark-mode-toggle');

// Check if dark mode preference is saved
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
// Ambil elemen
const thumbnailImage = document.getElementById('thumbnailImage');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.getElementById('closePopup');

// Saat thumbnail diklik
thumbnailImage.addEventListener('click', () => {
  popup.style.display = 'block'; // Tampilkan pop-up
  popupImage.src = thumbnailImage.src; // Gunakan sumber gambar dari thumbnail
});

// Saat tombol close diklik
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Sembunyikan pop-up
});

// Tutup pop-up saat klik di luar gambar
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
