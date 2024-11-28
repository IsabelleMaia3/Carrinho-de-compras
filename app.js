let totalGeral = 0
limpar()


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade'); 
    let preco = quantidade.value * valorUnitario;
//adicionar no carrinho 
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`
        if (quantidade.value <= 0){
            alert('Dígitos inváldos, favor tentar novamente')
            totalGeral = 0;
            document.getElementById('lista-produtos').innerHTML = '';
            document.getElementById('valor-total').textContent = 'R$ 0';
        } else 
//atualizar o valor total
    totalGeral = totalGeral +  preco
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral }`;
    document.getElementById('quantidade').value = 0
    
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
