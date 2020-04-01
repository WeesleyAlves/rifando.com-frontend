Vue.component('main-home', {
    props: ['titulo', 'texto', 'link1', 'link2', 'img1'],
    template:`
    <main>
        <div id="container-home">
            <img :src='img1'>
            <div id='container-content-home'>
                <div id='triangulo'></div>
                <div id='retangulo'>
                    <h1>{{ titulo }}</h1>
                    <p>{{ texto }}</p>
                    <div class='buttons-home'>
                        <a :href='link1' class='primary-btn'>SAIBA MAIS</a>
                        <a :href='link2' class='secundary-btn'>INICIAR RIFA</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    `
});