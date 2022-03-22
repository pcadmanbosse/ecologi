import styled from "styled-components";
import {FaTree} from "react-icons/fa";

const LoadingIconContainer = styled('div')`
height: 90vh;
width: 100%;
flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;  
  }
`;
const ChangingColorTreeIcon = styled(FaTree)`
animation: color-change 1s infinite;
font-size: 30vh;
@keyframes color-change {
  0% { color: #A3BE8C; }
  50% { color: #EBCB8B; }
  100% { color: #D08770; }
`;
const Loading = () =>{
  return (
    <LoadingIconContainer>
      <ChangingColorTreeIcon />
      <div>Loading...</div>
    </LoadingIconContainer>
  )
}

export default Loading;