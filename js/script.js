window.onload = function(){
    let videoBtn = document.querySelectorAll('.vid-btn');
    videoBtn.forEach ( btn => {
    btn.addEventListener ( 'click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src; 
    });
});
};
function get(){
   let contry = Document.getElementById("cont").value;
   let money = Document.getElementById("mon").value;
   let date = Document.getElementById("dat").value;
   alert= ("welcome to"+ contry);
};