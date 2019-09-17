$(document).ready(function () {
    alert("VAMOS");

    var posts = [
      {
        title: 'Titulo 1',
        date: new Date(),
        parrafo: `'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus dui ante, rutrum ultrices tellus pellentesque,
        mollis auctor nunc. Sed mollis felis neque, quis viverra
        justo commodo vitae. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Suspendisse
        potenti. Suspendisse efficitur aliquam velit.
        Donec vehicula risus augue, luctus venenatis ante
        sollicitudin a. Curabitur sit amet felis massa.'`
      },
      {
        title: 'Titulo 2',
        date: new Date(),
        parrafo: `'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus dui ante, rutrum ultrices tellus pellentesque,
        mollis auctor nunc. Sed mollis felis neque, quis viverra
        justo commodo vitae. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Suspendisse
        potenti. Suspendisse efficitur aliquam velit.
        Donec vehicula risus augue, luctus venenatis ante
        sollicitudin a. Curabitur sit amet felis massa.'`
      },
      {
        title: 'Titulo 3',
        date: new Date(),
        parrafo: `'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus dui ante, rutrum ultrices tellus pellentesque,
        mollis auctor nunc. Sed mollis felis neque, quis viverra
        justo commodo vitae. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Suspendisse
        potenti. Suspendisse efficitur aliquam velit.
        Donec vehicula risus augue, luctus venenatis ante
        sollicitudin a. Curabitur sit amet felis massa.'`
      },
      {
        title: 'Titulo 4',
        date: new Date(),
        parrafo: `'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus dui ante, rutrum ultrices tellus pellentesque,
        mollis auctor nunc. Sed mollis felis neque, quis viverra
        justo commodo vitae. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Suspendisse
        potenti. Suspendisse efficitur aliquam velit.
        Donec vehicula risus augue, luctus venenatis ante
        sollicitudin a. Curabitur sit amet felis massa.'`
      },

    ];
    // inserccion de Post
    posts.forEach((elemento, index)=>{
      var post = `
      <article class="post">
        <h2>${elemento.title}</h2>
        <span class="date">${elemento.date}</span>
        <p>${elemento.parrafo}</p>
      </article>

      `;
      $("#posts").append(post);
    });


    // Logica de boton Ir arriba SCROLL!
    $(".subir").click(function(e){
      e.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 500);

      return false;
    });

  });
