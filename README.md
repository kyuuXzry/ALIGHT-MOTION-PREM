<div align="center">

<br>

<img src="assets/alight-motion.svg" width="96" alt="Alight Motion Logo">

<h1>ALIGHT MOTION PREMIUM</h1>

<p>
  <strong>CLI TOOLS &nbsp; / &nbsp; BOT INTEGRATION</strong>
</p>

<p>
  Lightweight tools built with Node.js and Python.
  <br>
  Designed for a clean, modular, and developer-friendly environment.
</p>

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=2800&pause=900&color=39FF88&center=true&vCenter=true&width=460&height=35&lines=Node.js+%2B+Python;CLI+%2B+WhatsApp+Plugin;Minimal+Code.+Maximum+Control." alt="Typing SVG">

<br>

<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM">
  <img src="https://img.shields.io/badge/PROJECT-ALIGHT%20MOTION-39FF88?style=for-the-badge&labelColor=0A0A0A" alt="Project">
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/stargazers">
  <img src="https://img.shields.io/github/stars/kyuuXzry/ALIGHT-MOTION-PREM?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Stars">
</a>
<a href="https://github.com/kyuuXzry/ALIGHT-MOTION-PREM/issues">
  <img src="https://img.shields.io/github/issues/kyuuXzry/ALIGHT-MOTION-PREM?style=for-the-badge&color=39FF88&labelColor=0A0A0A&logo=github&logoColor=39FF88" alt="Issues">
</a>

<br><br>

<img src="https://img.shields.io/badge/Node.js-LTS-39FF88?style=flat-square&logo=nodedotjs&logoColor=39FF88&labelColor=0A0A0A" alt="Node.js">
<img src="https://img.shields.io/badge/Python-3.x-39FF88?style=flat-square&logo=python&logoColor=39FF88&labelColor=0A0A0A" alt="Python">
<img src="https://img.shields.io/badge/HTTP-curl__cffi-39FF88?style=flat-square&logo=cloudflare&logoColor=39FF88&labelColor=0A0A0A" alt="curl_cffi">
<img src="https://img.shields.io/badge/Environment-Termux-39FF88?style=flat-square&logo=termux&logoColor=39FF88&labelColor=0A0A0A" alt="Termux">

<br><br>

<img src="https://api.iconify.design/lucide:minus.svg?color=%2339FF88" width="100%" height="2" alt="separator">

</div>

<br>

## <img src="https://api.iconify.design/lucide:code-2.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Overview

<table>
<tr>
<td width="100%">

**ALIGHT MOTION PREMIUM** is a Node.js and Python-based project designed for CLI execution and optional bot integration.

The project uses Python's `curl_cffi` for HTTP requests and can be integrated into a compatible WhatsApp bot through a plugin.

</td>
</tr>
</table>

<br>

## <img src="https://api.iconify.design/lucide:layers-3.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Core Components

<table>
<tr>
<td width="50%" valign="top">

<h3>
<img src="https://api.iconify.design/lucide:terminal.svg?color=%2339FF88" width="18" align="center" alt="">
 CLI
</h3>

Run the main script directly from the terminal.

- Node.js runtime
- Python integration
- Command-line execution

</td>
<td width="50%" valign="top">

<h3>
<img src="https://api.iconify.design/lucide:plug.svg?color=%2339FF88" width="18" align="center" alt="">
 Bot Plugin
</h3>

Optional integration with a compatible WhatsApp bot.

- Plugin-based structure
- Compatible bot base required
- Baileys support depends on the host project

</td>
</tr>
</table>

<br>

## <img src="https://api.iconify.design/lucide:monitor-cog.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Requirements

<table>
<tr>
<td width="100%">

| Dependency | Purpose | Status |
|:--|:--|:--|
| Node.js LTS | Runs the CLI and JavaScript modules | Required |
| Python 3 | Runs Python-based components | Required |
| `curl_cffi` | Handles Python HTTP requests | Required |
| Axios | HTTP client for code that imports Axios | Conditional |
| Baileys | WhatsApp bot integration | Optional |

</td>
</tr>
</table>

<br>

## <img src="https://api.iconify.design/lucide:terminal-square.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Installation

### 01 / Update Termux

Start by updating the package lists and installed packages.

```bash
pkg update && pkg upgrade -y
```

### 02 / Install Node.js

