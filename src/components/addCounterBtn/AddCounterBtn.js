import { counterAdded } from "../app/appSlice";
import { useDispatch, useSelector } from "react-redux";

const AddCounterBtn = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state.counters.counters);
    const sum = values.reduce((acc, num) => acc + num);

    return(
        <button className="btn btn_add" onClick={() => dispatch(counterAdded(sum))}>
            Добавить счетчик
        </button>
    )
}

export default AddCounterBtn;