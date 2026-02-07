export default function PhotoGrid() {
  const placeholders = [
    {
      title: "E-Commerce Experience",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800"
    },
    {
      title: "Agency Landing Page",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    }
  ];

  return (
    <div className="photo-grid">
      {placeholders.map((item, index) => (
        <div key={index} className="photo-card-static">
          <div className="photo-image-container">
            <img src={item.image} alt={item.title} />
            <div className="photo-overlay-static">
              <span className="photo-tag">{item.category}</span>
              <h4>{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}