import React from 'react';
import Corinthiano from '../TorcedorCorinthiano';
import './Torcedor.css';

const Torcedor = ({ torcedores, corSecundaria, corPrimaria, corTerciario, nome, paraDeletar}) => {
  return (
    (torcedores.length > 0) ? (
      <section className="torcedor" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ color: corPrimaria, borderColor: corTerciario }}>{nome}</h3>
        <div className="torcedores">

          {torcedores.map((torcedor, index) => {
            return     <Corinthiano
            key={index}
            nome={torcedor.nome}
            jogador={torcedor.jogador}
            imagem={torcedor.imagem}
            paraDeletar={paraDeletar}
          />
          })}
        </div>
      </section>
    ) : null
  );
}

export default Torcedor;
