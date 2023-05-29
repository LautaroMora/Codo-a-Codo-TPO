// Carga las noticias usando la API NewsAPI
const apiKey = 'ef6b32bce306418bac20fe8030d86e79';
fetch(`https://newsapi.org/v2/top-headlines?country=es&apiKey=${apiKey}`)
.then(response => response.json())
.then(data => {
  const listaNoticias = document.getElementById('lista-noticias');
  const noticias = data.articles;

  noticias.forEach(noticia => {
    const listItem = document.createElement('li');
    const enlace = document.createElement('a');
    enlace.href = noticia.url;
    enlace.textContent = noticia.title;

    listItem.appendChild(enlace);
    listaNoticias.appendChild(listItem);
  });
})
.catch(error => {
  console.log('Error al cargar las noticias:', error);
});