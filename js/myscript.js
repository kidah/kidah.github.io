if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
// google map scrolling off with mouse wheel
$('.map-responsive').on('click',function() {
    $('.map-responsive iframe').css("pointer-events", "auto");
});
$(".map-responsive").on('mouseleave',function() {
    $('.map-responsive iframe').css("pointer-events", "none");
});
var textWrapper = document.querySelector('.welcomeText');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.welcomeText .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.welcomeText',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Standard google maps function
function initialize() {
    var myLatlng = new google.maps.LatLng(40.779502, -73.967857);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    TestMarker();
}

// Function for adding a marker to the page.
function addMarker(location) {
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Testing the addMarker function
function TestMarker() {
    CentralPark = new google.maps.LatLng(37.7699298, -122.4469157);
    addMarker(CentralPark);
}



$(window).load(function() {
    $('#thumbnails').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#flex-slider'
    });

    $('#flex-slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#thumbnails",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});

window.onload = function() {
   Particles.init({
    selector: '.description'
   });
};