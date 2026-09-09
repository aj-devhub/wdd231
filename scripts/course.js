const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the basic concepts of program structure and execution.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to building web sites.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students write functions to create programs using Python.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes, objects, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on user experience, accessibility, compliance, and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector('#course-container');
const totalCreditsEl = document.querySelector('#total-credits');
const allBtn = document.querySelector('#all-btn');
const cseBtn = document.querySelector('#cse-btn');
const wddBtn = document.querySelector('#wdd-btn');

function renderCourses(filteredCourses) {
  courseContainer.innerHTML = '';
  
  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.classList.add(course.completed ? 'completed' : 'uncompleted');
    card.textContent = `${course.subject} ${course.number}`;
    courseContainer.appendChild(card);
  });

  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsEl.textContent = `The total credits for courses listed above is ${totalCredits}`;
}

function setActiveButton(activeBtn) {
  [allBtn, cseBtn, wddBtn].forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

allBtn.addEventListener('click', () => {
  renderCourses(courses);
  setActiveButton(allBtn);
});

cseBtn.addEventListener('click', () => {
  renderCourses(courses.filter(c => c.subject === 'CSE'));
  setActiveButton(cseBtn);
});

wddBtn.addEventListener('click', () => {
  renderCourses(courses.filter(c => c.subject === 'WDD'));
  setActiveButton(wddBtn);
});

// Initial Render
renderCourses(courses);