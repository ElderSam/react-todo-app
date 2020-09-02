import React from 'react';

export default function Todo({ todo }) {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} />
            <label>
                {todo.name}
            </label>
            
        </div>
    );
}