import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            < PrettyChatWindow 
                projectId= '3c4c86ce-8ae6-4911-8865-e374bd9f806a'
                usename= {props.user.username} 
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage


