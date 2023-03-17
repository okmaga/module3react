import React, {useState} from 'react';
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь"},
        {id: 1, value: 3, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"}
    ]



    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        setCounters(prev => {
            return prev.filter(counter => counter.id !== id);
        })
    }

    const handleReset = () => {
        console.log('z')
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        setCounters(prev => {
            return prev.map(counter => {
                if (counter.id === id) {
                    return {...counter, value: counter.value + 1}
                } else {
                    return counter;
                }
            })
        })
    }
    const handleDecrement = (id) => {
        setCounters(prev => {
            return prev.map(counter => {
                if (counter.id === id) {
                    return {...counter, value: counter.value - 1}
                }else {
                    return counter;
                }
            })
        })
    }

    return (
        <>

            {counters.map(count => <Counter
                key={count.id}
                {...count}
                onDelete={handleDelete}
                onIncrement={() => handleIncrement(count.id)}
                onDecrement={() => handleDecrement(count.id)}
                />

            )}
            <button className="btn btn-primary btn-sm m2" onClick={handleReset}>Reset</button>
        </>
    );
};

export default CountersList;
