const createPerson = (name, age) => {
    const people = {
      name: name,
      age: age,
    }
    return people;
  };
  
  const getName = object => {
    return object.name;
  };
  
  const getProperty = (property, object) => {
    return object[property];
  };
  
  const hasProperty = (property, object) => {
    return object.hasOwnProperty(property);
  };
  
  const isOver65 = person => {
    if (person.age > 65) {
      return true;
    } else {
      return false;
    }
  };
  
  const getAges = people => {
    return people.map(x => x.age)
  };
  
  const findByName = (name, people) => {
    return people.find(x => x.name === name)
  };
  
  const findHondas = cars => {
     let hondas = cars.filter(cars => cars.manufacturer === 'Honda')
    //return car
    return hondas
  };
  
  const averageAge = people => {
    return people.reduce((acc, curr) => acc + curr.age, 0) / people.length;
  };
  
  const createTalkingPerson = (name, age) => {
    return {
      name: name,
      age: age,
      introduce: newFriend =>  {
      return `Hi ${newFriend}, my name is ${name} and I am ${age}!`;
      }
  };
  
  module.exports = {
    createPerson,
    getName,
    getProperty,
    hasProperty,
    isOver65,
    getAges,
    findByName,
    findHondas,
    averageAge,
    createTalkingPerson
  }