console.log('myles.js');

var waypoint0 = new Waypoint({
  element: document.getElementById('wp0'),
  handler: function() {
  var tmp = document.getElementById('hi');
  if (tmp.className.match(/(?:^|\s)hi(?!\S)/)){
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
  if (tmp.className.match(/(?:^|\s)leftHeadline(?!\S)/)){
  // tmp = tmp.className.replace(/(?:^|\s)leftHeadline(?!\S)/);
  console.log('remove hidden');
  tmp = tmp.className += ' show';
  }
    console.log('waypoint whas triggered');
  }
});
