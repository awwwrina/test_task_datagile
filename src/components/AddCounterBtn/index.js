import { counterAdded } from "../../store/counterSlice";
import { useDispatch } from "react-redux";

const AddCounterBtn = () => {
    const dispatch = useDispatch();

    return(
        <button className="btn btn_add" onClick={() => dispatch(counterAdded())}>
            Добавить счетчик
        </button>
    )
}

export default AddCounterBtn;