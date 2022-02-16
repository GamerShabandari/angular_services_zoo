export class Animal {
    type: string
    isHungry: boolean
    lastFed: Date

    constructor(type:string){

        this.type = type
        this.isHungry = false
        this.lastFed = new Date()

    }
}