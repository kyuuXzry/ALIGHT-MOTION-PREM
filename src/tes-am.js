/*
 * © KyuuAI
 * WhatsApp : 62856726744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 * Mode Cli untuk run di termux
 */

const { execSync } = require('child_process');
const readline = require('readline');
const path = require('path');

const c = {
    reset: '\x1b[0m',
    gray: '\x1b[90m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    clearLine: '\x1b[2K\r'
};

const line = (char = '─', length = 58) => char.repeat(length);
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function showLoading(text, duration = 1500) {
    let i = 0;
    const interval = setInterval(() => {
        process.stdout.write(`${c.clearLine}  ${c.gray}[${new Date().toLocaleTimeString('en-GB')}]${c.reset} ${c.yellow}PROCESS  ${c.reset} ${text} ${c.cyan}${spinner[i++ % spinner.length]}${c.reset}`);
    }, 80);
    
    await sleep(duration);
    clearInterval(interval);
    process.stdout.write(`${c.clearLine}`);
}

function drawHeader() {
    console.clear();
    console.log(`\n  ${c.cyan}${c.bold}┌${line()}┐${c.reset}`);
    console.log(`  ${c.cyan}${c.bold}│${c.reset}  ${c.white}${c.bold}ALIGHTMOTION PREMIUM BYPASS${c.reset}${' '.repeat(29)}${c.cyan}${c.bold}│${c.reset}`);
    console.log(`  ${c.cyan}${c.bold}│${c.reset}  ${c.gray}Automated Verification System v2.1${c.reset}${' '.repeat(19)}${c.cyan}${c.bold}│${c.reset}`);
    console.log(`  ${c.cyan}${c.bold}└${line()}┘${c.reset}\n`);
}

function drawSuccessBox(uid, orderId) {
    console.log(`\n  ${c.green}${c.bold}┌${line()}┐${c.reset}`);
    console.log(`  ${c.green}${c.bold}│${c.reset}  ${c.green}${c.bold}BYPASS BERHASIL! AKUN PREMIUM AKTIF${c.reset}${' '.repeat(20)}${c.green}${c.bold}│${c.reset}`);
    console.log(`  ${c.green}${c.bold}├${line()}┤${c.reset}`);
    console.log(`  ${c.green}${c.bold}│${c.reset}  ${c.dim}UID       :${c.reset} ${c.white}${uid}${c.reset}`);
    console.log(`  ${c.green}${c.bold}│${c.reset}  ${c.dim}ORDER ID  :${c.reset} ${c.white}${orderId}${c.reset}`);
    console.log(`  ${c.green}${c.bold}│${c.reset}  ${c.dim}STATUS    :${c.reset} ${c.green}${c.bold}SUCCESS${c.reset}`);
    console.log(`  ${c.green}${c.bold}└${line()}┘${c.reset}\n`);
}

(async () => {
    drawHeader();

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const ask = (q) => new Promise(res => rl.question(q, res));
    const scriptPath = path.join(__dirname, '..', 'plugins', 'bypass.py');

    const email = (await ask(`  ${c.green}❯${c.reset} ${c.white}Masukkan Email${c.reset} ${c.dim}(enter untuk batal)${c.reset}: `)).trim();
    
    if (!email || !email.includes('@')) {
        console.log(`\n  ${c.red}Email tidak valid. Proses dibatalkan.${c.reset}\n`);
        return rl.close();
    }

    await showLoading(`Menghubungi Server AlightMotion...`, 1200);
    
    try {
        const sendRes = execSync(`python "${scriptPath}" send "${email}"`, { encoding: 'utf-8' }).trim();
        
        if (sendRes !== 'SUCCESS') {
            console.log(`  ${c.gray}[${new Date().toLocaleTimeString('en-GB')}]${c.reset} ${c.red}FATAL    ${c.reset} Gagal mengirim link. ${sendRes}\n`);
            return rl.close();
        }
        
        console.log(`  ${c.gray}[${new Date().toLocaleTimeString('en-GB')}]${c.reset} ${c.green}DONE     ${c.reset} Link verifikasi berhasil dikirim.\n`);
        
        console.log(`  ${c.yellow}INFO     ${c.reset} ${c.dim}Silakan cek inbox/spam di email ${email}${c.reset}`);
        console.log(`  ${c.yellow}INFO     ${c.reset} ${c.dim}Copy link yang berisi "https://alightcreative.com/auth_action/..."${c.reset}\n`);

        const link = (await ask(`  ${c.green}❯${c.reset} ${c.white}Paste Link Verifikasi${c.reset} ${c.dim}(enter untuk batal)${c.reset}: `)).trim();
        
        if (!link || !link.includes('alightcreative.com')) {
            console.log(`\n  ${c.red}Link tidak valid. Proses dibatalkan.${c.reset}\n`);
            return rl.close();
        }

        console.log('');
        await showLoading(`Memproses bypass Cloudflare...`, 1800);
        
        const verifyRes = execSync(`python "${scriptPath}" verify "${email}" "${link}"`, { encoding: 'utf-8' }).trim();
        
        if (verifyRes.startsWith('SUCCESS|')) {
            const [, uid, orderId] = verifyRes.split('|');
            drawSuccessBox(uid, orderId);
        } else {
            console.log(`  ${c.gray}[${new Date().toLocaleTimeString('en-GB')}]${c.reset} ${c.red}FATAL    ${c.reset} Bypass gagal. ${verifyRes}\n`);
        }
    } catch (error) {
        console.log(`  ${c.red}FATAL    ${c.reset} ${error.message}\n`);
    }

    rl.close();
})();