function Logo({ width, height }) {
    return (
      <img
        className={`${width || "w-20"} ${height || "h-20"}`}
        alt="Logo"
        src="https://drive.google.com/file/d/1HuJrumbHr9rUr4_doqx74EdBONur6Sl2/view?usp=sharing"
      />
    );
  }
  
  export default Logo;
  