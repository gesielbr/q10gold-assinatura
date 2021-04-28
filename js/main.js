$(document).ready(function () {
  $(".corpo-kit2").hide();
  $(".corpo-kit3").hide();
  $(".botao-desconto").text("10% de desconto");
  $(".valor-antigo").text("R$ 199,90");
  $(".valor-novo").text("R$ 179,91");
  $(".parcela").text("Em até 6x de");
  $(".valor-parcela").text(" R$ 00,00");
  $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
});

$("#assinatura-gold").click(function () {
  $(".assinatura").show();
  $(".clube-vip").show();
  $("#assinatura-gold").addClass("active");
  $("#compra-unica").removeClass("active");
  $("#assinatura-gold").css("background-color", "#000000");
  $("#assinatura-gold").css("color", "#fff");
  $("#assinatura-gold").css("padding", "12px");
  $("#assinatura-gold").css("font-size", "12px");
  $("#assinatura-gold").css("border-radius", "10px 0px 0px 10px");
  $("#assinatura-gold").css("border", "2px solid #171a1d");
  $("#compra-unica").css("border-radius", "0px 10px 10px 0px");
  $("#compra-unica").css("padding", "12px");
  $("#compra-unica").css("font-size", "12px");
  $("#compra-unica").css("background-color", "#f2f2f2");
  $("#compra-unica").css("color", "#9a9a9a");
  $("#compra-unica").css("border", "2px solid #f2f2f2");
  $("#compra-unica").css("margin-left", "-5px");
  $(".botao-desconto").text("10% de desconto");
  // $('.botao-desconto').text('10% de desconto')
  // $('.valor-antigo').text('R$ 199,90')
  // $('.valor-novo').text('R$ 179,91')
  // $('.parcela').text('Em até 6x de')
  // $('.valor-parcela').text(' R$ 00,00')
  // $('.link-compra').attr("href", "https://www.w3schools.com/jquery/");
  if ($("#assinatura-gold").hasClass("active")) {
    $(".valor-antigo").css("text-decoration", "line-through");
    $(".kit1").click(function () {
      $(".kit1").addClass("active");
      $(".kit2").removeClass("active");
      $(".kit3").removeClass("active");
      $(".corpo-kit1").show();
      $(".corpo-kit2").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit1").css("color", "#00f882");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-75px");
      $(".kit3").css("margin-top", "-27px");
      $(".frascos-mensais").text(
        "Na escolha de 1 frasco (Envio todos os meses):"
      );
      $("#texto-assinatura").html(
        "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe todos os meses automaticamente um frasco de Q10 Gold </b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
      );
      // $("#texto-assinatura").css("background-color", "red");
      $(".botao-desconto").text("10% de desconto");
      $(".valor-antigo").text("R$ 199,90");
      $(".valor-novo").text("R$ 179,91");
      $(".parcela").text("Em até 6x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
    });

    $(".kit2").click(function () {
      $(".kit2").addClass("active");
      $(".kit1").removeClass("active");
      $(".kit3").removeClass("active");
      $(".corpo-kit2").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit2").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-28px");
      $(".frascos-mensais").text(
        "Na escolha de 3 frascos (Envio a cada 3 meses):"
      );
      $("#texto-assinatura").html(
        "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe a cada três meses automaticamente três frascos de Q10 Gold</b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
      );
      $(".botao-desconto").text("40% de desconto");
      $(".valor-antigo").text("R$ 399,80");
      $(".valor-novo").text("R$ 239,88");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
    });

    $(".kit3").click(function () {
      $(".kit3").addClass("active");
      $(".kit2").removeClass("active");
      $(".kit1").removeClass("active");
      $(".corpo-kit3").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit2").hide();
      $(".circulo-kit3").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-143px");
      $(".frascos-mensais").text(
        "Na escolha de 6 frascos (Envio a cada 6 meses):"
      );
      $("#texto-assinatura").html(
        "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe a cada seis meses automaticamente seis frascos de Q10 Gold</b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
      );
      $(".botao-desconto").text("55% de desconto");
      $(".valor-antigo").text("R$ 599,70");
      $(".valor-novo").text("R$ 359,82");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
    });

    if ($(".kit1").hasClass("active")) {
      $(".corpo-kit1").show();
      $(".corpo-kit2").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit1").css("color", "#00f882");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-75px");
      $(".kit3").css("margin-top", "-27px");
      $(".botao-desconto").text("10% de desconto");
      $(".valor-antigo").text("R$ 199,90");
      $(".valor-novo").text("R$ 179,91");
      $(".parcela").text("Em até 6x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
    }

    if ($(".kit2").hasClass("active")) {
      $(".corpo-kit2").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit2").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-28px");
      $(".botao-desconto").text("40% de desconto");
      $(".valor-antigo").text("R$ 399,80");
      $(".valor-novo").text("R$ 239,88");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
    }

    if ($(".kit3").hasClass("active")) {
      $(".corpo-kit3").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit2").hide();
      $(".circulo-kit3").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-143px");
      $(".botao-desconto").text("55% de desconto");
      $(".valor-antigo").text("R$ 599,70");
      $(".valor-novo").text("R$ 359,82");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
    }
  }
});

