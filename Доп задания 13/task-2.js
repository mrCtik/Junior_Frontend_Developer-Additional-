class CarService {
    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours;
    }

    static DefaultWorkingHours = {
        from: '9:00', 	
        till: '20:00',
    }

    repairCar(carName) {

        if (this.workingHours === undefined) {
            this.workingHours = CarService.DefaultWorkingHours;
        }
        const now = new Date();
        const fromTime = this.workingHours.from.split(':');
        const tillTime = this.workingHours.till.split(':');
        const fromTimeNum = Number(fromTime[0]);
        const tillTimeNum = Number(tillTime[0]);


        if(carName === '') {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
            return;
        }

        console.log(!((now.getHours() >= fromTimeNum) && (now.getHours() <= tillTimeNum)) ?
            ('К сожалению, мы сейчас закрыты. Приходите завтра') :
            (`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`));
    }
}

const carService = new CarService("RepairCarNow", {
    from: "8:00",
    till: "20:00"
  });
  carService.repairCar("BMW");



