
interface Props {
    parentWidth: number,
    parentHeight: number,
}

const AnvilInfo = (props: Props) => {
    return (
        <div 
        className="Anvil-Info background-light"
        style={{
            width: props.parentWidth*0.85,
            height: props.parentHeight*0.65,
            left: (props.parentWidth - (props.parentWidth*0.85))/2,
            top:(props.parentHeight - (props.parentHeight*0.65))/2
        }}
        >
            <div className="Anvil-Info-textbox text-color-secondary">
                <p>
                    If you find Anvil useful, consider buying me&nbsp;
                    <a 
                    className="Anvil-Info-link"
                    href="https://www.buymeacoffee.com/minjunes"
                    target="_blank"
                    >coffee</a>
                </p>
                <p>
                    Also, please give me short feedback&nbsp;
                    <a 
                    className="Anvil-Info-link"
                    href="https://forms.gle/PuEeW6Fe5zr7M9Yr7"
                    target="_blank"
                    >here </a>
                </p>
                <p>
                    Anvil will evolve, and your input is essential!
                </p>
                <div style={{textAlign: 'right'}}>
                    <a className="Anvil-Info-link" href="https://twitter.com/song_minjune"
                    target="_blank"
                     >twitter</a>
                    <a className="Anvil-Info-link" href="https://github.com/pythonlearner1025/anvil"
                    target="_blank"
                    >github</a>
                </div>
            </div>
        </div>
    )
}

export default AnvilInfo;