class Animal {
    constructor(name) {
        this.name=name;
    }

move = () => {
        console.log('move'+this.name)

};


}
const frog = new Animal('Crazy')
console.log(frog.move());
console.log(frog);
