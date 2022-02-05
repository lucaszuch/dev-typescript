class Department {
  // private id: string;
  // private name: string; // private property is now only accessible using the class method, not even from enherited classes
  protected employees: string[] = []; // protect blocks the property to be changed from outsite the class, but allows it from inherited classes

  constructor(private readonly id: number, private name: string) { // readonly blocks the property to not be altered
    // tis.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`ID: ${this.id} - Department: ${this.name}`);
  }

  static createEmployee(name: string) { // static cannot be accessed by the constructor 
    return {
      name: name
    }
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  listEmployees() {
    this.employees.forEach(item => {
      console.log(item);
    });
  }
}

// Inheritence
class Finance extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'Finance'); // Super() calls the constructor from the initial class
    this.admins = admins;
  }

  addEmployee(name: string) {
    if(name == 'Lucas') {
      return;
    }

    this.employees.push(name);
  }
}

class Accounting extends Department {
  private lastReport: string;

  // Getters
  get getLastReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reported generated.')
  }

  // Setters
  set recentReport(value: string) {
    if(!value) {
      throw new Error('No recent report')
    }
    this.addReport(value);
  }

  constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(`Reports available: ${this.reports}`);
  }
}

const employee1 = Department.createEmployee('Ella');
console.log(employee1);

const finance = new Finance(2, ['Lucas']);
console.log(finance);

const accounting = new Accounting(3, ['RTR']);
accounting.addReport('PTP');
accounting.recentReport = 'End of Month';
console.log(accounting.getLastReport);
accounting.addEmployee('Disha');
accounting.addEmployee('Ismail');
accounting.getReports();
accounting.listEmployees();
finance.addEmployee('Lucas');
finance.listEmployees();