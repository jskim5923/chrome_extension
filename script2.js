window.location.assign('https://www.bizhows.com/help_design/listing.jsp')

console.log(Date())
var productIndex = 2
var mobileNoIndex = 8
var buttonClassName = 'el-button el-button--default el-button--small'


var list = document.getElementsByClassName("row");
for (var i = 1 ; i < list.length; i++) {
    item = list[i]
    product= item.getElementsByClassName('text')[productIndex].textContent
    mobile_no = item.getElementsByClassName('text')[mobileNoIndex].textContent
    console.log('searchNumber: ' + searchNumber)
    console.log('mobile_no: ' + mobile_no)
    var checkArray = checkedItem.split(',')
    for(var j = 0; j < checkArray.length; j++) {
        if (product.includes(checkArray[j])
        && numberCheck(mobile_no)) {
            button = item.getElementsByClassName(buttonClassName)
            // console.log('find at ' + i)
            if(typeof button[0] != 'undefined') {
                console.log('find ' + checkArray[i] + ' at ' + i)
                button[0].click();
            }
        }
    }
}

function numberCheck(number) {
    console.log('numberCheck:'+number)
    if(searchNumber.length > 0) {
        var result = number.includes(searchNumber)
        console.log('result' + result)
        return result
    } else {
        return true
    }
}