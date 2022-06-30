import { useDispatch } from "react-redux";

import { counterDeleted } from "../../store/counterSlice";

const DeleteCounterBtn = ({index}) => {
    const dispatch = useDispatch();
    return(
        <button className="btn" onClick={() => dispatch(counterDeleted(index))}>
            Удалить счетчик
        </button>
    )
}

export default DeleteCounterBtn;