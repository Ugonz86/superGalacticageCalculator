import {Calculator} from './../src/calculator.js';

describe('newCalculator', function() {

  const ageCalculator = new Calculator();
  it('should test that age in years provided will be converted to seconds', function(){
    expect(ageCalculator.ageSeconds(1)).toEqual(31536000);
  });
  it('should return accurate conversion of Earth age to Mercury age', function(){
    expect(ageCalculator.ageMercury(32)).toEqual(133.33);
  });
  it('should return accurate conversion of Earth age to Venus age', function(){
    expect(ageCalculator.ageVenus(32)).toEqual(51.61);
  })
  it('should return accurate conversion of Earth age to Mars age', function(){
    expect(ageCalculator.ageMars(32)).toEqual(17.02);
  });
  it('should return accurate conversion of Earth age to Jupiter age', function(){
    expect(ageCalculator.ageJupiter(32)).toEqual(2.7);
  });
  it('Mercury should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy("Mercury", 60, 32)).toEqual(116.67);
  });
  it('Venus should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy("Venus", 60, 32)).toEqual(45.16);
  });
  it('Mars should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy("Mars", 60, 32)).toEqual(14.89);
  });
  it('Jupiter should return accurate number of years when age and planet is provided', function(){
    expect(ageCalculator.expectancy("Jupiter", 60, 32)).toEqual(2.36);
  });
  it('If actual age exceeds average life expectancy, return negative result.', function(){
    expect(ageCalculator.expectancy("Venus", 30, 32)).toEqual(-3.22);
  });
});
