import { useSelector } from 'react-redux';

import CounterWithoutBtn from '../CounterWithoutBtn';
import DefaultCounter from '../DefaultCounter';
import AddCounterBtn from '../AddCounterBtn';

const App = () =>  {
	const values = useSelector(state => state.counters.counters);

	return (
        <div className="container">
            <AddCounterBtn/>
            {values.map((value, index) => 
                (index + 1) % 4 === 0 ?
                <CounterWithoutBtn key={index} index={index} value={value}/> : 
                <DefaultCounter key={index} value={value} index={index}/>
            )}
        </div>  	
	);
}

export default App;
