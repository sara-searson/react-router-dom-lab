import { Link } from "react-router-dom"

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul className="boxes">
                {props.mailboxes.map((current) => (
                    <li key={current._id} className='mailbox'>
                        <Link to={`/mailboxes/${current._id}`}>
                            <div className="mail-box">
                                {current._id}
                                <br/>
                                {current.boxholder}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList