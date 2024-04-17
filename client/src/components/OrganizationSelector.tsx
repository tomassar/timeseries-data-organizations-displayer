import React, { useEffect, useState } from 'react';
import { Organization } from '../types/Organization';
import { TimeSeriesData } from '../types/TimeSeriesData';
import TimeseriesTable from './TimeseriesTable';
import Map from './Map';
import TimeSeriesChart from './TimeseriesChart';
import { MapContainer } from 'react-leaflet';


const OrganizationSelector: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;

 const [organizations, setOrganizations] = useState<Organization[]>([]);
 const [selectedOrg, setSelectedOrg] = useState<string>('');
 const [timeseriesData, setTimeseriesData] = useState<TimeSeriesData[]>([]);
 const [selectedOrgPolygon, setSelectedOrgPolygon] = useState<string>('');
 
 useEffect(() => {
    fetch(`${baseUrl}/api/v1/organizations`)
      .then(response => response.json())
      .then(data => setOrganizations(data));
 }, []);

 const handleOrganizationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const orgId = event.target.value;
    setSelectedOrg(orgId);
    fetch(`${baseUrl}/api/v1/timeseries/${orgId}`)
      .then(response => response.json())
      .then(data => setTimeseriesData(data));

    const selectedOrgData = organizations.find(org => org.organization === orgId);
    if (selectedOrgData) {
      setSelectedOrgPolygon(selectedOrgData.polygon_decoded);
    }
 };

 return (
    <div className="flex flex-col justify-center items-center gap-5 container mx-auto p-10">
      <h1 className="text-2xl">Select an organization to see it's related data</h1>
      <select
        className="mb-10 block mx-auto appearance-none w-[20vw] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOrg}
        onChange={handleOrganizationChange}
      >
        <option value="default">Select an organization</option>
        {organizations.map(org => (
          <option key={org.organization} value={org.organization}>{org.organization}</option>
        ))}
      </select>
      {(selectedOrg) && (
        <div className="mx-auto flex flex-col justify-center items-center gap-10 w-[60vw]">
          <MapContainer center={[0,0]} zoom={13} style={{ height: "70vh", width: "100%", marginBottom: "2rem" }}>
            <Map polygon={selectedOrgPolygon} />
          </MapContainer>
          <h1 className="text-2xl">Timeseries data for {selectedOrg}</h1>
          <TimeSeriesChart timeseriesData={timeseriesData} />
          <TimeseriesTable timeseriesData={timeseriesData}/>
        </div>
      )}
    </div>
 );
};

export default OrganizationSelector;
