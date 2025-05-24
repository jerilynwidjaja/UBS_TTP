import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
return (
<div>
<nav style={styles.nav}>
<h2 style={styles.logo}>UBS</h2>
<div>
<Link to="/signup" style={styles.link}>Signup</Link>
<Link to="/login" style={styles.link}>Login</Link>
</div>
</nav>
<main style={styles.main}>
<h1>Welcome to UBS</h1>
<p>Helping you further in your tech career.</p>
</main>
</div>
);
};

const styles = {
nav: {
display: "flex",
justifyContent: "space-between",
padding: "1rem 2rem",
backgroundColor: "#282c34",
color: "#fff"
},
logo: {
margin: 0
},
link: {
marginLeft: "1rem",
color: "#61dafb",
textDecoration: "none",
fontWeight: "bold"
},
main: {
padding: "2rem",
textAlign: "center"
}
};

export default HomePage;