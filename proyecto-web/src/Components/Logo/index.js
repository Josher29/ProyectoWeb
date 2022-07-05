function Logo({ width, height }) {
    return (
      <img
        className={`${width || "w-20"} ${height || "h-20"}`}
        alt="Logo"
        src="%PUBLIC_URL%/logo.png"
      />
    );
  }
  
  export default Logo;
  