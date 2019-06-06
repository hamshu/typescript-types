interface Animal {
    kind: string;
}

interface WildAnimal extends Animal {
    livingArea: string;
}

interface Pet extends Animal {
    name: string;
}

function isPet(animal: Animal): animal is Pet {
    return (<Pet>animal).name !== undefined;
}

function printAnimal(animal: WildAnimal | Pet) {
    if (isPet(animal)) {
        return animal.name
    } else {
        return animal.livingArea
    }
}