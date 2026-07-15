function Notification({hasNewMessages}) {

    return (
        <div style={{backgroundColor :"green",padding :"5px", color :"white"}}>
            <h2>Inbox</h2>
            
            {hasNewMessages && <p>You have new messages! </p>}
            {hasNewMessages && <h3>farimo aya kuyalo</h3>}
        </div>
    );
}

export default Notification;
