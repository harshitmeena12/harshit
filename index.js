setTimeout(function () {
    document.getElementById('dont_me').addEventListener('click', function(){
        console.log('clicked');
    });

    // $('#hd2').click(function() {
    //     alert('heading');
    //     // document.getElementById('hd').innerHTML = 'heading Clicked';
    // });


    document.getElementById('clone').addEventListener('click', function() {
    //     $('#hd').after($('#bt').clone(true));
        console.log('clicked');
    });

    // document.getElementById('hd2').addEventListener('click', function() {
    //     document.getElementById('hd').innerHTML += 'heading Clicked';
    // });

}, 2000);
window.addEventListener = function () {
     console.log('window');
}
