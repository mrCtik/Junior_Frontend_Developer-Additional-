const peopleWithVisa = [
    {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2023',
    },
    {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2021',
    },
    {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: false, //true,
      passportExpiration: '31.07.2022',
    },
    {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2021',
    },
  ];
  
  function reverseString(str) {
    return str.split('.').reverse().join(".");
  }
  
  function allowVisa(people) {
    const filtredPeople = people
    .filter(({ passportExpiration }) => (((Date.parse(new Date(reverseString(passportExpiration)))) > Date.now())))
    .filter(({ criminalRecord }) => (criminalRecord === false));
    return filtredPeople;
  }
  const result = allowVisa(peopleWithVisa);
  console.log('result', result);