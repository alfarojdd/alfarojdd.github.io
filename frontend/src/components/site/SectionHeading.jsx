function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="font-heading text-3xl mb-8 flex items-center gap-3" style={{ color: "#00FFFF" }}>
      <Icon style={{ color: "#00FFFF" }} />
      {children}
    </h2>
  );
}

export default SectionHeading;
