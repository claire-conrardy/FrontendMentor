// View and hide Sharing buttons
let share = document.querySelector('.share-btn');
let sharingBtns = document.querySelector(".sharing-btns");
let userInfo = document.querySelector('.user-info');
let sharingBtnsMobile = document.querySelector(".sharing-btns-mobile");
sharingBtns.style.display = "none";

let open = () => {
  if (window.matchMedia("(min-width: 600px)").matches) {
    if (sharingBtns.style.display === "none") {
      sharingBtns.style.display = "flex";
    } else {
      sharingBtns.style.display = "none";
    }
  } else {
    if (sharingBtnsMobile.style.display === "none") {
      sharingBtnsMobile.style.display = "flex";
      userInfo.style.display = "none";
    } else {
      sharingBtnsMobile.style.display = "none";
      userInfo.style.display = "flex";
    }

  }
}

share.onclick = open;
