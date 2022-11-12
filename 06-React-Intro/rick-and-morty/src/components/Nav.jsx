// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


export default function Nav(props){
    return (
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>

    );
}