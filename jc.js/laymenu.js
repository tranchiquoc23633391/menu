const headerdiv = document.getElementById("header_menu"); 
headerdiv.innerHTML = `
<div class="row" style="border-bottom: 1px solid black;">
    <div class="col-12">
        <header>
            <ul class="nav justify-content-center" style="gap: 20px;">
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="index.html"  style="text-decoration: none; text-align: center;">
                            <img id="logomenu" src="../img/logo/logo.png" style="width: 87px; margin-top: 20px; margin-right: auto3;">
                            <style>
                                .logomenu {
                                    transition: transform 0.3s ease;
                                }

                                .logomenu:hover {
                                    transform: scale(1.2);
                                }
                            </style>
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/game.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">Nintendo</h5>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Subitem 1</a>
                            <a class="dropdown-item" href="#">Subitem 2</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/playstation-logotype.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">PlayStation</h5>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/computer-keyboard.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">Gaming Gear</h5>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/pokeball.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">Pokemon</h5>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/playing-cards.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">Trading Card</h5>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/backpack.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">LifeStyle</h5>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="d-flex flex-column align-items-center">
                        <a href="#" style="text-decoration: none; text-align: center;">
                            <img src="../img/icon/japan.png" style="width: 40px; margin-top: 20px;">
                            <h5 style="font-size: 15px; margin-top: 10px;">Model Kit</h5>
                        </a>
                    </div>
                </li>
                <ul class="d-flex justify-content-end" style="margin-top: 10px; gap: 20px;">
                    <li class="nav-item">
                        <div class="d-flex flex-column align-items-center">
                            <a href="#" style="text-decoration: none; text-align: center;">
                                <img src="../img/icon/user.png" style="width: 20px; margin-top: 20px;">
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="d-flex flex-column align-items-center">
                            <a href="#" style="text-decoration: none; text-align: center;">
                                <img src="../img/icon/search.png" style="width: 20px; margin-top: 20px;">
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="d-flex flex-column align-items-center">
                            <a href="#" style="text-decoration: none; text-align: center;">
                                <img src="../img/icon/bag.png" style="width: 20px; margin-top: 20px;">
                            </a>
                        </div>
                    </li>
                </ul>
            </ul>
        </header>
    </div>
</div>
`;

