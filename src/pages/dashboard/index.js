import { useEffect, useState } from 'react';
import DashboardView from './dashboard';
import { ComponentSkeleton } from '../components-overview/ComponentSkeleton';

const Dashboard = () => {
    const [page_loading, setPageLoading] = useState(true);
    const [data, setData] = useState();
    const getDashboardData = () => {
        // getDashboardStatsRequest()
        //     .then((res) => {
        //         console.log(res);
        //         setData(res);
        //         setPageLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    return (
        <ComponentSkeleton isLoading={page_loading}>
            <DashboardView data={data} />
        </ComponentSkeleton>
    );
};

export default Dashboard;
