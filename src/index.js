

module.exports = function towelSort (matrix) {
    if(!matrix){
        return []
    }
    let newArr = []
    let swtch = true
    matrix.forEach(arr=> {
        if(swtch){
            newArr = newArr.concat(arr)
            swtch = !swtch
        } else if(!swtch) {
            newArr = newArr.concat(arr.reverse())
            swtch = !swtch
        }
    })

    return newArr;
}




