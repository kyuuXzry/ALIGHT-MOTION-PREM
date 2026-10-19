<div align="center">

<img src="https://raw.githubusercontent.com/kyuuXzry/ALIGHT-MOTION-PREM/main/assets/alight-motion.svg" width="110" alt="Logo Alight Motion">

<br>

<h1>A L I G H T &nbsp; M O T I O N</h1>

<img src="https://img.shields.io/badge/%E2%97%86-P%20R%20E%20M%20I%20U%20M-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="PREMIUM">

<p><strong>CLI TOOLS &nbsp;/&nbsp; INTEGRASI BOT</strong></p>

<p>
  Tools ringan berbasis Node.js dan Python.
  <br>
  Rapi, modular, dan ramah developer.
</p>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=2800&pause=900&color=39FF88&center=true&vCenter=true&width=460&height=35&lines=Node.js+%2B+Python;CLI+%2B+Plugin+WhatsApp;Kode+Minimal.+Kontrol+Maksimal." alt="Typing SVG">

<br><br>

<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM">
  <img src="https://img.shields.io/badge/PROJECT-ALIGHT%20MOTION-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Project">
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/stargazers">
  <img src="https://img.shields.io/github/stars/kyuuXzry/ALIGHT-MOTION-PREM?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Stars">
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/network/members">
  <img src="https://img.shields.io/github/forks/kyuuXzry/ALIGHT-MOTION-PREM?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Forks">
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/issues">
  <img src="https://img.shields.io/github/issues/kyuuXzry/ALIGHT-MOTION-PREM?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Issues">
</a>

<br><br>

<img src="https://skillicons.dev/icons?i=nodejs,py,bash,git,github&theme=dark" alt="Tech stack">

</div>

<br>

<div align="center">

**[Mulai Cepat](#mulai-cepat)** &nbsp;·&nbsp; **[Instalasi](#instalasi)** &nbsp;·&nbsp; **[Penggunaan](#penggunaan)** &nbsp;·&nbsp; **[Struktur](#struktur)** &nbsp;·&nbsp; **[Masalah Umum](#masalah-umum)** &nbsp;·&nbsp; **[Keamanan](#keamanan)**

</div>

<br>

<a name="mulai-cepat"></a>
## <img src="https://api.iconify.design/lucide:zap.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Mulai Cepat

```bash
# clone repo
git clone https://github.com/kyuuXzry/ALIGHT-MOTION-PREM.git
cd ALIGHT-MOTION-PREM

# install dependensi
npm install
python -m pip install curl_cffi

# jalankan
node src/tes-am.js
```

<br>

## <img src="https://api.iconify.design/lucide:code-2.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Gambaran Umum

> **ALIGHT MOTION PREMIUM** adalah project berbasis Node.js dan Python yang dibuat untuk dijalankan lewat CLI, dengan integrasi bot WhatsApp sebagai opsi tambahan.

Project ini memakai `curl_cffi` milik Python untuk request HTTP, dan bisa dipasang ke bot WhatsApp yang kompatibel sebagai plugin.

<br>

## <img src="https://api.iconify.design/lucide:layers-3.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Komponen Utama

<table>
<tr>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:terminal.svg?color=%2339FF88" width="18" align="center" alt=""> CLI

Jalankan script utama langsung dari terminal.

- Runtime Node.js
- Integrasi Python
- Eksekusi lewat command line

</td>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:plug.svg?color=%2339FF88" width="18" align="center" alt=""> Plugin Bot

Integrasi opsional dengan bot WhatsApp yang kompatibel.

- Struktur berbasis plugin
- Butuh base bot yang kompatibel
- Baileys disediakan oleh bot induk

</td>
</tr>
</table>

<br>

## <img src="https://api.iconify.design/lucide:monitor-cog.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Kebutuhan Sistem

| Dependensi | Fungsi | Status |
|:--|:--|:--:|
| Node.js LTS | Menjalankan CLI dan modul JavaScript | Wajib |
| Python 3 | Menjalankan komponen berbasis Python | Wajib |
| `curl_cffi` | Menangani request HTTP di Python | Wajib |
| Axios | HTTP client, hanya jika kodemu mengimpornya | Kondisional |
| Baileys | Integrasi bot WhatsApp | Opsional |

<br>

<a name="instalasi"></a>
## <img src="https://api.iconify.design/lucide:terminal-square.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Instalasi

> Alur instalasi untuk **Termux**. Jalankan langkahnya secara berurutan.

**01 · Update Termux**

```bash
pkg update && pkg upgrade -y
```

**02 · Install Node.js dan Python**

```bash
pkg install nodejs-lts python -y
```

**03 · Install dependensi Python**

```bash
python -m pip install curl_cffi
```

> [!NOTE]
> Kalau Termux menampilkan pesan bahwa environment Python *externally managed*, jangan dipaksa. Gunakan virtual environment atau cara yang direkomendasikan untuk versi Termux/Python kamu.

**04 · Install Axios (hanya jika dibutuhkan)**

Lewati langkah ini kalau kodemu hanya memakai modul bawaan Node.js seperti `child_process`.

```bash
npm install axios
```

<br>

## <img src="https://api.iconify.design/lucide:check-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Cek Instalasi

```bash
node -v
python --version
python -c "import curl_cffi; print('curl_cffi siap')"
```

Kalau ketiga perintah berjalan tanpa error, runtime dan dependensi Python sudah siap.

<br>

<a name="penggunaan"></a>
## <img src="https://api.iconify.design/lucide:play.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Penggunaan

### Mode CLI

Dari root project:

```bash
node src/tes-am.js
```

### Mode Plugin Bot

1. Buka direktori bot WhatsApp yang sudah kamu punya.
2. Pastikan bot mendukung format plugin yang dipakai project ini.
3. Salin file plugin ke folder `plugins/` milik bot.
4. Install dependensi yang benar-benar diimpor oleh plugin.
5. Restart bot dan periksa log untuk melihat apakah ada error.

> [!TIP]
> Baileys biasanya sudah disediakan oleh base bot. Jangan install versi kedua yang tidak kompatibel, kecuali dokumentasi bot kamu memintanya.

<br>

<a name="struktur"></a>
## <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Struktur Project

```text
ALIGHT-MOTION-PREM/
├── assets/
│   └── alight-motion.svg
├── plugins/
│   ├── alightmotion.js
│   └── bypass.py
├── src/
│   └── tes-am.js
├── package.json
├── requirements.txt
└── README.md
```

<sub>Sesuaikan dengan file dan folder yang benar-benar ada di repositorimu.</sub>

<br>

<a name="masalah-umum"></a>
## <img src="https://api.iconify.design/lucide:bug.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Masalah Umum

<details>
<summary><strong>Perintah node atau python tidak ditemukan</strong></summary>

<br>

```bash
node -v
python --version
```

Kalau perintahnya tidak ada, periksa ulang instalasi paket di Termux lalu restart sesi terminal.

</details>

<details>
<summary><strong>ModuleNotFoundError: curl_cffi</strong></summary>

<br>

Install dengan interpreter yang sama dengan yang menjalankan script:

```bash
python -m pip install curl_cffi
```

</details>

<details>
<summary><strong>Cannot find module 'axios'</strong></summary>

<br>

Hanya jika kode yang error memang mengimpor Axios, install di direktori project:

```bash
npm install axios
```

Install global umumnya tidak menggantikan dependensi project.

</details>

<details>
<summary><strong>Script CLI tidak ditemukan</strong></summary>

<br>

```bash
pwd
ls
ls src
```

Jalankan perintah dari root repositori dan gunakan path entry-point yang benar.

</details>

<details>
<summary><strong>Request HTTP gagal</strong></summary>

<br>

Periksa koneksi internet, ketersediaan layanan tujuan, dan konfigurasi request. `curl_cffi` tidak menjamin semua endpoint yang terproteksi bisa diakses.

</details>

<br>

<a name="keamanan"></a>
## <img src="https://api.iconify.design/lucide:shield-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Keamanan

> [!IMPORTANT]
> Gunakan project ini hanya dengan akun dan layanan yang memang kamu punya izin untuk mengaksesnya.

- Jaga kerahasiaan cookie sesi, token, dan kredensial.
- Jangan commit secret atau data autentikasi pribadi ke repositori publik.
- Hormati ketentuan layanan dan sistem keamanan dari layanan tujuan.
- Periksa dependensi pihak ketiga sebelum menjalankan kode.

<br>

## <img src="https://api.iconify.design/lucide:code-xml.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Developer

<div align="center">

<img src="https://img.shields.io/badge/DEVELOPED%20BY-PADUKA%20KYUU-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Developer">

<br><br>

```console
kyuu@dev:~$ whoami
Paduka Kyuu  //  KyuuAI / KyuuXzry

kyuu@dev:~$ cat fokus.txt
> web scraping    > rest api       > otomasi
> bot whatsapp    > bot telegram   > ui/ux
> full-stack      > ai (belajar)   > backend (belajar)

kyuu@dev:~$ echo $MOTTO
Kode minimal. Kontrol maksimal.
```

</div>

<br>

<table>
<tr>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:user-round.svg?color=%2339FF88" width="18" align="center" alt=""> Profil

| | |
|:--|:--|
| **Alias** | Paduka Kyuu |
| **Handle** | `kyuuXzry` |
| **Peran** | Developer bot Node.js |
| **Web** | [kyuudev.my.id](https://kyuudev.my.id) |

</td>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:rocket.svg?color=%2339FF88" width="18" align="center" alt=""> Dikerjakan &amp; Dipelajari

- Otomasi WhatsApp / Telegram
- Scraper dan tools REST API
- Belajar **AI** dan **backend**

</td>
</tr>
</table>

<div align="center">

<br>

<img src="https://skillicons.dev/icons?i=nodejs,js,py,express,html,css,git,github,bash,linux&theme=dark" alt="Tech stack">

<br><br>

<a href="https://github.com/kyuuXzry">
  <img src="https://img.shields.io/badge/GitHub-kyuuXzry-39FF88?style=for-the-badge&logo=github&logoColor=39FF88&labelColor=0A0A0A" alt="GitHub">
</a>
<a href="https://kyuudev.my.id">
  <img src="https://img.shields.io/badge/Website-kyuudev.my.id-39FF88?style=for-the-badge&logo=googlechrome&logoColor=39FF88&labelColor=0A0A0A" alt="Website">
</a>
<a href="https://instagram.com/rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-rissxzry__-39FF88?style=for-the-badge&logo=instagram&logoColor=39FF88&labelColor=0A0A0A" alt="Instagram">
</a>

<br><br>

<img src="https://img.shields.io/github/followers/kyuuXzry?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Followers">

<br><br>

<img src="https://github-readme-stats.vercel.app/api?username=kyuuXzry&show_icons=true&theme=dark&bg_color=0A0A0A&title_color=39FF88&icon_color=39FF88&text_color=C9D1D9&border_color=1F1F1F&hide_border=false" width="440" alt="Statistik GitHub">

<br><br>

<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM">
  <img src="https://img.shields.io/badge/%E2%AD%90%20BERI%20BINTANG-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Beri bintang">
</a>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&height=110&color=0:050505,100:39FF88&section=footer&text=&fontSize=0" width="100%" alt="">

<sub><code>ALIGHT-MOTION-PREM</code> &nbsp;·&nbsp; Dibuat untuk developer, oleh developer.</sub>

</div>
