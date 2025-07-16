# Nome do Aplicativo  
`Podcast Manage`  

---

# Description  
`O projeto objetiva a classificação dos episódios do Flow Podcast através de uma API REST para classificar e ordenar cada episódio com sua respectiva categoria. O projeto foi desenvolvido sem nenhum Framework`  

---

# Domínio  
`Podcasts feitos em vídeo`  

---

### Features  
- `Listar os episódios de podcast`  
- `Filtrar os episódios por categoria`  
-  Categorias: `[Saúde, Fitness, Mentalidade, Humor, Esporte]`  

---

## Como  
`GET`: Retorna a lista de episódios  

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["bodybuilder", "saúde"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
        "link": "https://www.youtube.com/",
        "categories": ["Esporte", "saúde"]
    }
]
```

---

## Tecnologias utilizadas  
`Node.js`  
`JavaScript`  
`Express.js`  
`Cors`  
`Nodemon`  

---

## Como rodar o projeto  

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/podcast-manage.git
cd podcast-manage

# Instale as dependências
npm install

# Inicie o servidor
npm start
# ou em modo desenvolvimento
npm run dev
```

Acesse em:  
```
http://localhost:3333/episodes
```

---

## Futuras melhorias  
- [ ] `Implementar paginação`  
- [ ] `Adicionar busca por nome do episódio`  
- [ ] `Integração com banco de dados`  
- [ ] `Interface web para visualização`  

---

## Licença  
`Este projeto é de uso livre para estudos.`  
