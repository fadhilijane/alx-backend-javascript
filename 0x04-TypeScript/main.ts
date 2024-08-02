interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Njaga',
  age: 30,
  location: 'Kenya'
};

const student2: Student = {
  firstName: 'Daniel',
  lastName: 'mtu',
  age: 32;
  location: 'Kenya'
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');


  const headers = ['Fisr Name', 'Location'];
  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(headerRow);
  });
  table.appendChild(headerRow);


