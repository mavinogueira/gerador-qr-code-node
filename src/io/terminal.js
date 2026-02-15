const readline = require("readline");
const { generateQRCode } = require("../service/qrCodeService");

function start() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Informe o link do produto: ", async (url) => {
    try {
      const qrCode = await generateQRCode(url);
      console.log("\nQR Code gerado:\n");
      console.log(qrCode);
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error.message);
    } finally {
      rl.close();
    }
  });
}

module.exports = { start };
