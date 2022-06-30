import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { valueIncreased } from '../../store/counterSlice';
import DeleteCounterBtn from '../DeleteCounterBtn';
import { DELAY } from '../../constants';

const CounterWithoutBtn = ({value, index}) => {
    const dispatch = useDispatch();
    const values = useSelector(state => state.counters.counters);

    useEffect(() => {
        const interval = setInterval(() => dispatch(valueIncreased(index)), DELAY);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="wrapper">
            <input readOnly className="quantity__input" type="text" name="quantity" value={value} />
            {values.length > 1 && <DeleteCounterBtn index={index}/>}   
        </div>
    )
}

export default CounterWithoutBtn;


