console.log('myles.js');

var waypoint0 = new Waypoint({
    element: document.getElementById('wp0'),
    handler: function() {
        var tmp = document.getElementById('hi');
        if (tmp.className.match(/(?:^|\s)hi(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }
        console.log('waypoint whas triggered');
    }
});

var waypoint1 = new Waypoint({
    element: document.getElementById('wp1'),
    handler: function() {
        var tmp = document.getElementById('whatHead');
        if (tmp.className.match(/(?:^|\s)leftHeadline(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }

        console.log('waypoint whas triggered');
    }
});

var waypoint2 = new Waypoint({
    element: document.getElementById('wp2'),
    handler: function() {
        var tmp = document.getElementById('osHead');
        if (tmp.className.match(/(?:^|\s)leftHeadline(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }
        console.log('waypoint whas triggered');
    }
});

var waypoint2 = new Waypoint({
    element: document.getElementById('wp3'),
    handler: function() {
        var tmp = document.getElementById('planingHead');
        if (tmp.className.match(/(?:^|\s)subhead(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }
        console.log('waypoint whas triggered');
    }
});
var waypoint3 = new Waypoint({
    element: document.getElementById('wp4'),
    handler: function() {
        var tmp = document.getElementById('controlHead');
        if (tmp.className.match(/(?:^|\s)subhead(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }
        console.log('waypoint whas triggered');
    }
});

var waypoint4 = new Waypoint({
    element: document.getElementById('wp5'),
    handler: function() {
        var tmp = document.getElementById('analyzeHead');
        if (tmp.className.match(/(?:^|\s)subhead(?!\S)/)) {
            // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
            console.log('remove hidden');
            tmp = tmp.className += ' show';
        }
        console.log('waypoint whas triggered');
    }
});


function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("nav");
        var tmp = document.getElementById('nav');
        if (distanceY > shrinkOn) {

                tmp = tmp.className = 'nav smaller';

            }

         else {
            if (tmp.className == 'nav smaller') {
            tmp = tmp.className = 'nav';
             }
        }
    });
}
