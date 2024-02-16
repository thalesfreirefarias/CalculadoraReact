import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

function Formulario(props) {
    const posicoes = [
        'Selicione uma Posicao',
        'Atacante',
        'Meias',
        'Volantes',
        'Zagueiro',
        'Lateral Esquerdo',
        'Lateral Direito',
        'Goleiro',
    ];

    const [nome, setNome] = useState('');
    const [jogador, setJogador] = useState('');
    const [imagem, setImagem] = useState('');
    const [posicao, setPosicao] = useState('');

    const salvar = (evento) => {
        evento.preventDefault();
        props.torcedorCadastrado({
            nome,
            jogador,
            imagem,
            posicao
        })
        setNome('')
        setJogador('')
        setImagem('')
        setPosicao('')
        
    };

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Monte agora o seu time do Corinthians! Preencha os dados abaixo.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do Jogador :"
                    placeholder="Digite o nome do Jogador"
                    valor={nome}
                    alterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Nacionalidade"
                    placeholder="Digite o pais que o jogador nasceu"
                    valor={jogador}
                    alterado={(valor) => setJogador(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da foto do jogador escolhido"
                    valor={imagem}
                    alterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Posição : "
                    itens={posicoes}
                    value={posicao}
                    alterado={valor=> setPosicao(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario;
