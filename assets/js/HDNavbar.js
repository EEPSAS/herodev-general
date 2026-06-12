export class HDNavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` 
        <section id="navbar">
            <nav class="navbar sticky-top" style="background-color: #1F788C;">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" style="color: #DEE3DE;" href="#">
                        HeroDev
                    </a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" style="background-color: #DEE3DE;" tabindex="-1"
                        id="offcanvasNavbar">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" style="color: #1F788C;">
                                Menu
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas">
                            </button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" style="color: #1F788C;" href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style="color: #1F788C;" href="sobrenos.html">
                                        Sobre nós
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style="color: #1F788C;" href="midia.html">
                                        Redes Sociais
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>`
    }
}