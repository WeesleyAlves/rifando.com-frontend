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

            axios
                // .post('https://rifando-api.herokuapp.com/login',{
                //     'usuario': 'teste',
                //     'senha': '1234',
                //     'email':'wee@x.com',
                //     'telefone':'00000000000',
                //     'cpf':'00000000',
                //     'endereco':'rua x, n 30'
                // })
                .post('https://rifando-api.herokuapp.com/login', {
                    'usuario': 'admin',
                    'senha':'123'
                })
                // .get('https://rifando-api.herokuapp.com/')
                .then(response=>{
                    alert(response.data);
                    console.log(response.data);
                })
                .catch(error=>{
                    this.loader=false;
                    alert(error);
                });


        }
    },

});

Vue.component('form-cadastro',{
    props: ['cadastroVisivel'],
    template:`
    <form v-if='cadastroVisivel' id='form-cadastro' @submit.prevent='submeter'>
        <loader v-if='loader'></loader>
        <div :class='part1'>
        <label for=""></label><input v-model='usuario' placeholder='Usuario' type="text">
        <label for=""></label><input v-model='senha' placeholder='Senha' type="password">
        <label for=""></label><input v-model='confirmSenha' placeholder='Repita a senha' type="password">
        <button class='primary-btn' @click='verificar'>Proximo</button>
        </div>
        <div :class='part2'>
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
            cpf:''
        }
    },
    methods: {
        verificar: function() {
            this.part1 = 'oculto';
            this.part2 = '';
        },

        submeter: function () {
            
            var data = {
                usuario: this.usuario,
                senha:this.senha,
                // confirmSenha: this.confirmSenha,
                email: this.email,
                // confirmEmail: this.confirmEmail,
                telefone: this.telefone,
                endereco: this.telefone,
                cpf: this.cpf
            }

            console.log(data);

            axios
                .post('https://rifando-api.herokuapp.com/cadastro', data)
                .then(response=> console.log(response))
                .catch(error=> {
                    console.log(error);
                    alert('error');
                });
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