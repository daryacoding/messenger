export default function CreateChat ({
    createChat,
    chat,
    handleChange
}) {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                createChat()
            }}
            >
                <input type='text' value={chat.message} name='message' onChange={handleChange} placeholder='Enter Message' />
                <input type='text' value={chat.name} name='name' onChange={handleChange} placeholder='Enter Name' />
            </form>
        </>
    )
}