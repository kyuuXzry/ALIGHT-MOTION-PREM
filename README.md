<div align="center">

<img src="assets/alight-motion.svg" width="100" alt="Alight Motion Logo"/>

# ALIGHT MOTION PREMIUM

### Automated Verification & API Client

Automated email verification workflow built with Node.js and Python.

<br/>

<a href="https://github.com/kyuuXzry/alightmotion-api-client">
<img src="https://img.shields.io/badge/PROJECT-KYUUAI-FFD700?style=flat-square&labelColor=1A1A1A" alt="Project"/>
</a>
<a href="https://github.com/kyuuXzry/alightmotion-api-client/stargazers">
<img src="https://img.shields.io/github/stars/kyuuXzry/alightmotion-api-client?style=flat-square&color=FFD700&labelColor=1A1A1A&logo=github&logoColor=FFD700" alt="Stars"/>
</a>
<a href="https://github.com/kyuuXzry/alightmotion-api-client/network/members">
<img src="https://img.shields.io/github/forks/kyuuXzry/alightmotion-api-client?style=flat-square&color=FFA500&labelColor=1A1A1A&logo=github&logoColor=FFD700" alt="Forks"/>
</a>
<img src="https://img.shields.io/badge/Node.js-v18%2B-1A1A1A?style=flat-square&logo=nodedotjs&logoColor=FFD700" alt="Node.js"/>
<img src="https://img.shields.io/badge/Python-v3.10%2B-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python"/>

<br/>

<img src="https://img.shields.io/badge/MAINTAINED-KyuuAI-1A1A1A?style=flat-square&logo=github&logoColor=FFD700" alt="Maintainer"/>
<img src="https://img.shields.io/badge/STYLE-DARK%20%26%20GOLD-1A1A1A?style=flat-square&labelColor=FFD700" alt="Theme"/>

</div>

---

## Overview

**Alight Motion Premium API Client** merupakan project otomasi berbasis Node.js dan Python untuk mengelola alur verifikasi email.

Project ini menyediakan antarmuka CLI serta integrasi plugin bot untuk menjalankan proses yang tersedia pada implementasinya.

> **Disclaimer:** Project ini merupakan project independen dan tidak berafiliasi dengan Alight Motion. Gunakan hanya pada akun yang Anda miliki atau yang telah mendapat izin. Hormati ketentuan layanan, batas akses, dan mekanisme keamanan platform.

## Features

<table width="100%">
<tr>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:shield-check.svg?color=%23FFD700" width="30" alt="Security"/>

### Request Handling

<sub>Pengelolaan request HTTP melalui Python.</sub>

</td>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:mail.svg?color=%23FFD700" width="30" alt="Email"/>

### Email Workflow

<sub>Alur pengiriman dan verifikasi email sesuai implementasi.</sub>

</td>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:terminal.svg?color=%23FFD700" width="30" alt="CLI"/>

### CLI Interface

<sub>Menjalankan workflow melalui terminal.</sub>

</td>
</tr>

<tr>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:code-2.svg?color=%23FFD700" width="30" alt="Integration"/>

### Node.js Integration

<sub>Integrasi dengan aplikasi berbasis JavaScript.</sub>

</td>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:message-circle.svg?color=%23FFD700" width="30" alt="Bot"/>

### Bot Plugin

<sub>Opsi integrasi WhatsApp bot jika plugin tersedia.</sub>

</td>
<td width="33%" align="center" valign="top">

<img src="https://api.iconify.design/lucide:settings-2.svg?color=%23FFD700" width="30" alt="Configuration"/>

### Modular Structure

<sub>Pemisahan kode berdasarkan fungsi.</sub>

</td>
</tr>
</table>

## Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/JavaScript-1A1A1A?style=flat-square&logo=javascript&logoColor=FFD700" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Node.js-1A1A1A?style=flat-square&logo=nodedotjs&logoColor=FFD700" alt="Node.js"/>
<img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python"/>
<img src="https://img.shields.io/badge/HTTP%20Requests-1A1A1A?style=flat-square&logo=fastapi&logoColor=FFD700" alt="HTTP Requests"/>
<img src="https://img.shields.io/badge/JSON-1A1A1A?style=flat-square&logo=json&logoColor=FFD700" alt="JSON"/>
<img src="https://img.shields.io/badge/Git-1A1A1A?style=flat-square&logo=git&logoColor=FFD700" alt="Git"/>

</div>

---

## Requirements

