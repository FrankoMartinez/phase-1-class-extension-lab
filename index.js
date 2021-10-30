// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if(!Array.isArray(this.sides)) return;
        let total = 0
        for(let i of this.sides) {
            total += i
        }
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))
    }
}

class Square extends Polygon {
    get isValid() {
        let first = this.sides[0]
        let second = this.sides[1]
        let third = this.sides[2]
        let fourth = this.sides[3]
       return (first == second && first == third && first == fourth && second == third && second == fourth && third == fourth)
    }

    get area() {
       let side1 = this.sides[0]
       return side1 ** 2
    }
}