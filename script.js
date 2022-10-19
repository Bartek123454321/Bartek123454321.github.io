function revealContact() {
  var contact = document.querySelectorAll(".ContactContainer");

  for (var i = 0; i < contact.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = contact[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      contact[i].classList.add("active");
    } else {
      contact[i].classList.remove("active");
    }
  }
}


function revealSocial() {
  var social = document.querySelectorAll(".SocialmediaContainer");

  for (var i = 0; i < social.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = social[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      social[i].classList.add("active");
    } else {
      social[i].classList.remove("active");
    }
  }
}


function revealFooter() {
  var footer = document.querySelectorAll(".footerp");

  for (var i = 0; i < footer.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = footer[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      footer[i].classList.add("active");
    } else {
      footer[i].classList.remove("active");
    }
  }
}


function revealProject1() {
  var item1 = document.querySelectorAll(".item1");

  for (var i = 0; i < item1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = item1[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      item1[i].classList.add("active");
    } else {
      item1[i].classList.remove("active");
    }
  }
}

function revealProject2() {
  var item2 = document.querySelectorAll(".item2");

  for (var i = 0; i < item2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = item2[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      item2[i].classList.add("active");
    } else {
      item2[i].classList.remove("active");
    }
  }
}

function revealProject3() {
  var item3 = document.querySelectorAll(".item3");

  for (var i = 0; i < item3.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = item3[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      item3[i].classList.add("active");
    } else {
      item3[i].classList.remove("active");
    }
  }
}

function revealProject4() {
  var item4 = document.querySelectorAll(".item4");

  for (var i = 0; i < item4.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = item4[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      item4[i].classList.add("active");
    } else {
      item4[i].classList.remove("active");
    }
  }
}

function revealProject5() {
  var item5 = document.querySelectorAll(".item5");

  for (var i = 0; i < item5.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = item5[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      item5[i].classList.add("active");
    } else {
      item5[i].classList.remove("active");
    }
  }
}

function revealProject6() {
  var iframe = document.querySelectorAll("iframe");

  for (var i = 0; i < iframe.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = iframe[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      iframe[i].classList.add("active");
    } else {
      iframe[i].classList.remove("active");
    }
  }
}

function revealProjectNapis() {
  var napis = document.querySelectorAll(".ProjectNapis h2");

  for (var i = 0; i < napis.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = napis[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      napis[i].classList.add("active");
    } else {
      napis[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", revealContact);
window.addEventListener("scroll", revealSocial);
window.addEventListener("scroll", revealFooter);
window.addEventListener("scroll", revealProject1);
window.addEventListener("scroll", revealProject2);
window.addEventListener("scroll", revealProject3);
window.addEventListener("scroll", revealProject4);
window.addEventListener("scroll", revealProject5);
window.addEventListener("scroll", revealProject6);
window.addEventListener("scroll", revealProjectNapis);


function data() {
  var dataContainer = document.querySelector(".time");

  const date = new Date();
  const day = date.getDay();
  const monthDay = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const Days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  const Months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Pażdziernik', 'Listopad', 'Grudzień'];

  const local = date.toLocaleString();
  local.replace(",", "-")
  const time = local.substr(10);

  
  dataContainer.innerHTML = `${Days[day]} ${monthDay} ${Months[month]} ${year} ${time}`;
  
}

setInterval(data, 500);