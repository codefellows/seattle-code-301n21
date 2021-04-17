class TouristLocation {
  constructor(placeName, attractions, cityName) {
    this.name = placeName;
    this.attractions = attractions;
    this.city = cityName;
  }
  toString() {
    return `${this.name} is in ${this.city} and features ${this.attractions.join(', ')}`;
  }
  printInfo() {
    console.log(this.toString());
  }
}
// Single Responsibility Principle: Any given function/method should have one job
// i.e. toString just makes strings
// if I want to console.log, I do that elsewhere or in another function/method

// consistent data types is important!
const places = [
  new TouristLocation('Seattle Center', [
    'Space Needle',
    'Chihuly Glass & Garden',
    'Pacific Science Center'
  ], 'Seattle'),
  new TouristLocation('Balboa Park', [
    'Reuben H. Fleet Science Center',
    'San Diego Zoo',
    'Old Globe'
  ], 'San Diego'),
  new TouristLocation('Boston Common', ['public park'], 'Boston')
];
// better
//console.log(places.map(place => place.toString()));

// even better
// places.forEach(place => console.log(place.toString()));

// best
places.forEach(place => place.printInfo());

// const place1 = {
//   name: 'Seattle Center',
//   attractions: [
//     'Space Needle',
//     'Chihuly Glass & Garden',
//     'Pacific Science Center'
//   ], city: 'Seattle'
// };

// const place2 = {
//   name: 'Balboa Park',
//   attractions: [
//     'Reuben H. Fleet Science Center',
//     'San Diego Zoo',
//     'Old Globe'
//   ],
//   city: 'San Diego'
// };

// const placeThree = {
//   name: 'Boston Common',
//   attractions: 'public park',
//   city: 'Boston'
// };
// console.log(`${place1.name} is in ${place1.city} and features ${place1.attractions}`);
// console.log(`${place2.name} is in ${place2.city} and features ${place2.attractions}`);
// console.log(`${placeThree.name} is in ${placeThree.city} and features ${placeThree.attractions}`);

