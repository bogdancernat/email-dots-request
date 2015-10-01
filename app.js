var emails = [];

allDots("gmailaddress");

postData(0);

function postData(i) {
  var request = require('request');
  var postUrl = "http://example.com";

  var formData = {};
  var headers = {};

  request.post(postUrl, {
    form: formData,
    headers: headers
  }, function (error, httpResponse, body) {
    if (!error) {
      console.log(body);
    } else {
      console.log(error);
    }

    i++;
    if (i < emails.length) {
      postData(i);
    }
  });
}

function allDots(string) {
  for (var i = 0; i < string.length; i++) {
    insertDots(string, i);
  };
}

function insertDots(string, at) {
  if (at == 0) {
    emails.push(string);
  } else {
    var newString = string.substr(0, at) + '.' + string.substr(at);

    for (var i = 0; i < at; i++) {
      insertDots(newString, i);
    };
  }
}
