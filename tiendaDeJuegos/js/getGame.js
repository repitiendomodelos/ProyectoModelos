function getGame(gameName){
    user = JSON.parse(localStorage.getItem('user'));
    games = JSON.parse(localStorage.getItem('games'));
    for (let i = 0; i < games.length; i++) {
        if(gameName == games[i].name){
            for (let j = 0; j < user.games.length; j++) {
                if(i == user.games[j]) return;
            }
            user.games[user.games.length] = i;
        }
    }
    localStorage.setItem('user', JSON.stringify(user));
}