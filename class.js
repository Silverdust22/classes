class School{
    constructor(name,level,numberOfStudents){
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
    if(isNaN(value)){
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }else {
      this._numberOfStudents = value;
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
//------------------------------------------------------------------------------------------
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'Primary');
      this._pickupPolicy=pickupPolicy;
      this.numberOfStudents = numberOfStudents; //use the setter
      
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  //----------------------------------------------------------------------------------------------
  class MiddleSchool extends School{
    constructor(name,numberOfStudents){
      super(name,'Middle');
      this.numberOfStudents = numberOfStudents; //use the setter
    }
  }
  //---------------------------------------------------------------------------------------------
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'High');
      this._sportsTeams =sportsTeams;
      this.numberOfStudents = numberOfStudents; //use the setter
    }

  get sportsTeams(){
   return this._sportsTeams;  
  }
  }
  //----------------------------------------------------------------------------------------------
  class SchoolCatalogue{
    constructor(level,schoollist){
      this.level = level; //use the setter
      this._schoollist = schoollist;
    }
    
    get schoollist(){
      return this._schoollist;
    }
    get level(){
      return this._level;
    }
  
    set level(value){
    if(isNaN(value)){
    this._level = value;
    }else{ 
      console.log('Invalid input:');
    }
  } 
   }
  
  
  const school1 = new School("St. John's",'High SChool',100);
  console.log(school1.name);
  console.log(school1.level);
  console.log(school1.numberOfStudents);
  console.log(school1.quickFacts());
  console.log(School.pickSubstituteTeacher(['Leena','Gita','Rose','Camilla','Laura']));
  console.log('____________________________________________________________________________________')
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',121,'Students must be picked up by a parent,guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury.quickFacts());
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  console.log(lorraineHansbury.numberOfStudents); 
  console.log('____________________________________________________________________________________')
  const stMartin = new PrimarySchool('St Martin','Lion','Students must be picked up by a parent,guardian, or a family member over the age of 13.');
  console.log(stMartin); 
  console.log('____________________________________________________________________________________') 
  const alSmith = new HighSchool('Al E. Smith','tiger',['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith);
  console.log(alSmith.sportsTeams);
  console.log(alSmith.numberOfStudents);
  console.log(alSmith.name);
  console.log(alSmith.level);
  console.log('__________________________________________________________________________________')
  const cataloguePrimary= new SchoolCatalogue('Primary',['Lorraine Hansbury','St Martins','Sacred Hearts','St Thomas']);
  console.log(cataloguePrimary);
  console.log(cataloguePrimary.schoollist);
  console.log(cataloguePrimary.level);
  const catalogueSecondary= new SchoolCatalogue('Secondary',['Lorretto Convent','St Bishops','Loyola','St Nicholas']);
  console.log(catalogueSecondary);