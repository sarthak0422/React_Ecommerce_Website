import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: '20px',
    opacity: 0,
    animation: 'fadeIn 1s forwards',
  },
  header: {
    fontSize: '48px',
    color: '#333',
    marginBottom: '20px',
    animation: 'fadeInHeader 1.5s forwards',
  },
  message: {
    fontSize: '18px',
    color: '#555',
    margin: '20px 0',
    animation: 'fadeInMessage 1.8s forwards',
  },
  link: {
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
    animation: 'bounce 2s infinite',
  },
};

// Keyframes defined as a JavaScript string in the `style` tag
const keyframes = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInHeader {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInMessage {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export default NotFound;

// Inject keyframes into the document's <head>
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);
}
