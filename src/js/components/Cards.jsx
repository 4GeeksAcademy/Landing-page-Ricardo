const cardsData = [
    {
        title: "Card 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
    {
        title: "Card 2",
        text: "Sapiente esse necessitatibus neque.",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
    {
        title: "Card 3",
        text: "Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
    {
        title: "Card 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
];

const Cards = () => {
    return (
        <div className="container-fluid py-5 bg-black" data-bs-theme="dark">
            <div className="row g-5 justify-content-center">
                {cardsData.map((card, index) => (
                    <div key={index} className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto">
                        <div className="card custom-card-hover h-100">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href={card.link} className="btn btn-primary mt-auto">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Cards; 