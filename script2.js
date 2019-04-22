history.go(0)
console.log('selectedItem: ' + selectedItem)
console.log(Date())

var productIndex = 2
var buttonClassName = 'el-button el-button--default el-button--small'

var list = document.getElementsByClassName("row");
    for (var i = 1 ; i < list.length; i++) {
        item = list[i]
        product= item.getElementsByClassName('text')[productIndex].textContent
        if (product.includes(selectedItem)) {
            button = item.getElementsByClassName(buttonClassName)
            console.log('button: ' + button[0])
            if(typeof button[0] != 'undefined') {
                console.log('find at ' + i)
                // var event = document.createEvent("MouseEvents");
            //     event.initEvent("click", false, true);
            // button[0].click();
            }
        }
    }

