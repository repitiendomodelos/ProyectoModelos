function Game(name, description, price, developer, tags, date, OSmin, pro_min, ram_min, gra_min, sto_min, OSrec, pro_rec, ram_rec, gra_rec, sto_rec) {
    this.name = name;
    this.description = description;
    this.price = price;

    this.developer = developer;
    this.tags = tags;
    this.date = date;

    this.OSmin;
    this.pro_min;
    this.ram_min;
    this.gra_min;
    this.sto_min;

    this.OSrec;
    this.pro_rec;
    this.ram_rec;
    this.gra_rec;
    this.sto_rec;
}

function createGames() {

    var games = [
        {
            name: 'Mario en Marte',
            description: 'Mario se encuentra atrapado en el planeta rojo y debe sobrevivir el mayor tiempo posible, en el que debe esquivar una serie de rocas alienigenas para no fallar en el intento, ayudalo a sobrevivir con la ayuda de su super salto y moviendote por toda la pantalla',
            price: 11000,
            developer: 'Alejandro Ocampo',
            tags: 'plataformas, aventura, lateral',
            date: '21/03/2020',
            OS_min: 'Windows 7',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '1.95 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i3 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1080Ti',
            sto_rec: '50 MB'
        },

        {
            name: 'Flappy Mario',
            description: 'Una version del famoso Flappy bird pero ahora el portagonista es nuestro fabuloso Mario Bros, ¿podras con el reto?',
            price: 5500,
            developer: 'Juan Pablo Parra',
            tags: 'plataformas, lateral',
            date: '23/03/2020',
            OS_min: 'Windows 10',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '2 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '2.5 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i5 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '2 GB',
            gra_rec: 'GeForce GTX 1070',
            sto_rec: '45 MB'
        },
        {
            name: 'Mario El Esquivador',
            description: 'Mario tiene que escapar de las garras de su villano y solo cuenta con la habilidad de salto de su fiel compañero yoshi, esquiva los cañones como si tu vida dependiera de eso',
            price: 8900,
            developer: 'Juan Pablo Parra',
            tags: 'plataformas, lateral',
            date: '23/03/2020',
            OS_min: 'Windows 10',
            pro_min: 'Intel Core5 Duo E8400, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 8600 GT o AMD HD 3770 512MB',
            sto_min: '3.4 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i7 Duo U8500, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1060',
            sto_rec: '68 MB'
        },
        
        {
            name: 'Castle Shoot 2D',
            description: 'Elegir las armas y derriba los objetos que atacan la base, cuida bien tus disparos ya que te daran el paso al siguiente nivel.',
            price: 49900,
            developer: 'Oscar Gutierrez',
            tags: 'Shooter, FPS',
            date: '24/03/2020',
            OS_min: 'Windows 7 64 bits',
            pro_min: 'Intel Pentium 1.7Ghz',
            ram_min: '2 GB',
            gra_min: 'HD graphics 2000 ',
            sto_min: '100 MB',
            OS_rec: 'Windows 10 64 bits',
            pro_rec: 'Intel core i5 2.7Ghz',
            ram_rec: '4 GB',
            gra_rec: 'HD graphics 570 ',
            sto_rec: '500 MB'
        },
{
            name: 'Viaje Espacial',
            description: 'Un misterioso platillo volador esta tratando de viajar por el espacio exterior, en el que debe esquivar una serie de rocas espaciales para no fallar en el intento, ayudalo a sobrevivir con la ayuda de su super nave intergalactica moviendote por toda la pantalla',
            price: 7000,
            developer: 'Alejandro Ocampo',
            tags: 'plataformas, espacio exterior',
            date: '22/03/2020',
            OS_min: 'Windows 7',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '1.95 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i3 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1080Ti',
            sto_rec: '50 MB'
        },
        
        {
            name: 'Space Shoot 2D',
            description: 'Elegir las armas y derriba los objetos que atacan la base, cuida bien tus disparos ya que te daran el paso al siguiente nivel.',
            price: 29900,
            developer: 'Oscar Gutierrez',
            tags: 'Shooter, FPS, accion, espacio exterior',
            date: '24/03/2020',
            OS_min: 'Windows 7 64 bits',
            pro_min: 'Intel Pentium 1.7Ghz',
            ram_min: '2 GB',
            gra_min: 'HD graphics 2000 ',
            sto_min: '100 MB',
            OS_rec: 'Windows 10 64 bits',
            pro_rec: 'Intel core i5 2.7Ghz',
            ram_rec: '4 GB',
            gra_rec: 'HD graphics 570 ',
            sto_rec: '500 MB'
        },
{
            name: 'Bart el Aviador',
            description: 'Bart de Los Simpson aprendio a usar una avioneta, pero esta es muy peligrosa para usar por la ciudad, hay demasiados pajaros en springfield que debe evitar para no estrellarse, ayudalo a sobrevivir con la ayuda de sus habilidades como piloto moviendote por toda la pantalla',
            price: 16000,
            developer: 'Alejandro Ocampo',
            tags: 'plataformas, accion',
            date: '22/03/2020',
            OS_min: 'Windows 7',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '1.95 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i3 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1080Ti',
            sto_rec: '50 MB'
        },
{
            name: 'AlienShip Shoot 2D',
            description: 'Elegir las armas y derriba los objetos que atacan la base, cuida bien tus disparos ya que te daran el paso al siguiente nivel.',
            price: 79900,
            developer: 'Oscar Gutierrez',
            tags: 'Shooter, FPS, accion',
            date: '24/03/2020',
            OS_min: 'Windows 7 64 bits',
            pro_min: 'Intel Pentium 1.7Ghz',
            ram_min: '2 GB',
            gra_min: 'HD graphics 2000 ',
            sto_min: '100 MB',
            OS_rec: 'Windows 10 64 bits',
            pro_rec: 'Intel core i5 2.7Ghz',
            ram_rec: '4 GB',
            gra_rec: 'HD graphics 570 ',
            sto_rec: '500 MB'
        },
        

    ];

    localStorage.setItem('games', JSON.stringify(games));
    console.log("created")
}
