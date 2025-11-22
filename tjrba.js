// class vehicle{
//     constructor(year , brand){
//         this.year = year;
//         this.brand = brand;
//     }
//     info(){
//         console.log(`this vehicle is a ${this.brand} from year ${this.year}`);
//     }
// }
// class Car extends vehicle{
//     constructor(year , brand , speed ){
//         super(year , brand);
//         this.speed = speed;
//     }
//     drive(){
//         console.log(`driving a ${this.brand} at ${this.speed} km/h`);        
//         super.info();
//     }
// }
// class Bike extends vehicle{
//     constructor(year , brand , type){
//         super(year , brand);
//         this.type = type;
//     }
//     ride(){
//         console.log(`ridding a ${this.type} bike`);
//         super.info();        
//     }
// }
// const car = new Car("toyota" , 2020 , 100);
// const bike = new Bike("trek" , 2022 , 10);
// console.log(car.year);
// console.log(car.brand);
// console.log(car.speed);
// console.log(bike.year);
// console.log(bike.brand);
// console.log(bike.type);