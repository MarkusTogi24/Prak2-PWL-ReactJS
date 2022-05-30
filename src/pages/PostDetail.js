import Show from '../api/show'
import { useParams } from 'react-router-dom';

export default function PostDetail(){
    const param = useParams('id');
    // console.log(param.id)
    const { data, comments, isPending, error } = Show(param.id);
    return(
        <div className="p-4">
            { error && <p>{ error }</p> }
            { isPending && <p>Memuat Data ...</p> }
            { data && (
                <>
                    <p className="text-base mb-4 font-serif font-semibold">Post's Detail</p>
                    <div className="border mb-4 p-2">
                        <h1 className="text-2xl mb-4">{data.title}</h1>
                        <h2 className="text-sm mb-4">By {data.author}</h2>
                        <p>{data.body}</p>
                    </div>
                    <p className="text-base mb-4 font-serif font-semibold">Comments</p>
                    { comments && (
                        comments.map((comment) => (
                            <div className="border p-2 mb-3 cursor-pointer" key={ comment.id }>
                                <p className="text-sm font-serif font-bold tracking-wider">{ comment.content }</p>
                            </div>
                        )))
                    }
                </>
            )}
        </div>
    );
}