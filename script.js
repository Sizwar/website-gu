// script.js
// Saat tombol "Kirim Pesan" ditekan
function showMessage() {
  alert('Terima kasih telah menghubungi saya!');
}
// Ambil tombol toggle
const toggleButton = document.getElementById('darkModeToggle');

// Tambahkan event listener untuk tombol
toggleButton.addEventListener('click', () => {
  // Toggle class 'dark-mode' di elemen body
  document.body.classList.toggle('dark-mode');

  // Ubah teks tombol sesuai mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
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
