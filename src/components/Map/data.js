import { useSelector } from "react-redux";

 const Garages = ()=> {
    const {data} = useSelector(state=>state.garageSpaces);
    return data;
} 
export default Garages;