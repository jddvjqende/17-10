const callback = (element, index, arreiglo ) => {
    console.log(element, index, arreiglo)
    return element * 2

}
const arr = [1, 5, 6, 8].map(callback)
console.log(arr)
//map recorre un arreiglo y devuelve un arreiglo/