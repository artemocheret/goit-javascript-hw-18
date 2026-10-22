import { getAllStudents, deleteStudent } from "./api.js";

const container = document.querySelector("[data-tbody]");
const getStudentsBtn = document.querySelector("#get-students-btn");

const createMarkup = (students) => {
  return `<ul>${students
    .map(
      (student) => `<tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>Вік: ${student.age}</td>
          <td>Курс: ${student.course}</td>
          <td>Навички: ${student.skills}</td>
          <td>Email: ${student.email}</td>
          <td>Статус: ${student.isEnrolled}</td>
          <button data-action="delete">Видалити</button>
          <button data-action="edit">Редагувати</button>
      </tr>`,
    )
    .join("")}</ul>`;
};

getStudentsBtn.addEventListener("click", () => {
  getAllStudents().then((data) => {
    const studentMarkup = createMarkup(data);
    container.innerHTML = studentMarkup;
  });
});

container.addEventListener("click", (e) => {
  const target = e.target;

  if (target.dataset.action === "delete") {
    const studentCard = target.closest("[data-id]");

    const studentId = studentCard.dataset.id;

    deleteStudent(studentId).then(() => {
      const studentItem = studentCard.closest("li");
      studentItem.remove();
    });
  }
});
