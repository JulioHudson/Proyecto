# Proyecto
 ecommerce

<meta charset="UTF-8">

<input/>
<button>Mostrar texto escrito</button>

<script>
    var input = document.querySelector("input");

    function mostrarTexto() {

        alert(input.value);
    }

    var button = document.querySelector("button");
    button.onclick = mostrarTexto;
</script>