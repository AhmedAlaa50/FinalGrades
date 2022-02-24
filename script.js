const slider = document.querySelector("input");
const btn = document.querySelector("button");
const number_of_students = document.querySelector("#students-count");
const total_average = document.querySelector("#total-average");
const records = document.querySelector("#records");


slider.oninput = () => {
    number_of_students.innerHTML = slider.value;
};

btn.onclick = () => {
    let students_records = [];
    records.innerHTML = "";
    
    for(i = 0; i < slider.value; i++) {
        students_records.push({
            id: "0",
            name: `${Math.round(Math.random()) === 0 ? names.male[Math.floor(Math.random() * 100)] : names.female[Math.floor(Math.random() * 100)]} ${names.surnames[Math.floor(Math.random() * 300)]}`,
            math: Math.floor(Math.random() * 100),
            physics: Math.floor(Math.random() * 100),
            chemistry: Math.floor(Math.random() * 100),
            history: Math.floor(Math.random() * 100),
            english: Math.floor(Math.random() * 100),
            average: 0
        })
    }
    
    students_records.forEach((student) => {
        student.average = (student.math + student.physics + student.chemistry + student.history + student.english) / 5;
    })
    total_average.innerHTML = students_records.reduce((sum, student_record) => sum + student_record.average, 0) / slider.value;
    
    students_records.sort((a, b) => b.average - a.average);

    records.innerHTML += students_records.reduce((acc, record) => {
        return acc + `<li>
        <span>${record.id}</span>
        <span>${record.name}</span>
        <span>${record.math}</span>
        <span>${record.physics}</span>
        <span>${record.chemistry}</span>
        <span>${record.history}</span>
        <span>${record.english}</span>
        <span>${record.average}</span>
        </li>`;
    },
    `<li id="table-fields">
    <span>ID</span>
    <span>Name</span>
    <span>Math</span>
    <span>Physics</span>
    <span>Chemistry</span>
    <span>History</span>
    <span>English</span>
    <span>Average</span>
</li>
`)
};

//sort reduce map forEach