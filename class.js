class School{
    constructor(name,numberOfStudents,level){
      this._name = name;
      this._numberOfStudents = numberOfStudents;
      this._level = level;
    }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  set numberOfStudents(value){
    if(value.isNaN()){
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }else{
      this.numberOfStudents = value;
    }
     }
     
  quickFacts(){
   return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
  }
  static pickSubstituteTeacher(substituteTeachers){
    //console.log(substituteTeachers);
    let length=substituteTeachers.length;
    //console.log(length);
    let randomGenerator=Math.floor(Math.random()*length);
    //console.log(randomGenerator);
    let teacher = substituteTeachers[randomGenerator];
    return teacher;
  }
  }

  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,numberOfStudents,'Primary');
      this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class MiddleSchool extends School{
    constructor(name,numberOfStudents){
      super(name,numberOfStudents,'Middle');
      //this._level='Middle School';
      //this._numberOfStudents=234;
    }
  }
  
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,numberOfStudents,'High');
     // this._level='High School';
      //this._numberOfStudents=190;
      this._sportsTeams =sportsTeams;
    }
  get sportsTeams(){
   return this._sportsTeams;  
  }
  }
  
  /*class SchoolCatalog{
    constructor(levels,schoolslist){
      this._levels = levels;
      this._schoolslist=schoolslist;
    }
    get levels(){
      return this._levels;
    }
    get schoolslist(){
      return this._schoolslist;
    }
  
    set levels(value){
      console.log(value);
    if(typeof value===str){
    this._levels = value;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
    
    }*/
  
  
  
  
  
  //const school1 = new School('St. John','high','fhfhfh');
  //console.log(school1.name);
  //console.log(school1.level);
  //console.log(school1.numberOfStudents);
  //console.log(school1.quickFacts());
  //console.log(School.pickSubstituteTeacher(['Leena','Gita','Rose','Camilla','Laura']));
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',123,'Students must be picked up by a parent,guardian, or a family member over the age of 13.');
  //console.log(lorraineHansbury);
  console.log(lorraineHansbury.quickFacts());
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  console.log(lorraineHansbury.noOfStudents); 
  
  
  const alSmith = new HighSchool('Al E. Smith',120,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith);
  console.log(alSmith.sportsTeams);
  console.log(alSmith.noOfStudents);
  console.log(alSmith.name);
  console.log(alSmith.level);
  
  //const schoolCatalog= new SchoolCatalog('Primary',['Lorraine Hansbury','St Martins','Sacred Hearts','St Thomas']);
  //console.log(schoolCatalog);
  //const schoolCatalog1= new SchoolCatalog(2,['Lorraine Hansbury','St Martins','Sacred Hearts','St Thomas']);
  