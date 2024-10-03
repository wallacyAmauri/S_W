/*header*/
/* ----------- codigo do Navbar ----------- */

function stickNavbar(){
    header.classList.toggle("scrolled",window.scrollY > 0);
 }
 
 stickNavbar();
 
 window.addEventListener("scroll", stickNavbar);

 // const header = document.querySelector("header");
const ulMenu = document.querySelector("menu");
const menuLink = document.querySelector("nav-link");
// const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

function scrollHeader(){
    const header = document.getElementById('header');
    this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active')
    console.log(this.scrolly)
}

window.addEventListener('scroll', scrollHeader)
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active')
        } else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active')
        }
    });
}
window.addEventListener('scroll', scrollActive)

function handleAnswer(formNumber, answer) {
    const currentForm = document.getElementById(`form${formNumber}`);
    const messageDiv = document.getElementById('message');

    if (answer) {
        messageDiv.textContent = '';
        currentForm.style.display = 'none'; // Esconder o formulário atual
        const nextForm = document.getElementById(`form${formNumber + 1}`);
        if (nextForm) {
            nextForm.style.display = 'block'; // Mostrar o próximo formulário
        } else {
            // Redirecionar para uma nova página no último formulário
            window.location.href = 'final.html'; // Altere para o seu HTML de destino
        }
    } else {
        messageDiv.textContent = 'Desculpe, a resposta "Não" está desativada. Apenas "Sim" é permitido.';
    }
}