document.addEventListener("DOMContentLoaded", function() {
    // Exibir o modal após 10 segundos
    setTimeout(() => {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    }, 1000);

    // Fechar o modal quando o usuário clicar no botão "fechar"
    document.getElementById("close").onclick = function() {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    // Ações para os botões Aceitar e Recusar
    document.getElementById("accept").onclick = function() {
        alert("Vamos ao cinema!, agora escolhe o filme que você quer? selecionei todos que você gosta, agora só você escolher o que quer ver");
        document.getElementById("modal").style.display = "none";
    }

    document.getElementById("decline").onclick = function() {
        alert("Sem problemas! Talvez em outra ocasião. :(");
        document.getElementById("modal").style.display = "none";
    }
});
function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("./img/banner/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}