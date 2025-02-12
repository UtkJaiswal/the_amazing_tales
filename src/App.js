import React, { useEffect, useState } from 'react';
import { Video, Mic, Headphones, DollarSign, Crown, Lock, Play } from 'lucide-react';

const App = () => {
  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: 'white',
    },
    navbar: {
      padding: '1rem',
      backgroundColor: '#1F2937',
      marginBottom: '2rem',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      color: '#A78BFA',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '1rem',
      backgroundColor: '#8B5CF6',
      color: 'white',
    },
    outlineButton: {
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #8B5CF6',
      cursor: 'pointer',
      marginLeft: '1rem',
      backgroundColor: 'transparent',
      color: '#8B5CF6',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      marginBottom: '2rem',
    },
    hero: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      color: '#A78BFA',
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    subtitle: {
      color: '#9CA3AF',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    card: {
      backgroundColor: '#1F2937',
      padding: '1.5rem',
      borderRadius: '0.5rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    cardText: {
      color: '#9CA3AF',
    },
    form: {
      backgroundColor: '#1F2937',
      padding: '2rem',
      borderRadius: '0.5rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#9CA3AF',
    },
    select: {
      width: '100%',
      padding: '0.5rem',
      backgroundColor: '#374151',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      marginBottom: '1rem',
    },
    footer: {
      backgroundColor: '#1F2937',
      padding: '2rem 0',
      marginTop: '4rem',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
    },
    footerTitle: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footerItem: {
      color: '#9CA3AF',
      marginBottom: '0.5rem',
      cursor: 'pointer',
    },
    animationSection: {
      backgroundColor: '#1F2937',
      padding: '3rem 1rem',
      marginBottom: '2rem',
      overflow: 'hidden',
    },
    animationContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    animatedText: {
      fontSize: '2rem',
      color: '#A78BFA',
      fontWeight: 'bold',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'slideIn 3s ease infinite',
    },
    '@keyframes slideIn': {
      '0%': {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      '10%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '90%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
    },
  };

  const slideAnimation = {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };

  const [currentText, setCurrentText] = useState(0);
  const animatedTexts = [
    "Share Your Stories with the World 🌍",
    "Connect with Global Storytellers 🤝",
    "Host Private Storytelling Sessions 🎭",
    "Join Story Competitions 🏆",
    "Build Your Storytelling Community 💫"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Tales</div>
          <div>
            <button style={styles.button}>Start Telling</button>
            <button style={styles.outlineButton}>Start Listening</button>
            <button style={styles.outlineButton}>About Us</button>
          </div>
        </div>
      </nav>

      {/* New Animated Text Section */}
      <section style={styles.animationSection}>
        <div style={styles.animationContainer}>
          <style>
            {`
              @keyframes slideIn {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                10% {
                  opacity: 1;
                  transform: translateY(0);
                }
                90% {
                  opacity: 1;
                  transform: translateY(0);
                }
                100% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
              }
              .animated-text {
                opacity: 0;
                transform: translateY(20px);
                animation: slideIn 3s ease;
              }
            `}
          </style>
          <div key={currentText} className="animated-text" style={{
            fontSize: '2rem',
            color: '#A78BFA',
            fontWeight: 'bold',
          }}>
            {animatedTexts[currentText]}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section style={styles.section}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Tale Nexus</h1>
          <p style={styles.subtitle}>Connect through stories. Create unforgettable moments.</p>
          
          <div style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>I want to be a:</label>
              <select style={styles.select}>
                <option>Storyteller</option>
                <option>Listener</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Niche:</label>
              <select style={styles.select}>
                <option>Mystery</option>
                <option>Fantasy</option>
                <option>Adventure</option>
              </select>
            </div>
            <button style={styles.button}>Connect with Someone Worldwide</button>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <Video size={24} />
              Live Video Stories
            </div>
            <p style={styles.cardText}>Connect face-to-face with storytellers and listeners worldwide in real-time.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <Mic size={24} />
              Be a Storyteller
            </div>
            <p style={styles.cardText}>Share your stories with the world. Connect with listeners who appreciate your craft.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <Headphones size={24} />
              Be a Listener
            </div>
            <p style={styles.cardText}>Immerse yourself in captivating tales from storytellers around the globe.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <DollarSign size={24} />
              Private StoryMeets
            </div>
            <p style={styles.cardText}>Host exclusive storytelling sessions. Perfect for influencers and professional storytellers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <h3 style={styles.footerTitle}>Tale Nexus</h3>
            <p style={styles.cardText}>Connect through stories. Create unforgettable moments.</p>
          </div>
          <div>
            <h3 style={styles.footerTitle}>Features</h3>
            <ul style={styles.footerList}>
              <li style={styles.footerItem}>Live Stories</li>
              <li style={styles.footerItem}>Private Rooms</li>
              <li style={styles.footerItem}>Creator Hub</li>
              <li style={styles.footerItem}>Story Competitions</li>
            </ul>
          </div>
          <div>
            <h3 style={styles.footerTitle}>Resources</h3>
            <ul style={styles.footerList}>
              <li style={styles.footerItem}>Help Center</li>
              <li style={styles.footerItem}>Guidelines</li>
              <li style={styles.footerItem}>Terms of Service</li>
              <li style={styles.footerItem}>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 style={styles.footerTitle}>Connect</h3>
            <ul style={styles.footerList}>
              <li style={styles.footerItem}>Twitter</li>
              <li style={styles.footerItem}>Discord</li>
              <li style={styles.footerItem}>Instagram</li>
              <li style={styles.footerItem}>Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;