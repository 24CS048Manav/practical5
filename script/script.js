// ===== JSON Data for Events =====
const eventsJSON = `
[
  {
    "title": "Hackathon 2025",
    "date": "15 Oct 2025",
    "location": "Charusat Auditorium",
    "description": "A 24-hour coding challenge for innovative minds."
  },
  {
    "title": "Tech Talk: AI & Future",
    "date": "20 Oct 2025",
    "location": "Seminar Hall A",
    "description": "An expert-led session on Artificial Intelligence trends."
  },
  {
    "title": "Web Dev Workshop",
    "date": "25 Oct 2025",
    "location": "Lab 204",
    "description": "Hands-on session on building responsive websites."
  }
]
`;

// ===== JSON Data for Students =====
const studentsJSON = `
[
  {
    "name": "Manav Lathiya",
    "branch": "CSE",
    "year": "2nd Year",
    "email": "manav.lathiya@charusat.edu.in",
    "photo": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "name": "Priya Patel",
    "branch": "IT",
    "year": "1st Year",
    "email": "priya.patel@charusat.edu.in",
    "photo": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Rahul Mehta",
    "branch": "ECE",
    "year": "3rd Year",
    "email": "rahul.mehta@charusat.edu.in",
    "photo": "https://randomuser.me/api/portraits/men/56.jpg"
  }
]
`;

// ===== Parse JSON Strings into Objects =====
const events = JSON.parse(eventsJSON);
const students = JSON.parse(studentsJSON);

// ===== Display Events =====
const eventsContainer = document.getElementById("eventsContainer");

events.forEach(event => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <h3>${event.title}</h3>
    <p class="event-date">${event.date}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p>${event.description}</p>
  `;
  eventsContainer.appendChild(div);
});

// ===== Display Students =====
const studentsContainer = document.getElementById("studentsContainer");

students.forEach(student => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${student.photo}" alt="${student.name}">
    <h3>${student.name}</h3>
    <p><strong>Branch:</strong> ${student.branch}</p>
    <p><strong>Year:</strong> ${student.year}</p>
    <p><strong>Email:</strong> ${student.email}</p>
  `;
  studentsContainer.appendChild(div);
});
