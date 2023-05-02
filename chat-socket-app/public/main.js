const socket = io()
const msgForm = document.querySelector('#msg-form')
const msgFormInput = msgForm.querySelector('#msg')
const msgFormBtn = msgForm.querySelector('button')

socket.on('message', message => {
    console.log(message)
})

msgForm.addEventListener('submit', e => {
    e.preventDefault()
    msgFormBtn.setAttribute('disabled', 'disabled')
    const message = msgFormInput.value;
    socket.emit('sendMessage', message, error => {
        msgFormBtn.removeAttribute('disabled')
        msgFormInput.value = ''
        msgFormInput.focus()
        if(error) return console.log(error)
        console.log('Message delivered')
    })
})