export class Animal {
    type: string
    isHungry: boolean
    lastFed: Date
    imgUrl:string
    imgUrlHungry:string

    constructor(type:string, imgUrl:string, imgUrlHungry:string){

        this.type = type
        this.isHungry = false
        this.lastFed = new Date()
        this.imgUrl = imgUrl
        this.imgUrlHungry = imgUrlHungry


    }
}