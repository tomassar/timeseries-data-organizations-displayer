import React, { useEffect, useState } from 'react';
import { Organization } from '../types/Organization';
import { TimeSeriesData } from '../types/TimeSeriesData';
import TimeseriesTable from './TimeseriesTable';
import Map from './Map';

const OrganizationSelector: React.FC = () => {
 const [organizations, setOrganizations] = useState<Organization[]>([]);
 const [selectedOrg, setSelectedOrg] = useState<string>('');
 const [timeseriesData, setTimeseriesData] = useState<TimeSeriesData[]>([]);
 const [selectedOrgPolygon, setSelectedOrgPolygon] = useState<string>('');
 
 useEffect(() => {
    fetch('http://localhost:8000/organizations')
      .then(response => response.json())
      .then(data => setOrganizations(data));
 }, []);

 const handleOrganizationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const orgId = event.target.value;
    setSelectedOrg(orgId);

    fetch(`http://localhost:8000/timeseries/${orgId}`)
      .then(response => response.json())
      .then(data => setTimeseriesData(data));

    const selectedOrgData = organizations.find(org => org.organization === orgId);
    if (selectedOrgData) {
      setSelectedOrgPolygon(selectedOrgData.polygon_decoded);
    }
 };

 return (
    <div className="container mx-auto p-10">
      <select
        className="mb-10 block mx-auto appearance-none w-[20vw] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOrg}
        onChange={handleOrganizationChange}
      >
        <option value="">Select an organization</option>
        {organizations.map(org => (
          <option key={org.organization} value={org.organization}>{org.organization}</option>
        ))}
      </select>
      {(selectedOrg) && (
        <div className="flex flex-col justify-center items-center">
          <Map polygon={selectedOrgPolygon} />
          <TimeseriesTable timeseriesData={timeseriesData}/>
        </div>
      )}
    </div>
 );
};

export default OrganizationSelector;
