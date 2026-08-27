import Card from "../components/Card";

export default function Blogs() {
  return (
    <div className="container-fluid">
      <img
        src="./images/horizon_banner.png"
        height="500"
        width="100%"
        alt="horizon_banner"
      />
      <div className="container mt-5">
        <div class="container text-center">
          <div class="row">
            <div className="col">
              <Card
                image="blog1"
                blogText="Lisbon is a dazzling mix of historic charm and modern cool. I spent my days getting lost in the narrow, colorful streets of Alfama and riding the iconic Tram 28. The viewpoints, or miradouros, offer stunning sunset views over the red roofs, and the pastries in Belém are as good as they say!"
              />
            </div>
            <div className="col">
              <Card
                image="blog2"
                blogText="Waking up to the sound of tropical birds in the heart of Bali’s jungle was pure magic. This hidden gem in Ubud balances rustic charm with high-end luxury—hello, private plunge pool! The staff was attentive, and the eco-friendly focus made the stay even better."
              />
            </div>
            <div className="col">
              <Card
                image="blog3"
                blogText="We traded bustling city lights for the Arctic night, and it was worth every shivering second. Our local guide took us through icy fjords to a remote spot away from light pollution. Seeing the green lights dance across the sky was a spiritual experience."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