$("#compra-unica").click(function () {
  $(".assinatura").hide();
  $(".clube-vip").hide();
  $(".garantia").css("padding", "2rem 0 2rem");
  $("#compra-unica").addClass("active");
  $("#assinatura-gold").removeClass("active");
  $("#compra-unica").css("background-color", "#000000");
  $("#compra-unica").css("color", "#fff");
  $("#compra-unica").css("padding", "12px");
  $("#compra-unica").css("font-size", "12px");
  $("#compra-unica").css("border-radius", "0px 10px 10px 0px");
  $("#compra-unica").css("border", "2px solid #171a1d");
  $("#assinatura-gold").css("border-radius", "10px 0px 0px 10px");
  $("#assinatura-gold").css("padding", "12px");
  $("#assinatura-gold").css("font-size", "12px");
  $("#assinatura-gold").css("background-color", "#f2f2f2");
  $("#assinatura-gold").css("color", "#9a9a9a");
  $("#assinatura-gold").css("border", "2px solid #f2f2f2");
  $("#assinatura-gold").css("margin-left", "-5px");
  $(".botao-desconto").text("Experimente");
  // $('.botao-desconto').text('20% de desconto')
  // $('.valor-antigo').text('R$ 199,90')
  // $('.valor-novo').text('R$ 199,90')
  // $('.parcela').text('Em até 6x de')
  // $('.valor-parcela').text(' R$ 00,00')
  // $('.link-compra').attr("href", "https://www.w3schools.com/jquery/");

  if ($("#compra-unica").hasClass("active")) {
    $(".valor-antigo").css("text-decoration", "none");
    $(".kit1").click(function () {
      $(".kit1").addClass("active");
      $(".kit2").removeClass("active");
      $(".kit3").removeClass("active");
      $(".corpo-kit1").show();
      $(".corpo-kit2").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit1").css("color", "#00f882");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-75px");
      $(".kit3").css("margin-top", "-27px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 199,90");
      $(".parcela").text("Em até 6x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
    });

    $(".kit2").click(function () {
      $(".kit2").addClass("active");
      $(".kit1").removeClass("active");
      $(".kit3").removeClass("active");
      $(".corpo-kit2").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit2").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-28px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 399,80");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
    });

    $(".kit3").click(function () {
      $(".kit3").addClass("active");
      $(".kit2").removeClass("active");
      $(".kit1").removeClass("active");
      $(".corpo-kit3").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit2").hide();
      $(".circulo-kit3").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-143px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 599,70");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
    });

    if ($(".kit1").hasClass("active")) {
      $(".corpo-kit1").show();
      $(".corpo-kit2").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit1").css("color", "#00f882");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-75px");
      $(".kit3").css("margin-top", "-27px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 199,90");
      $(".parcela").text("Em até 6x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
    }

    if ($(".kit2").hasClass("active")) {
      $(".corpo-kit2").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit3").hide();
      $(".circulo-kit2").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit3").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-28px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 399,80");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
    }

    if ($(".kit3").hasClass("active")) {
      $(".corpo-kit3").show();
      $(".corpo-kit1").hide();
      $(".corpo-kit2").hide();
      $(".circulo-kit3").css("color", "#00f882");
      $(".circulo-kit1").css("color", "#f2f2f2");
      $(".circulo-kit2").css("color", "#f2f2f2");
      $(".kit2").css("margin-top", "-195px");
      $(".kit3").css("margin-top", "-143px");
      $(".botao-desconto").text("Experimente");
      $(".valor-antigo").text("Por apenas");
      $(".valor-novo").text("R$ 599,70");
      $(".parcela").text("Em até 12x de");
      $(".valor-parcela").text(" R$ 00,00");
      $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
    }
  }
});

