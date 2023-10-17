import data from '../js/locations.js';

console.log(data);
const tableBody = document.getElementsByTagName('tbody');
const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.nav-lists');
const ulList = document.querySelectorAll('.ul-list');

const iterateTableData = (targetHtml, arr) => {
  arr.forEach(value => {
    const html = `
      <tr>
        <td>${value.location}</td>
        <td>${value.foodDistributed}</td>
        <td>${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(value.amountFund)}</td>
      </tr>
    `;

    targetHtml.insertAdjacentHTML('beforeend', html);
  });
};

const displayTableData = arrObj => {
  tableBody.innerHTML = "";

  iterateTableData(...tableBody, arrObj);
};
displayTableData(data);

hamburger.addEventListener("click", () => {
  navLists.classList.toggle('active');
});

ulList.forEach(list => {
  list.addEventListener('click', () => {
    navLists.classList.toggle('active');
  });
});