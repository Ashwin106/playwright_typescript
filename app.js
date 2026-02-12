fetch('./data/results.json')
  .then(res => res.json())
  .then(data => {
    const rows = document.getElementById('rows');
    const passed = data.filter(t => t.status === 'passed').length;
    const failed = data.filter(t => t.status === 'failed').length;

    document.getElementById('summary').innerText =
      `Total: ${data.length}, Passed: ${passed}, Failed: ${failed}`;

    data.forEach((t, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${t.name}</td>
        <td>${t.status}</td>
        <td>${t.duration}</td>
        <td>${t.startTime}</td>
        <td>
        <button onclick="toggleSteps(${index})">View Steps</button>
        </td>
      `;
      rows.appendChild(tr);
      const stepRow = document.createElement('tr');
      stepRow.id = `steps-${index}`;
      stepRow.style.display = 'none';

      stepRow.innerHTML = `
        <td colspan="4">
          <ul>
            ${t.steps.map(
              s => `<li>${s.title} – ${s.status} (${s.duration} ms)</li>`
            ).join('')}
          </ul>
        </td>
      `;
      rows.appendChild(stepRow);
    });

    window.toggleSteps = (i) => {
      const el = document.getElementById(`steps-${i}`);
      if (!el) return;
      el.style.display = el.style.display === 'none' ? 'table-row' : 'none';
    };
  })
  .catch(err => {
    document.body.innerHTML += `<pre>${err}</pre>`;
  });
