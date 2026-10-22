let t=document.querySelector("[data-tbody]");document.querySelector("#get-students-btn").addEventListener("click",()=>{fetch("http://localhost:5000/students").then(t=>{if(!t.ok)throw Error(`Error: ${t.statusText}`);return t.json()}).catch(t=>console.error(t)).then(e=>{t.innerHTML=`<ul>${e.map(t=>`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>Вік: ${t.age}</td>
          <td>Курс: ${t.course}</td>
          <td>Навички: ${t.skills}</td>
          <td>Email: ${t.email}</td>
          <td>Статус: ${t.isEnrolled}</td>
          <button data-action="delete">Видалити</button>
          <button data-action="edit">Редагувати</button>
      </tr>`).join("")}</ul>`})}),t.addEventListener("click",t=>{let e=t.target;if("delete"===e.dataset.action){var o;let t=e.closest("[data-id]");(o=t.dataset.id,fetch(`http://localhost:5000/students/${o}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw Error(`Error: ${t.statusText}`);return t.json()}).catch(t=>console.error(t))).then(()=>{t.closest("li").remove()})}});
//# sourceMappingURL=goit-javascript-hw-18.2767f0fa.js.map
