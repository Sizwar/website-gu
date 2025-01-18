// script.js
// Saat tombol "Kirim Pesan" ditekan
function showMessage() {
  alert('Terima kasih telah menghubungi saya!');
}
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
