import { useSelector } from 'react-redux';

import CounterWithoutBtn from '../counterWithoutBtn/CounterWithoutBtn';
import DefaultCounter from '../defaultCounter/DefaultCounter';
import AddCounterBtn from '../addCounterBtn/AddCounterBtn';

const App = () =>  {
	const values = useSelector(state => state.counters.counters);

	return (
        <>   <div className="container">
                <AddCounterBtn/>
                {values.map((value, index) => 
                    (index + 1) % 4 === 0 ?
                    <CounterWithoutBtn index={index} value={value}/> : 
                    <DefaultCounter value={value} index={index}/>
                )}
            </div>
        </>   	
	);
}

export default App;
