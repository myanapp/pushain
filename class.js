class getStyle {
  constructor(parameter) {
    this.isReady = false;

    var promise = new Promise(resolve => {
      Request = new XMLHttpRequest();
      Request.onreadystatechange = ({ target }) => {
        if (target.readyState == 4) {
          this.resolve(target.response);
        }
      };
      Request.open(`GET`, `/ajax/${parameter}/style.css`);
      Request.send();
    }); /* End of Constructor */
  }
}

class getContent {
  constructor(parameter) {
    this.isReady = false;

    var promise = new Promise(resolve => {
      Request = new XMLHttpRequest();
      Request.onreadystatechange = ({ target }) => {
        if (target.readyState == 4) {
          this.resolve(target.response);
        }
      };
      Request.open(`GET`, `/ajax/${parameter}/index.html`);
      Request.send();
    }); /* End of Constructor */
  }
}

class getScript {
  constructor(parameter) {
    this.isReady = false;

    var promise = new Promise(resolve => {
      Request = new XMLHttpRequest();
      Request.onreadystatechange = ({ target }) => {
        if (target.readyState == 4) {
          this.resolve(target.response);
        }
      };
      Request.open(`GET`, `/ajax/${parameter}/script.js`);
      Request.send();
    }); /* End of Constructor */
  }
}
