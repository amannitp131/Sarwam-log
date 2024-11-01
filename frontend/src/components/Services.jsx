
import './Services.css';
import { useNavigate } from 'react-router-dom';


const Services = () => {


  const navigate = useNavigate();

  const fleetmanagement = () => {
      navigate('/dashboard');
  };

  return (
    <div id='service' className="container">
      <p className="container-title">
        Services
      </p>

      <div className="gradient-cards">
        <div className="card">
          <div className="container-card bg-green-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fillOpacity="0.15" stroke="url(#paint1_radial_1366_4547)" strokeWidth="2" />
              <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9" />
              <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89" />
              <defs>
                <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2FCB89" stopOpacity="0.7" />
                  <stop offset="0.489583" stopColor="#2FCB89" stopOpacity="0" />
                  <stop offset="1" stopColor="#2FCB89" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                  <stop stopColor="#54E8A9" />
                  <stop offset="1" stopColor="#1A3E31" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            <p className="card-title">Fleet Management Dashboard</p>
            <p className="card-description">Monitor available drivers and trucks, view detailed truck information, and manage your fleet effectively with real-time updates and insights</p>
            <button className='service-btn' onClick={fleetmanagement}>Check Now</button>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-white-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4565)" fillOpacity="0.15" stroke="url(#paint1_radial_1366_4565)" strokeWidth="2" />
              <ellipse rx="21.9462" ry="22.2891" transform="matrix(0.964749 0.263173 -0.254526 0.967066 60.1463 63.0804)" stroke="white" strokeWidth="1.00101" strokeLinecap="round" strokeDasharray="4 5.01" />
              <ellipse rx="17.4359" ry="17.5832" transform="matrix(-1 0 0 1 60.1466 39.5834)" fill="white" />
              <path d="M63.5924 38.93C64.4717 38.4692 65.0312 37.6495 64.9014 36.2874C64.7314 34.4228 63.2378 33.7982 61.2597 33.624V31.0427H59.721V33.5522C59.3212 33.5522 58.9118 33.5626 58.5019 33.5725V31.0427H56.9631V33.624C56.3974 33.6416 55.7384 33.6328 53.876 33.624V35.3039C55.0905 35.282 55.7283 35.2019 55.8744 36.0003V43.0678C55.7815 43.7013 55.2869 43.6103 54.186 43.5905L53.8765 45.4649C56.682 45.4649 56.9641 45.4754 56.9641 45.4754V47.6858H58.5029V45.506C58.9224 45.5164 59.3319 45.5164 59.722 45.5164V47.6863H61.2607V45.4759C63.8385 45.3323 65.5619 44.6666 65.7917 42.1774C65.9713 40.1803 65.0526 39.2888 63.5935 38.9305L63.5924 38.93ZM58.5318 35.4167C59.4008 35.4167 62.1186 35.14 62.1186 36.9942C62.1186 38.7661 59.4008 38.5612 58.5318 38.5612V35.4167ZM58.5318 43.6004V40.1381C59.5708 40.1381 62.7528 39.8412 62.7528 41.869C62.7528 43.8256 59.5708 43.5426 58.5318 43.5426V43.6004Z" fill="#F7E3B4" />
              <defs>
                <linearGradient id="paint0_linear_1366_4565" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F7E3B4" stopOpacity="0.7" />
                  <stop offset="0.489583" stopColor="#F7E3B4" stopOpacity="0" />
                  <stop offset="1" stopColor="#F7E3B4" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="paint1_radial_1366_4565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                  <stop stopColor="#F7E3B4" />
                  <stop offset="1" stopColor="#B5B5B5" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            <p className="card-title">Transport Resource Management</p>
            <p className="card-description">Track all logistic transport details, including drivers, driver IDs, names, and their assigned transport medium, for effective fleet management.</p>
            <button className='service-btn'>Check Now</button>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-yellow-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4556)" fillOpacity="0.15" stroke="url(#paint1_radial_1366_4556)" strokeWidth="2" />
              <path d="M44.8711 72.5742C44.8711 70.8742 46.3911 69.3542 48.0911 69.3542C49.7911 69.3542 51.3111 70.8742 51.3111 72.5742C51.3111 74.2742 49.7911 75.7942 48.0911 75.7942C46.3911 75.7942 44.8711 74.2742 44.8711 72.5742ZM55.6111 52.0042L59.3511 64.0442C58.3911 64.7542 57.4511 65.6042 56.7611 66.3742C55.8111 67.1942 55.0611 68.0842 55.0611 69.0642C55.0611 70.0842 55.8511 71.0142 56.7411 71.0142C57.6211 71.0142 58.4111 70.0842 58.4111 69.0642C58.4111 68.3542 57.7311 67.5742 57.3611 66.7742L54.4611 55.6142C54.0511 54.7142 53.4211 53.9542 52.4211 53.9542C51.6211 53.9542 50.9511 54.7742 50.9511 55.6142L47.5811 64.8142C47.2211 65.4442 46.6411 66.0442 45.7311 66.3042C44.8211 66.5642 43.7711 66.6342 43.0611 66.7142C41.3211 66.8542 40.6611 65.4642 39.7111 64.7342C38.7611 64.0142 38.1711 63.3942 37.7711 63.0342C37.1911 62.5642 36.7811 62.1742 36.6011 61.6442C36.1811 61.0042 36.4211 60.1742 37.0411 59.6442C37.7411 59.0842 38.7811 59.0142 39.6811 58.9642C41.6211 58.8342 42.8511 59.6342 44.8711 59.6342C46.8711 59.6342 48.0911 58.8742 48.0911 56.8442C48.0911 54.8142 49.7911 53.3742 51.3111 53.3742C52.8311 53.3742 54.5511 54.8142 54.5511 56.8442C54.5511 58.8742 55.9911 59.6342 58.2511 59.6342C59.8211 59.6342 61.1711 59.4142 62.5511 58.9642C63.4911 58.7742 64.4311 58.8042 65.0611 59.6442C65.7811 60.1742 65.4111 61.0042 65.0611 61.6442C64.7411 62.1742 64.4311 62.5642 63.6711 63.1542C63.3711 63.4542 62.8111 64.0142 62.0311 64.5142C61.2711 64.9942 59.9911 65.9142 58.4511 65.9142C56.8111 65.9142 55.7311 65.4342 55.6111 64.6842C55.4911 63.9342 56.5911 63.3942 58.1311 62.7542C59.8711 62.0442 60.7411 60.9042 61.0911 59.8442C61.4511 58.7642 60.4911 57.9442 59.4711 57.9442C58.4511 57.9442 57.6811 58.7642 57.3611 59.8442C57.0311 60.9042 56.2811 62.0442 54.5511 62.7542C52.7811 63.3942 51.1911 64.4342 51.3111 66.5142C51.3111 66.8442 51.3111 67.1742 51.3111 67.5042C51.3111 68.9642 53.0811 69.9642 54.5511 69.9642C55.6711 69.9642 56.8311 69.2242 58.1311 68.8342C59.3711 68.4642 60.7111 67.4842 61.0911 66.3742C61.3911 65.6342 60.7111 64.7742 59.9311 64.2942C59.2911 63.9342 58.6511 63.5942 58.4511 63.3142C57.4711 62.3342 56.6911 61.7242 56.6911 61.7242C56.6911 61.7242 56.0711 61.1442 56.4911 60.4442C56.9111 59.7442 56.6911 59.2442 56.6911 59.2442C56.6911 59.2442 56.4511 59.3742 56.3911 59.2842C56.3311 59.1942 56.2911 59.2742 56.2111 59.2842C56.1311 59.2942 56.2911 59.3742 56.2111 59.4642C56.0911 59.5542 56.0611 59.7642 56.0111 59.8442C55.9611 59.9242 55.8911 59.7642 55.7611 59.8442C55.6311 59.9242 55.8211 60.1642 55.8211 60.4542C55.8211 60.7542 55.6611 60.8842 55.4511 60.9542C55.2411 61.0242 54.7511 61.3242 54.5511 61.6442C54.3711 61.9442 54.3111 62.1742 54.3111 62.4442C54.3111 62.7242 54.5511 63.0742 54.5511 63.2542C54.5511 63.4342 54.5511 63.5742 54.5511 63.7542C54.5511 63.9342 54.5511 64.1042 54.5511 64.2942C54.5511 64.4842 54.5111 64.6742 54.5511 64.7542C54.5911 64.8342 54.5511 64.7942 54.5511 64.8142C54.5511 64.8342 54.5511 64.7942 54.5511 64.7942C54.5511 64.7742 54.5511 64.7542 54.5511 64.7542C54.5511 64.7542 54.5511 64.7342 54.5511 64.7542C54.5511 64.7542 54.5511 64.7542 54.5511 64.7542C54.5511 64.7542 54.5511 64.7542 54.5511 64.7542C54.5511 64.7542 54.5511 64.7542 54.5511 64.7542C54.5511 64.7542 54.5511 64.7542 54.5511 64.7542C54.5511 64.7542 54.5511 64.7542 54.5511 64.7542" fill="#FFC52C" />
              <defs>
                <linearGradient id="paint0_linear_1366_4556" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFC52C" stopOpacity="0.7" />
                  <stop offset="0.489583" stopColor="#FFC52C" stopOpacity="0" />
                  <stop offset="1" stopColor="#FFC52C" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="paint1_radial_1366_4556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                  <stop stopColor="#FFC52C" />
                  <stop offset="1" stopColor="#B5B5B5" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            <p className="card-title">Fleet Maintenance Scheduling</p>
            <p className="card-description">Monitor and schedule maintenance for your entire fleet, including trucks and equipment, ensuring optimal performance and safety.</p>
            <button className='service-btn'>Check Now</button>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-green-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fillOpacity="0.15" stroke="url(#paint1_radial_1366_4547)" strokeWidth="2" />
              <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9" />
              <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89" />
              <defs>
                <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2FCB89" stopOpacity="0.7" />
                  <stop offset="0.489583" stopColor="#2FCB89" stopOpacity="0" />
                  <stop offset="1" stopColor="#2FCB89" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                  <stop stopColor="#54E8A9" />
                  <stop offset="1" stopColor="#1A3E31" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            <p className="card-title">Warehouse Details</p>
            <p className="card-description">Efficient inventory management, real-time tracking, seamless integration.</p>
            <button className='service-btn'>Check Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
