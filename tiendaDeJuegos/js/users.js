user = {
            user: 'JuanPepe',
            pass: 'pepe1028',
            email: 'pablito1028@gmail.com',
            id: '1',
            games: [1,2,4],
            max_score: 0,
            fav_game: 'ninguno',
            last_game: [1,2],

        }

localStorage.setItem('user', JSON.stringify(user));
createGames();
            console.log("correcto");
            setTimeout("ingresar()", 500);
           