<div align="center">

<img src="assets/alight-motion.svg" width="100" alt="Alight Motion Logo"/>

# ALIGHT MOTION PREMIUM

**Email Verification Workflow & API Client**

A Node.js and Python project for email verification workflow management.

<br/>

<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM">
<img src="https://img.shields.io/badge/Repository-ALIGHT--MOTION--PREM-39FF88?style=flat-square&labelColor=0D1117" alt="Repository"/>
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/stargazers">
<img src="https://img.shields.io/github/stars/kyuuXzry/ALIGHT-MOTION-PREM?style=flat-square&color=39FF88&labelColor=0D1117" alt="Stars"/>
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/network/members">
<img src="https://img.shields.io/github/forks/kyuuXzry/ALIGHT-MOTION-PREM?style=flat-square&color=39FF88&labelColor=0D1117" alt="Forks"/>
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/issues">
<img src="https://img.shields.io/github/issues/kyuuXzry/ALIGHT-MOTION-PREM?style=flat-square&color=39FF88&labelColor=0D1117" alt="Issues"/>
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-v18%2B-0D1117?style=flat-square&logo=nodedotjs&logoColor=39FF88" alt="Node.js"/>
<img src="https://img.shields.io/badge/Python-3.10%2B-0D1117?style=flat-square&logo=python&logoColor=39FF88" alt="Python"/>

</div>

---

## Overview

**ALIGHT-MOTION-PREM** merupakan project otomasi berbasis Node.js dan Python yang dirancang untuk mengelola workflow verifikasi email melalui CLI dan integrasi bot sesuai implementasi yang tersedia.

Project ini menggabungkan pemrosesan aplikasi, request HTTP, dan penanganan respons dalam satu workflow.

> **Disclaimer:** Project ini independen dan tidak berafiliasi dengan Alight Motion. Gunakan hanya pada akun yang lu miliki atau yang telah memberikan izin. Hormati ketentuan layanan dan mekanisme keamanan platform.

## Features

| Feature | Description |
|:--|:--|
| CLI Workflow | Menjalankan aplikasi melalui terminal. |
| Node.js Integration | Mengelola alur aplikasi menggunakan JavaScript. |
| Python Module | Menangani pemrosesan request melalui Python. |
| Email Workflow | Mengelola proses verifikasi email sesuai implementasi. |
| Bot Integration | Mendukung plugin bot jika tersedia. |
| Error Handling | Membantu menangani respons dan kegagalan proses. |

## Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=js,nodejs,python&theme=dark" alt="JavaScript, Node.js, Python"/>

<br/><br/>

<img src="https://img.shields.io/badge/HTTP-Request%20Handling-0D1117?style=flat-square&logo=fastapi&logoColor=39FF88" alt="HTTP"/>
<img src="https://img.shields.io/badge/JSON-Data%20Format-0D1117?style=flat-square&logo=json&logoColor=39FF88" alt="JSON"/>
<img src="https://img.shields.io/badge/curl__cffi-Python%20HTTP-0D1117?style=flat-square&logo=python&logoColor=39FF88" alt="curl_cffi"/>

</div>

## Requirements