| Component | Requirement |
|:--|:--|
| Node.js | v18 or newer |
| Python | v3.10 or newer |
| npm | Included with Node.js |
| Python packages | Defined in `requirements.txt` |
| Baileys | Required only if the bot plugin uses it |

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/kyuuXzry/alightmotion-api-client.git
cd alightmotion-api-client
```

### 2. Install Node.js Dependencies

```bash
npm install
```

### 3. Install Python Dependencies

```bash
python -m pip install -r requirements.txt
```

> **Note:** Gunakan environment Python terpisah jika diperlukan agar dependency project tidak mengganggu instalasi Python lainnya.

### 4. Configure the Project

Periksa konfigurasi yang diperlukan oleh project sebelum menjalankannya.

Pastikan:
- Node.js dan Python sudah terpasang.
- Seluruh dependency berhasil diinstal.
- File konfigurasi yang diperlukan tersedia.
- Penggunaan API mengikuti izin dan ketentuan layanan terkait.

---

## Usage

### CLI Mode

Jika entry point project memang berada di `src/tes-am.js`, jalankan:

```bash
node src/tes-am.js
```

### Bot Integration

Jika repository menyediakan plugin bot, integrasikan plugin mengikuti struktur aplikasi bot yang digunakan.

Contoh struktur plugin:

```text
plugins/
├── alightmotion.js
└── bypass.py
```

Pastikan lokasi file sesuai dengan path yang digunakan oleh kode plugin.

### Command Reference

| Command | Description |
|:--|:--|
| `.am-prem <email>` | Memulai alur verifikasi jika didukung plugin |
| `.am-prem batal` | Membatalkan sesi jika fitur tersedia |

> **Important:** Nama command, parameter, dan perilaku aktual bergantung pada implementasi plugin di repository.

---

## Workflow

Diagram berikut menggambarkan alur umum aplikasi. Endpoint dan respons aktual harus disesuaikan dengan implementasi yang tersedia.

```mermaid
sequenceDiagram
    actor U as User
    participant N as Node.js Application
    participant P as Python Module
    participant A as Authorized API

    U->>N: Input request
    N->>P: Execute Python module
    P->>A: Send authorized request
    A-->>P: Return response
    P-->>N: Process result
    N-->>U: Display status
```

## Repository Structure

```text
alightmotion-api-client/
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

*Struktur di atas merupakan contoh. Sesuaikan dengan file yang benar-benar tersedia di repository.*

---

## Troubleshooting

<details>
<summary><b>Node.js command not found</b></summary>

Pastikan Node.js telah diinstal dan dapat diakses melalui terminal.

Periksa instalasi:

```bash
node --version
npm --version
```

</details>

<details>
<summary><b>Python dependency error</b></summary>

Pastikan Python menggunakan versi yang sesuai dan dependency berhasil diinstal.

```bash
python --version
python -m pip install -r requirements.txt
```

</details>

<details>
<summary><b>Module or file not found</b></summary>

Periksa struktur direktori dan path yang digunakan oleh kode.

Pastikan command dijalankan dari root repository yang benar.

</details>

<details>
<summary><b>API request failed</b></summary>

Periksa koneksi, konfigurasi, respons server, dan izin akses.

Jangan mencoba melewati pembatasan keamanan atau mengakses akun maupun layanan tanpa izin.

</details>

---

## Author

<div align="center">

<img src="https://img.shields.io/badge/DEVELOPED%20BY-KYUUAI-FFD700?style=for-the-badge&labelColor=1A1A1A" alt="Developed by KyuuAI"/>

<br/><br/>

<a href="https://github.com/kyuuXzry">
<img src="https://img.shields.io/badge/GitHub-kyuuXzry-1A1A1A?style=flat-square&logo=github&logoColor=FFD700" alt="GitHub"/>
</a>
<a href="https://wa.me/628567126744">
<img src="https://img.shields.io/badge/WhatsApp-Contact-1A1A1A?style=flat-square&logo=whatsapp&logoColor=FFD700" alt="WhatsApp"/>
</a>
<a href="https://instagram.com/rissxzry_">
<img src="https://img.shields.io/badge/Instagram-Follow-1A1A1A?style=flat-square&logo=instagram&logoColor=FFD700" alt="Instagram"/>
</a>

<br/><br/>

<sub>Built with precision. Maintained by KyuuAI.</sub>

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1A1A1A,50:8A6D00,100:FFD700&height=100&section=footer" width="100%" alt="Footer"/>

</div>