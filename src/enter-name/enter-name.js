import './enter-name.scss';

function EnterName () {
    return (
        <div className="enter-name">
            <h3>Введите имя</h3>
            <input autoFocus={true}/>
            <button>OK</button>
        </div>
    )
}

export default EnterName;