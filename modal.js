var openBtn = document.getElementById('open-btn-id');
var closeBtn = document.getElementById('close-btn-id');
var modalId = document.getElementById('modalId');


openBtn.addEventListener('click', function(){
    modalId.classList.add('show');
})

closeBtn.addEventListener('click', function(){
    modalId.classList.remove('show');
})