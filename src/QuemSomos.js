import React from "react";
import "./quemSomos.css";

function QuemSomos() {
  return (
    <div className="quem-somos-container">
      <h1 className="title">Quem sou eu?</h1>
      <div className="profile-section">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9OwOMAZTjarUqzUef2uv1q1cA6pKyRqb2mAIDlvfuXJDRCn64PtAn38diilM_MeTBIfpxG_im1AlyxclfxLbMqo1WgDFnKfxkhmGq6m15Q_o3cyXvn4eJl4DmLzGUvfqTHooYI59CUh64rrdxcmmyJE6DmJfoWVmBh78hVGyeQHt9q5X42eMvLYohQOk/s1600/LOGO%20LOJA%20VITUAL.png"
          alt="Foto de perfil"
          className="profile-image"
        />
        <p className="description">
        💻 Desenvolvedor Full-Stack com foco em tecnologias web
🎨 Designer Gráfico e Editor de Áudio e Vídeo
📈 Sempre aprimorando, atualmente focado em Kubernetes
💬 Pergunte-me sobre HTML5, CSS, JavaScript, Banco de Dados SQL, Edição Gráfica, e Áudio e Vídeo
        </p>
      </div>

      <div className="services-section">
        <div className="service-card">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2XGrGi7HMVfynEDGItmIp3sQIKbeLnnH08aSpiUhjQTpmXnAj7-numTktAMz9vR-_Pznr8rJk0JMEkzaijzd5ezWCBy8Nl1xD2AnEfAAs_Cao6ZXq-MtLl_QXGdkADxSorJXldQKH5Lj82Jetnx_eERu97sDEdG762nGh7TGulVIjZJkVyd6eEEiNcP4/s512/7556844.png"
            alt="Design Gráfico"
            className="service-icon"
          />
          <h3>Design Gráfico</h3>
          <button className="service-button">Mais</button>
        </div>
        <div className="service-card">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAGiyoey4-aHbJhAFEuFSS5teiSlP0Lava7sj9akarxGEXzLeBrniHpQsn41CLAch8eLuTxMpRxPUFZBzfQ3tGWkkFp3_uUF80NFChhsjpp9pYhapvxx46Ujf8ZfqeUKh98wqPopUf2kzbjrWbh607SHTJCS3QzRkynAo6fqd5hXkS9qG57WoZ3ln-z2A/s512/10939273.png" // Substitua pelo caminho do ícone
            alt="Designer de Web"
            className="service-icon"
          />
          <h3>Designer de Web</h3>
          <button className="service-button">Mais</button>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
