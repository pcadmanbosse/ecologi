import { TreeCount } from "../../types/types"

const buildTreeCountLabels = (data: TreeCount[]) =>{
  return data.map(d => d.date)
};
export default buildTreeCountLabels;