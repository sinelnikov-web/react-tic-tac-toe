const GameField = ({fieldId, isUserClicked, isUserWithPhone, field,
                   onFieldClick, handleMouseEnter, handleMouseLeave, user}) => {


    return (
        <div
            id={fieldId}
            className={
                `shadow tic-tac-toe__field bg-gradient ${isUserClicked} ${isUserWithPhone}`
            }
            data-column={field.pos[0]}
            data-row={field.pos[1]}
            data-user={field.user}
            onClick={onFieldClick}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
        >
            <span id={fieldId}
                  className={`shape ${field.user} ${!field.user && field.isHover ? user : ''}`}
                  data-user={field.user}
            />
        </div>
    )
}


export default GameField