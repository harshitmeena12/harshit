$('#bt').click(function() {
    this.innerHTML += '-clicked';
    document.getElementById('hd').innerHTML += '-Clicked';
});

$('#hd2').click(function() {
    alert('heading');
    // document.getElementById('hd').innerHTML = 'heading Clicked';
});

window.addEventListener = function () {
    console.log('inside');
}


document.getElementById('clone').addEventListener('click', function() {
    $('#hd').after($('#bt').clone(true));
});

// document.getElementById('hd2').addEventListener('click', function() {
//     document.getElementById('hd').innerHTML += 'heading Clicked';
// });
