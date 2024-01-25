document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('main');

    document.addEventListener('keydown', function (event) {
        const keyName = event.key;
        const asciiValue = event.keyCode;

        if(event.key=='f5'){
            event.preventDefault();
            keyName=event.key;
            asciiValue=event.keyCode;
            
        }

         appContainer.innerHTML = 
            `<p>You pressed <span id="key-name">${keyName}</span></p>
            <p> <span id="ascii-value">${asciiValue}</span></p>`
        
    });

    document.addEventListener('keyup', function () {

    });
});