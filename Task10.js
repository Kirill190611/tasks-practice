//Promises

doItAfter(5).then( () => console.log('finish'))

function doItAfter(seconds) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve()
        }, seconds * 1000)
    })
}