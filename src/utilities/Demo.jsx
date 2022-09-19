import {useEffect} from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';

const Demo = (props) => {
    
    return ( 
        
        <div className={'z-10 w-[700px] h-[630px] left-[25%] top-[5vh] bg-transparent fixed'}>
            <AiFillCloseCircle className='hover:fill-rose-700 absolute float-right left-[65vw] top-[75vh]' size={120} onClick={() => props.handleClick()}/>
            <iframe id='demo' className='border-2' frameborder='1' width='100%' height='100%' src={props.webLink}/>
        </div>
    );
}
 
export default Demo;