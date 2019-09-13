// The getCatPic function takes a configuration object with properties button_id and image_id.
// When the button with the button_id is clicked, the image with the image_id will be populated 
// with a random cat image from the cat api.
//
//
// Example function call:
//
//    getCatPic({
//      button_id:'cat-button',
//      image_id:'cat-pic'
//    })
//

var getCatPic = function (obj) {
    $('#' + obj.button_id).on('click', e => {
        e.preventDefault();
        $.get('https://api.thecatapi.com/v1/images/search?size=full', function (data) {
            $('#' + obj.image_id).attr('src', data[0].url)
        });
    })
}