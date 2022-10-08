const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=1`)
    let data = await response.json()
    let color = data.colors[0].value
    
    body.style.setProperty("background-color", color);
}
