import React from 'react';
import 'leaflet/dist/leaflet.css';
import OrganizationSelector from './components/OrganizationSelector';

const App: React.FC = () => {
 return (
    <div className="App">
      <OrganizationSelector />
    </div>
 );
};

export default App;
