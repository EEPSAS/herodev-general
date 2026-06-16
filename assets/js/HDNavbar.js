export class HDNavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` 
         <nav class="navbar position-fixed top-0 start-0 h-100 p-3"
        style="
            width: 280px;
            background: #103c46;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            box-shadow:
                8px 0 20px rgba(0, 0, 0, 0.20),
                15px 0 50px rgba(0, 0, 0, 0.12);
            border-right: 1px solid hwb(0 100% 0% / 0.25);
            z-index: 1000;
        ">

        <div class="container-fluid d-flex flex-column h-100">

            <a href="#"
                class="navbar-brand text-white fw-bold fs-3 text-center w-100 mb-4">
                HeroDev
            </a>

            <ul class="nav nav-pills flex-column w-100">

                <li class="nav-item mb-2">
                    <a href="index.html"
                        class="nav-link text-white fw-semibold rounded-3"
                        style="
                           
                        ">
                        Home
                    </a>
                </li>

                <li class="nav-item mb-2">
                    <a href="sobrenos.html"
                        class="nav-link text-white fw-semibold rounded-3">
                        Sobre Nós
                    </a>
                </li>

                <li class="nav-item mb-2">
                    <a href="midia.html"
                        class="nav-link text-white fw-semibold rounded-3">
                        Entre em Contato
                    </a>
                </li>

            </ul>

            <div class="mt-auto text-center">
                <small class="text-white opacity-75">
                    Desenvolvido por HeroDev
                </small>
            </div>

        </div>
    </nav>`
    }
}