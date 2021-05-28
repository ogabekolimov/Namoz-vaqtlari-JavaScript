const selectElement = document.querySelector(".city")

selectElement.addEventListener('change', evt =>{
    getData(evt.target.value)
})

getData("Tashkent")


async function getData (shahar){
    let response = await fetch('http://api.aladhan.com/v1/timingsByAddress?address=${shahar}&school=1')
    let encoding = await response.json()
    renderData(encoding)
}


const tbody = document.querySelector('.tbody')

let obj = {
    x: 1
}

function renderData(malumot){
    tbody.textContent = ""
    let timings = malumot.data.timings
    for(let item in timings){
        let newTrElement = document.createElement('tr')
        let newNameElement = document.createElement('td')
        let newTimeElement = document.createElement('td')

        newNameElement.textContent = item
        newTimeElement.textContent = timings[item]

        newTrElement.appendChild(newNameElement)
        newTrElement.appendChild(newTimeElement)
        
        tbody.appendChild(newTrElement)
    }
    
}