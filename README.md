# ESP6 -- ES6 Single Page Application Framefork

## Install

```
$ npm install esp6
```

## Demo

```
$ git clone https://github.com/ccckmit/esp6.git
$ cd esp6
$ npm install --dev
$ npm start
```

File : <main.html>

```js
<!doctype html>
<html>
<head></head>
<body>
<div id="pluginBox"></div>
<script src="esp6.js"></script>
<script>
async function main() {
  var pluginHtml = await ESP6.ajax({method:'GET', url:'plugin.html'})
  ESP6.plugin('#pluginBox', pluginHtml)
  await ESP6.scriptLoad('plugin.js')
}

main()
</script>
</body>
</html>
```

Visiting http://localhost:3000/main.html , you will see :

```
i=2
i=4
i=6
```

## What happen ?

The main() load <web/plugin.html> and put into <div id="pluginBox">...</div>

File : <web/plugin.html>

```html
<div class="odd">Hi!</div>
<div>Hi!</div>
<div class="odd">Hi!</div>
<div>Hi!</div>
<div class="odd">Hi!</div>
<div>Hi!</div>
<div class="odd">Hi!</div>
```

After that, load <web/plugin.js> and run.

File : <web/plugin.js>

```js
var i = 1
ESP6.all('#pluginBox div').forEach((x)=>x.innerHTML = `i=${i++}`)
ESP6.all('#pluginBox .odd').forEach(ESP6.hide)
```

That's why the page show only 2,4,6 and without 1,3,5,7 as following.

```
i=2
i=4
i=6
```
