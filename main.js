// Global Elements

const svgDotes = document.querySelectorAll(".svg-dotes");

const modal = document.getElementById("modal");

const reportBtn = document.getElementById("reportBtn");

const modalTwo = document.getElementById("modalTwo");

const modalContent = document.getElementById("modal-content");

const cancel = document.getElementById("cancel");

const closeBtn = document.querySelector(".close-btn");

const overlay = document.getElementById("overlay");

const messageBtn = document.getElementById("messageBtn");

const chat = document.getElementById("chat");

const messageClose = document.querySelector(".message-close");

const toDo = document.getElementById("toDo");

const edit = document.querySelector(".edit");

const messageCloseBtn = document.querySelector(".message-close-btn");

const goback = document.querySelector(".goback");

const more = document.getElementById("more");

const menuContainer = document.getElementById("menuContainer");

const meta = document.getElementById("meta");

const metaContainer = document.getElementById("metaContainer");

const search = document.querySelector(".search");

const svgs = document.querySelectorAll("svg");

const theme = document.getElementById("theme");

const themeIcon = document.getElementById("theme-icon");

const themeText = document.getElementById("theme-text");

const postImages = document.querySelectorAll('.post-main-image');

// Login Page

if (!localStorage.getItem("currentUser")) {
  window.location.href = "insta-login/insta-login.html";
};


// Heart Overlay Effect

postImages.forEach(image => {
     image.addEventListener('dblclick', () => {
          const heart = image.querySelector('.heart-effect');
          heart.classList.add('show');
          setTimeout(() => {
               heart.classList.remove('show');
          }, 800);
     });
});

// Moon SVG
const moonSVG = `
<path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
`;

// Sun SVG
const sunSVG = `
<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4-9v2m0 14.004v2M5 12H3m18 0h-2m0-7l-2 2M5 5l2 2m0 10l-2 2m14 0l-2-2"/>
`;

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    themeIcon.innerHTML = moonSVG;
    themeText.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    themeIcon.innerHTML = sunSVG;
    themeText.textContent = "Light Mode";
    localStorage.setItem("theme", "light");
  }
}

// Reload

theme.addEventListener("click", (e) => {
  e.preventDefault();
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});

// LIKE

document.querySelectorAll(".post-main").forEach((post) => {
  const imgDiv = post.querySelector(".post-main-image");
  const heart = post.querySelector(".heart-svg");

  if (!imgDiv || !heart) return;

  imgDiv.addEventListener("dblclick", () => {
    heart.classList.add("liked");
    heart.style.transform = "scale(1.4)";
    setTimeout(() => (heart.style.transform = "scale(1.2)"), 150);
  });

  heart.addEventListener("click", (e) => {
    e.stopPropagation();
    heart.classList.toggle("liked");
  });
});

// Saved

const savedIcons = document.querySelectorAll(".saved-svg");

savedIcons.forEach((save) => {
  save.addEventListener("click", (e) => {
    e.stopPropagation();
    save.classList.toggle("bookmarked");
  });
});

// Show Second Modal

reportBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalTwo.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
});

// Show Modal

svgDotes.forEach((dots) => {
  dots.addEventListener("click", (e) => {
    overlay.style.display = "block";
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";

    // Aligning the Modals

    const rect = dots.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    modal.style.position = "absolute";
    modal.style.top = `${rect.bottom + scrollY + 100}px`;
    modal.style.left = `${rect.right + scrollX - 330}px`;
    modal.style.transform = "translate(-14%, 8%)";
    modalTwo.style.position = "absolute";
    modalTwo.style.top = `${rect.bottom + scrollY + 100}px`;
    modalTwo.style.left = `${rect.right + scrollX - 330}px`;
    modalTwo.style.transform = "translate(-36%, 2%)";
  });
});

// Closing modal

overlay.addEventListener("click", (e) => {
  if (!modalContent.contains(e.target)) {
    overlay.style.display = "none";
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
    modalTwo.style.display = "none";
  }
});

cancel.addEventListener("click", (e) => {
  overlay.style.display = "none";
  modal.style.display = "none";
  document.body.style.overflowY = "auto";
});

closeBtn.addEventListener("click", (e) => {
  overlay.style.display = "none";
  modal.style.display = "none";
  document.body.style.overflowY = "auto";
  modalTwo.style.display = "none";
});

// Message Button

messageBtn.addEventListener("click", () => {
  chat.style.display = "flex";
  messageBtn.style.display = "none";
});

messageClose.addEventListener("click", () => {
  chat.style.display = "none";
  messageBtn.style.display = "block";
});

// To do

