let qrcode = '';

function generateQRCode() {
  const inputText = document.getElementById('text').value.trim();

  if (inputText) {
    const googleChartsAPI = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
    qrcode = googleChartsAPI + inputText;

    const qrcodeImg = document.createElement('img');
    qrcodeImg.src = qrcode;
    qrcodeImg.alt = 'QR Code';

    const qrcodeContainer = document.getElementById('qrcode-container');
    qrcodeContainer.innerHTML = '';
    qrcodeContainer.appendChild(qrcodeImg);

    swal("Prontinho!", "Seu QR Code foi gerado!", "success");
    document.getElementById("download").disabled = false;

    // Melhora o estilo dos botões quando um QR Code é gerado
    document.getElementById("generate").classList.add("generated");
    document.getElementById("download").classList.add("generated");
  } else {
    swal("Digite um link para gerar o QR Code!");
    document.getElementById("download").disabled = true;
  }
}

async function downloadQRCode() {
  const response = await fetch(qrcode);
  const blob = await response.blob();
  const imageURL = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = imageURL;
  a.download = 'qrcode.png';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  const qrcodeContainer = document.getElementById('qrcode-container');
  qrcodeContainer.innerHTML = '';

}