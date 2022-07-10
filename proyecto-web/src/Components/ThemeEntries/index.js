import Entry from "../Entry"
import { useDispatch, useSelector } from "react-redux";
import {getOpinionByTheme} from "../../Slices/opinionSlice";
import { useEffect } from "react";


function ThemeEntries(props){
    const themeOpinions = useSelector(
        (state) => state.opinion.opinions
    );

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOpinionByTheme(props.theme));
    },[dispatch,props.theme])
    
   
    return(
        <>
        
            {
            themeOpinions.map((t)=> {
                console.log(themeOpinions)
                return(
                   <Entry username={t.user_name} body={t.body} theme={t.theme_name} votes={t.votes}/>
                );
            })}
        
        
        </>



    )


}

export default ThemeEntries;