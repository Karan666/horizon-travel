export default function Card({ image = "blog1", blogText = "Hello Hermano" }) {
  return (
    <div className="card">
      <img
        src={`./images/${image}.avif`}
        height="200"
        width="100%"
        className="card-img-top"
        alt="BlogImage"
      />
      <div className="card-body">
        <p className="card-text">{`${blogText}`}</p>
      </div>
    </div>
  );
}
