import React, { useState } from 'react';
import './CadastroNoticia.css'; // Importando o arquivo de estilos

const CadastroNoticia = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateURL = (url) => {
        const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return regex.test(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateURL(link)) {
            setMensagem('O link fornecido não é válido.');
            return;
        }

        setIsLoading(true);
        const noticia = { titulo, descricao, link, imagem };

        try {
            const response = await fetch('http://localhost:8080/noticias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticia),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar a notícia');
            }

            const data = await response.json();
            setMensagem(`Notícia cadastrada com sucesso! ID: ${data.id}`);

            // Limpar os campos do formulário
            setTitulo('');
            setDescricao('');
            setLink('');
            setImagem('');
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='formulario-noticia'>
            <h1>Painel Administrativo - Cadastrar Notícia</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Imagem (URL):</label>
                    <input
                        type="url"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar Notícia'}
                </button>
            </form>
            {mensagem && <p className={`mensagem ${isLoading ? 'loading' : ''}`}>{mensagem}</p>}
        </div>
    );
};

export default CadastroNoticia;
