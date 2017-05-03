console.log('myles.js');
// function get_action(form) {
//   console.log(form);
//   // var tmp
//   // full_name
//   var full_name = document.getElementById('full_name').value;
//   var institution = document.getElementById('institution2').value;
//   var email_addr = document.getElementById('email_addr').value;
//   var comment = document.getElementById('comment').value;
//
//      console.log("we add a customer now,:", tmp);
//      if (form == "") {
//        form = document.getElementById("myform").innerHTML = "";
//          return;
//      } else {
//          if (window.XMLHttpRequest) {
//              // code for IE7+, Firefox, Chrome, Opera, Safari
//              xmlhttp = new XMLHttpRequest();
//             //  xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//          } else {
//              // code for IE6, IE5
//              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//          }
//          xmlhttp.onreadystatechange = function() {
//              if (this.readyState == 4 && this.status == 200) {
//                  document.getElementById("myform").innerHTML = this.responseText;
//              }
//          };
//          xmlhttp.open("POST","http://base.joev.de/work/writeToDb.php?q="+form,true);
//          xmlhttp.send();
//      }
//  document.getElementById('myform').action = "http://base.joev.de/writeToDb.php?q="+full_name+institution+email_addr+comment,true;
//
//     form.action = form_action;
// }


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

function UnCryptMailto(s, shift) {
	var n=0;
	var r="";
	for(var i=0;i<s.length;i++) {
		n=s.charCodeAt(i);
		if (n>=8364) {n = 128;}
		r += String.fromCharCode(n-(shift));
	}
	return r;
}

function linkTo_UnCryptMailto(s, shift)	{
	location.href=UnCryptMailto(s, shift);
}


function addCustomer(form) {


  console.log("we add a customer now,:", form);
    if (form == "") {
        document.getElementById("myform").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
            xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://base.joev.de/work/writeToDb.php?q="+form,true);
        xmlhttp.send();
    }
}
