import { TreeCount } from "../../types/types";

const buildTreeCountDatasets = (data: TreeCount[]) =>{
  return [
    {
      backgroundColor: 'rgba(163, 190, 140, 0.8)',
      categoryPercentage:1,
      borderColor: "#A3BE8C",
      borderWidth: 3,
      label: 'Trees planted',
      data:data.map(d => d.numberOfTrees)
    }]
};

export default buildTreeCountDatasets;