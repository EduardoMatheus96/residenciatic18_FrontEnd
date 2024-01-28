document.addEventListener('DOMContentLoaded', function() {
    // Função para obter e exibir a imagem do cachorro
    function getDogImage() {
        const requestOptions = {
            method: 'GET',
        };

        fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
            .then(response => response.json())
            .then(data => {
                const imagensDiv = document.querySelector('.imagens');
                const dogImage = new Image();
                dogImage.src = data[0].url;
                imagensDiv.appendChild(dogImage);
            })
            .catch(error => console.log('error', error));
    }

    // Chama a função ao carregar a página
    getDogImage();
});
