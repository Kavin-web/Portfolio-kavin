var firstName = "kavin" + " kumaar"
console.log(firstName)

// let lastName = "kumaar"
// console.log(lastName)



// About Page

const about = document.getElementById("abo")
about.style.color = "black";
about.style.fontFamily = "Times New Roman', Times, serif"
about.style.fontSize = "50px"
about.style.marginTop = "20px"


const kavin = document.getElementById("kavin-img")
kavin.style.marginTop = "50px"



let personal = "Hi, I am Kavin Kumaar From Kumbakonam In India. My Age is 20 Old Boy. I am an Collage Students. I am Enthusiast in Web Developement. I am a Qualified and Professional Web Developer. I Created  Mini_projects in Web Development Field in my Git Hub Accounts. Easy Way To Communicate With Others. Strong and Creative Analiytcs Skills. In My Terms Achived My Dreams and Goals Lot."
const web = document.createElement("div")
web.innerHTML = "personal"
const kavinpersonal = document.getElementById("kavinpersonal")
kavinpersonal.append(personal)

kavinpersonal.style.marginTop = "40px"
kavinpersonal.style.marginLeft = "20px"
kavinpersonal.style.color = "black";
kavinpersonal.style.fontSize = "20px"
kavinpersonal.style.fontWeight = "800"
kavinpersonal.style.fontFamily = "sans serif"



// skillss

const skills = document.getElementById("text-center")
skills.style.color = "black"
skills.style.fontFamily = "Times New Roman', Times, serif"
skills.style.fontWeight = "bold"
skills.style.marginTop = "50px"
skills.style.fontSize = "50px"




// Hire me
const content = document.getElementById("content")
content.style.color = "black"
content.style.fontFamily = "Times New Roman', Times, serif"
content.style.fontWeight = "bold"
content.style.marginTop = "50px"
content.style.fontSize = "50px"



// pop

function pop(){
    alert("Welcome! Your Message will be send to Admin")
}







