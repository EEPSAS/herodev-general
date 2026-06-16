export class HDFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` 
          <footer style="
        margin-left: 280px;
        background: linear-gradient(to right, #103c46, #1F788C);
        color: #DEE3DE;
        border-top: 2px solid #9FB7B0;
    ">

        <div class="container py-4">

            <div class="row g-4">

                <div class="col-lg-6">
                    <h4 class="fw-bold">HeroDev</h4>
                    <p class="mb-0">
                        Plataforma criada para registrar atividades semanais,
                        acompanhar projetos e compartilhar a evolução da equipe.
                    </p>
                </div>

                <div class="col-lg-3">
                    <h6 class="fw-semibold mb-3">Navegação</h6>

                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-decoration-none text-light">Home</a></li>
                        <li><a href="sobrenos.html" class="text-decoration-none text-light">Sobre Nós</a></li>
                        <li><a href="midia.html" class="text-decoration-none text-light">Entre em Contato</a></li>
                    </ul>
                </div>

                <div class="col-lg-3">
                    <h6 class="fw-semibold mb-3">Equipe</h6>

                    <p class="mb-1">Yasmin Teixeira</p>
                    <p class="mb-1">William</p>
                    <p class="mb-1">Rhaynner</p>
                    <p class="mb-0">Davi</p>
                </div>

            </div>

            <hr class="my-4" style="border-color: rgba(255,255,255,0.2);">

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <small class="text-light opacity-75">
                    © 2026 HeroDev • Todos os direitos reservados.
                </small>

                <small class="text-light opacity-75 mt-2 mt-md-0">
                    Desenvolvido pela equipe HeroDev
                </small>
            </div>

        </div>

    </footer>`
    }
}