import { useState } from "react";
import axios from "axios";

const RegisterModal = ({ showRegister, setShowRegister, setShowLogin }) => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/register`,
                formData
            );

            setShowRegister(false);

            // UX: después del registro abre login
            setShowLogin(true);

        } catch (error) {

            setError(
                error.response?.data?.error ||
                "Error al registrar usuario"
            );

        }
    };

    return (
        <>
            {/* BACKDROP */}
            <div
                className={`cart-backdrop ${showRegister ? "active" : ""}`}
                onClick={() => setShowRegister(false)}
            />

            {/* MODAL */}
            <div className={`cart-modal ${showRegister ? "open" : ""}`}>
                    
                    <div className="cart-header">


                        <h2 className="fw-bold">Registro</h2>
                                        <button className="btn-close" onClick={() => setShowRegister(false)} />
                                    {error && (
                                        <div className="alert alert-danger text-center">
                                            {error}
                                        </div>
                                    )}
                    </div>
                
                

                <div className="cart-body">
                    <form onSubmit={handleSubmit}>
              
                    <input
                        className="form-control mb-2"
                        name="username"
                        placeholder="Nombre de Usuario"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-2"
                        name="email"
                        placeholder="Corre Electrónico"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                    />

                    <button className="btn btn-dark w-100">
                        Registrarse
                    </button>

                     <p className="text-center mt-3 mb-0">
                                ¿Ya tenés cuenta?{" "}
                                <span
                                    style={{ cursor: "pointer", color: "#0d6efd" }}
                                    onClick={() => {
                                        setShowLogin(true);
                                        setShowRegister(false);
                                    }}
                                >
                                    Iniciar Sesión
                                </span>
                                </p>

                </form>
                </div>

            </div>
        </>
    );
};

export default RegisterModal;