| Component | Version |
|:--|:--|
| Node.js | v18 or newer |
| Python | v3.10 or newer |
| npm | Included with Node.js |
| Python packages | Defined in `requirements.txt` |

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/kyuuXzry/ALIGHT-MOTION-PREM.git
cd ALIGHT-MOTION-PREM
```

**2. Install Node.js dependencies**

```bash
npm install
```

**3. Install Python dependencies**

```bash
python -m pip install -r requirements.txt
```

**4. Check your environment**

```bash
node --version
npm --version
python --version
```

## Usage

### CLI Mode

Jika entry point project berada di `src/tes-am.js`, jalankan:

```bash
node src/tes-am.js
```

### Bot Integration

Jika plugin bot tersedia, sesuaikan penempatannya dengan struktur aplikasi bot yang digunakan.

Contoh:

```text
plugins/
├── alightmotion.js
└── bypass.py
```

### Command Reference

| Command | Description |
|:--|:--|
| `.am-prem <email>` | Memulai workflow jika didukung plugin. |
| `.am-prem batal` | Membatalkan sesi jika fitur tersedia. |

> Pastikan command dan lokasi file sesuai dengan implementasi sebenarnya.

---

## Workflow

<div align="center">

<img src="https://img.shields.io/badge/WORKFLOW-EMAIL%20VERIFICATION-39FF88?style=flat-square&labelColor=0D1117"/>
<img src="https://img.shields.io/badge/PROCESS-NODE.JS%20%2B%20PYTHON-39FF88?style=flat-square&labelColor=0D1117"/>

</div>

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0D1117",
    "primaryColor": "#111D16",
    "primaryTextColor": "#39FF88",
    "primaryBorderColor": "#238636",
    "lineColor": "#39FF88",
    "secondaryColor": "#0D1117",
    "tertiaryColor": "#111D16",
    "actorBkg": "#111D16",
    "actorBorder": "#39FF88",
    "actorTextColor": "#39FF88",
    "actorLineColor": "#238636",
    "signalColor": "#39FF88",
    "signalTextColor": "#E6EDF3",
    "labelBoxBkgColor": "#111D16",
    "labelBoxBorderColor": "#238636",
    "labelTextColor": "#39FF88",
    "noteBkgColor": "#111D16",
    "noteBorderColor": "#238636",
    "noteTextColor": "#E6EDF3",
    "activationBkgColor": "#173D27",
    "activationBorderColor": "#39FF88"
  },
  "sequence": {
    "showSequenceNumbers": true,
    "actorMargin": 60,
    "messageMargin": 35,
    "mirrorActors": false
  }
}}%%

sequenceDiagram
    autonumber

    actor U as User
    participant N as Node.js
    participant P as Python
    participant A as API

    rect rgb(13, 25, 18)
        Note over U,A: PHASE 01 - EMAIL VERIFICATION

        U->>N: Input email
        N->>P: Execute send workflow
        P->>A: Send authorized request
        A-->>P: Return response
        P-->>N: Processing status
        N-->>U: Verification instructions
    end

    rect rgb(15, 30, 22)
        Note over U,A: PHASE 02 - LINK VERIFICATION

        U->>N: Submit verification link
        N->>P: Execute verify workflow
        P->>A: Submit verification request
        A-->>P: Return verification result
        P-->>N: Process response
        N-->>U: Display final status
    end
```

### Workflow Summary

```text
USER INPUT
    |
    v
NODE.JS APPLICATION
    |
    v
PYTHON MODULE
    |
    v
AUTHORIZED API
    |
    v
RESPONSE PROCESSING
    |
    v
RESULT DISPLAY
```

## Repository Structure

Contoh struktur project:

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

Sesuaikan struktur tersebut dengan file yang benar-benar tersedia di repository.

## Troubleshooting

<details>
<summary><b>Dependency installation failed</b></summary>

Periksa versi Node.js dan Python, koneksi internet, serta dependency yang tercantum dalam file konfigurasi.

```bash
npm install
python -m pip install -r requirements.txt
```

</details>

<details>
<summary><b>Module or file not found</b></summary>

Pastikan command dijalankan dari root repository dan path file sesuai dengan struktur project.

</details>

<details>
<summary><b>API request failed</b></summary>

Periksa koneksi, konfigurasi, respons server, dan izin akses. Hormati autentikasi, rate limit, serta mekanisme keamanan layanan.

</details>

<details>
<summary><b>Verification link expired</b></summary>

Ikuti prosedur verifikasi resmi untuk mendapatkan link baru jika link sebelumnya sudah kedaluwarsa.

</details>

---

## Author

<div align="center">

<a href="https://github.com/kyuuXzry">
<img src="https://img.shields.io/badge/GitHub-kyuuXzry-0D1117?style=flat-square&logo=github&logoColor=39FF88" alt="GitHub"/>
</a>
<a href="https://wa.me/628567126744">
<img src="https://img.shields.io/badge/WhatsApp-Contact-0D1117?style=flat-square&logo=whatsapp&logoColor=39FF88" alt="WhatsApp"/>
</a>
<a href="https://instagram.com/rissxzry_">
<img src="https://img.shields.io/badge/Instagram-Follow-0D1117?style=flat-square&logo=instagram&logoColor=39FF88" alt="Instagram"/>
</a>

<br/><br/>

**KYUUAI · PADUKA KYUU**

<sub>Build clean. Automate smart.</sub>

</div>