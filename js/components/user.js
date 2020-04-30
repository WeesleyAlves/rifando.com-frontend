Vue.component('menu-lateral',{

    template:`
    <div class="menu-lateral">
            <ul class="">
                <p>+ Minhas Rifas</p> 
                <div class="options">
                    <li><a href='rifas.html'>Editar</a></li>
                    <li>Excluir</li>
                </div>
                
            </ul>
            <ul class="">
                <p>+ Meus bilhetes</p>
                <div class="options">
                    <li><a href='bilhetes.html'>Visualizar</a></li>
                    <li>Excluir</li>
                </div>
            </ul>
            <ul class="">
                <p>+ Meus Dados</p> 
                <div class="options">
                    <li>Editar</li>
                    <li>Excluir</li>
                </div>
            </ul>
            <ul class="">
                <p>Logout</p> 
            </ul>
        </div>`,
});