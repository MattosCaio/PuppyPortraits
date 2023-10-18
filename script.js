const generateButton = document.getElementById('generate-button')
const dogImage = document.getElementById('dog-img')

generateButton.addEventListener('click', () => {
  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: {
      'x-api-key':
        'live_JN7HeScjm5TDsOhihsahkVe15q3DRGmSe9AKm2B1HqiDqAdeiRn6CMrICm9sTUcT'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        dogImage.src = data[0].url
      } else {
        alert(
          'Não foi possível carregar a imagem do cachorro. Tente novamente mais tarde.'
        )
      }
    })
    .catch(error => {
      console.error('Erro ao buscar a imagem do cachorro:', error)
      alert(
        'Ocorreu um erro. Tente novamente mais tarde. Detalhes do erro: ' +
          error
      )
    })
})
