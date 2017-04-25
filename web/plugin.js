var i = 1
ESP6.all('#pluginBox div').forEach((x)=>x.innerHTML = `i=${i++}`)
ESP6.all('#pluginBox .odd').forEach(ESP6.hide)