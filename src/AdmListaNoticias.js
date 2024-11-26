// ListaNoticias.js
import React, { useEffect, useState } from 'react';
import './ListaNoticias.css';

const AdmListaNoticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        fetchNoticias();
    }, []);

    const fetchNoticias = async () => {
        try {
            const response = await fetch('http://localhost:8080/noticias');
            if (!response.ok) {
                throw new Error('Erro ao buscar notícias');
            }
            const data = await response.json();
            setNoticias(data);
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    const excluirNoticia = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
            try {
                const response = await fetch(`http://localhost:8080/noticias/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Erro ao excluir a notícia');
                }
                setMensagem('Notícia excluída com sucesso!');
                fetchNoticias(); // Atualizar a lista de notícias
            } catch (error) {
                setMensagem(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <h1>Paine Administrativo - Lista de Notícias</h1>
            {mensagem && <p>{mensagem}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {noticias.map((noticia) => (
                        <tr key={noticia.id}>
                            <td>{noticia.titulo}</td>
                            <td>{noticia.descricao}</td>
                            <td>
                                <button onClick={() => alert(`Editar notícia: ${noticia.id}`)}>Editar</button>
                                <button onClick={() => excluirNoticia(noticia.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdmListaNoticias;
