
export const Card = (props) => {

    return (
        <div className={`w-full h-full flex flex-col border border-gray-300 bg-white rounded-md ${props.padding ? 'p-5': 'p-0'}`}>
            {props.children}
        </div>
    )
}