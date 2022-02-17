document.getElementById('dont_me').addEventListener('click',function() {
    this.innerHTML += '-clicked';
    document.getElementById('hd').innerHTML += '-Clicked';
    window.addEventListener = function () {
        console.log('inside');
    }
});

$('#hd2').click(function() {
    alert('heading');
    // document.getElementById('hd').innerHTML = 'heading Clicked';
});


document.getElementById('clone').addEventListener('click', function() {
    $('#hd').after($('#bt').clone(true));
});

// document.getElementById('hd2').addEventListener('click', function() {
//     document.getElementById('hd').innerHTML += 'heading Clicked';
// });
