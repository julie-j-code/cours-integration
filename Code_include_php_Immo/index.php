<?php
// Le haut de l'interface est ajouté avant le contenu
include 'header.php'; ?>

<main class="container-fluid m-0 p-0">

    <!-- section de recherche -->

    <section id="search">
        <div class="container mx-auto mt-5">
            <h1 class="p-5 my-5 text-center">
                Bienvenue chez vous
            </h1>

            <form class="form row justify-content-around align-items-center p-4 mx-auto my-5">

                <select name="search[transaction]" id="" class=" col-md-2 form-select">
                    <option value="location">location</option>
                    <option value="vente">vente</option>
                    <option value="location">saisonnier</option>
                </select>

                <select name="search[bien]" class="col-sm-6 col-md-2 form-select">
                    <option value="appartement">appartement</option>
                    <option value="maison" selected>maison</option>
                    <option value="terrain">terrain</option>
                </select>

                <input type="text" class="col-sm-6 col-md-2 pt-2 form-control" name="search[ville]" id="ville" cols="30" rows="1" placeholder="ville"></input>

                <input type="text" class="rounded col-sm-6 col-md-2 pt-2 form-control" name="search[prix]" id="prix" cols="30" rows="1" placeholder="prix"></input>
                <button class="btn col-md-2 text-white py-0 rounded perso">Rechercher</button>

            </form>

        </div>

    </section>

    <!-- fin recherche -->

    <section class="container row justify-content-around p-5 my-5 mx-auto">
        <div class="col-md-3 text-center">
            <img src="./img/picto-acheter.png" alt="">
            <h3>Acheter un bien</h3>
        </div>
        <div class="col-md-3 text-center"> <img src="./img/picto-vendre.png" alt="">
            <h3>Vendre un bien</h3>
        </div>
        <div class="col-md-3 text-center"> <img src="./img/picto-louer.png" alt="">
            <h3>Louer un bien</h3>
        </div>
        <div class="col-md-3 text-center"> <img src="./img/picto-deposer.png" alt="">
            <h3>Proposer un bien</h3>
        </div>
    </section>


    <!-- carousel slide with cards -->

    <section class="py-5  bg-light">
        <div class="container">


            <!-- carousel starting point -->
            <div id="demo" class="carousel slide mx-5 position-relative" data-bs-ride="carousel">

                <h2 class="text-center">
                    Nos dernières <strong>annonces</strong>
                </h2>
                <div class="carousel-inner mx-auto">

                    <!-- carousel set 1 -->
                    <div class="carousel-item active text-center">
                        <!-- 3 columns set 1 -->
                        <div class="row justify-content-around gx-3">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="/img/slide1.jpg">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="./img/slide2.jpg">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="./img/slide3.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- carousel set 2 (ici, les mêmes images) -->
                    <div class="carousel-item">
                        <!-- 3 columns set 2 -->
                        <div class="row mx-auto px-3">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="./img/slide1.jpg">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="./img/slide2.jpg">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="" src="./img/slide3.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end carousel set 2 -->
                </div>

                <!-- Left and right controls/icons -->
                <button class="carousel-control-prev position-absolute" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark"></span>
                </button>
                <button class="carousel-control-next position-absolute" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark"></span>
                </button>
                <!-- end carousel -->
            </div>
        </div>
    </section>

    <section class="bg-dark text-center text-white mx-auto p-5">
        <div class="container">
            <h2>Notre
                <strong>Agence</strong>
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veritatis repudiandae temporibus,
                cum,
                nostrum consectetur suscipit repellat distinctio corporis atque, autem itaque ut recusandae enim
                laudantium
                provident! Voluptatum, quas beatae!</p>
            <button class="btn perso px-5 mt-5">En savoir +</button>
        </div>
    </section>

    <section class="p-5 bg-light">

        <div class="container mx-auto row justify-content-around g-3">
            <div class="col-md-6">
                <div id="location" class="position-relative">
                    <div class="bg-dark bg-opacity-50 text-white position-absolute h-100 text-center d-flex flex-column justify-content-center px-2">
                        <h2>Location</h2>
                        <p><a href="" class="text-white">Voir les annonces</a>
                        </p>

                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div id="vente" class="position-relative">
                    <div class="bg-dark bg-opacity-50 text-white position-absolute h-100 text-center d-flex flex-column justify-content-center px-2">
                        <h2>
                            Vente
                        </h2>
                        <p><a href="" class="text-white">Voir les annonces</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>

</main>

<?php
// Le bas de l'interface est ajouté après le contenu
include 'footer.php'; ?>