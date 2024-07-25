export class CarrinhoDeCompras {
    private produtos : Produto[] = []

    constructor(){
    }

    inserirProdutos( ...produtos : Produto[] ) : void {
        for ( const produto of produtos) {
            this.produtos.push(produto)
        }
    }

    getQuantidade() : number {
        console.log(this.produtos.length)
        return this.produtos.length
    }

    getValorTotal() : number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
    }
}

export class Produto {
    constructor( public nome: string, public preco: number) {}
}
const carrinho = new CarrinhoDeCompras();
const molhoDeTomate = new Produto("MolhoDeToamte", 10.9);

carrinho.inserirProdutos(molhoDeTomate)

console.log(carrinho.getValorTotal())

console.log(carrinho)