export default (min: number, max: number): number =>
  Math.ceil(Math.random() * (max - min) + min)
