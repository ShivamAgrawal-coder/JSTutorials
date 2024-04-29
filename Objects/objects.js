// how to use symbol in js obj

const mySym = Symbol("keys1")

const obj = {
    name: "Shivam",
    [mySym]: "mySym1"
}

console.log(obj)