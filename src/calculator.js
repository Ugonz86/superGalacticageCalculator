// eslint-disable-next-line
export class Calculator {
    constructor(age){
      this.age = age;
    }
    ageSeconds(age){
        return Math.round((age * 365 * 24 * 60 * 60) * 100) / 100;
    }

    ageMercury(age){
        return Math.round((age / 0.24) * 100) / 100;
    }

    ageVenus(age){
        return Math.round((age / 0.62) * 100) / 100;
    }

    ageMars(age){
        return Math.round((age / 1.88) * 100) / 100;
    }

    ageJupiter(age){
        return Math.round((age / 11.86) * 100) / 100;
    }

    // averageLE = average Life Expectancy
    expectancy(planet, averageLE, age){
        if (planet.toLowerCase() === "mercury"){
            return Math.round((this.ageMercury(averageLE) - this.ageMercury(age)) * 100) / 100;
        } else if (planet.toLowerCase() === "venus"){
            return Math.round((this.ageVenus(averageLE) - this.ageVenus(age)) * 100) / 100;
        } else if (planet.toLowerCase() === "mars"){
            return Math.round((this.ageMars(averageLE) - this.ageMars(age)) * 100) / 100;
        } else if (planet.toLowerCase() === "jupiter"){
            return Math.round((this.ageJupiter(averageLE) - this.ageJupiter(age)) * 100) /100;
        }
    }

    dateDifference(year1, month1, day1, year2, month2, day2){
        var date1 = new Date(`${year1}-${month1}-${day1}`);
        var date2 = new Date(`${year2}-${month2}-${day2}`);
        return Math.abs((Date.parse(date2) - Date.parse(date1)) / 1000);
    }

    checkExpectancy(num){
        if (num > 0){
            return num;
        } else {
            return "Lucky You!";
        }
    }
}
