# ESP6 -- ES6 Single Page Application Framefork

## Install

For node.js 

```
$ npm install esp6
```

For browser, download the [esp6.js](web/esp6.js) file and link into your html.


## Demo

```
$ git clone https://github.com/ccckmit/esp6.git
$ cd esp6
$ npm install --dev
$ npm start
```

The server started at `http://localhost:3000/` , visiting the following page for demo program.

* [Example 1 : DOM](web/ex1-dom/) :  `http://localhost:3000/ex1-dom/main.html`
* [Example 2 : router](web/ex2-router/) :  `http://localhost:3000/ex2-router/main.html`
* [Example 3 : blog](web/ex3-blog/) :  `http://localhost:3000/ex3-blog/main.html`


<!--
## Demo 1


File : [main.html](web/main.html)

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

[plugin.html]:web/plugin.html

The main() load [plugin.html] and put into `<div id="pluginBox">...</div>`

File : [plugin.html]

```html
<div>Hi!</div>
<div>Hi!</div>
<div>Hi!</div>
<div>Hi!</div>
<div>Hi!</div>
<div>Hi!</div>
<div>Hi!</div>
```

[plugin.js]:web/plugin.js

After that, load [plugin.js] and run.

File : [plugin.js]

```js
var i = 1
ESP6.all('#pluginBox div').forEach((x)=>x.innerHTML = `i=${i++}`)
ESP6.all('#pluginBox div:nth-child(odd)').forEach(ESP6.hide)
```

That's why the page show only 2,4,6 and without 1,3,5,7 as following.

```
i=2
i=4
i=6
```
-->