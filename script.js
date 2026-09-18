var typing = document.getElementById("typing");

if (typing) {

  var words = [
    "Developer",
    "Designer",
    "Data Annotator"
  ];

  var wordIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function typeEffect() {

    var word = words[wordIndex];

    if (!deleting) {

      typing.textContent =
        word.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === word.length) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
      }

      setTimeout(typeEffect, 150);

    } else {

      typing.textContent =
        word.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {

        deleting = false;

        wordIndex =
          (wordIndex + 1) % words.length;

        setTimeout(typeEffect, 300);

        return;
      }

      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
}


/* CLOCK */

var ticks = document.getElementById("ticks");

if (ticks) {

  var svgNS = "http://www.w3.org/2000/svg";

  for (var i = 0; i < 60; i++) {

    var big = i % 5 === 0;

    var a = i * 6 * Math.PI / 180;

    var r1 = big ? 76 : 83;
    var r2 = 88;

    var l =
      document.createElementNS(svgNS, "line");

    l.setAttribute(
      "x1",
      100 + Math.sin(a) * r1
    );

    l.setAttribute(
      "y1",
      100 - Math.cos(a) * r1
    );

    l.setAttribute(
      "x2",
      100 + Math.sin(a) * r2
    );

    l.setAttribute(
      "y2",
      100 - Math.cos(a) * r2
    );

    l.setAttribute(
      "class",
      big ? "tick big" : "tick"
    );

    ticks.appendChild(l);
  }


  var hh = document.getElementById("hh");
  var hm = document.getElementById("hm");
  var hs = document.getElementById("hs");


  function setHand(el, deg) {

    el.setAttribute(
      "transform",
      "rotate(" + deg + " 100 100)"
    );

  }


  function tick() {

    var d = new Date();

    var s = d.getSeconds();

    var m =
      d.getMinutes() + s / 60;

    var h =
      (d.getHours() % 12) + m / 60;

    setHand(hs, s * 6);

    setHand(hm, m * 6);

    setHand(hh, h * 30);

  }


  tick();

  setInterval(tick, 1000);
}


/* FOOTER YEAR */

var year = document.getElementById("yr");

if (year) {
  year.textContent = new Date().getFullYear();
}