document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key === 'k') {
        document.getElementById('sobre').click();
    }
    if (event.ctrlKey && event.key === 'i') {
        window.open('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FEsmaltes-Impala-Cores-Diversas-Escolha%2Fdp%2FB0C6JDL9YZ&psig=AOvVaw2SJceBPV3exEHT50XhCMlF&ust=1713453340677000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC3sJ_FyYUDFQAAAAAdAAAAABAE"><img src="https://m.media-amazon.com/images/I/41mYSTiooUL._AC_.jpg');
    }
    if (event.ctrlKey && event.key === 'q') {
        document.getElementById('texto').focus();
    }
});