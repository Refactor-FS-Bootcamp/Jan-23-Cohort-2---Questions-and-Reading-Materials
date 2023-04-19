const locationForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#msg')
const card = document.querySelector('#card')

locationForm.addEventListener('submit', e => {
    e.preventDefault()
    const locationId = search.value
    msg.textContent = 'Loading...'
    fetch(`https://finalspaceapi.com/api/v0/location/${locationId}`).then(response => {
        response.json().then(data => {
            msg.textContent = ''
            card.innerHTML = `
                <div class="card-container">
                    <img src="${data.img_url}" alt="${data.name}" />
                    <h1>${data.name}</h1>
                    <ul>
                        <li><strong>Type:</strong> ${data.type}</li>
                        <li><strong>Inhabitants #1:</strong> ${data.inhabitants[0]}</li>
                        <li><strong>Inhabitants #2:</strong> ${data.inhabitants[1]}</li>
                    </ul>
                </div>
            `
        })
    })
})