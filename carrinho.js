"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.inserirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    CarrinhoDeCompras.prototype.getQuantidade = function () {
        console.log(this.produtos.length);
        return this.produtos.length;
    };
    CarrinhoDeCompras.prototype.getValorTotal = function () {
        return this.produtos.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
exports.Produto = Produto;
var carrinho = new CarrinhoDeCompras();
var molhoDeTomate = new Produto("MolhoDeToamte", 10.9);
carrinho.inserirProdutos(molhoDeTomate);
console.log(carrinho.getValorTotal());
console.log(carrinho);
