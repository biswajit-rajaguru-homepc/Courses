/*function createHelloMessage() {
    

    const message = "Hello"

    function greetMessage() {
        console.log(message)
    }

    return greetMessage
}

const myHello = createHelloMessage()

//console.log(message)
myHello()
*/

function makeFunctionAray() {
    const arr = []
    for (var i = 0; i < 5; i++){
        arr.push(function () {
            console.log(i)
        })
    }
    return arr
}

const arr = makeFunctionAray()
arr[0]()
