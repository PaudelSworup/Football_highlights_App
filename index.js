const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd34f1a9574msh16d162af0ffd589p169328jsn75789ba82ebe',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
};

const url = "https://free-football-soccer-videos.p.rapidapi.com/"

async function getData(ID,val){
    leagueID = document.getElementById(ID)
    switchButton(ID)
    const response = await fetch(url,options);
    const data = await response.json()
    // console.log(data)
    data.map((getData=>{
        const{competition,date,embed,side1,side2,thumbnail,title,url,videos} = getData
        if(competition.id === val){
            // console.log(competition.id)
            // console.log(competition.name)
            // console.log(title)
            // console.log(date)
            // console.log(side1)
            // console.log(embed)
            let nepaliDate = new Date(date)
            let nepaliTime = nepaliDate.toLocaleString('en-US',{timeZone:"Asia/Kathmandu", timeStyle:"short"})
            let month =nepaliDate.getMonth()
            month = month+1
            let year = nepaliDate.getFullYear()
            let day = nepaliDate.getDate()
            console.log(day)
            leagueID.innerHTML = leagueID.innerHTML + `<div class="card shadow-lg m-3 mycard" id="cards">
            <div class="detail">
                <div class="sides">
                    <h2 class="text-dark">Highlights</h2>
                    <p class="text-dark">${title}</p>
                    <p class="text-dark">${year}-${month}-${day} &nbsp; T:${nepaliTime}</p>  
                </div>    
            </div>
        </div>
        <div class="col-md-6 m-auto">
            ${embed}    
        </div>`
        return
        } 
    }))
}

let bars = document.getElementById('bar')
let cross = document.getElementById('cross')
let navToggle = document.getElementById('navToggle')
let tl = document.getElementById('tl')
const barsToggle = () =>{
    if((bars.style.display = 'block') && (navToggle.style.display = 'none') ){
        bars.style.display = 'none'
        cross.style.display = 'block'
        navToggle.style.display = 'block'
        tl.style.margin = 'auto'
    }else{
        bars.style.display = 'block' 
        navToggle.style.display = 'none'
    }    
}

const crossToggle = () =>{
    if((cross.style.display = 'block') && (navToggle.style.display = 'block') ){
        cross.style.display = 'none'
        bars.style.display = 'block'
        navToggle.style.display = 'none'
        tl.style.margin = '0px'
    }else {
        cross.style.display = 'block' 
        navToggle.style.display = 'block'
    }   
}

const resizeListener =()=> {
    if(window.innerWidth > 993){
        navToggle.style.display = 'block'
    }else{
        navToggle.style.display = 'none' 
    }
  }
window.addEventListener('resize', resizeListener)

let italy = document.getElementById('italy') 
let england = document.getElementById('england')
let spain = document.getElementById('spain')
let germany = document.getElementById('germany')
let france = document.getElementById('france')
let europe = document.getElementById('europe')
function serieA(){
   if(italy.style.display = 'none'){
    italy.style.display = 'block'
   }
}

function switchButton(id){
    console.log(id)
    switch(id){
        case 'italy':
        italy.style.display = 'block'
        france.style.display = 'none'
        england.style.display = 'none'
        spain.style.display = 'none'
        germany.style.display = 'none'
        europe.style.display = 'none'
        break

        case 'france':
            france.style.display = 'block'
            italy.style.display = 'none'
            england.style.display = 'none'
            spain.style.display = 'none'
            germany.style.display = 'none'
            europe.style.display = 'none'
        break

        case 'spain':
            spain.style.display = 'block'
            france.style.display = 'none'
            england.style.display = 'none'
            italy.style.display = 'none'
            germany.style.display = 'none'
            europe.style.display = 'none'
        break

        case 'england':
            england.style.display = 'block'
            france.style.display = 'none'
            italy.style.display = 'none'
            spain.style.display = 'none'
            germany.style.display = 'none'
            europe.style.display = 'none'
        break

        case 'germany':
            germany.style.display = 'block'
            france.style.display = 'none'
            england.style.display = 'none'
            spain.style.display = 'none'
            italy.style.display = 'none'
            europe.style.display = 'none'
        break

        case 'europe':
            europe.style.display = 'block'
            france.style.display = 'none'
            england.style.display = 'none'
            spain.style.display = 'none'
            italy.style.display = 'none'
            germany.style.display = 'none'
        break

        default:
            italy.style.display = 'none'
            spain.style.display = 'none'
            england.style.display = 'none'
            germany.style.display = 'none'
            france.style.display = 'none'
            break

    }
}









