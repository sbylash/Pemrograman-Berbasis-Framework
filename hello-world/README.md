# Praktikum 1: Menyiapkan Lingkungan Pengembangan

1. Instalasi Git
   <img src="screenshoot\1.png">
2. Instalasi VS Code
   <img src="screenshoot\2.png">
3. Instalasi Node.js
   <img src="screenshoot\3.png">

### Pertanyaan Praktikum 1

1. Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini!

   Jawab: Git digunakan oleh pengembang untuk mencatat setiap perubahan yang dilakukan pada kode program. Untuk melacak versi-versi kode, sehingga jika ada kesalahan atau perubahan yang ingin dibatalkan, bisa dikembalikan ke versi sebelumnya. VS Code digunakan sebagai text editor dalam pembuatan kode program seperti membuat, mengedit, menghapus, dan lain-lain. NodeJS sebagai platform untuk menjalankan kode JavaScript di luar browser. Membuat aplikasi server-side menggunakan JavaScript, seperti membuat API atau aplikasi web. Node.js juga memiliki manajer paket bernama npm (Node Package Manager) yang memudahkan untuk menginstal dan mengelola pustaka kode (library) yang dibutuhkan dalam proyek.

2. Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut telah berhasil terinstall di perangkat Anda!

# Praktikum 2: Membuat Proyek Pertama React Menggunakan Next.js

1.  Membuat folder proyek baru dengan nama belajar-react. Melalui konsol/command prompt/CMD masuk ke dalam folder tersebut dan jalankan perintah ini:

        npx create-next-app

2.  Buat proyek baru dengan nama hello-world seperti di bawah ini. Nama proyek ini perlu dimasukkan pertama kali melalui konsol.

3.  Buka folder proyek hello-world menggunakan VS Code. Masuk ke dalam folder proyek helloworld dengan perintah:

        cd hello-world

    Kemudian setelah masuk ke folder hello-world, masukkan perintah:

        code .

    Maka VS Code akan membuka project react Anda yang telah dibuat bernama hello-world.

    Dan akan menampilkan struktur folder proyek seperti di bawah ini.

    <img src="screenshoot\4.png">

4.  Running proyek hello-world dengan memasukkan perintah di bawah ini melalui konsol atau terminal di dalam VS Code.

        npm run dev

    Tunggu proses kompilasi hingga selesai. Lalu Anda dapat membuka alamat localhost di browser: http://localhost:3000/

    Jika di browser telah tampil seperti gambar berikut ini, Selamat!

    <img src="screenshoot\5.png">

### Pertanyaan Praktikum 2

1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack!

   Jawab:

   1. TypeScript: Superset JavaScript yang menambahkan tipe data statis untuk mencegah kesalahan dalam kode.
   2. ESLint: Alat untuk memeriksa kualitas dan konsistensi kode JavaScript atau TypeScript.
   3. Tailwind CSS: Framework CSS yang menggunakan kelas utilitas untuk membuat desain web cepat dan responsif.
   4. App Router: Fitur di Next.js untuk mengelola navigasi antar halaman aplikasi.
   5. Import alias: Cara menyederhanakan impor modul dengan menggunakan alias (misal `@/components/MyComponent`).
   6. Turbopack: Bundler cepat pengganti Webpack untuk meningkatkan waktu build dan hot reloading di Next.js.

# Praktikum 3: Menambahkan Komponen React (Button)

1. Di dalam folder proyek yang telah dibuka di VS Code, buka file page.tsx
2. Tambahkan fungsi MyButton yang mengembalikan markup komponen button yang akan ditambahkan ke dalam webpage
3. Tambahkan komponen button tersebut di samping button Read Our Docs. alt text
4. Simpan perubahan dan coba lihat perubahan melalui web browser!
   <img src="screenshoot\6.png">

### Pertanyaan Praktikum 3

1. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!

# Praktikum 4: Menulis Markup dengan JSX

1. Tambahkan kode JSX di bawah ini ke dalam file page.tsx.
2. Tambahkan komponen MyProfile setelah kompnen MyButton.
3. Simpan dan amati perubahan di halaman web yang dihasilkan! alt text
   <img src="screenshoot\7.png">

### Pertanyaan Praktikum 4

1. Untuk apakah kegunaan sintaks user.imageUrl?

   Jawab: Sintaks user.imageUrl digunakan untuk mengakses nilai dari properti imageUrl yang ada pada objek user. Dalam konteks ini, user adalah objek yang mungkin berisi informasi tentang pengguna, dan imageUrl adalah properti yang menyimpan URL atau alamat gambar profil pengguna.

2. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!
