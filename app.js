let profile_divs = document.querySelectorAll(".influencer-mini-profile")
let profile_texts = document.querySelectorAll(".mini-profile-txt")

for (let i of profile_divs)
    i.addEventListener("click", () => {
        let img = i.querySelector(".influencer-profile-img").src
        let namee = i.querySelector("#name").innerText
        const newPageUrl = 'InfluencerProfile.html?image='+encodeURIComponent(img)+"&influencername="+encodeURIComponent(namee)
        window.location.href = newPageUrl 
        console.log(imgsrc)
        
    })

for (let i of profile_texts)
    i.addEventListener("click", ()=>{})
let img = document.querySelector("#profile-influencer-image")
let infname = document.querySelector("#influencer-name")
const transferredSrc = new URLSearchParams(window.location.search).get('image')
const named = new URLSearchParams(window.location.search).get('influencername')
img.src = transferredSrc
infname.innerText = named.substring(5)

let backButton = document.querySelector("#back_button")
let home = document.querySelector("#home")

backButton.addEventListener("click" ,()=> {
    window.history.back()
    
})

home.addEventListener("click", () => {
    window.location.href = "index.html"
})
