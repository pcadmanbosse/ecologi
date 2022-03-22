import { createContext, useEffect, useState } from "react";
import { getTrees } from "../api/api";
import { TreeCount, PlantedTree } from "../types/types";

export const TreeDataContext = createContext({loading: false, data: [] as TreeCount[], });

const isValidTreeQuantity = (purchase: number) =>{
  return typeof purchase === 'number' && purchase > 0 && purchase < 2500000
}

const isValidDate = (date: Date) =>{
  return date <= new Date() && date > new Date("01/01/2019");
}

const getTreeCountArray = async (data:PlantedTree[]): Promise<TreeCount[]> =>{
  return new Promise((resolve) =>{
    const aggregationMap = {} as {[key:string]: number};
    data.forEach(treePurchase =>{
      const dayOfPurchase = new Date(treePurchase[1] *1000);
      if(isValidDate(dayOfPurchase) && isValidTreeQuantity(treePurchase[0])){
        const dayOfPurchaseAsDateString = dayOfPurchase.toLocaleDateString();
        aggregationMap[dayOfPurchaseAsDateString] = (aggregationMap[dayOfPurchaseAsDateString] || 0) + treePurchase[0];
      }
    });
    resolve(Object.entries(aggregationMap).map(([date, numberOfTrees]) =>({date:new Date(date), numberOfTrees})));
  })
 }

const TreeDataContextProvider = ({children}: {children: JSX.Element}) =>{
  const [data, setData] = useState<TreeCount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const treeFetch = async () =>{
      const trees = await getTrees();
      const treeCountArray = await getTreeCountArray(trees);
      setData(treeCountArray);
      setLoading(false);
    }
    treeFetch();
  }, [setData])

  return <TreeDataContext.Provider value={{loading, data}}>
    {children}
  </TreeDataContext.Provider>
};

export default TreeDataContextProvider;