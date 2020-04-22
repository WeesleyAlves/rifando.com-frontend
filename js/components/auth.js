Vue.component('buttons-container-form', {
    template:`
    <div class="container-buttons">
        <a v-bind:id='btn1' @click='alternar' >Login</a>
        <a v-bind:id='btn2' @click='alternar'>Cadastro</a>
    </div>
    `,
    data: function () {
        return{
            btn1: '',
            btn2: 'desativado'
        }
    },
    methods: {
        alternar: function () {
            if(this.btn2=='desativado'){
                this.btn1='desativado';
                this.$parent.login = false,

                this.btn2='';
                this.$parent.cadastro = true;

            }else{
                this.btn1='';
                this.$parent.login = true,

                this.btn2='desativado';
                this.$parent.cadastro = false;
            }
        }
    }
});

Vue.component('form-login', {
    props: ['loginVisivel'],
    template:`
    <form v-if='loginVisivel' id='form-login' @submit.prevent='logar' method='post'>
        <loader v-if='loader'></loader>
        <label for="user">Usuario</label><input v-model='user' placeholder="Usuario" name='user' type="text">
        <label for="pass">Senha</label><input v-model='password' placeholder="Senha" name='pass' type="password">
        <button class="primary-btn" type="submit">LOGAR</button>
        <button class='terc-btn'>Esqueceu a senha?</button>
    </form>
    `,
    data: function() {
        return {
            user :'',
            password:'',
            loader: false,
        }
    },
    methods: {

        logar: function() {
            
            this.loader = true;

            data = {
                'usuario': this.user,
                'senha':this.password
            };

            axios
                .post('https://rifando-api.herokuapp.com/login', JSON.stringify(data))
                .then(response=>{

                    alert('Logado! Redirecionando...');
                    this.loader=false;
                    localStorage.setItem('rifandoToken', JSON.stringify(response.data.Authorization));

                })
                .catch(error=>{
                    this.loader=false;
                    console.log(error);
                    alert('Usuario ou senha incorretos');
                });
        }
    },

});

Vue.component('form-cadastro',{
    props: ['cadastroVisivel'],
    template:`
    <form v-if='cadastroVisivel' id='form-cadastro' @submit.prevent='filtro2'>
        <loader v-if='loader'></loader>
        <div :class='part1'>
        <label for=""></label><input v-model='usuario' placeholder='Usuario' type="text">
        <label for=""></label><input v-model='senha' placeholder='Senha' type="password">
        <label for=""></label><input v-model='confirmSenha' placeholder='Repita a senha' type="password">
        <button class='primary-btn' @click='filtro1'>Proximo</button>
        </div>
        <div :class='part2'>
        <button class='terc-btn' @click='voltar'>Voltar</button>
        <input v-model='email' placeholder='E-mail' type='text'>
        <input v-model='confirmEmail' placeholder='Confirme o e-mail' type='text'>
        <input v-model='telefone' placeholder='Telefone' type='text'>
        <input v-model='endereco' placeholder='Endereço' type='text'>
        <input v-model='cpf' placeholder='CPF' type='text'>
        <button class='primary-btn' type='submit'>Finalizar</button>
        
        </div>
    </form>
    `,
    data: function () {
        return {
            part1: '',
            part2: 'oculto',
            loader: false,

            usuario:'',
            senha:'',
            confirmSenha:'',
            email:'',
            confirmEmail:'',
            telefone:'',
            endereco:'',
            cpf:'',
            confirm1: false,
            confirm2: false,
        }
    },
    methods: {
        voltar: function() {
            this.part1 = '';
            this.part2 = 'oculto';
        },
        filtro1: function() {
            var error = false;
            
            if(this.usuario.length <= 3){
                error = 'O seu nome de usuario deve ter no minimo 4 caracteres';
            }else if(this.senha.length <= 4){
                error = 'Sua senha deve ter no minimo 5 caracteres';
            }else if(this.senha != this.confirmSenha){
                error = 'Sua verificação de senha deve ser igual a sua senha';
            }
            
            else{
                this.part1 = 'oculto';
                this.part2 = '';
                this.confirm1 = true;
            }

            if(error != false){
                alert(error);
            }

        },

        filtro2: function() {
            var error = false;
            var emailValido = false;

            if(this.email.length != ''){
                var email = this.email;
                var usuario = email.substring(0, email.indexOf("@"));
                var dominio = email.substring(email.indexOf("@")+ 1, email.length);

                if ((usuario.length >=1) &&
                    (dominio.length >=3) && 
                    (usuario.search("@")==-1) && 
                    (dominio.search("@")==-1) &&
                    (usuario.search(" ")==-1) && 
                    (dominio.search(" ")==-1) &&
                    (dominio.search(".")!=-1) &&      
                    (dominio.indexOf(".") >=1)&& 
                    (dominio.lastIndexOf(".") < dominio.length - 1)){
                        emailValido = true;
                    }
                else{
                    error = 'Insira um e-mail valido';
                }
            }

            if(emailValido == true){
                if(this.email != this.confirmEmail){
                    error = 'A confirmação de e-mail deve ser igual ao e-mail inserido';
                }else if(this.telefone == '') {
                    error = 'Insira um telefone valido';
                }else if(this.endereco == '') {
                    error= 'Insira um endereço valido';
                }else if(this.cpf == ''){
                    error = 'Insira um CPF valido';
                }
                
                else{
                    this.confirm2 = true;
                    this.submeter();
                }
            }

            if(error != false){
                alert(error);
            }

        },

        submeter: function () {
            
            var data = {};
            
            if(this.confirm1 === true && this.confirm2 === true){

                this.loader = true;
                this.part2 = 'oculto';
                data = {
                    'usuario': this.usuario,
                    'senha':this.senha,
                    'email': this.email,
                    'telefone': this.telefone,
                    'endereco': this.telefone,
                    'cpf': this.cpf
                }

                console.log(JSON.stringify(data));

                axios
                    .post('https://rifando-api.herokuapp.com/cadastro', data)
                    .then(response=> {
                        alert('Cadastrado com sucesso!');
                        console.log(response);
                        this.loader = false;
                        this.part2 = 'oculto';
                        this.part1 = '';
                    })
                    .catch(error=> {
                        alert('Erro ao realizar o cadastro!');
                        console.log(error);
                        this.loader = false;
                        this.part2 = '';
                    });

            }else if(this.confirm1 == false){
                this.voltar();
                this.filtro1();
            }else if(this.confirm1 == true && this.confirm2 == false){
                this.filtro2();
            }
            
        }
    }
});

Vue.component('container-form',{
    template: `
    <div class="container-form">
        <buttons-container-form></buttons-container-form>
        <form-login
            :loginVisivel='login'
        ></form-login>
        <form-cadastro
            :cadastroVisivel='cadastro'
        ></form-cadastro> 
    </div>
    `,
    data: function() {
        return {
            login: true,
            cadastro: false,
            btn1: '',
            btn2: 'desativado'
        }
    },
});