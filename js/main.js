Vue.component('header-vue',{
    props: ['linkHome', 'link1', 'link2', 'link3', 'logo'],
    template: `
    <header>
        <div class='container-logo'>
            <a :href="linkHome">
                <img :src="logo" alt="">
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

var app = new Vue({
    el: '#app',
    data: {
        links : {
            home: 'home.html',
            explorar: '',
            cadastro: '',
            login: 'auth.html',
            suporte: '',
            sobre:'sobre.html',
            novarifa:''
        },

        assets: {
            global:{
                logoheader: '../assets/logo.png',
            },            
            home: {
                img1 : '../assets/bilhetes.png',
            },
            sobre: {
                img1 : '../assets/pessoa1-edt.png',
                img2 : '../assets/trevos.png',
                img3 : '../assets/pessoa2-edt.png',
            }
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
            },

            sobre: {
                titulo1 : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                titulo2 : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                titulo3 : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                texto1 :`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Animi alias officiis earum, inventore repellat repudiandae 
                iure distinctio nobis deleniti asperiores, dicta saepe 
                accusantium laudantium quis dolore aliquam exercitationem 
                obcaecati sed!`,
                texto2 :`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Animi alias officiis earum, inventore repellat repudiandae 
                iure distinctio nobis deleniti asperiores, dicta saepe 
                accusantium laudantium quis dolore aliquam exercitationem 
                obcaecati sed!`,
                texto3 :`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Animi alias officiis earum, inventore repellat repudiandae 
                iure distinctio nobis deleniti asperiores, dicta saepe 
                accusantium laudantium quis dolore aliquam exercitationem 
                obcaecati sed!`
            }
        }
    }
});