Install the Node.js LTS package.

```bash
pkg install nodejs-lts -y
```

### 03 / Install Python

Python is required for the Python-based components.

```bash
pkg install python -y
```

### 04 / Install Python Dependencies

Install `curl_cffi` using the Python package manager.

```bash
python -m pip install curl_cffi
```

If Termux reports that the Python environment is externally managed, do not force the installation. Use a compatible virtual environment or the package installation method recommended by your Termux/Python version.

### 05 / Install Axios When Needed

Axios is not required if the JavaScript code only uses Node.js built-in modules such as `child_process`.

Install it only if your code or bot base imports Axios.

```bash
npm install axios
```

<br>

## <img src="https://api.iconify.design/lucide:check-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Verify Installation

Run these commands individually to check your environment.

<table>
<tr>
<td width="100%">

**Node.js**

```bash
node -v
```

**Python**

```bash
python --version
```

**Python HTTP Library**

```bash
python -c "import curl_cffi; print('curl_cffi is ready')"
```

</td>
</tr>
</table>

If all checks complete successfully, the basic runtime and Python dependency are available.

<br>

## <img src="https://api.iconify.design/lucide:play.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Usage

### CLI Mode

From the project root, run the main CLI script:

```bash
node src/tes-am.js
```

Make sure the file exists and the required dependencies are installed before running it.

### Bot Plugin Mode

<table>
<tr>
<td width="100%">

1. Open the directory of your existing WhatsApp bot.
2. Confirm that the bot supports the plugin format used by this project.
3. Copy the required plugin file into the bot's `plugins/` directory.
4. Install any dependencies that the plugin actually imports.
5. Restart the bot and check its logs for errors.

</td>
</tr>
</table>

**Note:** Baileys is normally provided by the bot's base project. Avoid installing a second, incompatible version unless the bot's documentation requires it.

<br>

## <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Project Structure

```text
ALIGHT-MOTION-PREM/
│
├── assets/
│   └── alight-motion.svg
│
├── plugins/
│   ├── alightmotion.js
│   └── bypass.py
│
├── src/
│   └── tes-am.js
│
├── package.json
├── requirements.txt
└── README.md
```

<sub>The structure above is a reference based on the expected project components. Keep only the files and directories that actually exist in your repository.</sub>

<br>

## <img src="https://api.iconify.design/lucide:bug.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Troubleshooting

<details>
<summary><strong>Node.js or Python command not found</strong></summary>

Check whether the packages are installed correctly.

```bash
node -v
python --version
```

If a command is unavailable, check the Termux package installation and restart the terminal session if necessary.

</details>

<details>
<summary><strong>ModuleNotFoundError: curl_cffi</strong></summary>

Install the Python dependency using the interpreter that runs the script.

```bash
python -m pip install curl_cffi
```

If the installation fails, review the Python environment and the package installation restrictions reported by Termux.

</details>

<details>
<summary><strong>Cannot find module 'axios'</strong></summary>

Only if the failing code imports Axios, install it in the appropriate project directory.

```bash
npm install axios
```

Installing Axios globally is generally not a substitute for installing a project dependency.

</details>

<details>
<summary><strong>CLI script cannot be found</strong></summary>

Confirm your current directory and inspect the available files.

```bash
pwd
ls
ls src
```

Run the command from the repository root and use the correct entry-point path.

</details>

<details>
<summary><strong>HTTP request fails</strong></summary>

Check your internet connection, the target service's availability, and the request configuration.

`curl_cffi` does not guarantee that every Cloudflare-protected endpoint can be accessed. Respect the target service's access controls and terms.

</details>

<br>

## <img src="https://api.iconify.design/lucide:shield-check.svg?color=%2339FF88" width="21" align="center" alt=""> &nbsp; Security

<table>
<tr>
<td width="100%">

- Use only accounts and services you are authorized to access.
- Keep session cookies, access tokens, and credentials private.
- Never commit secrets or personal authentication data to a public repository.
- Respect the target service's terms and security controls.
- Review third-party dependencies before running code.

</td>
</tr>
</table>

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

</div>

<br>

<img src="https://api.iconify.design/lucide:minus.svg?color=%2339FF88" width="100%" height="2" alt="separator">

<div align="center">

<sub>ALIGHT-MOTION-PREM · Built for developers.</sub>

</div>