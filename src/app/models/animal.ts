export class Animal {
    type: string
    age: number
    isHungry: boolean

    constructor(type:string, age:number){

        this.type = type
        this.age = age
        this.isHungry = false
   

        setInterval(function () {

          //this.isHungry = true
            
        },10000)

    }
}