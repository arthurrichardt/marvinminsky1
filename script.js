document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('btn-theme');
    const quoteElement = document.getElementById('quote');
    const inventionCards = document.querySelectorAll('.invention-card');

    // Lista de frases marcantes de Marvin Minsky para alternar
    const quotes = [
        '"Você não entende realmente algo a menos que o entenda de mais de uma maneira."',
        '"Nenhum computador teve jamais uma ideia verdadeira por ser disciplinado demais."',
        '"A questão não é se as máquinas pensam, mas se os homens pensam."',
        '"A mente é o que o cérebro faz."'
    ];

    let currentQuoteIndex = 0;

    // Troca de frase ao clicar na citação
    quoteElement.parentElement.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];
    });

    // Alternar entre modo claro e escuro
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnTheme.textContent = 'Alternar Modo Claro';
        } else {
            btnTheme.textContent = 'Alternar Modo Escuro';
        }
    });

    // Efeito interativo ao clicar nos cartões de invenções no script
    inventionCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.borderColor = 'var(--accent-color)';
            setTimeout(() => {
                card.style.borderColor = 'var(--border-color)';
            }, 500);
        });
    });
});