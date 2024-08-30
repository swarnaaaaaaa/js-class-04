const passToggler = document.querySelector('.passwordToggler')
const inputPass = document.querySelector('.input')

const passTogglerFun = ()=>{
    //--TERNARY OPERATOR---//

    // inputPass.type == 'password'? inputPass.type='text': inputPass.type='password'

    // ---  DESTRUCTURING---//
    let {type}=inputPass

    type == 'password'? type='text': type='password'
    inputPass.type = type


    //--- TERNERY--//
    inputPass.type=='password'?
    passToggler.innerHTML='<i class="bi bi-eye"></i>':
    passToggler.innerHTML='<i class="bi bi-eye-slash"></i>'
     
    // ---IF ELSE--//

    // if(inputPass.type == 'password'){
    //     inputPass.type = 'text'
    // }else{
    //     inputPass.type = 'password'
    // }
    
}
passToggler.addEventListener('click',passTogglerFun)

const showTogglerBtn =()=>{
inputPass.value.length > 6 ? passToggler.classList.add('show'):passToggler.classList.remove('show')
}
inputPass.addEventListener('keyup',showTogglerBtn)

const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event)=>{
    const {pageX:left,pageY:top}=event
    cursor.style.top=top+'px'
    cursor.style.left=left+'px'

    cursorSm.style.top=top+'px'
    cursorSm.style.left=left+'px'
}

window.addEventListener('mousemove',customMouseCursor)