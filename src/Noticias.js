import React, { useEffect, useState } from 'react'; 

import ListNoticia from './ListarNoticias'; 

import './Main.css'; 

 

 

function Noticias(){ 

/*    const newsData = [ 

        { 

            id: '1', 

            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025', 

            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker..', 

            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola', 

            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo 

          }, 

          { 

            id: '2', 

            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025', 

            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 

            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola', 

            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo 

          }, 

          { 

            id: '3', 

            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025', 

            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 

            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola', 

            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo 

          }, 

          { 

            id: '4', 

            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025', 

            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 

            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola', 

            imagem: 'https://image1.mobiauto.com.br/images/api/images/v1.0/409032180/transform/fl_progressive,f_webp,q_70,w_600', // URL de exemplo 

          }, 

      ];*/ 

 

 

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

 

 

    return( 

        <div className='Main'> 

            <div className="app"> 

                <h1>Meus Trabalhos</h1> 

                <ListNoticia news={noticias} /> 

            </div> 

        </div> 

    ) 

 

} 

export default Noticias; 

 

/* 

// DetalheNoticia.js 

import React, { useEffect, useState } from 'react'; 

import { useParams } from 'react-router-dom'; 

 

const DetalheNoticia = () => { 

    const { id } = useParams(); 

    const [noticia, setNoticia] = useState(null); 

    const [loading, setLoading] = useState(true); 

    const [error, setError] = useState(null); 

 

    useEffect(() => { 

        const fetchNoticia = async () => { 

            try { 

                const response = await fetch(`http://seu-api.com/noticias/${id}`); // Substitua pela sua URL de API 

                if (!response.ok) { 

                    throw new Error('Erro ao buscar a notícia'); 

                } 

                const data = await response.json(); 

                setNoticia(data); 

            } catch (err) { 

                setError(err.message); 

            } finally { 

                setLoading(false); 

            } 

        }; 

 

        fetchNoticia(); 

    }, [id]); 

 

    if (loading) { 

        return <p>Carregando...</p>; 

    } 

 

    if (error) { 

        return <p>Erro: {error}</p>; 

    } 

 

    return ( 

        <div> 

            <h1>Detalhes da Notícia {id}</h1> 

            {noticia ? ( 

                <div> 

                    <h2>{noticia.titulo}</h2> 

                    <p>{noticia.conteudo}</p> 

                </div> 

            ) : ( 

                <p>Notícia não encontrada.</p> 

            )} 

        </div> 

    ); 

}; 

 

export default DetalheNoticia; 

 

*/ 