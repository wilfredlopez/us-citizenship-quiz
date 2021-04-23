import { PropsWithChildren } from 'react'
import flagBackground from '../assets/flag_background_1.png'


export const QuizWrapper = (props: PropsWithChildren<{}>) => {
    return (
        <div
            style={{
                background: `url(${flagBackground})`,
                // backgroundSize: 'cover',
                backgroundSize: 'contain',
                width: "100vw",
                maxWidth: '100%',
                backgroundRepeat: "repeat no-repeat",
                overflowY: 'hidden'
            }}
        >
            <br />
            <br />

            {props.children}
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
