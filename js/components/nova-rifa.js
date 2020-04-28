Vue.component('form-rifa',{
    template: `
    <form  method='post' @submit.prevent='validar'>
            <h3>Formulario da nova rifa</h3>
            <div>
                <h4>1. Informações basicas sobre sua nova rifa</h4>
                <input v-model='titulo' type="text" placeholder="Titulo da sua rifa">
                <select name="" id="" v-model='categoria'>
                    <option value="" selected disabled hidden>Categoria</option>
                    <option value="Brinquedos">Brinquedos</option>
                    <option value="Casas">Casa</option>
                    <option value="Veiculos">Veiculos</option>
                    <option value="Esportiva">Esportiva</option>
                    <option value="Outra">Outra</option>
                </select>
                <textarea v-model='descricao' name="" id="" cols="30" rows="10" placeholder="Descrição da sua rifa"></textarea>
            </div>

            <div>
                <h4>2. Infomações sobre bilhetes</h4>
                <input v-model.number='totalBilhetes' type="number" placeholder="Total de bilhetes. Ex: 100">
                <input v-model.number='valor' type="number" placeholder="Valor de cada bilhete. Ex: 150,00">
            </div>

            <div class='data-form'>
                <h4>3. Data do sorteio</h4>
                    <div>
                        <select v-model='dia' name="" id="dia">
                            <option value="" selected disabled hidden>Dia</option>
                        </select>/
                        <select v-model='mes' name="" id="">
                            <option value="" selected disabled hidden>Mês</option>
                            <option value="Janeiro">Janeiro</option>
                            <option value="Fevereiro">Fevereiro</option>
                            <option value="Março">Março</option>
                            <option value="Abril">Abril</option>
                            <option value="Maio">Maio</option>
                            <option value="Junho">Junho</option>
                            <option value="Julho">Julho</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Setembro">Setembro</option>
                            <option value="Outubro">Outubro</option>
                            <option value="Novembro">Novembro</option>
                            <option value="Dezembro">Dezembro</option>
                        </select>/
                        <select v-model='ano' name="" id="ano">
                            <option value="" selected disabled hidden>Ano</option>
                        </select>
                    </div>
            </div>

            <div class='imagens-form'>
                <h4>4. Imagens do prêmio</h4>
                <p>Selecione imagens para ilustrar o prêmio da sua rifa</p>

                <input id = 'imagens' type="file" src="" alt="" multiple>
                
            </div>
  
            <input type="submit" value="Criar Rifa" class='primary-btn'>
        </form>
    `,
    data: function() {
        return{
            titulo :'',
            categoria : '',
            descricao: '',
            totalBilhetes: '',
            valor: '',
            dia: '',
            mes:'',
            ano:'',
            imagens: '',
        }
    },
    methods: {
        validar: function() {
            var error = true;

            if(this.titulo == ''){
                error = "Insira um titulo Valido";
            }else if(this.categoria == ""){
                error = "Selecione uma categoria"
            }else if(this.descricao == '' || this.descricao.length < 31){
                error = "Insira uma descrição de no minimo 30 caracteres sobre a sua rifa"
            }else if(this.totalBilhetes == ''){
                error = "Insira um numero para o total de bilhetes"
            }else if(this.valor == ''){
                error = "Insira o valor de cada bilhete"
            }else if(this.dia == ''){
                error = 'Escolha um dia para sorteio'
            }else if(this.mes == ''){
                error = 'Escolha um mês para sorteio'
            }else if(this.ano == ''){
                error = 'Escolha um ano para o sorteio'
            }else if(document.getElementById('imagens').files.length > 6 || document.getElementById('imagens').files.length < 1){
                error = 'Insira as imagens da rifa, sendo no minimo 1 e no maximo 5 imagens'
            }else{
                error = false;
            }

            if(error == false ){
                alert('Sucesso');
            }else{
                alert(error);
            }
        },
        teste : function(){
            console.log(document.getElementById('imagens').files.length);
        }
    },
    mounted: function () {
        var dia = document.getElementById('dia');
        var ano = document.getElementById('ano');

        for(i=1;i<32;i++){
            var x = document.createElement('option');
            x.innerHTML = i;
            x.setAttribute('value',i);
            dia.appendChild(x);
        }

        for(i=20;i<24;i++){
            var x = document.createElement('option');
            x.innerHTML = '20'+i;
            x.setAttribute('value','20'+i);
            ano.appendChild(x);
        }
    }
})
