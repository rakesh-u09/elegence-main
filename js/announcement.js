const announcements = [
    {
      title: "Advanced Modern C++",
      date: "24/06/2024",
      location: "Bengaluru, India",
      description : ""
    },
    {
      title: "Introduction to Qt/QML",
      date: "27/06/2024",
      location: "Bengaluru, India",
      description : ""
    },
    {
      title: "Advanced Qt/QML with Qt Multithreading.",
      date: "27/06/2024",
      location: "Bengaluru, India",
      description : ""
    },
    {
        title: "Advanced Qt/QML with Qt Multithreading.",
        date: "29/06/2023",
        location: "Bengaluru, India",
        description : ""
    },
    // Add more items as needed
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log(announcements);
    updateAnnouncement(announcements);
  });
  
  function updateAnnouncement(data) {
    const currentDate = new Date(); // Get the current date
  
    const announcements = document.querySelector(".announcements");
    announcements.innerHTML = "";
  
    data.forEach((announcementData) => {
      const [day, month, year] = announcementData.date.split('/'); // Split date string into day, month, year
      const announcementDate = new Date(`${year}-${month}-${day}`); // Construct Date object in YYYY-MM-DD format
  
      // Check if the announcement date is in the future
      if (announcementDate > currentDate) {
        const announcementDiv = document.createElement("div");
        announcementDiv.classList.add("announcement");
        announcementDiv.innerHTML = `
            <h4>${announcementData.title}</h4>
            <h5>Date: ${announcementData.date}</h5>
            <p>Location: ${announcementData.location}</p>
            <p>${announcementData.description}</p>
            `;
        announcements.appendChild(announcementDiv);
      }
    });
  }
  