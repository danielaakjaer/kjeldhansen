window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#495057",
                "text": "#ffffff"
            },
            "button": {
                "background": "#4988dc"
            }
        },
        "theme": "classic",
        "position": "bottom-right",
        "type": "opt-out",
        "content": {
            "dismiss": "Got it!",
            "link": "Learn more",
            "message": "We use cookies. Information about our use of cookies can be found here:",
            "href": "https://connectedcars.io/cookie-policy/en"
        }
    })
});
