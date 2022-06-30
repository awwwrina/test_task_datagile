import { useDispatch, useSelector  } from 'react-redux';

import { valueIncreased, valueReduced } from '../app/appSlice';
import DeleteCounterBtn from '../deleteCounterBtn/DeleteCounterBtn';

import './defaultCounter.scss'

const DefaultCounter = ({value, index}) => {
    const dispatch = useDispatch();

    const values = useSelector(state => state.counters.counters);

    return(
        <div className="wrapper">
            <div className="quantity">
                <button 
                    className="quantity__modifier quantity__modifier_left"
                    onClick={()=> dispatch(valueReduced(index))}>
                    &mdash;
                </button>
                <input readOnly className="quantity__input" type="text" name="quantity" value={value} />
                <button 
                    className="quantity__modifier quantity__modifier_right"
                    onClick={()=> dispatch(valueIncreased(index))}>
                    &#43;
                </button>
            </div>
            {values.length > 1 && <DeleteCounterBtn index={index}/>} 
        </div>
    )
}

export default DefaultCounter;