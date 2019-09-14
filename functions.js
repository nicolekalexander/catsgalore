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

            var current_url = data[0].url
            $('#' + obj.image_id).attr('src', current_url)
            sessionStorage.setItem('current_url', current_url)

            if (sessionStorage.getItem('previous_urls')) {
                var previous_urls = JSON.parse(sessionStorage.getItem('previous_urls'))
            } else {
                var previous_urls = []
            }
            previous_urls.push(current_url)
            sessionStorage.setItem('previous_urls', JSON.stringify(previous_urls))
        });
    })
}

var getPreviousCatPic = function (obj) {
    $('#' + obj.button_id).on('click', e => {
        e.preventDefault();
        if (sessionStorage.getItem('previous_urls')) {
            var previous_urls = JSON.parse(sessionStorage.getItem('previous_urls'))
            previous_urls.pop()
        } else {
            var previous_urls = []
        }
        
        var current_url = previous_urls[ previous_urls.length - 1 ]

        sessionStorage.setItem('previous_urls', JSON.stringify(previous_urls))

        sessionStorage.setItem('current_url', current_url)

        $('#' + obj.image_id).attr('src', current_url)
    })
}