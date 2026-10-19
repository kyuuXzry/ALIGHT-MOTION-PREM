/*
 * © KyuuAI
 * WhatsApp : 62856726744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 *
 * WAJIB UBAH SESUAI STRUKTUR BOT KALIAN MASING-MASING!
 * Plugin: AlightMotion Premium Bypass
 */

const { exec } = require('child_process');
const path = require('path');

if (!global.amBypassSessions) global.amBypassSessions = {};

module.exports = async (m, { conn, text, command, usedPrefix }) => {
    if (!['am-prem', 'amprem', 'bypassam'].includes(command)) return;

    const user = m.sender;
    const session = global.amBypassSessions[user];

    if (text === 'cancel' || text === 'batal') {
        if (session) {
            delete global.amBypassSessions[user];
            return m.reply('Proses bypass dibatalkan.');
        }
        return m.reply('Tidak ada proses yang sedang berjalan.');
    }

    if (!session) {
        if (!text || !text.includes('@')) {
            return m.reply(
                `*ALIGHTMOTION PREMIUM BYPASS*\n\n` +
                `Format: ${usedPrefix + command} <email>\n` +
                `Contoh: ${usedPrefix + command} email@gmail.com\n\n` +
                `Ketik *.am-prem batal* untuk membatalkan.`
            );
        }

        const email = text.trim();
        global.amBypassSessions[user] = { email, step: 'waiting_link' };

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        const pythonScript = path.join(__dirname, 'bypass.py');
        exec(`python "${pythonScript}" send "${email}"`, async (error, stdout, stderr) => {
            if (error || !stdout.includes('SUCCESS')) {
                delete global.amBypassSessions[user];
                await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
                return m.reply(`Gagal mengirim link ke email. Server mungkin sedang gangguan.`);
            }

            await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
            await m.reply(
                `Link verifikasi telah dikirim.\n\n` +
                `Email: ${email}\n\n` +
                `Silakan cek inbox/spam email kamu. Copy link yang berisi "auth_action".\n\n` +
                `Format balasan:\n${usedPrefix + command} https://alightcreative.com/auth_action/...\n\n` +
                `Ketik *.am-prem batal* untuk membatalkan.`
            );
        });

    } else if (session.step === 'waiting_link') {
        if (!text || !text.includes('alightcreative.com')) {
            return m.reply(`Link tidak valid. Pastikan link berisi alightcreative.com/auth_action`);
        }

        const link = text.trim();
        const email = session.email;
        const pythonScript = path.join(__dirname, 'bypass.py');

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        m.reply('Memproses bypass Cloudflare...');

        exec(`python "${pythonScript}" verify "${email}" "${link}"`, async (error, stdout, stderr) => {
            delete global.amBypassSessions[user];

            if (error || !stdout.includes('SUCCESS|')) {
                await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
                return m.reply(`Bypass gagal. Link mungkin sudah expired atau sudah pernah digunakan.`);
            }

            const [, uid, orderId] = stdout.trim().split('|');

            await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
            await m.reply(
                `BYPASS BERHASIL\n\n` +
                `Email: ${email}\n` +
                `UID: ${uid}\n` +
                `Order ID: ${orderId}\n` +
                `Status: PREMIUM ACTIVE\n\n` +
                `Silakan login ke AlightMotion menggunakan akun tersebut.`
            );
        });
    }
};

module.exports.command = ['am-prem', 'amprem', 'bypassam'];
module.exports.tags = ['premium', 'tools'];
module.exports.help = [
    'am-prem <email> - Bypass AlightMotion Premium'
];