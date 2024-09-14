const btn = document.getElementById('new-color');
const changeLetter = document.getElementById('current-color');

const hexValues = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function getHexValues(){
    const a = Math.floor(Math.random()*hexValues.length);
    const b = hexValues[a];
    return b;
}
function getString(stringLength){
    let c = '';
    for(let i=0;i<stringLength;i++){
        c = c+getHexValues();
    }
    return c;
}
btn.addEventListener('click',function(){
    const d = '#' + getString(6);
    changeLetter.innerHTML = d;
    document.body.style.backgroundColor=d;
})