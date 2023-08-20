console.log("Script added yes")
document.querySelector(".cross").style.display = "none"
document.querySelector("hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebargo")
})