if ($("#assinatura-gold").hasClass("active")) {
  $(".kit1").click(function () {
    $(".kit1").addClass("active");
    $(".kit2").removeClass("active");
    $(".kit3").removeClass("active");
    $(".corpo-kit1").show();
    $(".corpo-kit2").hide();
    $(".corpo-kit3").hide();
    $(".circulo-kit1").css("color", "#00f882");
    $(".circulo-kit2").css("color", "#f2f2f2");
    $(".circulo-kit3").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-75px");
    $(".kit3").css("margin-top", "-27px");
    $(".frascos-mensais").text(
      "Na escolha de 1 frasco (Envio todos os meses):"
    );
    $("#texto-assinatura").html(
      "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe todos os meses automaticamente um frasco de Q10 Gold </b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
    );
    $(".botao-desconto").text("10% de desconto");
    $(".valor-antigo").text("R$ 199,90");
    $(".valor-novo").text("R$ 179,91");
    $(".parcela").text("Em até 6x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
  });

  $(".kit2").click(function () {
    $(".kit2").addClass("active");
    $(".kit1").removeClass("active");
    $(".kit3").removeClass("active");
    $(".corpo-kit2").show();
    $(".corpo-kit1").hide();
    $(".corpo-kit3").hide();
    $(".circulo-kit2").css("color", "#00f882");
    $(".circulo-kit1").css("color", "#f2f2f2");
    $(".circulo-kit3").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-195px");
    $(".kit3").css("margin-top", "-28px");
    $(".frascos-mensais").text(
      "Na escolha de 3 frascos (Envio a cada 3 meses):"
    );
    $("#texto-assinatura").html(
      "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe a cada três meses automaticamente três frascos de Q10 Gold</b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
    );
    $(".botao-desconto").text("40% de desconto");
    $(".valor-antigo").text("R$ 399,80");
    $(".valor-novo").text("R$ 239,88");
    $(".parcela").text("Em até 12x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
  });

  $(".kit3").click(function () {
    $(".kit3").addClass("active");
    $(".kit2").removeClass("active");
    $(".kit1").removeClass("active");
    $(".corpo-kit3").show();
    $(".corpo-kit1").hide();
    $(".corpo-kit2").hide();
    $(".circulo-kit3").css("color", "#00f882");
    $(".circulo-kit1").css("color", "#f2f2f2");
    $(".circulo-kit2").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-195px");
    $(".kit3").css("margin-top", "-143px");
    $(".frascos-mensais").text(
      "Na escolha de 6 frascos (Envio a cada 6 meses):"
    );
    $("#texto-assinatura").html(
      "A Assinatura Gold é um plano mensal que dura de acordo com o período escolhido na hora da compra, nesse caso, <b>você recebe a cada seis meses automaticamente seis frascos de Q10 Gold</b>, referente ao seu plano, por um preço muito abaixo do comum e sempre com frete de valor fixo. Esse frasco é descontado automaticamente no seu cartão assim que o novo pedido é enviado para o endereço cadastrado."
    );
    $(".botao-desconto").text("55% de desconto");
    $(".valor-antigo").text("R$ 599,70");
    $(".valor-novo").text("R$ 359,82");
    $(".parcela").text("Em até 12x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
  });

  if ($(".kit1").hasClass("active")) {
    $(".corpo-kit1").show();
    $(".corpo-kit2").hide();
    $(".corpo-kit3").hide();
    $(".circulo-kit1").css("color", "#00f882");
    $(".circulo-kit2").css("color", "#f2f2f2");
    $(".circulo-kit3").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-75px");
    $(".kit3").css("margin-top", "-27px");
    $(".botao-desconto").text("10% de desconto");
    $(".valor-antigo").text("R$ 199,90");
    $(".valor-novo").text("R$ 179,91");
    $(".parcela").text("Em até 6x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery/");
  }

  if ($(".kit2").hasClass("active")) {
    $(".corpo-kit2").show();
    $(".corpo-kit1").hide();
    $(".corpo-kit3").hide();
    $(".circulo-kit2").css("color", "#00f882");
    $(".circulo-kit1").css("color", "#f2f2f2");
    $(".circulo-kit3").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-195px");
    $(".kit3").css("margin-top", "-28px");
    $(".botao-desconto").text("40% de desconto");
    $(".valor-antigo").text("R$ 399,80");
    $(".valor-novo").text("R$ 239,88");
    $(".parcela").text("Em até 12x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery2/");
  }

  if ($(".kit3").hasClass("active")) {
    $(".corpo-kit3").show();
    $(".corpo-kit1").hide();
    $(".corpo-kit2").hide();
    $(".circulo-kit3").css("color", "#00f882");
    $(".circulo-kit1").css("color", "#f2f2f2");
    $(".circulo-kit2").css("color", "#f2f2f2");
    $(".kit2").css("margin-top", "-195px");
    $(".kit3").css("margin-top", "-143px");
    $(".botao-desconto").text("55% de desconto");
    $(".valor-antigo").text("R$ 599,70");
    $(".valor-novo").text("R$ 359,82");
    $(".parcela").text("Em até 12x de");
    $(".valor-parcela").text(" R$ 00,00");
    $(".link-compra").attr("href", "https://www.w3schools.com/jquery3/");
  }
}
//CELULAR

if ($(window).width() <= 768) {
  $("#assinatura-gold").click(function () {
    if ($("#assinatura-gold").hasClass("active")) {
      $(".kit1").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });

      $(".kit2").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });

      $(".kit3").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });
    }
    if ($(".kit1").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }

    if ($(".kit2").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }

    if ($(".kit3").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }
  });

  $("#compra-unica").click(function () {
    if ($("#compra-unica").hasClass("active")) {
      $(".kit1").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });

      $(".kit2").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });

      $(".kit3").click(function () {
        $(".kit2").css("margin-top", "2px");
        $(".kit3").css("margin-top", "2px");
      });
    }

    if ($(".kit1").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }

    if ($(".kit2").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }

    if ($(".kit3").hasClass("active")) {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    }
  });

  if ($("#assinatura-gold").hasClass("active")) {
    $(".kit1").click(function () {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    });

    $(".kit2").click(function () {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    });

    $(".kit3").click(function () {
      $(".kit2").css("margin-top", "2px");
      $(".kit3").css("margin-top", "2px");
    });
  }

  if ($(".kit1").hasClass("active")) {
    $(".kit2").css("margin-top", "2px");
    $(".kit3").css("margin-top", "2px");
  }

  if ($(".kit2").hasClass("active")) {
    $(".kit2").css("margin-top", "2px");
    $(".kit3").css("margin-top", "2px");
  }

  if ($(".kit3").hasClass("active")) {
    $(".kit2").css("margin-top", "2px");
    $(".kit3").css("margin-top", "2px");
  }
}
