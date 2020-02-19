const peaple = [
  {
    name: "Pedro",
    lastname: "Gomez",
    age: 22,
    gender: "Male"
  },
  {
    name: "Rene",
    lastname: "Fuentes",
    age: 17,
    gender: "Male"
  },
  {
    name: "Douglas",
    lastname: "Hernandez",
    age: 22,
    gender: "Male"
  },
  {
    name: "Antonio",
    lastname: "Hernandez",
    age: 15,
    gender: "Male"
  },
  {
    name: "Henry",
    lastname: "Banchon",
    age: 21,
    gender: "Male"
  },
  {
    name: "Andrea",
    lastname: "Quijada",
    age: 16,
    gender: "Female"
  }
];

//Hago que reciba un array como parametro y no uso el global para poder reutilizar la función en otras
const showPeaple = peaple => {
  peaple.forEach(person => {
    const { name, lastname, gender, age } = person;
    console.log(
      `Mi nombre es ${name} ${lastname}. Tengo ${age} años y soy ${gender}`
    );
  });
};

const addNewPerson = person => {
  peaple.push(person);
  showPeaple(peaple);
};

const deleteLastPerson = () => {
  peaple.pop();
  showPeaple(peaple);
};

const ageAverage = () => {
  return (
    peaple.reduce((acc, current) => {
      return acc + current.age;
    }, 0) / peaple.length
  );
};

const showByGender = gender => {
  const filteredPeaple = peaple.filter(person => {
    return person.gender === gender;
  });
  showPeaple(filteredPeaple);
};

const showOver18 = () => {
  const filteredPeaple = peaple.filter(person => {
    const { age } = person;
    return age >= 18;
  });
  showPeaple(filteredPeaple);
};

addNewPerson({ name: "Nelson", lastname: "Caastro", gender: "Male", age: 21 });
console.log("---------------------------");
deleteLastPerson();
console.log("---------------------------");
console.log(ageAverage());
console.log("---------------------------");
showByGender();
console.log("---------------------------");
showOver18();
