var i = 1
ESP6.all('#pluginBox div').forEach((x)=>x.innerHTML = `i=${i++}`)
ESP6.all('#pluginBox div:nth-child(odd)').forEach(ESP6.hide)
