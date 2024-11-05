import Field from './Field';
import './information.css'


const Information = ({squares,click}) => {
    return (
        <div className="board">
            {
                squares.map((square,id)=>(
                    <Field key={id} value={square} onClick={()=>click(id)}/>
                ))
            }
            
        </div>
    );
}

export default Information;
