function startGame(id){
    game = JSON.parse(localStorage.getItem('games'))[id];
    user = JSON.parse(localStorage.getItem('user'));
    user.fav_game = game.name;
    localStorage.setItem('user', JSON.stringify(user));
    window.open('../'+game.name+'/index.html');
}