Vue.component('form-login', {
    template:`
    <form id='form-login' action="">
        <label for="user">Usuario</label><input placeholder="Usuario" name='user' type="text">
        <label for="pass">Senha</label><input placeholder="Senha" name='pass' type="password">
        <button class="primary-btn" type="submit">LOGAR</button>
        <button class='terc-btn'>Esqueceu a senha?</button>
    </form>
    `
});

Vue.component('form-cadastro',{
    template:`
    <form id='form-cadastro' action="">
        <label for=""></label><input placeholder='Usuario' type="text">
        <label for=""></label><input placeholder='Senha' type="password">
        <label for=""></label><input placeholder='Repita a senha' type="password">
        <button class='primary-btn'>Proximo</button>
    </form>
    `
});