document.addEventListener("DOMContentLoaded", () => {
  const suggestionsList = document.querySelector(".suggestions-list");

  const selectedContactDisplay = document.getElementById(
    "selected-contact-display"
  );

  const chatButton = document.querySelector(".chat-button");

  const suggestedContacts = [
    {
      name: "Fatima Sheikh",
      username: "fatima_sheikh_1009",
      avatar: "img/footer-img-1.jpg",
    },
    {
      name: "Dih. Spiderman",
      username: "dih.__.spiderman",
      avatar: "img/spoider.jpg",
    },
    { name: "⚠️färyãĺ⚠️", username: "faryal90400", avatar: "img/faryal.jpg" },
    {
      name: "Ali Hassan",
      username: "Ali h.assan4886",
      avatar: "img/aliHassan.jpg",
    },
    {
      name: "♡︎︎shâĥ♡︎♕",
      username: "syedm.ali302",
      avatar: "img/footer-img-3.jpg",
    },
    { name: "Noman Khan", username: "graceful_noman", avatar: "img/noman.jpg" },
    { name: "ملک زادہ", username: "ahtashaam_asghar", avatar: "img/malik.jpg" },
    { name: "سفیان", username: "sufyaanash", avatar: "img/footer-img-2.jpg" },
    { name: "عبدالله", username: "qureshi._70", avatar: "img/abd.jpg" },
    {
      name: "♕♡⚘᥉ħăĥ⚘♡♕",
      username: "syedm.ali302",
      avatar: "img/footer-img-3.jpg",
    },
  ];

  function updateChatButtonState() {
    const checkedCount = document.querySelectorAll(
      ".contact-item .checkbox.checked"
    ).length;
    if (checkedCount > 0) {
      chatButton.classList.add("active");
    } else {
      chatButton.classList.remove("active");
    }
  }

  function removeChip(contactName) {
    const chip = document.querySelector(
      `.selected-chip[data-name="${contactName}"]`
    );
    if (chip) {
      chip.remove();
    }
  }

  function deselectContact(contactName) {
    removeChip(contactName);

    document.querySelectorAll(".contact-item").forEach((item) => {
      if (item.querySelector(".info .name").textContent === contactName) {
        item.querySelector(".checkbox").classList.remove("checked");
      }
    });

    updateChatButtonState();
  }
  function addChip(contactName) {
    const chip = document.createElement("div");
    chip.classList.add("selected-chip");
    chip.dataset.name = contactName;

    chip.innerHTML = `
            <span>${contactName}</span>
            <i class="fas fa-times remove-contact"></i>`;

    selectedContactDisplay.appendChild(chip);
    chip.querySelector(".remove-contact").addEventListener("click", () => {
      deselectContact(contactName);
    });
  }

  // filteredContacts

  let filteredContacts = [...suggestedContacts];

  search.addEventListener("input", (e) => {
    const inputValue = e.target.value.toLowerCase();

    filteredContacts = suggestedContacts.filter((s) =>
      s.name.toLowerCase().includes(inputValue)
    );

    renderSuggestedContacts();
  });

  function renderSuggestedContacts() {
    suggestionsList.innerHTML = "";

    filteredContacts.forEach((contact) => {
      const contactItem = document.createElement("div");
      contactItem.classList.add("contact-item");

      contactItem.innerHTML = `
      <div class="avatar">
          <img src="${contact.avatar}" alt="${contact.name.charAt(0)}">
      </div>
      <div class="info">
          <div class="name">${contact.name}</div>
          <div class="username">${contact.username}</div>
      </div>
      <div class="checkbox"></div>
    `;
      suggestionsList.appendChild(contactItem);

      const checkbox = contactItem.querySelector(".checkbox");
      const contactName = contact.name;

      // Checkbox click event
      checkbox.addEventListener("click", () => {
        const isChecked = checkbox.classList.toggle("checked");

        if (isChecked) {
          addChip(contactName);
        } else {
          removeChip(contactName);
        }
        updateChatButtonState();
      });
    });
  }
  renderSuggestedContacts();
  updateChatButtonState();
});

// To Do Buttons

edit.addEventListener("click", () => {
  toDo.style.display = "block";
  chat.style.display = "none";
  messageBtn.style.display = "none";
});

messageCloseBtn.addEventListener("click", () => {
  chat.style.display = "none";
  messageBtn.style.display = "block";
  toDo.style.display = "none";
});

goback.addEventListener("click", () => {
  chat.style.display = "block";
  messageBtn.style.display = "none";
  toDo.style.display = "none";
});

// Menu Container

more.addEventListener("click", () => {
  menuContainer.style.display = "flex";
});

// Close menuContainer when clicking outside

document.addEventListener("click", (e) => {
  const isClickInside = menuContainer.contains(e.target) || more.contains(e.target);

  if (!isClickInside) {
    menuContainer.style.display = "none";
  }
});


// Meta

meta.addEventListener("click", () => {
  metaContainer.style.display = "flex";
  menuContainer.style.display = "none";
});

// Close metaContainer when clicking outside

document.addEventListener("click", (e) => {
  const isClickInsideMeta = metaContainer.contains(e.target) || meta.contains(e.target);

  if (!isClickInsideMeta) {
    metaContainer.style.display = "none";
  }
});