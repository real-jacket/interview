let count = document.getElementById('calculate')

count.onclick = function () {
    let sum = document.getElementById('sum').value
    let priceArray = document.getElementById('priceArray').value.trim().split(' ')

    function compare(val1,val2) {
        return val1 - val2
    }

    priceArray.sort(compare)

    let total = 0
    for (let i = 0; i <= priceArray.length; i++){
        if (total - sum < 0) {
            total = total + parseInt(priceArray[i])
        } else if (total - sum === 0) {
            alert(total)
            return
        } else {
            alert(total - priceArray[i - 1])
            return
        }
    }

    
}


