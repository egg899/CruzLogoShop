import {useState} from "react";
import axios from "axios";



const LoginModal = ({showLogin, setShowLogin, setUser }) => {


    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })


    };//handleChange




    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            setUser(response.data.user);

            alert("Login exitoso");

            setShowLogin(false);

        }
        catch(error) {
            alert(error.response?.data?.error || "Error al iniciar sesión");
        }

    };//handleSubmit

    return(
        <>
            <div 
            
                className={`cart-backdrop ${showLogin ? "active" : ""}`}
                onClick={() => setShowLogin(false)}
            >

            </div>

            <div className={`cart-modal ${showLogin ? "open" : ""}`}>

                <div className={`cart-modal ${showLogin ? "open": ""}`}>


                     <div className="cart-header">

                        <h2 className="fw-bold">
                            Iniciar Sesión
                        </h2>

                        <button className="btn-close" onClick={() => setShowLogin(false)} />




                     </div>


                    <div className="cart-body">
                            <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input

                                type="email"

                                name="email"

                                className="form-control"

                                value={formData.email}

                                onChange={handleChange}

                                required

                            />

                        </div>

                        <div className="mb-4">

                            <label className="form-label">
                                Password
                            </label>

                            <input

                                type="password"

                                name="password"

                                className="form-control"

                                value={formData.password}

                                onChange={handleChange}

                                required

                            />

                        </div>

                        <button

                            type="submit"

                            className="btn btn-dark w-100"

                        >

                            Login

                        </button>

                    </form>
                    
                    
                    </div>

                </div>


            </div>
        </>
    )
};


export default LoginModal;