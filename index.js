const random=() =>{
    const  min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)
    const generetNumber =(Math.random() * (max - min + 1) + min).toFixed()

    return alert(`O ganhador é ${generetNumber}`)
}




