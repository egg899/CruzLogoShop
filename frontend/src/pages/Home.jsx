const Home = () => {

    const sections = [
        {
            title: "Nuevas Colecciones",
            description:
                "Descubrí bolsos modernos diseñados para combinar estilo y comodidad.",
            image:
                "/images/Bolso Moon.png"
        },
        {
            title: "Diseños Exclusivos",
            description:
                "Modelos únicos con materiales premium y detalles minimalistas.",
            image:
                "/images/img2.png"
        },
        {
            title: "Ofertas Especiales",
            description:
                "Encontrá descuentos y productos destacados de la temporada.",
            image:
                "/images/img5.png"
        }
    ];

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="display-3 fw-bold mb-3">
                    Moon Bags
                </h1>

                <p
                    className="fs-5 text-secondary mx-auto"
                    style={{
                        maxWidth: "700px"
                    }}
                >
                    Bolsos modernos para destacar tu estilo
                    todos los días.
                </p>

            </div>


            <div className="row g-4">

                {
                    sections.map((section, index) => (

                        <div
                            key={index}
                            className="col-12 col-lg-4"
                        >

                            <div
                                className="
                                    position-relative
                                    overflow-hidden
                                    rounded-5
                                    shadow-lg
                                    home-card
                                "
                                style={{
                                    height: "500px",
                                    cursor: "pointer",
                                    background: "#f8f8f8"
                                }}
                            >

                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="home-image"
                                />


                                <div
                                    className="
                                        position-absolute
                                        top-0
                                        start-0
                                        w-100
                                        h-100
                                        home-overlay
                                    "
                                >

                                    <div className="home-content text-white">

                                        <h2 className="fw-bold mb-3">
                                            {section.title}
                                        </h2>

                                        <p className="fs-5 mb-0">
                                            {section.description}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export { Home };