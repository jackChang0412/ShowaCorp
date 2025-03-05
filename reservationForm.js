document.getElementById("reservationForm").addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if(!name || !date || !time){
        alert(" Please make sure you complete the online form!");
    }else{
        alert("Reservation completed. " + name + ", your time is " + date + " " + time)
    }
});