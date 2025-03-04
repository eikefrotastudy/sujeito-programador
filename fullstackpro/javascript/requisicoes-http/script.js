// https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector('#app');

let posts = [];

function nutriApp(){
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((response) => response.json())
    .then((json) => {
        posts = json;
        posts.map((item) => {
            // Criando elementos
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            // Colocando o titulo no elemento <li>
            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            // Colocando a imagem no elemento <li>
            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            // Colocando a descrição no elemento <li>
            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            // Adicionando o elemento <li> na lista <ul>
            listElement.appendChild(liElement);
        })
    })
    .catch((error) => {
        console.log('Erro na requisição');
    });
}

nutriApp();