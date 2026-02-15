const QRCode = require("qrcode");

async function generateQRCode(text) {
  if (!text) {
    throw new Error("O texto para gerar o QR Code é obrigatório");
  }

  const qrCode = await QRCode.toString(text, {
    type: "terminal",
    small: true
  });

  return qrCode;
}

module.exports = { generateQRCode };
