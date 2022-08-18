import { useState } from 'react';
import QrCode from 'react-qr-code';
import QrCodeLink from 'qrcode'

import './App.css';

function App() {
  const [link, setLink] = useState("");
  const [qrcodelink, setQrCodeLink] = useState("");

  function handleGenerate(link_url){
    QrCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3
    }, function(err, url){
      setQrCodeLink(url);
    })
  }

  function handleQrCode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">

      < QrCode
      value={link}
      />

      <input
      className="input"
      placeholder='Digite seu link'
      value={link}
      onChange={(e) => handleQrCode(e)}
      />

      <a href={qrcodelink} download={`qrcode.png`}>Baixar QrCode</a>

    </div>
  );
}

export default App;
