// top of file ...
const fs = require('fs');
const path = require('path');
const app = require('express')();
const port = 5000

// below rule for  '../react-ui/build' ...

var appleAppSiteAssociationContents = fs.readFileSync(path.resolve(__dirname, './assets/apple-app-site-association'), 'utf8');

// Host apple-app-site-association file for Apple iOS Associated Domains https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1
app.get(['/apple-app-site-association', '/.well-known/apple-app-site-association'], function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(appleAppSiteAssociationContents);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})