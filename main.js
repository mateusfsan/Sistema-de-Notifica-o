// Função do contador
let contador = 0;

function contaNotificacao() {
    const countElement = document.getElementById('notification-count');
    countElement.textContent = `Notificações = ${contador}`;
}

// Função para criar notificações
function notificar(mensagem, duration = 5000, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerHTML = `<p>${mensagem} <button class="btn-close">&times;</button></p>`; // Corrigido botão

    const container = document.getElementById('notification-container');
    container.appendChild(notification);

 
    contador++;  
    contaNotificacao();  

    let isRemoved = false;

   
    const closeButton = notification.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        if (!isRemoved) {
            isRemoved = true; 
            notification.classList.add('hide');
            setTimeout(() => {
                notification.remove();
                contador--; 
                contaNotificacao(); 
            }, 500);
        }
    });

    
    setTimeout(() => {
        if (!isRemoved) {
            isRemoved = true; 
            notification.classList.add('hide');
            setTimeout(() => {
                notification.remove();
                contador--; 
                contaNotificacao(); 
            }, 500);
        }
    }, duration);
}


notificar('Seu Filho Adentrou a Van escolar', 10000, 'success');
notificar('Erro de leitura', 15000, 'error');
notificar('Compra aprovada', 5000, 'info');
