import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">강미정의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="강미정"
        description=""
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://home-sage-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 개발자 지원서
        </a>
        <a
          className="link-button"
          href="https://h-swart-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 사과
        </a>
        <a
          className="link-button"
          href="https://mice-sage.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 마이크
        </a>
        <a
          className="link-button"
          href="https://trend-phi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 트렌드
        </a>
        <a
          className="link-button"
          href="https://bear-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 곰도리
        </a>
        <a
          className="link-button"
          href="https://travel-nine-umber.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 여행
        </a>
      </div>
    </div>
  );
}

export default App;
