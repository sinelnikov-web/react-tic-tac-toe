import {useEffect, useState} from "react";
import {analyzeMap} from "../common/game-utils";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

const Game = () => {

    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

    let fieldsArr = {}
    let fieldId = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            fieldsArr[fieldId] = {
                isClicked: false,
                pos: [j, i],
                user: '',
                isHover: false
            }
            fieldId++
        }
    }

    // state for user queue
    let [user, setUser] = useState('cross')

    // state for win / lose / draw control
    let [win, setWin] = useState('')

    // state for game map
    let [fields, setFields] = useState({...fieldsArr})

    // state for score
    let [score, setScore] = useState({
        cross: 0,
        circle: 0
    })

    // analyze map when user click on field
    useEffect(() => {
        let checkWinOrDraw = analyzeMap(fields)
        setWin(checkWinOrDraw)
        if (checkWinOrDraw) {
            if (checkWinOrDraw !== 'draw') {
                setScore({
                    ...score,
                    [checkWinOrDraw]: ++score[checkWinOrDraw]
                })
            }

        }
    }, [fields])

    const onFieldClick = (e) => {
        const fieldId = e.target.id
        if (!fields[fieldId].isClicked) {
            setFields(prevFields => ({
                ...prevFields,
                [fieldId]: {
                    ...prevFields[fieldId],
                    isClicked: true,
                    user: user
                }
            }))
            setUser(prevUser => prevUser === "cross" ? "circle" : "cross")
        }
    }

    const handleModalClose = () => {
        setFields({...fieldsArr})
        setWin('')
    }

    const handleMouseEnter = (e) => {
        let fieldId = e.target.id
        if (!fields[fieldId].isClicked) {
            setFields(prevFields => ({
                ...prevFields,
                [fieldId]: {
                    ...prevFields[fieldId],
                    isHover: true
                }
            }))
        }
    }
    const handleMouseLeave = (e) => {
        let fieldId = e.target.id
        if (!fields[fieldId].isClicked) {
            setFields(prevFields => ({
                ...prevFields,
                [fieldId]: {
                    ...prevFields[fieldId],
                    isHover: false
                }
            }))
        }
    }

    return (
        <>
            <ScoreBoard score={score}/>
            <div className="shadow tic-tac-toe">
                {
                    Object.keys(fields).map(key => {
                        const isUserClicked = fields[key].user ? fields[key].user === 'cross' ? 'bg-primary' : 'bg-danger' : ''
                        const isUserWithPhone = isMobile ? !fields[key].isClicked ? user === 'cross' ? 'bg-primary' : 'bg-danger' : '' : ''
                        return (
                            <div
                                key={key}
                                id={key}
                                className={
                                    `shadow tic-tac-toe__field bg-gradient ${isUserClicked} ${isUserWithPhone}`
                                }
                                data-column={fields[key].pos[0]}
                                data-row={fields[key].pos[1]}
                                data-user={fields[key].user}
                                onClick={onFieldClick}
                                onMouseEnter={(e) => handleMouseEnter(e)}
                                onMouseLeave={(e) => handleMouseLeave(e)}
                            >
                            <span id={key}
                                  className={`shape ${fields[key].user} ${!fields[key].user && fields[key].isHover ? user : ''}`}
                                  data-user={fields[key].user}
                            />
                            </div>
                        )
                    })
                }
                <div className={`message${win ? " open" : ""}`} id="win">
                    <div className="shadow message__body">
                        <h1 className={`message__title text-${win === 'cross' ? 'primary' : win === 'circle' ? 'danger' : 'default'}`}>
                            {win === 'cross' ? "Победили крестики!!!" : win === 'circle' ? "Победили нолики" : "Ничья."}
                        </h1>
                        <button onClick={handleModalClose}
                                className={`message__button btn btn-${win === 'cross' ? 'primary' : win === 'circle' ? 'danger' : 'dark'}`}>Start
                            new game!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Game