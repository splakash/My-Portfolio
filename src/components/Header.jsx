import { Camera } from 'lucide-react';

function Header(){
    return (
        <>
       <Camera color="red" size={32} />; */
        <div className="flex justify-between">
            <div><img  src='logo-symbol-dark.png' alt="logo"></img></div>
            <div>
            
            <ul className="flex">
            <li>
                <a>Home</a>

            </li>
            <li>
                Download_Resume
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contacts</a>
            </li>
        </ul>
        </div>

        <div>
            <ul className="flex">
                <li>
                    <a>Linkedin</a>
                </li>
                <li>
                    <a>GitHub</a>
                </li>
                <li>
                    <a>LeetCode</a>
                </li>
                <li>
                    GeeksForGeeks
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Header