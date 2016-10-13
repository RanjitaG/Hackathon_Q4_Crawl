var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
 
var clicks = [];
var client = webdriverio.remote(options).init()

    .url('http://www.klier-karriere.de/jobs')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .elements('a').then(function(res) {
        console.log("its coming here")
        res.value.forEach(function (ele) {
            clicks.push(
                client
                    .elementIdClick(elem.ELEMENT)
                    .pause(5000)
                    .back()
                    .pause(2000)

            );
        }) 
    })
    // .click(".jsopenwindow").then(function (argument) {
    //     console.log("PPPPPPPPPPPPPPPP");
    // })

    
    // .waitForVisible('.jsopenwindow',10000).then(function(){
    //     client.click(".jsopenwindow").then(function (argument) {
    //         console.log("PPPPPPPPPPPPPPPP");
    //     })
    // })
   

    .end();


