<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=170&color=0:050505,100:39FF88&section=header&text=&fontSize=0" width="100%" alt="">

<img src="assets/alight-motion.svg" width="110" alt="Alight Motion Logo">

<h1>ALIGHT MOTION PREMIUM</h1>

<p><strong>CLI TOOLS &nbsp;/&nbsp; BOT INTEGRATION</strong></p>

<p>
  Lightweight tools built with Node.js and Python.
  <br>
  Clean, modular, and developer-friendly.
</p>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=2800&pause=900&color=39FF88&center=true&vCenter=true&width=460&height=35&lines=Node.js+%2B+Python;CLI+%2B+WhatsApp+Plugin;Minimal+Code.+Maximum+Control." alt="Typing SVG">

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

**[Overview](#overview)** &nbsp;·&nbsp; **[Install](#installation)** &nbsp;·&nbsp; **[Usage](#usage)** &nbsp;·&nbsp; **[Structure](#project-structure)** &nbsp;·&nbsp; **[Troubleshooting](#troubleshooting)** &nbsp;·&nbsp; **[Security](#security)**

</div>

<br>

## <img src="https://api.iconify.design/lucide:code-2.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Overview

> **ALIGHT MOTION PREMIUM** is a Node.js and Python-based project built for CLI execution and optional WhatsApp bot integration.

It uses Python's `curl_cffi` for HTTP requests and can be dropped into a compatible WhatsApp bot as a plugin.

<br>

## <img src="https://api.iconify.design/lucide:layers-3.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Core Components

<table>
<tr>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:terminal.svg?color=%2339FF88" width="18" align="center" alt=""> CLI

Run the main script straight from the terminal.

- Node.js runtime
- Python integration
- Command-line execution

</td>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:plug.svg?color=%2339FF88" width="18" align="center" alt=""> Bot Plugin

Optional integration with a compatible WhatsApp bot.

- Plugin-based structure
- Compatible bot base required
- Baileys comes from the host bot

</td>
</tr>
</table>

<br>

## <img src="https://api.iconify.design/lucide:monitor-cog.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Requirements

| Dependency | Purpose | Status |
|:--|:--|:--:|
| Node.js LTS | Runs the CLI and JavaScript modules | Required |
| Python 3 | Runs Python-based components | Required |
| `curl_cffi` | Handles Python HTTP requests | Required |
| Axios | HTTP client, only if your code imports it | Conditional |
| Baileys | WhatsApp bot integration | Optional |

<br>

## <img src="https://api.iconify.design/lucide:terminal-square.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Installation

> Tested flow for **Termux**. Run the steps in order.

**01 · Update Termux**

```bash
pkg update && pkg upgrade -y
```

**02 · Install Node.js and Python**

```bash
pkg install nodejs-lts python -y
```

**03 · Install Python dependency**

```bash
python -m pip install curl_cffi
```

> [!NOTE]
> If Termux says the Python environment is *externally managed*, don't force the install. Use a virtual environment or the method recommended for your Termux/Python version.

**04 · Install Axios (only when needed)**

Skip this if your code only uses Node.js built-ins like `child_process`.

```bash
npm install axios
```

<br>

## <img src="https://api.iconify.design/lucide:check-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Verify Installation

```bash
node -v
python --version
python -c "import curl_cffi; print('curl_cffi is ready')"
```

If all three commands succeed, your runtime and Python dependency are ready.

<br>

## <img src="https://api.iconify.design/lucide:play.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Usage

### CLI Mode

From the project root:

```bash
node src/tes-am.js
```

### Bot Plugin Mode

1. Open the directory of your existing WhatsApp bot.
2. Confirm the bot supports the plugin format used by this project.
3. Copy the plugin files into the bot's `plugins/` directory.
4. Install any dependencies the plugin actually imports.
5. Restart the bot and check the logs for errors.

> [!TIP]
> Baileys is normally provided by the bot's base project. Avoid installing a second, incompatible version unless the bot's docs require it.

<br>

## <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Project Structure

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

<sub>Keep only the files and folders that actually exist in your repository.</sub>

<br>

## <img src="https://api.iconify.design/lucide:bug.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Troubleshooting

<details>
<summary><strong>Node.js or Python command not found</strong></summary>

<br>

```bash
node -v
python --version
```

If a command is missing, re-check the Termux package installation and restart the session.

</details>

<details>
<summary><strong>ModuleNotFoundError: curl_cffi</strong></summary>

<br>

Install it with the same interpreter that runs the script:

```bash
python -m pip install curl_cffi
```

</details>

<details>
<summary><strong>Cannot find module 'axios'</strong></summary>

<br>

Only if the failing code imports Axios, install it in the project directory:

```bash
npm install axios
```

A global install is generally not a substitute for a project dependency.

</details>

<details>
<summary><strong>CLI script cannot be found</strong></summary>

<br>

```bash
pwd
ls
ls src
```

Run the command from the repository root and use the correct entry-point path.

</details>

<details>
<summary><strong>HTTP request fails</strong></summary>

<br>

Check your connection, the target service's availability, and the request config. `curl_cffi` does not guarantee access to every protected endpoint.

</details>

<br>

## <img src="https://api.iconify.design/lucide:shield-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Security

> [!IMPORTANT]
> Use this project only with accounts and services you are authorized to access.

- Keep session cookies, tokens, and credentials private.
- Never commit secrets or personal authentication data to a public repository.
- Respect the target service's terms and security controls.
- Review third-party dependencies before running code.

<br>

## <img src="https://api.iconify.design/lucide:code-xml.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Developer

<div align="center">

<img src="https://img.shields.io/badge/DEVELOPED%20BY-PADUKA%20KYUU-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Developer">

<br><br>

**KyuuAI / KyuuXzry**

<sub>AI exploration · Automation · API Development</sub>

<br><br>

<a href="https://github.com/kyuuXzry">
  <img src="https://img.shields.io/badge/GitHub-kyuuXzry-39FF88?style=for-the-badge&logo=github&logoColor=39FF88&labelColor=0A0A0A" alt="GitHub">
</a>
<a href="https://instagram.com/rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-rissxzry_-39FF88?style=for-the-badge&logo=instagram&logoColor=39FF88&labelColor=0A0A0A" alt="Instagram">
</a>

<br><br>

<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM">
  <img src="https://img.shields.io/badge/VIEW-REPOSITORY-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Repository">
</a>

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&height=110&color=0:050505,100:39FF88&section=footer&text=&fontSize=0" width="100%" alt="">

<sub>ALIGHT-MOTION-PREM · Built for developers.</sub>

</div>
