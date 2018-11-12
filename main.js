const DOM = {
  audio: [],
  event: []
};

const ETh = {
  click: elem => {
    var audio = new Audio();
    audio.type = `audio/ogg`;
    audio.src = `/assets/audio/bgmusic.ogg`;
    audio.title = `[XNONYMOUSE]`;
    audio.play();

    var pop = autoClick(audio, `default`);
    console.debug(pop);

    elem.removeAttribute(`onclick`);
    return audio;
  }
};

function autoClick(audio, elem) {
  var i = 0;
  var elem = document.querySelector(`section#${elem} #heart`);

  if (window.location.search.slice(1).split("event=")[1]) {
    i = window.location.search.slice(1).split("event=")[1];
  }
  var int = setInterval(function() {
    var current = audio.currentTime;
    var timing = ("" + current.toFixed(2)).split(".").join("");
    var n = [5, 10, 16, 21, 27, 32, 38, 43, 49, 54, 59, 64, 68, 72, 78];
    var r = 0;
    while (r < n.length) {
      if (i == n[r]) {
        click();
        DOM.audio.push(current);
        console.log(i, { loaded: current });
      }
      r++;
    }

    console.log(timing);

    if (i > 78) {
      if (!window.v9034jfeo) {
        window.v9034jfeo = [1];
      }
      switch (window.v9034jfeo.length) {
        case 5:
          window.v9034jfeo = [1];
          console.log("restart", window.v9034jfeo);
          click();
          break;
        default:
          window.v9034jfeo.push(1);
          console.log(window.v9034jfeo);
      }
    }
    i++;
  }, 510);

  function click() {
    elem.click();
  }
}

/* *
n = Number(("" + n.toFixed(2)).split(`.`)[1].slice(1));

if (n == 2) {
  elem.click();
}

if (n == 5) {
  elem.click();
}

if (n == 9) {
  elem.click();
} */
