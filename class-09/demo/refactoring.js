const place1 = {
  name: 'Seattle Center',
  attractions: [
    'Space Needle',
    'Chihuly Glass & Garden',
    'Pacific Science Center'
  ], city: 'Seattle'
};

const place2 = {
  name: 'Balboa Park',
  sights: {
    science: 'Reuben H. Fleet Science Center',
    animals: 'San Diego Zoo', theater: 'Old Globe'
  },
  city: 'San Diego'
};

const placeThree = {
  name: 'Boston Common',
  attractions: 'public park',
  city: 'Boston'
};

console.log(`${place1.name} is in ${place1.city} and features ${place1.attractions}`);
console.log(`${place2.name} is in ${place2.city} and features ${place2.attractions}`);
console.log(`${placeThree.name} is in ${placeThree.city} and features ${placeThree.attractions}`);

