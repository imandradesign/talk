$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user...</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });



  $("button#cat").click(function() {
    $("ul#kitty").append("<li>Mer</li>").append("<img src='img/cat.png' alt='cat'>");
    $("ul#pup").append("<li>WUFF</li>").append("<img src='img/doge.png' alt='doge'>");
    $("ul#kitty").children("img").click(function() {
      $(this).remove();
    });
    $("ul#pup").children("img").click(function() {
      $(this).remove();
    });
  });

  $("button#doge").click(function() {
    $("ul#pup").append("<li>bark bark</li>").append("<img src='img/doge-2.jpg' alt='another doge'>");
    $("ul#kitty").append("<li>HISSSSSSSSSSS</li>").append("<img src='img/anger-cat.jpeg' alt='anger cat'>");
    $("ul#kitty").children("img").click(function() {
      $(this).remove();
    });
    $("ul#pup").children("img").click(function() {
      $(this).remove();
    });
  });
});
