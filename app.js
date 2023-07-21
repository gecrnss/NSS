const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hlink = document.querySelectorAll("#hlink")
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})
hlink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

var data = "https://script.google.com/macros/s/AKfycbxV9bz-cFZSC7LGIuWRWlmaHJhKpT5aDNiKlD4G5SUPdyoHC2oh2pNnHWlIBVZABIAF/exec";

fetch(data)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    // console.log(data);
    writedata(data)
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });




var writedata = (data)=>{

var noticeboard = document.getElementsByClassName("link-list")[0];
noticeboard.style.animationDuration =  (data.length + data.length/2 + 5)+"s";
for (let index = data.length - 1 ; index >= 0 ; index--) {
    const element = data[index];

    let comp = document.createElement("li");
    comp.style.padding = '10px'
    comp.innerHTML =`<a href='${element.link}' >${element.title + " || "+"( " + element.date + " )"}</a>`
    noticeboard.appendChild(comp);
}
}
