import SearchComponent from '../../components/SearchComponent/SearchComponent';
import './TopHeader.css';

export default function TopHeader() {
  return (
    <div className="container-fluid">
      <div
        className="Top-div"
        style={{
          position: 'relative',
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661598599843-8d98b0691372?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="box-content">
          <h4>Unleash your inner power. Find tranquility. Rejuvenate your spirit.</h4>
          <p>Book your transformative yoga retreat today 🧘‍♀️🌿</p>
          <div className="search-component" >
            <SearchComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
