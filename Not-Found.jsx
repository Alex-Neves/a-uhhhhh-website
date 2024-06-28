import './Not-Found.scss'
import {Link} from 'react-router-dom'
export default function PageNotFound(){
    return <div  className='Error-Message'>
        <h1>404 Page not found</h1>
        <p>Try another page :)</p>
        <p>OR go <Link className='Link' to='/'>Home</Link></p>
    </div>;
};