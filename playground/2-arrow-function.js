// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(4))


//Arrow functions do not bind to their this, hence they are poor candidates for methods
const event = {
    name: 'Birthday Party',
    guestList: ['Siddharth', 'Mukul', 'Bhavna'],
    printGuestList() {
        // const that = this

        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()