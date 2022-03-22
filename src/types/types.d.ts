export type PlantedTree = [numberOfTrees:number, plantedOn:number];

export interface TreeResponse extends Response{
  data:{
    responseText: string,
    responseCode: string,
   data: PlantedTree[]
  }
}

export type TreeCount = {
  date: Date,
  numberOfTrees: number
}