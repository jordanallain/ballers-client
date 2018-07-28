const store = {}

const onGetPlayers = function () {
  fetch('http://localhost:4741', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(console.log)
    .catch(console.error)
}

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    const getPlayers = document.getElementById('get-data')
    getPlayers.addEventListener('click', onGetPlayers)
  }
}
