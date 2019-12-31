export default function randomColor() {
  // Coolors collection array:
  const colors = [
    '#d7cdcc',
    '#ffffff',
    '#59656f',
    '#9c528b',
    '#1d1e2c',
    '#ea7af4',
    '#b43e8f',
    '#6200b3',
    '#3b0086',
    '#290628'
  ];

  let randomIndex = Math.floor(Math.random() * 10);
  return colors[randomIndex];

}