import {useEffect, useState} from "react";
import {analyzeMap, createMap} from "../common/game-utils";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameField from "./GameField/GameField";
import Modal from "./Modal/Modal";

const Game = () => {

    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

    let gameMap = createMap()

    // state for user queue
    let [user, setUser] = useState('cross')

    // state for win / lose / draw control
    let [win, setWin] = useState('')

    // state for game map
    let [fields, setFields] = useState({...gameMap})

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
        setFields({...gameMap})
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
                            <GameField
                                key={key}
                                fieldId={key}
                                isUserClicked={isUserClicked}
                                isUserWithPhone={isUserWithPhone}
                                field={fields[key]}
                                onFieldClick={onFieldClick}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                user={user}
                            />
                        )
                    })
                }
                <Modal win={win} handleModalClose={handleModalClose}/>
            </div>
        </>
    )
}


export default Game