const jobsData = [
    {
        "title": "Software Engineer Trainee",
        "experience": "1-2",
        "skills": ["Proficient in C/C++", "Good OOPs knowledge and logical thinking", "Good Communication Skills"],
        "qualification": "BE (CS/EC/IS) or M.Tech(CS/EC/IS) or MCA."
    },
    {
        "title": "Software Engineer",
        "experience": "2-4",
        "skills": ["Proficient in Modern C++", "Good Programming skills in Qt and QML", "Expert in OOAD, Design Principles, Design Patterns"],
        "qualification": "BE (CS/EC/IS) or M.Tech(CS/EC/IS) or MCA."
    },
    {
        "title": "Senior Software Engineer",
        "experience": "5-6",
        "skills": ["Proficient in Modern C++, Qt, QML", "Test Driven Development", "Proficient in Software Design"],
        "qualification": "BE (CS/EC/IS) or M.Tech(CS/EC/IS) or MCA."
    },

];











document.addEventListener('DOMContentLoaded', function() {
    console.log(jobsData)
    updateUI(jobsData);
});

function updateUI(data) {
    const secDiv = document.querySelector('.secDiv');
    secDiv.innerHTML = ''; // Clear existing content

    // Iterate over the data and generate HTML dynamically
    data.forEach(job => {
        // Create a new div element for each job
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('notification');

        // Populate the job details
        jobDiv.innerHTML = `
            <h4>${job.title}</h4>
            <h6>Full-Time</h6>
            <p>Experience required: ${job.experience} years</p>
            <ul>
                ${job.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
            <p class="card-text">Qualification : ${job.qualification}</p>
        `;

        // Append the job div to secDiv
        secDiv.appendChild(jobDiv);
    });
}