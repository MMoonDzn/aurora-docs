export default function ProductCard({
  title,
  description,
  image,
  href
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        border: "1px solid #262626",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        background: "#111111",
        transition: "0.2s ease"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "16px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}