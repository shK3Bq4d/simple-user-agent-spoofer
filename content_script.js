console.log('coucou');
var s = document.createElement('script');
var nav = {
  appName: 'Netscape',
  appVersion: "5.0 (X11; en-US)",
  appCodeName: "Mozilla",
  osplatform: "Linux x86_64",
  oscpu: "Linux x86_64",
  product: "Gecko",
  vendor: "Ubuntu",
  vendorSub: "10.04",
  userAgent: "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.18) Gecko/20110628 Ubuntu/10.04 (lucid) Firefox/3.6.18"
};
var chrome71win = {
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    appCodeName: "Mozilla",
    product: "Gecko",
    vendor: "Google Inc.",
    vendorSub: "",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
};
var firefox64win = {
    appName: "Netscape",
    appVersion: "5.0 (Windows)",
    appCodeName: "Mozilla",
    osplatform: "undefined",
    oscpu: "Windows NT 10.0; Win64; x64",
    product: "Gecko",
    vendor: "",
    vendorSub: "",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0"
};
(function () {

    var defProp = function (prop, value) {
		console.log(prop, value);
        Object.defineProperty(window.navigator, prop, { get: function () { return value; } });
    };

	var bHO = firefox64win
	for (var kString in bHO)
	{
		defProp(kString, bHO[kString]);
	}
}());
console.log('coucou2');


var bHO = firefox64win;
scr =
    '(function() {\n' +
    '  var n = navigator\n' +
    '    , m = navigator = ' +
    // Note: we must set userAgent BEFORE setting __proto__ to prevent the
    // defined no-op setter on Navigator object.
    JSON.stringify(bHO) + '\n' +
    '  m.__proto__ = n;\n';
for (var kString in bHO)
{
	scr = scr + 'Object.defineProperty(window.navigator, "' + kString + '", { get: function () { return ' +
		JSON.stringify(bHO[kString])
		+ '; } });\n';
}
scr = scr + '})();';
console.log(scr);
s.textContent = scr;
document.documentElement.appendChild(s);
document.documentElement.removeChild(s);
console.log('coucou3');
