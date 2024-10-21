const estados = [
    { estado: "Bahia", capital: "Salvador" },
    { estado: "São Paulo", capital: "São Paulo" },
    { estado: "Minas Gerais", capital: "Belo Horizonte" },
    { estado: "Rio de Janeiro", capital: "Rio de Janeiro" },
    { estado: "Amapá", capital: "Macapá" },
    { estado: "Rondônia", capital: "Porto Velho" },
    { estado: "Tocantins", capital: "Palmas" }
  ];
  
  
  function adivinharCapitais() {
    let acertos = 0;
  
    
    for (let i = 0; i < estados.length; i++) {
      const palpiteCapital = prompt(`Qual é a capital do estado ${estados[i].estado}?`);
  
      if (palpiteCapital.toLowerCase() === estados[i].capital.toLowerCase()) {
        alert(`Correto! A capital de ${estados[i].estado} é ${estados[i].capital}.`);
        acertos++;
      } else {
        alert(`Errado! A capital de ${estados[i].estado} é ${estados[i].capital}.`);
      }
    }
  
   
    alert(`Você acertou ${acertos} de ${estados.length} capitais.`);
  }
  
  
  function iniciarJogo() {
    let jogarNovamente = '';
  
    do {
      adivinharCapitais();
      jogarNovamente = prompt("Deseja jogar novamente? Digite 'sim' para continuar ou qualquer outra tecla para sair.");
    } while (jogarNovamente.toLowerCase() === 'sim');
  
    alert("Obrigado por jogar!");
  }
  
  
  iniciarJogo();
  