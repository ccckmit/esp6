var E = ESP6
var i = 0
E.all('div').forEach((x)=>x.innerHTML = 'i=' + i++)
E.all('.odd').forEach(E.hide)