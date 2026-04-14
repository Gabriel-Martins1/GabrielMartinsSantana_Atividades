    // pegar pelo id do interruptor
const checkbox = document.getElementById('checkbox');

// Ve se o usuário já tinha escolhido o modo escuro antes
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (checkbox) checkbox.checked = true;
}

// aqui é pra escutar o click 
if (checkbox) {
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        
        // isso aqui é pra salvar a opção
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Ancoras, pra descer lentinho
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90, 
                behavior: 'smooth' 
            });
        }
    });
});