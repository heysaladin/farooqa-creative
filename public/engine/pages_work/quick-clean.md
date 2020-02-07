<p class="type">EXPLORATION</p>

# Quick Clean: The Fast and Guaranteed Cleaning Service

<p class="meta">Design  /  Wednesday, February 5th, 2020 3:59:14pm</p>

> Sebuah research untuk membantu bisnis penyedia jasa kebersihan untuk bekerja lebih efisien dan teratur.

![Quick Clean](../assets/images/works/details/231-quick-clean/quick-clean.jpg)

. . .

- **Observation site:** PT. Adidaya Madani
- **Team:** Baim (Product Manager)
- **Roles:** Product Design and Frontend Development
- **Timeline:** 1 month
- **Tools Used:** Sketch, Invision, Zeplin, Android Studio, Git
- **Languages and Frameworks used:** Android SDK, Kotlin

. . .

## Overview

PT. Adidaya Madani adalah sebuah perusahaan yang telah berdiri lebih dari 15 tahun yang lalu (tulisan ini ditulis pada Februari 2020) yang bergerak dalam bidang penyedia berbagai saja seperti Cleaning Service, Security Service dan Labor Support serta beberapa bentuk jasa lainnya. Pada case study kali kita akan fokus membahas tentang jasa Cleaning Service yang selanjutnya akan kita sebut sebagai “Quick Clean”.

Quick Clean sudah beroperasi sejak beberapa tahun namun beberapa waktu yang lalu terpaksa tidak dapat beroperasi dengan maksimal lagi karena beberapa hal sebagai berikut:

* Sumber datangnya lead yaitu berupa aplikasi performanya memburuk karena tidak ada yang mengelola

* Tenaga kebersihan adalah karyawan dari PT. Adidaya Madani yang stay di kantor untuk menunggu order datang, namun merasa keberatan jika ada order yang letaknya sangat jauh dari kantor

![Quick Clean](../assets/images/works/details/231-quick-clean/quick-clean-current-flow-map.png)

<p class="caption">Current Flow Map <a href="../assets/images/works/details/231-quick-clean/quick-clean-current-flow-map.png" target="_blank">(click here to zoom-in!)</a></p>

## Problem Statement

Setidaknya ada 2 masalah besar yang pertama adalah tentang tim yang keberatan karena jarak layanan yang terlalu jauh, dan yang kedua adalah meningkatkan frekuensi order agar lebih banyak lagi order yang masuk.

## Research

Untuk lebih memahami apa yang terjadi saya adakan riset sebagai berikut:

### ***Read Data***

Dari data, jumlah order per januari 2020 adalah 0, karena tim banyak yang tidak hadir dan aplikasi berhenti beroperasi.

### ***Interview***

Berikut adalah beberapa pertanyaan yang saya sampaikan kepada Product Manager Quick Clean:
Kenapa anggota tim pembersih tinggal sedikit yang ada di kantor? Karena kebanyakan keberatan karena ketika menunggu order datang, saat order datang lokasinya sangat jauh dari kantor
Apa yang menyebabkan aplikasi tidak lagi beroperasi? Karena dulu aplikasi dikembangkan dan dipelihara oleh vendor dan vendor susah dihubungi sehingga mengakibatkan aplikasi tidak lagi dapat beroperasi dengan baik

## Explorations

Saya memutuskan untuk mengikuti metodologi Design Sprint secara intinya saja dengan mengacu pada filosofi dari Design Thinking (Empathize, Define, Ideate, Prototype, Test). Kami bertujuan untuk memulai dengan MVP dengan merilis fitur yang paling penting terlebih dahulu. Tujuannya adalah untuk meningkatkan jumlah orang yang menggunakan produk kami daripada membangun lebih banyak fitur terlebih dahulu.

### ***Understand (Empathize & Define)***

Saat ini bisnis sebenarnya masih berjalan hanya saja akhir-akhir ini order menurun karena aplikasi mobile tidak lagi berjalan karena masalah pemeliharaan. Serta masalah lain adalah keberatan dari anggota tim yang standby di kantor untuk menunggu order datang namun begitu datang letaknya sangat jauh.

### Identifikasi Pain Points

* App tidak beroperasi dan berpengaruh pada jumlah order yang masuk
* Sampai saat ini tidak diketahui dengan pasti berapa order yang masuk dari aplikasi
* Sampai saat ini tidak diketahui jumlah penginstall aplikasi berjumlah berapa orang
* Anggota tim keberatan jika lokasi pelayanan sangat jauh dari kantor

### How Might We (Bagaimana kita bisa)

* Bagaimana kita bisa membuat jumlah order meningkat lagi dengan memanfaatkan platform mobile app dan web
* Bagaimana kita bisa membantu user dengan mudah menemukan Quick Clean di mesin pencari pada internet
* Bagaimana kita bisa membantu anggota tim agar tidak perlu datang ke kantor dan tetap ada di rumah mereka masing-masing
* Bagaimana kita bisa membantu anggota tim agar bekerja jika ada order yang masuk dekat tempat tinggal mereka

### Define the challenges

