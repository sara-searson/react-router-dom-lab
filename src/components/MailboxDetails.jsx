import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
    const {mailboxId} = useParams()

    const current = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

    if (!current) {
        return <h1>Mailbox not found!</h1>
    }

    return (
        <>
            <h2>{current.boxholder}</h2>
            <dl>
                <dt>Box ID:</dt>
                <dd>{current._id}</dd>
                <dt>Size:</dt>
                <dd>{current.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails