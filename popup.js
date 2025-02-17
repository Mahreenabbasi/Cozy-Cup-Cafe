function submit() {
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    const people=document.getElementById("people").value;
    if(!date||!time||!people){
        alert("All fields must be filled!");
        return;
    }

    document.getElementById("popup-date").innerText=date;
    document.getElementById("popup-time").innerText=time;
    document.getElementById("popup-people").innerText=people;
    openPopup();
}

function openPopup() {document.getElementById("popup").classList.add("open-popup");}
function closePopup() {document.getElementById("popup").classList.remove("open-popup");}
