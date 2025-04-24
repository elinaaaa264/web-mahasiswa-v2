function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Login gagal. Coba lagi.");
    }
  }
  
  let dataMahasiswa = [];
  
  function addData() {
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    if (!nama || !nim) {
      alert("Nama dan NIM wajib diisi!");
      return;
    }
  
    dataMahasiswa.push({ nama, nim });
    renderTable();
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
  }
  
  function renderTable(filteredData = null) {
    const tbody = document.getElementById("dataTable");
    const data = filteredData || dataMahasiswa;
    tbody.innerHTML = "";
  
    data.forEach((item, index) => {
      tbody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.nama}</td>
          <td>${item.nim}</td>
          <td><button onclick="deleteData(${index})">Hapus</button></td>
        </tr>
      `;
    });
  }
  
  function deleteData(index) {
    dataMahasiswa.splice(index, 1);
    renderTable();
  }
  
  function searchData() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = dataMahasiswa.filter(item => item.nama.toLowerCase().includes(keyword));
    renderTable(filtered);
  }
  
  function clearSearch() {
    document.getElementById("searchInput").value = "";
    renderTable();
  }
  
  