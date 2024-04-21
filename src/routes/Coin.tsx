import { useParams } from "react-router-dom";

interface Params{
    coinId:string;
}
function Coin(){
    const {coinId} = useParams<Params>();
    console.log("adfasfd");
    return (
    <h1>Cfeefeffefe</h1>
    )
}

export default Coin;