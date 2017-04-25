var R = { map: new Map() }

var E = module.exports = {
  scriptLoaded: {},
  router: R
}

R.route = function (regexp, f) {
  R.map.set(regexp, f)
  return this
}

R.go = function (hash) {
  window.location.hash = '#' + hash
  return this
}

R.init = function () {
  window.onhashchange = function () {
    var hash = window.location.hash.trim().substring(1)
    for (let [regexp, f] of R.map) {
      var m = hash.match(regexp)
      if (m) {
        f(m, hash)
        break
      }
    }
  }
  return this
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

E.onready = function (init) {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      console.log('onload')
      init()
      window.onhashchange()
      resolve()
    }
  })
}

E.init = function () {
  R.init()
}

E.init()

ESP6 = E

/*
function ajaxFormPost (path, form, callback) {
  var obj = new window.FormData(form)
  ajaxPost(path, obj, function (r) {
    if (callback != null) callback(r)
  })
}
*/
