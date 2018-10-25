 var createbox = document.getElementById('generate')
//生成盒子
createbox.onclick = function () {
    var n = document.getElementById('number').value
    var box = document.getElementById('box')
    for (let i = 0; i < n*n; i++){
        let div = document.createElement('div')
        div.style.width = 400 / n + 'px'
        div.style.height = 400 / n + 'px'
        box.appendChild(div)

        //监听数遍进入变红，移除恢复
        div.addEventListener('mouseenter', function (e) {
            if (!findClass(e.target, 'active')) {
                e.target.classList.add('enter')
            }
            
        })
        div.addEventListener('mouseleave', function (e) {
            if (!findClass(e.target, 'active')) {
                e.target.classList.remove('enter')
            }
        })

    }
}

//实现点击变蓝，再次点击恢复
box.addEventListener('click', function (e) {
    if (!findClass(e.target, 'active')) {
        e.target.classList.add('active')
    } else {
        e.target.classList.remove('active')
    }

})

//封装找到className 函数
function findClass(element,className) {
    var classNames = element.classList
    var active = false
    for (var i = 0; i < classNames.length; i++) {
        if (classNames[i] === className) {
            active = true
        }
    }
    return active
}