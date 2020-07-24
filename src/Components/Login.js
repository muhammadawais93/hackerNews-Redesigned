import React, { useContext } from 'react';
import { HackerNewsContext } from '../ContextAPI';

function Login() {
    const {clickHandler} = useContext(HackerNewsContext);
    return (
        <div className="modal">
            <div className="modal_content">
                <span class="material-icons" onClick={clickHandler}>
                close
                </span>
                <form>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder=""
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
