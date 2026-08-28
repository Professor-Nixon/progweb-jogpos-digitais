// *Uma loja paga comissão aos seus vendedores de acordo com o valor total das vendas realizadas no mês.
// *Regras da comissão:
// *Até R$ 2.000    ----> 3%
// *De R$ 2.001 até R$ 5.000    ----> 5%
// *Acima de R$ 5.000 --------> 8%

// *Informe o valor da venda;
// *Calcule o valor da comissão.
// *Identifique o percentual da comissão.
// *Imprima o total da venda e comissão recebida

let valor_venda = 1500.00
let valor_comissao = 0.0
let percentual_comissao = ""

if (valor_venda <= 2000.00) {
    percentual_comissao = "3%"
    valor_comissao = valor_venda * 0.03
    console.log(`
        Percentual utilizado: ${percentual_comissao}
        Valor total da venda: R$ ${valor_venda.toFixed(2)}
        Valor da comissão: R$ ${valor_comissao.toFixed(2)}`)
} else
    if (valor_venda >= 2001.00 && valor_venda <= 5000) {
        percentual_comissao = "5%"
        valor_comissao = valor_venda * 0.05
        console.log(`
            Percentual utilizado: ${percentual_comissao}
            Valor total da venda: R$ ${valor_venda.toFixed(2)}
            Valor da comissão: R$ ${valor_comissao.toFixed(2)}`)
    } else {
        percentual_comissao = "8%"
        valor_comissao = valor_venda * 0.08
        console.log(`
                Percentual utilizado: ${percentual_comissao}
                Valor total da venda: R$ ${valor_venda.toFixed(2)}
                Valor da comissão: R$ ${valor_comissao.toFixed(2)}`)
    }


