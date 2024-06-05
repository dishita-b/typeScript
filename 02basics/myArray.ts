//const superHero =[] //never type
const superHero: string[] = []
superHero.push("spiderman") //type pf array must be mentioned

const heroPower: number[] = []
heroPower.push(2)

const heroPowers: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({name: "", isActive: true})

const MlModels: number[][] = [ //array of arrays
    [255.255,255],
    [3,6,5],
    []
]


