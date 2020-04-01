Vue.component('viewsobre1',{
    props: ['titulo', 'texto', 'img'],
    template: `
        <div id="view1-sobre">
            <div class='container-content'>
                <h1>{{ titulo }}</h1>
                <p>{{ texto }}</p>
            </div>
            <div class='container-img'>
                <img :src='img' alt="">
            </div>
        </div>
    `
});

Vue.component('viewsobre2',{
    props: ['titulo','texto','img'],
    template:`
    <div id="view2-sobre">
            <div class='container-content'>
                <h1>{{ titulo }}</h1>
                <p>{{ texto }}</p>
            </div>
            <div class='container-img'>
                <img :src='img' alt="">
            </div>
    </div>`
});

Vue.component('viewsobre3', {
    props: ['titulo','texto','img'],
    template: `
        <div id="view3-sobre">
            <div class='container-content'>
                <h1>{{ titulo }}</h1>
                <p>{{ texto }}</p>
            </div>
            <div class='container-img'>
                <img :src='img' alt="">
            </div>
        </div>
    `
})