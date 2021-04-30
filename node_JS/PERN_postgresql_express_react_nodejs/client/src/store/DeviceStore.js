import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._brands = [
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img:'https://htstatic.imgsmail.ru/pic_image/272e7d914586f33afcb671d9f73164a8/410/230/1671141/', },
            {id: 2, name: "Iphone 11 pro", price: 3500, rating: 2, img:'https://htstatic.imgsmail.ru/pic_image/272e7d914586f33afcb671d9f73164a8/410/230/1671141/', },
            {id: 3, name: "Iphone 10 pro", price: 4500, rating: 1, img:'https://htstatic.imgsmail.ru/pic_image/272e7d914586f33afcb671d9f73164a8/410/230/1671141/', },
            {id: 4, name: "Iphone 8 pro", price: 5500, rating: 4, img:'https://htstatic.imgsmail.ru/pic_image/272e7d914586f33afcb671d9f73164a8/410/230/1671141/', },
            {id: 5, name: "Iphone 78 pro", price: 7500, rating: 5, img:'https://htstatic.imgsmail.ru/pic_image/272e7d914586f33afcb671d9f73164a8/410/230/1671141/', }
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
