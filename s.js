function run(){
    let text = document.querySelector('#inpt').value
    let result = document.querySelector('#result')


    if(text){
        let lnth = text.length
        result.innerHTML = lnth
    }else{
        alert('Please Enter Any Text')
    }

}