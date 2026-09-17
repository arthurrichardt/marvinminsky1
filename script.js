document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('btn-theme');
    const quoteElement = document.getElementById('quote');

    // Lista de frases marcantes de Marvin Minsky para alternar dinamicamente
    const quotes = [
        '"Você não entende realmente algo a menos que o entenda de mais de uma maneira."',
        '"Nenhum computador teve jamais uma ideia verdadeira por ser disciplinado demais."',
        '"A questão não é se as máquinas pensam, mas se os homens pensam."',
        '"A mente é o que o cérebro faz."'
    ];

    let currentQuoteIndex = 0;

    // Troca de frase ao clicar no bloco de citação
    quoteElement.parentElement.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];
    });

    // Alternar entre modo claro e escuro
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});