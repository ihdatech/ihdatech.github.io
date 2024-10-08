function adjustMargin() {
    // Ambil elemen place dan location
    const places = document.querySelectorAll('.place');
    const locations = document.querySelectorAll('.location');
    
    // Dapatkan lebar layar saat ini
    const screenWidth = window.innerWidth;

    // Jika lebar layar kurang dari atau sama dengan 768px, atur margin dinamis
    if (screenWidth <= 992) {
        places.forEach((place, index) => {
            const placeHeight = place.offsetHeight; // Dapatkan tinggi elemen place
            const lineHeight = parseFloat(window.getComputedStyle(place).lineHeight); // Dapatkan line-height dari place
            
            // Hitung jumlah baris teks berdasarkan tinggi dan line-height
            const numberOfLines = Math.ceil(placeHeight / lineHeight);
            
            // Set margin-top pada location berdasarkan jumlah baris teks di place
            locations[index].style.marginTop = `${numberOfLines * 1.5}em`; // Mengatur margin-top secara dinamis
        });
    } else {
        // Reset margin-top jika layar lebar
        locations.forEach(location => {
            location.style.marginTop = '0px'; // Kembali ke default margin-top pada layar besar
        });
    }
}

// Panggil fungsi ketika halaman dimuat atau ketika jendela diubah ukurannya
window.addEventListener('load', adjustMargin);
window.addEventListener('resize', adjustMargin);