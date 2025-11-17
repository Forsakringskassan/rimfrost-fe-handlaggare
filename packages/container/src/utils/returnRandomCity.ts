export function returnRandomCity() {
    const cities = ['Stockholm', 'London', 'Paris', 'Milan', 'Rome', 'Barcelona', 'Berlin', 'Hamburg', 'Helsinki', 'Atlanta'];
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex] ? cities[randomIndex] : 'Unknown City';
}