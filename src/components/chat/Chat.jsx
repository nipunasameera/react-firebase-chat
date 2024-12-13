import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e =>{
        setText(prev=>prev+e.emoji);
        setOpen(false);
    }

    return (
        <div className="chat">
            <div className="top">

                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Lorem ipsum dolor, sit</p>
                    </div>
                </div>

                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/29475573/pexels-photo-29475573/free-photo-of-traditional-spice-market-in-bukhara-uzbekistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p>asnsanunsaunsanbdskfbskdbsbdnsbdnksbdksbdsdks</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>

                <input type="text" placeholder="Type a message..." 
                onChange={(e)=>setText(e.target.value)}
                value={text}/>
                
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat