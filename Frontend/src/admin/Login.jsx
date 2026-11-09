import Button from "@components/Button";
import '@styles/Admin.css';

function Login() {
    return(
        <section id="login">
            <form className="userForm">
                <h2>LOG IN</h2>
                <div className="textbox">
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" name="username" autoComplete="name" required />
                </div>
                <div className="textbox">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <Button 
                    type="submit" 
                    value="Send" 
                    title="Send" 
                    text="Entrar" 
                    classname="logging"
                    data="" 
                    aria="Button to login"     
                />
            </form>
        </section>
    )

}

export default Login