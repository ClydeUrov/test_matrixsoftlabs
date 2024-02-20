"use client"

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="map"
        style={{ maxWidth: "100%", width: "100%", height: "400px" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.4317837235723!2d24.11190031579396!3d56.94585798099453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed12ab5ff59d9%3A0x1e52ad2ef86b2b9c!2sKrustpils%20iela%206%2C%20R%C4%ABga%2C%20LV-1073%2C%20Latvia!5e0!3m2!1sen!2sus!4v1646993012676!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
};

export default Map;