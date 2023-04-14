const button = document.querySelector(".btn");
button.addEventListener("click", changePadMarg);

function changePadMarg(){
    let p = document.getElementById('padding').value;
    let m = document.getElementById('margin').value;
    let main=document.getElementById('main');
    main.style.padding = `${p}px`;
    main.style.margin = `${m}px`;
}