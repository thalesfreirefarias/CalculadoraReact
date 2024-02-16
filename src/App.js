import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Torcedor from './componentes/Torcedor';
import Rodape from './componentes/rodape';

const Posicao = [
    {
        nome: 'Atacante',
        corPrimaria: 'black',
        corSecundaria: 'white',
        corTerciario: 'gray '
    },
    {
        nome: 'Goleiro',
        corPrimaria: 'white ',
        corSecundaria: 'black',
        corTerciario: 'gray'
    },
    {
        nome: 'Zagueiro',
        corPrimaria: 'black',
        corSecundaria: 'white',
        corTerciario: 'gray'
    },
    {
        nome: 'Lateral Esquerdo',
        corPrimaria: 'white',
        corSecundaria: 'black',
        corTerciario: 'gray'
    },
    {
        nome: 'Lateral Direito',
        corPrimaria: 'black',
        corSecundaria: 'white',
        corTerciario: 'gray'
    }
];

function App() {
    const [torcedores, setTorcedores] = useState([]);

    const torcedorNovo = (torcedor) => {
        debugger
        setTorcedores([...torcedores, torcedor]);
    };

    function deletarTorcedor(){
        console.log('Deletando Jogador');
    }
    

    return (
        <div className="App">
            <Banner />
            <Formulario torcedorCadastrado={(torcedor) => torcedorNovo(torcedor)} />

            {Posicao.map((posicao) => (<Torcedor 
            key={posicao.nome} 
            nome={posicao.nome} 
            corPrimaria={posicao.corPrimaria} 
            corSecundaria={posicao.corSecundaria} 
            corTerciario={posicao.corTerciario} 
            torcedores={torcedores.filter(torcedor => torcedor.posicao === posicao.nome)}
            paraDeletar={deletarTorcedor}

            /> ))}
            <Rodape/>
        </div>
    );
}

export default App;
