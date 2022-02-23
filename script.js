const slider = document.querySelector("input");
const btn = document.querySelector("button");
const number_of_students = document.querySelector("#students-count");
const total_average = document.querySelector("#total-average");
const records = document.querySelector("#records");

slider.oninput = () => {
    number_of_students.innerHTML = slider.value;
};
