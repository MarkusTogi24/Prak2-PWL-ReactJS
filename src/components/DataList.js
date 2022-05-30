import { useHistory } from "react-router-dom";
export default function DataList( props ){
    const posts = props.data;

    const history = useHistory();
    const handleClick = (id) => {
        // console.log(id);
        history.push(`post/${id}`)
    }
    return(
        <div>
            { 
                posts.map((post) => (
                    <div className="border p-4 mb-6 cursor-pointer" key={ post.id } onClick={()=>handleClick(post.id)}>
                        <p className="text-lg font-serif font-bold tracking-wider">{ post.title }</p>
                        <p className="font-light text-sm">By { post.author }</p>
                    </div>
                ))
            }
        </div>
    );
}