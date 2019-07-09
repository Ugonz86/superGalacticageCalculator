import {Calculator} from './calculator.js';

describe('newCalculator', function() {

  const ageCalculator = age Calculator();
  it('should test that age in years provided will be converted to seconds', function(){
    expect(ageCalculator.ageSeconds(1)).toEqual(31536000);
  });
  it('should return accurate conversion of Earth age to Mercury age', function(){
    expect(ageCalculator.ageMercury(12)).toEqual(50.00);
  });
  it('should return accurate conversion of Earth age to Venus age', function(){
    expect(ageCalculator.ageVenus(12)).toEqual(19.35);
  })
  it('should return accurate conversion of Earth age to Mars age', function(){
    expect(ageCalculator.ageVenus(12)).toEqual(6.38);
  });
  it('should return accurate conversion of Earth age to Jupiter age', function(){
    expect(ageCalculator.ageJupiter(12)).toEqual(1.01);
  });
  it('Earth should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy)("Earth", 69.66, 12)).toEqual(57.66);
  });
  it('Mercury should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy)("Mercury", 69.66, 12)).toEqual(240.25);
  });
  it('Mars should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy)("Mars", 69.66, 12)).toEqual(30.67);
  });
  it('Jupiter should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy)("Jupiter", 69.66, 12)).toEqual(4.86);
  });
  it('should return accurate difference between dates in seconds', function(){
    expect(ageCalculator.dateDifference)(2019, "July", 05, 2019, "July", 04)).toEqual(86400);
  });
  it('should return number of days left of life. If actual age exceeds average life expectancy, return "Lucky You!"', function(){
    expect(ageCalculator.checkExpectancy)("Earth", 69.66, 12))).toEqual(57.66);
    expect(ageCalculator.checkExpectancy)("Earth", 38.60, 40))).toEqual("Lucky you!");
  });
  ;
