const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function (){
    search1.style.display = 'flex';
    searchicon.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function () {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click' , function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right ='0%';
})

cross.addEventListener('click' , function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})


// Book Slot
document.getElementById('bookSlotForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simple validation (you can enhance this as needed)
    if (!name || !email || !date || !time) {
        alert("Please fill out all fields.");
        return;
    }

    // AJAX request to send the form data to the backend
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'backend.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Slot booked successfully!");
            document.getElementById('bookSlotForm').reset();
        } else {
            alert("Failed to book slot. Please try again.");
        }
    };
    xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`);
});

// Translater
