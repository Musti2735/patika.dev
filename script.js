let inputElement = document.querySelector('#task');
let inputBtn = document.querySelector('#liveToastBtn')
let list = document.querySelector('#list')

const alertDOM = document.querySelector('#liveToast')

inputBtn.addEventListener("click", addElemet)


function addElemet(e) { //Listeye eleman ekleme fonksiyonu
    e.preventDefault()
    let info = document.createElement('li') //li elemanı oluşturma
    info.innerHTML = inputElement.value
    let newInfo = info.innerHTML
    let trimInfo = newInfo.trim()
    console.log(newInfo)

    if (trimInfo.length == 0 || newInfo == '') { //Boş veri için uyarı
        console.log('giriş')
        $('#liveToast2').toast('show')
    }
    else { // Normal yapılacak işlemler
        list.appendChild(info)
        inputElement.value = ''

        let xBtn = document.createElement('span') // li elemanı içinde btn oluşturma
        let text = document.createTextNode('\u00D7')
        xBtn.classList.add("close")
        info.appendChild(xBtn)
        xBtn.appendChild(text)
        $('#liveToast').toast('show') //eklendi uyarısı
        var close = document.querySelector('#close')

        xBtn.addEventListener('click', deleteLi) // li elemanını silme
        function deleteLi() {
            list.removeChild(info)
        }
    }
    list.addEventListener('click', checked) // Checked fonksiyonu
    function checked(item) {
        if (item.target.tagName = 'li') {
            item.target.classList.toggle('checked')
        }
    }
}


