import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(
        {
            _id: null,
            boxSize: '', 
            boxholder: ''
          },
    )
    const navigate = useNavigate()

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addBox(formData)
        navigate(`/mailboxes`)
        setFormData({_id: null, boxSize: '', boxholder: ''})
        
    }

    return (
        <>
            <h2>Create Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Boxholder:</label>
                <input 
                    type="text" 
                    name="boxholder" 
                    value={formData.boxholder} 
                    onChange={handleChange} 
                    placeholder="Name"
                />
                <label htmlFor="boxSize">Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                <option value="" disabled>Choose a size</option> 
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                </select>
                <button type="submit">Create Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm