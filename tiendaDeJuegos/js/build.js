function init(section) {

    // construir Navbar
    document.getElementById("body").innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark justify-content-center" style="background-color: #A3C9F5; max-height: 70px;">
        <a class="navbar-brand" > <img src="Logo/Logo.png" alt="" height="70rem"> </a>
       
          
            
                <li class="nav-item `+ (section == "Catalogo" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Catalogo" ? "#" : "tienda.html") + `">Catalogo` + (section == "Catalogo" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
                <li class="nav-item `+ (section == "Mis juegos" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Mis juegos" ? "#" : "Misjuegos.html") + `">Mis juegos` + (section == "Mis juegos" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
                <li class="nav-item `+ (section == "Perfil" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Perfil"  ? "#" : "perfil.html") + `">Perfil ` + (section == "Perfil" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
            

        
    </nav>`;

    // construir contenido

    switch (section) {
        case "Tienda":
            initStore();
            break;

        case "Biblioteca":
            initLibrary();
            break;

        case "Perfil":
            initProfile();
            break;

        case "Juego":
            initGame();
            break;

        default:
            initStore();
    }

    // construir footer
    document.getElementById("body").innerHTML += `
    <!-- Footer -->
    <footer class="text-muted" id="footer">
        <div class="m-5 pb-5 bg-info">
 <div class="m-5 pb-5 bg-warning">
 <div class="m-5 pb-5 bg-success">
        </div>
    </footer>`;
}

function initStore() {
    document.getElementById("body").innerHTML += `<div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Contenido -->
    <div class="container-fluid my-2 p-md-5" id="contenido">

       <!-- Catalogo -->
        <div class="container my5">
            <div class="container m-1">
               
            </div>
            <div class="album py-2">
                <div class="container">
                    <div class="row" id="catalog"></div>
                </div>
            </div>
        </div>

    </div>`;


    // construir catalogo
    games = JSON.parse(localStorage.getItem('games'));
    catalog = "";
    i = 0;
    games.forEach(game => {
        catalog += `
        <div class="col-md-6 py-5">
            <div class="card" style="height:310px">
               <img class="card-img-top" src="../`+game.name+`/Capturas/255x255.png" alt="Card image">
                
                <div class="card-img-overlay">
                    <div class="title display-4"><div class="per">`+game.name+`</div></div>
                    <p class="card-text">`+game.description+`</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <a href="juego.html"><button onclick="setGame(`+i+`)" class="btn btn-primary">Comprar</button></a>
                    </div>
                </div>
            </div>
        </div>`;
        i++;
    });
    document.getElementById("catalog").innerHTML = catalog;
}

function initLibrary() {
    user = JSON.parse(localStorage.getItem('user'));

    document.getElementById("body").innerHTML += `<div class="container my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    

       

       
        <div class="container my-5">
            <div class="container m-1">
            </div>
            <div class="album py-2">
                <div class="container" id="library"></div>
            </div>
        </div>`;

   

    // Construir biblioteca
    library = "";

    user.games.forEach(gameID => {
        game = JSON.parse(localStorage.getItem('games'))[gameID];
        library += `

 <div class="col-sm-4 py-2">
            <div class="card" >
               <img class="card-img-top" src="../`+game.name+`/capturas/100x100.png" alt="Card image">
                
                <div class="card-img-overlay">
                    <div class="title display-4"><div class="per">`+game.name+`</div></div>
                    <div class="d-flex justify-content-between align-items-end">
                        <button onclick="startGame(`+gameID+`)" class="btn btn-primary">Abrir</button>
                    </div>
                </div>
            </div>

        </div>`;

       
    });
    document.getElementById("library").innerHTML = library;
}

function initProfile(){
    user = JSON.parse(localStorage.getItem('user'));
    document.getElementById("body").innerHTML += `    
    <div class="container my-2 p-md-5" id="contenido">
     
       
            <div class="card-body p-md-5">
                
                <div class="card-text px-md-5">
                    
                        <div class="col px-md-5">
                             <div class="per">Tus datos</div>
                            <div class="row justify-content-between"> <div class="per">Usuario:</div>  <p> `+user.user+` </p> </div>
                            <div class="row justify-content-between"> <div class="per">E-mail:  </div><p>`+user.email+` </p></div>
                          <div class="row justify-content-between"><div class="per"> Juegos en Propiedad:  </div><p>`+user.games.length+`</p> </div>
                        </div>
                       
                
            </div>
        </div>
        
    </div>`;
}

function initGame() {
    game = JSON.parse(localStorage.getItem('game'));
    document.getElementById("body").innerHTML += `<div class="container p-0" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `


   


 

    <!-- Informacion -->
    <div class="container my-5">
        <div class="perT">`+game.name+`</div>
        <p div class="text-justify">
            `+game.description+`
        </div></p>
        <div class="precio">
            $ `+game.price+` COL
        </div>
        <div class="my-5">

        </div>


<!-- Sugerencias -->
        <div class="container my-5">
            
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="indicators"></ol>
                <div class="carousel-inner" id="suggest"></div>
            </div>
        </div>
<div class="row">
            <div class="col"><a href="tienda.html" class="btn btn-primary">Volver</a></div>
            <div class="col"> <a href="MisJuegos.html"><button onclick="getGame('`+game.name+`')" class="btn btn-primary">Comprar</button></a></div>
 </div> 

        <!-- Acerca -->
        <div class="my-5">
            <div class="perN">Detalles:</div>
            <div class="row">
                <div class="col"> <div class="per">Desarrollador: </div> <br> <p>`+game.developer+`</p> </div>
                <div class="col"> <div class="per">Etiquetas: </div><br> <p>`+game.tags+` </p></div>
                <div class="col"> <div class="per">Fecha de Lanzamiento: </div><br> <p>`+game.date+` </p></div>
            </div>
        </div>  

     

        <!-- Requisitos Mínimos -->
        <div class="my-5">
           <div class="perN">Requerimientos:</div>
            <div class="col">
                
                
 		
                    <div class="row justify-content-between"> <div class="per">Sistema </div> <p>`+game.OS_min+` </p></div>
                    <div class="row justify-content-between"> <div class="per">RAM: </div> <p>`+game.ram_min+` usables </p></div>
                    <div class="row justify-content-between"> <div class="per">Procesador: </div> <p>`+game.pro_min+` o equivalente</p> </div>
                    <div class="row justify-content-between"> <div class="per">Gráficos: </div><p>`+game.gra_min+` o equivalente </p></div>
                </div>
            </div>
       
    </div>`;

 
    suggest = "";
    indicators = "";
    for (let i = 0; i < 3; i++) {
        indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="` + i + `" ` + (i == 0 ? 'class="active"' : "") + `></li>`
        suggest += `
        <div class="carousel-item `+ (i == 0 ? "active" : "") + `">
            <div class="row vh-25">
                <div class="col">
                    <img src="../`+game.name+`/capturas/1600x400_`+(i+1)+`.png" class="d-block w-100" alt="">
                </div>
                
            </div>
        </div>`;
    }
    document.getElementById("suggest").innerHTML = suggest;
    document.getElementById("indicators").innerHTML = indicators;

   

    ratings = "";
    for (let i = 0; i < 3; i++) {
        ratings += `
        <div class="col"> 
            <div class="card bg-dark">
                <div class="card-body">
                    <h5 class="card-title">Nombre</h5>
                    <h6 class="card-subtitle mb-2 text-muted">01 ene 2020</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4>10/10</h4>
                </div>
            </div> 
        </div>`;
    }
    document.getElementById("ratings").innerHTML = ratings;
}

function setGame(i){
    localStorage.setItem('game',JSON.stringify(JSON.parse(localStorage.getItem('games'))[i]));
}