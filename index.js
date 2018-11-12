var loader = new getStyle("heart-btn");
loader.resolve = res => {
  var elem = document.createElement("style");
  var node = document.querySelector("main style#default");
  var text = document.createTextNode(res);
  elem.append(text);
  node.appendChild(elem);
};

var content = new getContent("heart-btn");
content.resolve = res => {
  var elem = document.createElement("div");
  var node = document.querySelector("main section#default");
  elem.innerHTML = res;
  node.appendChild(elem);
};

var script = new getScript("heart-btn");
script.resolve = res => {
  try {
    eval(res);
  } catch (error) {
    console.debug(error.message);
  }
};
