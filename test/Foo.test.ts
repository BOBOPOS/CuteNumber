import {Foo} from '../src/Foo'
import {isCuteNumber} from '../src/Foo'
describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
})

describe('find cute number', () => {
  it('Provide numbers 1,3,5,7,8,12 and return true', () => {
    const numbers = [1,3,5,7,8,12];

    const actual:boolean = isCuteNumber(numbers)

    expect(actual).toBeTruthy();

  });
  
});
