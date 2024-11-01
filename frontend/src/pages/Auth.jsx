import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim version for smaller bundle size
import '../styles/Auth.css';

const Auth = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <div className="auth-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {!showLogin && !showRegister && (
                <div className="button-container">
                    <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
                    <button className="btn btn-secondary" onClick={handleRegisterClick}>Register</button>
                </div>
            )}
            {showLogin && (
                <div className="form-container">
                     <form className="form" autoComplete="off">
    <div className="control">
      <h1>Sign In</h1>
    </div>
    <div className="control block-cube block-input">
      <input name="username" type="text" placeholder="Username" />
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
    <div className="control block-cube block-input">
      <input name="password" type="password" placeholder="Password" />
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
    <button className="btn block-cube block-cube-hover" type="button">
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="text">Log In</div>
    </button>
   
  </form>
                </div>
            )}
            {showRegister && (
                <div className="form-container">
                    <form className="form" autoComplete="off">
    <div className="control">
      <h1>Sign In</h1>
    </div>
    <div className="control block-cube block-input">
      <input name="username" type="text" placeholder="Username" />
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
    <div className="control block-cube block-input">
      <input name="password" type="password" placeholder="Password" />
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
    <button className="btn block-cube block-cube-hover" type="button">
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="text">Log In</div>
    </button>
    <div className="credits">
      <a href="https://codepen.io/marko-zub/" target="_blank" rel="noopener noreferrer">
        My other codepens
      </a>
    </div>
  </form>

                </div>
            )}
        </div>
    );
};

export default Auth;
