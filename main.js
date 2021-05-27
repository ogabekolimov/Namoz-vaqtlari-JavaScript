

getData('http://api.aladhan.com/v1/timingsByAddress?address=Tashkent&school=2')


async function getData (url){
    let response = await fetch(url)
    let encoding = await response.json()
    renderData(encoding)
}


const tbody = document.querySelector('.tbody')

function renderData(malumot){
    tbody.textContent = ""
    let timings = malumot.data.timings
    for(let item in timings){
        console.log(item, timings[item])
    }
    
}