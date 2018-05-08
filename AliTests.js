const data = [
  {
    "_id": "5af208c26e91ca61b83f5a60",
    "age": 34,
    "name": "Rhoda Herrera",
    "gender": "female",
    "company": "QUANTALIA",
    "email": "rhodaherrera@quantalia.com"
  },
  {
    "_id": "5af208c25ad83d7209b148fa",
    "age": 39,
    "name": "Terry Mayer",
    "gender": "female",
    "company": "HOTCAKES",
    "email": "terrymayer@hotcakes.com"
  },
  {
    "_id": "5af208c21741f2aa4d86dae7",
    "age": 20,
    "name": "Alisha Hebert",
    "gender": "female",
    "company": "CONFERIA",
    "email": "alishahebert@conferia.com"
  },
  {
    "_id": "5af208c200f1fb072a4832c2",
    "age": 30,
    "name": "Beverly Gaines",
    "gender": "female",
    "company": "COWTOWN",
    "email": "beverlygaines@cowtown.com"
  },
  {
    "_id": "5af208c25dc5a878c7e3edad",
    "age": 20,
    "name": "Pennington Dale",
    "gender": "male",
    "company": "SQUISH",
    "email": "penningtondale@squish.com"
  },
  {
    "_id": "5af208c2a8ca3d1fa73a1d88",
    "age": 28,
    "name": "Lindsey Berg",
    "gender": "male",
    "company": "ZILLACON",
    "email": "lindseyberg@zillacon.com"
  },
  {
    "_id": "5af208c2419c0b9f868b73ee",
    "age": 31,
    "name": "Estes Jensen",
    "gender": "male",
    "company": "MAXIMIND",
    "email": "estesjensen@maximind.com"
  },
  {
    "_id": "5af208c23daefc7e01ada543",
    "age": 22,
    "name": "Kristen Montgomery",
    "gender": "female",
    "company": "VERTIDE",
    "email": "kristenmontgomery@vertide.com"
  },
  {
    "_id": "5af208c24a467ace9d23664e",
    "age": 20,
    "name": "Carmen Crawford",
    "gender": "female",
    "company": "PODUNK",
    "email": "carmencrawford@podunk.com"
  },
  {
    "_id": "5af208c27a83b65ea1c2b91c",
    "age": 35,
    "name": "Green Holman",
    "gender": "male",
    "company": "VIRVA",
    "email": "greenholman@virva.com"
  },
  {
    "_id": "5af208c2bc4d0950b41912e5",
    "age": 28,
    "name": "Faye Lamb",
    "gender": "female",
    "company": "UTARIAN",
    "email": "fayelamb@utarian.com"
  },
  {
    "_id": "5af208c283563ecfc66d9887",
    "age": 36,
    "name": "Stanley Levine",
    "gender": "male",
    "company": "COMTOUR",
    "email": "stanleylevine@comtour.com"
  },
  {
    "_id": "5af208c26a1f074294483fa4",
    "age": 34,
    "name": "Carly Hall",
    "gender": "female",
    "company": "GEOLOGIX",
    "email": "carlyhall@geologix.com"
  },
  {
    "_id": "5af208c22a6df26a4384a0eb",
    "age": 36,
    "name": "Evangeline Mcmahon",
    "gender": "female",
    "company": "COMTRACT",
    "email": "evangelinemcmahon@comtract.com"
  },
  {
    "_id": "5af208c28c135a10e95ac4ed",
    "age": 28,
    "name": "Graves Zamora",
    "gender": "male",
    "company": "INSURESYS",
    "email": "graveszamora@insuresys.com"
  },
  {
    "_id": "5af208c2c8cf4d1c1aa086d9",
    "age": 22,
    "name": "Elsa Mccoy",
    "gender": "female",
    "company": "INRT",
    "email": "elsamccoy@inrt.com"
  },
  {
    "_id": "5af208c2c3e422c6a8fb1bc5",
    "age": 25,
    "name": "Marissa Bell",
    "gender": "female",
    "company": "SKYPLEX",
    "email": "marissabell@skyplex.com"
  },
  {
    "_id": "5af208c27abcf0165ec5ac87",
    "age": 39,
    "name": "Reyna Benson",
    "gender": "female",
    "company": "SULTRAXIN",
    "email": "reynabenson@sultraxin.com"
  },
  {
    "_id": "5af208c21e2bf61a30f091e2",
    "age": 29,
    "name": "Leonor Booth",
    "gender": "female",
    "company": "OTHERWAY",
    "email": "leonorbooth@otherway.com"
  },
  {
    "_id": "5af208c23f932575c3f65549",
    "age": 24,
    "name": "Sadie Rosa",
    "gender": "female",
    "company": "NETPLODE",
    "email": "sadierosa@netplode.com"
  },
  {
    "_id": "5af208c29eebc76d852cce79",
    "age": 20,
    "name": "Letha Harding",
    "gender": "female",
    "company": "GRACKER",
    "email": "lethaharding@gracker.com"
  },
  {
    "_id": "5af208c2a9e112f048ca50d1",
    "age": 39,
    "name": "Maynard Mcclain",
    "gender": "male",
    "company": "SIGNIDYNE",
    "email": "maynardmcclain@signidyne.com"
  },
  {
    "_id": "5af208c2fe823ef4aa69ea0d",
    "age": 25,
    "name": "Frieda Hester",
    "gender": "female",
    "company": "MITROC",
    "email": "friedahester@mitroc.com"
  }
];

// question 1: return the average age of all the users

function average(people) {
  let ages = [];

  people.forEach(person => ages.push(person.age));
  //console.log(ages);
  let sum = ages.reduce((total, individual) => total + individual);
  return sum/people.length;
}

console.log(average(data));


// question 2: return an array of all the users who have the following substring in their _id '2b'
function checkSubstring(data,str){
  let arr = [];
  data.forEach(person => {
    person._id.includes(str) ? arr.push(person) : '';
  });
  return arr;
}
//console.log(checkSubstring(data,'2b'));


// question 3: return an array of all the users who have at least one of the following substrings in their _id ['2b','4a'];
function doubleCheckSubstring(data) {
  let users = [];

  users.push(checkSubstring(data, '2b'));
  users.push(checkSubstring(data, '4a'));

  return users;
}

console.log(doubleCheckSubstring(data));


// question 4: return an array of all the users who have a 'c' in their last name








