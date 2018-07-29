const store = {}

const displayPlayers = function (players) {
  store.players = players.cumulativeplayerstats.playerstatsentry
  console.log(store.players)
  store.players.forEach((playerObj) => {
    const playerDiv = document.createElement('div')
    playerDiv.classList.add('player-div')
    playerDiv.innerHTML = `${playerObj.player.FirstName} ${playerObj.player.LastName}`
    document.getElementById('container').appendChild(playerDiv)
  })
}

const onGetPlayers = function () {
  fetch('http://localhost:4741/players')
    .then((res) => {
      return res.json()
    })
    .then(displayPlayers)
    .catch(console.error)
}

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    const getPlayers = document.getElementById('get-data')
    getPlayers.addEventListener('click', onGetPlayers)
  }
}
