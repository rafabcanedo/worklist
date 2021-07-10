import React from 'react';

const WorkList = ({works, setWorks, setEditWork }) => {

    // possivel erro no work(nao reconhecido)
    // o erro foi resolvido
    const handleComplete= (work) => {
        setWorks(
            works.map((item) =>{
                if(item.id === work.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleEdit = ({ id }) => {
        const findWork = works.find((work) => work.id === id);
        setEditWork(findWork);
    }

    const handleDelete = ({ id }) => {
        setWorks(works.filter((work) => work.id !== id));
    };
    return (
    <div>
        {works.map((work) => (
            <li className="list-item" key={work.id}>
                <input 
                type="text" 
                value={work.title} 
                className={`list ${work.completed ? "complete" : ""}`}
                onChange={(event) => event.preventDefault()} 
                />
                <div>
                    <button className="button-complete task-button" 
                    onClick={() => handleComplete(work)}
                    >
                        <i className="fa fa-check-circle"></i>
                    </button>

                    <button className="button-edit task-button" 
                    onClick={() => handleEdit(work)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>

                    <button className="button-delete task-button" 
                    onClick={() => handleDelete(work)}
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </li>
        ))}
    </div>);
    
};

export default WorkList;


/* 
    <li className="work list" key={work.id}>
    Troquei por list-item
*/

/* 
    check-circle
    edit
    trash
    icones,será que conigo troca-los?
*/