* Melakukan penelitian bagaimana cara yang paling mudah bagi user melakukan order (pemesanan)
* Mencari cara yang lebih baik untuk mengelola pemesanan yang masuk
* Mengedukasi anggota tim agar dapat bekerja jika ada panggilan saja
* Mencari cara agar dengan cara kerja sesuai panggilan, anggota tim tetap komitmen untuk bersedia mengambil pekerjaan kapanpun ia berada

### ***Sketch (Ideate)***

### Lightning Demos (References)

1. Go-Clean

![Go-Clean](https://lh3.googleusercontent.com/ld1LoAtTs5cZk16blYijuGl1LPk48Esh7ediqM628Vx_kE9dkoNeRoxo66-wYdrqNpQp=w1920-h937-rw)

<p class="caption">Go-Clean <a href="https://lh3.googleusercontent.com/ld1LoAtTs5cZk16blYijuGl1LPk48Esh7ediqM628Vx_kE9dkoNeRoxo66-wYdrqNpQp=w1920-h937-rw" target="_blank">(click here to zoom-in!)</a></p>

**Cara Pesan:**
User pesan berdasarkan apa yang ingin dibersihkan, berapa lama dan dimana lokasinya. Pembayaran bisa tunai atau non-tunai dengan gopay. Pembayaran bisa dilakukan setelah layanan selesai.

**Pengelolaan Tenaga Kerja:**
Tenaga kerja adalah dari orang yang hanya akan bekerja saat ada order masuk dan ia bersedia mengambilnya.

2. TukangBersih.com

![TukangBersih.com](https://lh3.googleusercontent.com/tpArBEprT1UF0YbszRp6fsiWpQeSyNcfAt2sOrqvG1ws_7LiDnhRRbGGy8B__VyUSMlq=w1920-h937-rw)

<p class="caption">TukangBersih.com <a href="https://lh3.googleusercontent.com/tpArBEprT1UF0YbszRp6fsiWpQeSyNcfAt2sOrqvG1ws_7LiDnhRRbGGy8B__VyUSMlq=w1920-h937-rw" target="_blank">(click here to zoom-in!)</a></p>

**Cara Pesan:**
User memasukkan data apa saja yang harus dibersihkan secara detail dan langsung bayar di awal. Pembayaran bisa melalui ‘Cash on Delivery’, Bank transfer atau Credit Card dan setelah pembayaran selesai baru pelayanan akan dilakukan.

**Pengelolaan Tenaga Kerja:**
Adalah tim solid dari tukangbersih.com yang selalu siap sedia jika ada pesanan datang.

3. KlikNClean (Jabodetabek)

![KlikNClean (Jabodetabek)](https://lh3.googleusercontent.com/bCx67O05VE-wMwIfqBX5vWArEbZlRjR7e_Ha2x7EeFZUE2Xxxm_Hv3ylO-s8YqeE4Q=w1920-h937-rw)

<p class="caption">KlikNClean (Jabodetabek) <a href="https://lh3.googleusercontent.com/bCx67O05VE-wMwIfqBX5vWArEbZlRjR7e_Ha2x7EeFZUE2Xxxm_Hv3ylO-s8YqeE4Q=w1920-h937-rw" target="_blank">(click here to zoom-in!)</a></p>

**Cara Pesan:**
User memilih jenis pelayanan kebersihan sesuai yang tersedia baru memasukkan detail pemesanan. Pembayaran melalui cash atau transfer bank. 

**Pengelolaan Tenaga Kerja:**
Adalah dedicated team dari kliknklin yang selalu siap sedia jika ada pesanan datang.

. . .

### Ide-ide yang didapatkan

Setidaknya kami ada dua ide yang terkait alur pemesanan dan alur pelayanan.

1. Konsep “Teratur Rapi” (Proposal Flow 1)

Konsep yang pertama menekankan pada adanya paket-paket layanan yang disertai harga dasar dan dapat dipesan secara langsung oleh pelanggan. Proses pembayaran setelah pekerjaan selesai.

![Quick Clean](../assets/images/works/details/231-quick-clean/structured.png)

<p class="caption">Proposal Flow 1 <a href="../assets/images/works/details/231-quick-clean/structured.png" target="_blank">(click here to zoom-in!)</a></p>

2. Konsep “Custom Creative” (Proposal Flow 2)

Konsep yang kedua menekankan pada adanya fitur agar user dapat mengambil gambar foto dari lokasi dan dikirim ke sistem, sistem dan petugas akan memberikan estimasi harga dasar. Proses pembayaran dilakukan sebelum pekerjaan dikerjakan atau dengan kata lain hanya akan dilayani jika pembayaran telah selesai.

![Quick Clean](../assets/images/works/details/231-quick-clean/custom.png)

<p class="caption">Proposal Flow 2 <a href="../assets/images/works/details/231-quick-clean/custom.png" target="_blank">(click here to zoom-in!)</a></p>

. . .

<p class="caption" style="color: red; font-weight: bold;">Mohon untuk memilih 1 di antara 2 konsep di atas! Serta berilah masukkan dan saran atau bahkan pertanyaan jika ada yang kurang jelas. Komunikasi menggunakan whatsapp saja. Terimakasih :)</p>
