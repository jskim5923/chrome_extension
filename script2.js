history.go(0)

console.log(Date())
var productIndex = 2
var buttonClassName = 'el-button el-button--default el-button--small'

var list = document.getElementsByClassName("row");
for (var i = 1 ; i < list.length; i++) {
    item = list[i]
    product= item.getElementsByClassName('text')[productIndex].textContent
    var checkArray = checkedItem.split(',')
    for(var j = 0; j < checkArray.length; j++) {
        if (product.includes(checkArray[j])) {
            button = item.getElementsByClassName(buttonClassName)
            // console.log('find at ' + i)
            if(typeof button[0] != 'undefined') {
                console.log('find ' + checkArray[i] + ' at ' + i)
                button[0].click();
            }
        }
    }
}

