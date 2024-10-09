import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // Assuming logo is in the src folder

function App() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up forms
  const [currentPage, setCurrentPage] = useState('home'); // Track the current page

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mutualfunds">
      <header className="legend">
        <nav className="navbar">
          <img src={logo} className="logo" alt="Mutual Funds Logo" />
          <ul className="nav-links">
            <li><a href="#home" onClick={() => navigate('home')}>Home</a></li>
            <li><a href="#about" onClick={() => navigate('about')}>About</a></li>
            <li><a href="#funds" onClick={() => navigate('funds')}>Funds</a></li>
            <li><a href="#contact" onClick={() => navigate('contact')}>Contact</a></li>
            <li><a href="#auth" onClick={() => navigate('auth')}>{isLogin ? 'Login' : 'Sign Up'}</a></li>
          </ul>
        </nav>
        <h1 className="title">MUTUALFUNDS</h1>
      </header>

      {currentPage === 'home' && (
        <section id="home" className="home">
          <h2>Welcome to the Mutual Funds Platform</h2>
          <p>
            Mutual funds are a type of financial vehicle made up of a pool of money collected from 
            many investors to invest in securities like stocks, bonds, money market instruments, 
            and other assets. Our platform helps you choose the best mutual funds to invest in.
          </p>
          <button className="explore-btn">Explore Our Funds</button>
        </section>
      )}

      {currentPage === 'about' && (
        <section id="about" className="about">
          <h2>What are Mutual Funds?</h2>
          <p>
            A mutual fund pools together money from many investors to purchase a diversified portfolio 
            of stocks, bonds, or other securities. It allows individuals to invest in a broad range of 
            financial assets without buying individual securities.
          </p>
          <h3>Investment Insights</h3>
          <p>
            Investing in mutual funds can be a beneficial way to grow your wealth over time. 
            With the expertise of fund managers, investors gain access to professionally managed 
            portfolios that align with their financial goals. Here are some insights:
          </p>
          <ul>
            <li><strong>Diversification:</strong> Mutual funds spread investments across various securities, reducing risk.</li>
            <li><strong>Professional Management:</strong> Fund managers conduct thorough research to make informed investment decisions.</li>
            <li><strong>Liquidity:</strong> Investors can buy or sell mutual fund shares easily, providing flexibility.</li>
            <li><strong>Affordability:</strong> Mutual funds often have lower minimum investment requirements, making them accessible.</li>
          </ul>
          {/* More about mutual funds... */}
        </section>
      )}

      {currentPage === 'funds' && (
        <section id="funds" className="funds">
          <h2>Our Top Performing Funds</h2>
          <div className="fund-list">
            <div className="fund-item">
              <h4>Large-Cap Growth Fund</h4>
              <p>Invests in large, established companies with a solid history of growth.</p>
              <ul>
                <li><strong>Risk Factors:</strong> Market volatility, economic downturns</li>
                <li><strong>Risk Percentage:</strong> 10% - 15%</li>
              </ul>
            </div>
            <div className="fund-item">
              <h4>Mid-Cap Equity Fund</h4>
              <p>Targets medium-sized companies with growth potential.</p>
              <ul>
                <li><strong>Risk Factors:</strong> Economic shifts, competition</li>
                <li><strong>Risk Percentage:</strong> 15% - 20%</li>
              </ul>
            </div>
            <div className="fund-item">
              <h4>Small-Cap Aggressive Fund</h4>
              <p>Focuses on small companies for maximum growth.</p>
              <ul>
                <li><strong>Risk Factors:</strong> High market volatility, sector-specific risks</li>
                <li><strong>Risk Percentage:</strong> 20% - 30%</li>
              </ul>
            </div>
            <div className="fund-item">
              <h4>Balanced Hybrid Fund</h4>
              <p>A mix of equity and debt for balanced growth and stability.</p>
              <ul>
                <li><strong>Risk Factors:</strong> Interest rate changes, economic conditions</li>
                <li><strong>Risk Percentage:</strong> 8% - 12%</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'auth' && (
        <section id="auth" className="auth">
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" required />
                </div>
                <button type="submit" className="auth-btn">Login</button>
              </form>
              <p>
                Don't have an account? <button onClick={toggleForm} className="switch-btn">Sign Up</button>
              </p>
            </div>
          ) : (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" required />
                </div>
                <button type="submit" className="auth-btn">Sign Up</button>
              </form>
              <p>
                Already have an account? <button onClick={toggleForm} className="switch-btn">Login</button>
              </p>
            </div>
          )}
        </section>
      )}

      <footer className="footer">
        <p>&copy; 2024 Mutual Funds Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
