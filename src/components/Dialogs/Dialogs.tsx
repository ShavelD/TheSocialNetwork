import React from 'react'
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Polina
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}