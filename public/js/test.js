// function myfun() {
//     console.log('S1')
// }
// function myfun2(){
//     console.log('S2')
// }


// export { //很关键
//     myfun,myfun2
// }
var myfun = {
    fn1:function(a){console.log(a)},
    fn2:function(b){console.log(b)}
}
module.exports = myfun