let idade = 5

// Menor de 16 anos → Não pode votar
// De 16 ou 17 anos → Voto facultativo
// De 18 a 69 anos → Voto obrigatório
// 70 anos ou mais → Voto facultativo

if (idade < 16){
    console.log(idade+": Não pode votar")
}else 
    if (idade == 16){
        console.log(idade+": Voto facultativo")
    }else
        if(idade == 17){
            console.log(idade+": Voto facultativo")
        }else 
            if (idade <= 18){
                console.log(idade+": Voto obrigatório")
            }else 
                if(idade <= 69){
                    console.log(idade+": Voto obrigatório")
                }else {
                    console.log(idade+": Voto Facultativo")
                }
