// pulling users location
async function getCoords(){
    pos= await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPostion(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
console.log(getCoords())
// adding map to application
const myMap = {
    coordinates: []
    businesses: []
    map: {}
    markers: {}
}
makeMap (){
   this.map = L.map('map', {
        center: this.coordinates,
        zoom: 12,
    })
}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(this.map)

// adding a marker 
const marker = L.marker(this.coordinates)
marker.addTo(myMap).bindPopup('<p1><b>You are Here</b></p1>').openPopup()

addMarkers(){
    for (let i=0, i< this.business.length; i++) {
        this.markers = L.marker([
            this.business[i].latitude
            this.business[i].longitude
        ])
        .bindPopup (`<p>${this.business[i].name}</p>`)
        .addTo(this.map)
    }
}
//attempting foursquare 
async function getFoursquare(business){
    const options= {
        method: 'get'
        headers: {
        accept:'application/json' 
        authorization: 'insert pseudo token'
        }
    }
    let limit = 5
    let latitude = myMap.coordinates[0]
    let longitude = myMap.coordinates[1]
    let response = await fetch ()
    let data = await response.text()
    let parsedData = parsedData.results
    return businesses
}