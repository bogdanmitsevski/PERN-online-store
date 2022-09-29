import {makeAutoObservable} from 'mobx';
export default class DeviceStore {
    constructor() {
       this._types = [
        {id: 1, name: 'Fridges'},
        {id: 2, name: 'Smartphones'}
       ]

       this._brands = [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'}
       ]

       this._devices = [
        {id: 1, name: 'iPhone 14 Pro Max', price: 1500, rating: 5, img: 'https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30-1397x1397.jpg'},
        {id: 2, name: 'iPhone 14 Pro Max', price: 1500, rating: 5, img: 'https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30-1397x1397.jpg'},
        {id: 3, name: 'iPhone 14 Pro Max', price: 1500, rating: 5, img: 'https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30-1397x1397.jpg'},
        {id: 4, name: 'iPhone 14 Pro Max', price: 1500, rating: 5, img: 'https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30-1397x1397.jpg'},
    ]
        makeAutoObservable(this)
    }


setTypes(types) {
    this._types = types
};

setBrands(brands) {
    this._brands = brands
};

setDevices(devices) {
    this._devices = devices
};

get Types() {
    return this._types
};

get Brands() {
    return this._brands
};

get Devices() {
    return this._devices
};

}