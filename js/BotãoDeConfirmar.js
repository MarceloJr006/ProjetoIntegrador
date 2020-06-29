function apertarBotão() {
    var txt;
    if (confirm("Para confirmar seu pedido, ligue no número e confirme +55 16 98199-0013 / +55 16 98124-2856 / +55 16 98260-0333")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("botao").innerHTML = txt;
  }