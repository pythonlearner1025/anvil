interface Props {
    name: string
}

const PromptObject = (props: Props) => {
    return (
        <div className="PromptObject-Container">
            <div className="PromptObject-Label">{props.name}</div>
        </div>
    )
}

export default PromptObject