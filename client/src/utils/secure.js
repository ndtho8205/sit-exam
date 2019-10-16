const crypto = require('crypto-js');

const SECRET_KEY = crypto.enc.Utf8.parse(process.env.VUE_APP_SECRET_KEY);
const IV_LENGTH = 16;

function encrypt(message) {
  const iv = crypto.lib.WordArray.random(IV_LENGTH);

  const encrypted = crypto.AES.encrypt(message, SECRET_KEY, {
    iv,
    mode: crypto.mode.CBC,
    format: crypto.format.Hex,
  }).toString();

  return `${iv.toString()}:${encrypted}`;
}

function decrypt(message) {
  const messageParts = message.split(':');
  const iv = crypto.enc.Hex.parse(messageParts[0]);

  const decrypted = crypto.AES.decrypt(messageParts[1], SECRET_KEY, {
    iv,
    mode: crypto.mode.CBC,
    format: crypto.format.Hex,
  }).toString(crypto.enc.Utf8);

  return decrypted;
}

export { encrypt, decrypt };
