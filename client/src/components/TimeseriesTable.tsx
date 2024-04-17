import React, { useEffect, useState } from 'react';
import { TimeSeriesData } from '../types/TimeSeriesData';

interface Props {
    timeseriesData: TimeSeriesData[];
}

const TimeseriesTable: React.FC<Props> = ({ timeseriesData }) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof TimeSeriesData; direction: 'ascending' | 'descending' }>({
        key: 'timestamp', // Default sort column
        direction: 'ascending', // Default sort direction
    });

    
    const sortedTimeseriesData = [...timeseriesData].sort((a, b) => {
        if (sortConfig === null) {
            return 0;
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key: keyof TimeSeriesData) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('timestamp')}>
                                        Timestamp
                                        {sortConfig && sortConfig.key === 'timestamp' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('variable')}>
                                        Variable
                                        {sortConfig && sortConfig.key === 'variable' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('value')}>
                                        Value
                                        {sortConfig && sortConfig.key === 'value' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('ingestion_time')}>
                                        Ingested At
                                        {sortConfig && sortConfig.key === 'ingestion_time' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedTimeseriesData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{data.timestamp}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{data.variable}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{data.value}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{data.ingestion_time}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeseriesTable;
