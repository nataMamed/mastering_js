

function Car(maxSpeed = 200, delta = 5){

    // Atributo privado
    let currentSpeed = 0

    // Método público
    this.acelerate = function (){
        if (currentSpeed + delta <= maxSpeed){
            currentSpeed += delta
        }else{
            currentSpeed = maxSpeed
        }

    }

    // se fosse um método publico usaria o let
    this.getCurrentSpeed = function (){
        return currentSpeed
    }
}


const uno = new Car
uno.acelerate()
console.log(uno.getCurrentSpeed());

const ferrari = new Car(500, 50)
ferrari.acelerate()
console.log(ferrari.getCurrentSpeed());