document.addEventListener("DOMContentLoaded", function () {
  const themes = document.getElementById("state");
  window.onload = function () {    
      const currentTheme = localStorage.getItem("savedTheme");
      if (currentTheme === "true") {
          themes.checked = true;
          document
              .querySelectorAll("body")
              .forEach(sections => sections.classList.add("dark"));
          document
              .querySelectorAll(".content")
              .forEach(content => content.classList.add("drk"));
      } else if (currentTheme === "false") {
          themes.checked = false;
          document
              .querySelectorAll("body")
              .forEach(sections => sections.classList.remove("dark"));
          document
              .querySelectorAll(".content")
              .forEach(content => content.classList.remove("drk"));
      }
      document.querySelectorAll(".active-btn").forEach(btn => document.getElementById("dropdown-label").innerHTML += btn.textContent)
  };
  themes.addEventListener("input", function () {
    if (this.checked) {
        document
            .querySelectorAll("body")
            .forEach(sections => sections.classList.add("dark"));
        document
            .querySelectorAll(".content")
            .forEach(content => content.classList.add("drk"));
    } else {
        document
            .querySelectorAll("body")
            .forEach(sections => sections.classList.remove("dark"));
        document
            .querySelectorAll(".content")
            .forEach(content => content.classList.remove("drk"));
    }
    localStorage.setItem("savedTheme", themes.checked ? "true" : "false");
});
  var currrenttime = new Date();
    var hours = currrenttime.getHours().toString().padStart(2, "0");
    var minutes = currrenttime.getMinutes().toString().padStart(2, "0");
    var timeFormat = hours + ":" + minutes;
    document.getElementById("clock").innerHTML = timeFormat;
    const currentYear = document.getElementById("year");
    setInterval(currrenttime, 1000);
    currentYear.textContent = new Date().getFullYear();
    const buttons = document.querySelectorAll(".nav");
    const tabs = document.querySelectorAll(".main");
    let currentImage = 0
        const images = document.querySelectorAll(".img-box")
        const prev = document.getElementById("prev")
        const next = document.getElementById("next")
        const timer = 5000
        function showSlide(index){
          if(index >= images.length){
            currentImage = 0
          }else if(index < 0){
            currentImage = images.length -1
          }else{
            currentImage = index
          }
          const offset = -currentImage * 100
        document.getElementById("carousel").style.transform = `translateX(${offset}%)`
        images.forEach(image => image.classList.remove("current-img"))
        images[currentImage].classList.add("current-img")
        }

        function nextSlide(){
          showSlide(currentImage + 1)
        }
        function prevSlide(){
          showSlide(currentImage - 1)
        }
        let autoSlide = setInterval(nextSlide, timer)
        next.addEventListener("click", function(){
          nextSlide()
          resetAll()
        })
        prev.addEventListener("click", function(){
          prevSlide()
          resetAll()
        })
        function resetAll(){
          clearInterval(autoSlide)
          autoSlide = setInterval(nextSlide, timer)
        }
    function activateTab(index) {
        buttons.forEach(btn => btn.classList.remove("active-btn"));
        tabs.forEach(tb => tb.classList.remove("active-tab"));
        buttons[index].classList.add("active-btn");
        tabs[index].classList.add("active-tab");
    }
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            activateTab(index);
            document.getElementById("dropdown-label").innerHTML = "<i class='bx bx-chevron-down'></i>" + this.textContent
        });
    });
});
