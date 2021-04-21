import { PropsWithChildren } from 'react'
import flagBackground from '../assets/flag_background_1.png'


export const QuizWrapper = (props: PropsWithChildren<{}>) => {
    return (
        <div
            style={{
                background: `url(${flagBackground})`,
                backgroundSize: 'cover',
                width: "100vw",
                maxWidth: '100%',
                backgroundRepeat: "no-repeat",
                overflow: 'hidden'
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
