

const ScoreBoard = ({score}) => {

    return(
        <div className="shadow scoreboard">
            <h1 className="scoreboard__title">Счёт</h1>
            <div className="user-panel">
                <div className="shadow user-info bg-primary bg-gradient">
                    <span className="x-user-score">{score.cross}</span>
                </div>
                <div className="shadow user-info bg-danger bg-gradient">
                    <span className="o-user-score">{score.circle}</span>
                </div>
            </div>
        </div>
    )
}


export default ScoreBoard