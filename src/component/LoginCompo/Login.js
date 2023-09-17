import React, { useState } from 'react';
import './Login.css';

function Login (){

    const [name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [showswap, setShowswap] = useState(true);
    const [showswapAgain, setShowswapAgain] = useState(false);

   function  handleUserName (e){
    setName(e.target.value);
    }
    function handlePassword (e){
        setPassword(e.target.value)
    }

    const handleSwarping =() => {
        if (showswap !== true){
            setShowswap(true);
            setShowswapAgain(false);
        }else{
            setShowswap(false);
            setShowswapAgain(true);
        
        }
    }
        
    


    return(
        <>
        <div className='login'>
            <div className='loginBody'>

                <div className='loginContainer'>

                    <div className='welcomeTextBody'>
                        <div className='welcomeTextContainer'>
                            <div className='welcomeText'>
                                <h1 className='welcomeTextH1'>welcome To <span className='formHeaderPart'>OnlineStore</span></h1>
                                <p className='welcomeTextPara'> we're thrilled to have you 
                                    here, and we appreciate you choosing us for your
                                    shopping needs
                                </p>
                                <button className='signup' onClick={handleSwarping}>{ showswap !== true ? 'Login' : 'SignUp' }</button>
                            </div>
                        </div>
                    </div>

                     <form>
                        <h1 className='formHeader'>{ showswap !== true ? 'SignUp To' : 'Login To' } <span className='formHeaderPart'>OnlineStore</span></h1>
                        <> { showswap &&  <div className='formInput'>
                            <div className='mainInput'>
                                <label>Username or Email Address:</label>
                                <br />
                                <input type='text'
                                value={name}
                                onChange={ handleUserName }
                                />
                            </div>
                            <div className='mainInput'>
                                <label>Password:</label>
                                <br />
                                <input type='text'
                                value={Password}
                                onChange={ handlePassword }
                                />
                            </div>
                            <a href='/'>forgotten Password</a>
                            <button className='loginBtn'>Login</button>

                            <div className='otherOptionLog'>
                            <div className='otherContent'>
                            <h1 className='otherLog'>or Login with</h1>
                                <div className='otherCont'>
                                    <button>Google</button>
                                    <button>FaceBook</button>
                                    <button>Google</button> 
                                </div>
                            </div>
                        </div>
                        </div> } 

                        { showswapAgain && < >
                    <div className='formInput'>
                    <div className='mainInput'>
                                <label>Email Address:</label>
                                <br />
                                <input type='text'
                                placeholder='Example@gmail.com'
                                value={name}
                                onChange={ handleUserName }
                                />
                            </div>

                            <div className='mainInput'>
                                <label>Username:</label>
                                <br />
                                <input type='text'
                                value={name}
                                onChange={ handleUserName }
                                />
                            </div>

                            <div className='mainInput'>
                                <label>Create Password:</label>
                                <br />
                                <input type='text'
                                value={Password}
                                onChange={ handlePassword }
                                />
                            </div>

                            <div className='mainInput'>
                                <label>Retype Password:</label>
                                <br />
                                <input type='text'
                                value={Password}
                                onChange={ handlePassword }
                                />
                            </div>

                            <button className='SignUpBtn'>SignUp</button>
                    </div>
                    </> }
                        </> 
                        <p>{ name } </p>
                        <p>{ Password } </p>
                    </form> 

                </div>
            </div>
        </div>
        </>
    );
}

export default Login;