Vue.component('header-vue',{
    props: ['link1', 'link2', 'link3'],
    template: `
    <header>
        <div class='container-logo'>
            <a href='index.html'>
                <img src="assets/logo.png" alt="">
            </a>
        </div>
        <div class="buttons">
            <a :href="link1" class='terc-btn'>Explorar</a>
            <div class="login-buttons">
                <a :href="link2" class="secundary-btn">Login</a>
                <a :href="link3" class="primary-btn">Cadastre-se</a>
            </div>   
        </div>
    </header>
    `
});

Vue.component('footer-vue', {
    props: [ 'link' ],
    template:
    `<footer>
        <a :href='link' class="terc-btn">Suporte</a>
        <p>rifando.com @ 2020 - Todos os direitos reservados</p>
    </footer>`
});

Vue.component('main-home', {
    props: ['titulo', 'texto', 'link1', 'link2'],
    template:`
    <main>
        <div id="container-home">
            <img src="assets/bilhetes.png">
            <div id='container-content-home'>
                <div id='triangulo'></div>
                <div id='retangulo'>
                    <h1>{{ titulo }}</h1>
                    <p>{{ texto }}</p>
                    <div class='buttons-home'>
                        <a :href='link1' class='secundary-btn'>SAIBA MAIS</a>
                        <a :href='link2' class='primary-btn'>INICIAR RIFA</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        links : {
            explorar: '',
            cadastro: '',
            login: '',
            suporte: '',
            sobre:'',
            novarifa:''
        },

        content : {
            home: {
                titulo : 'O melhor local para realizar sua rifa online!',
                texto : `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                fringilla erat at ultrices feugiat. Suspendisse potenti. Cras quis
                 purus non ligula fermentum malesuada ut vel metus. Curabitur faucibus 
                 diam nec ultrices fringilla. Praesent feugiat semper tincidunt. Nam 
                 tempor elit erat, sed pharetra magna fringilla non. Etiam tellus risus, 
                 fermentum sit amet vulputate luctus, euismod non ante.`,
            }
        }
    }
});