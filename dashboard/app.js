fetch('./data/results.json')
  .then(res => res.json())
  .then(data => {
    const rows = document.getElementById('rows');
    const passed = data.filter(t => t.status === 'passed').length;
    const failed = data.filter(t => t.status === 'failed').length;

    document.getElementById('summary').innerText =
      `Total: ${data.length}, Passed: ${passed}, Failed: ${failed}`;

    data.forEach(t => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${t.name}</td>
        <td>${t.status}</td>
        <td>${t.duration}</td>
        <td>${t.startTime}</td>
      `;
      rows.appendChild(tr);
    });
  })
  .catch(err => {
    document.body.innerHTML += `<pre>${err}</pre>`;
  });
