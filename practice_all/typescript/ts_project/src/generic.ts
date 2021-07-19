// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//     return Object.assign({}, a, b)
// }
//
// const meged = mergeObjects({name: 'Dima'}, {age: 25})
// const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})
// console.log(merged2);

// const meged3 = mergeObjects({a: 1}, 'bbb')
// console.log(meged3);

// interface ILength {
//     length: number
// }
//
// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//     return {
//         value,
//         count: `В этом объекте ${value.length} символов`
//     }
// }
//
// console.log(withCount({length: 20}));

// =================

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }
//
// const person = {
//     name: 'Dima',
//     age: 30,
//     job: 'LOL'
// }
//
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

// =======================

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter( i => i !== item)
    }

    get items(): T[] {
        return this._items;
    }
}

// const strings = new Collection(['I', 'AM', 'STRING'])
// strings.add('!')
// strings.remove('AM')
// console.log(strings)
//
// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(4)
// numbers.remove(2)
// console.log(numbers)
//
// const objs = new Collection([{a: 1} , {b: 2}])
// objs.remove({b: 2})
// console.log(objs)

// interface Car {
//     model: string
//     year: number
// }
//
// function createAndValidate(model: string, year: number): Car {
//     const car: Partial<Car> = {}
//
//     if (model.length > 3) {
//         car.model = model
//     }
//
//     if (year > 2000) {
//         car.year = year
//     }
//
//     return car as Car
// }

// ==================

