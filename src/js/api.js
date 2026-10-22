// READ
export const getAllStudents = () => {
  const url = "http://localhost:5000/students";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

// DELETE
export const deleteStudent = (id, student) => {
  const url = `http://localhost:5000/students/${id}`;
  return fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};