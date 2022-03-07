// O JavaScript tenta ser amigável e ele tenta fazer com que o código funcione e forneça uma solução, mesmo que o resultado venha a ser um erro.

// Para combater essas deficiências, você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

// Geralmente, você pode omitir o ponto e vírgula em JavaScript, mas é uma boa prática

'use strict'
console.log("Script JS externo carregado com sucesso!")
//referência para o botão.
const switcher = document.querySelector('.btn');

// ouvinte e o manipulador do evento click.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = 'Dark';
    }else{
        this.textContent = 'Light';
    }
    console.log('current class name: '+className);
});


//Isso aplica, automaticamente, os estilos de tema escuro em vez do tema claro. No entanto, o rótulo do botão também precisa ser atualizado para mostrar o tema correto, portanto, você precisa adicionar uma instrução if para verificar o tema atual e atualizar o rótulo do botão


