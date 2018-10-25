let count = document.getElementById('calculate')

count.onclick = function () {
    let sum = document.getElementById('sum').value
    let priceArray = document.getElementById('priceArray').value.split(' ')

    function compare(val1,val2) {
        return val1 - val2
    }

    priceArray.sort(compare)

    var total = 0
    for (let i = 0; i < priceArray.length; i++){
        if (total - sum < 0) {
            total = total + parseInt(priceArray[i])
        } else {
            console.log(total - priceArray[i - 1])
            return
        }
    }

    
}


