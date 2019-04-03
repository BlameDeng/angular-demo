import { Person } from './person'

describe('Person', () => {
  it('should create an instance with properties', () => {
    const test = new Person('1', 'Test', 18, 'no where')
    expect(test.id).toBe('1')
    expect(test.name).toBe('Test')
    expect(test.age).toBe(18)
    expect(test.address).toBe('no where')
  })
})
