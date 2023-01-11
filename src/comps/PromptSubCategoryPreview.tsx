interface Props {
    name: string
}

const PromptSubCategoryPreview = (props: Props) => {
    return (
        <div className="PromptSubCategoryPreview-Container">
            <div className="PromptSubCategoryPreview-Label">{props.name}</div>
        </div>
    )
}

export default PromptSubCategoryPreview;