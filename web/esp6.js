(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var E = module.exports = {
  scriptLoaded: {}
}

E.one = function (query) {
  return document.querySelector(query)
}

E.all = function (query) {
  return document.querySelectorAll(query)
}

E.plugin = function (query, html) {
  E.one(query).innerHTML = html
}

E.hide = function (node) { node.hidden = true }
E.show = function (node) { node.hidden = undefined }

E.styleLoad = function (url) {
  var ss = document.createElement('link')
  ss.type = 'text/css'
  ss.rel = 'stylesheet'
  ss.href = url
  E.one('head').appendChild(ss)
}

E.scriptLoad = function (url) {
  return new Promise(function (resolve, reject) {
    var urlLoaded = E.scriptLoaded[url]
    if (urlLoaded === true) resolve(url)
    var script = document.createElement('script')
    script.onload = function () {
      E.scriptLoaded[url] = true
      resolve()
    }
    script.onerror = function () {
      E.scriptLoaded[url] = false
      reject(new Error('Could not load script at ' + url));
    }
    script.src = url
    E.one('head').appendChild(script)
  })
}

E.ajax = function (arg) {
  var promise = new Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest()
    xhr.open(arg.method, arg.url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    var str = (arg.obj == null) ? null : JSON.stringify(arg.obj)
    xhr.send(str)
  })
  return promise
}

ESP6 = E

/*
function ajaxFormPost (path, form, callback) {
  var obj = new window.FormData(form)
  ajaxPost(path, obj, function (r) {
    if (callback != null) callback(r)
  })
}
*/

},{}]},{},[1]);
