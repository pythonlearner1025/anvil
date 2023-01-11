interface Props {
    name: string
}

const PromptCategoryPreview = (props: Props) => {
    return (
        <div className="PromptCategoryPreview-Container">
            <div className="PromptCategoryPreview-Label">{props.name}</div>
        </div>
    )
}

export default PromptCategoryPreview;