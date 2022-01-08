

let pointer = false;
const generateNumber = () => {
    pointer = !pointer
    const randomNum = Math.floor((Math.random() * 9) + 1);
    console.log(randomNum)
    const number = document.querySelectorAll("#number")
    const info = document.querySelector("#info")
        number.forEach(num => {
            if(num.innerHTML == randomNum){
                pointer ? num.innerHTML = "x" : num.innerHTML = "O";
            } else {
                info.className = "block text-blue-600 font-bold text-center cursor-pointer mt-2";
            }
        })
    info.addEventListener("click", () => {
        window.location.reload()
    })
}

document.getElementById("myBtn").addEventListener("click", generateNumber);
