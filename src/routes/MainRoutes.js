import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));

//Blocks Data 
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const CblockData = Loadable(lazy(() => import('views/utilities/Cblockdata')));
const NblockData = Loadable(lazy(() => import('views/utilities/Nblockdata')));
const KblockData = Loadable(lazy(() => import('views/utilities/Kblockdata')));
const LblockData = Loadable(lazy(() => import('views/utilities/Lblockdata')));
const BblockData = Loadable(lazy(() => import('views/utilities/Bblockdata')));
const MblockData = Loadable(lazy(() => import('views/utilities/Mblockdata')));
const GblockData = Loadable(lazy(() => import('views/utilities/Gblockdata')));
const HblockData = Loadable(lazy(() => import('views/utilities/Hblockdata')));
const SMSblockData = Loadable(lazy(() => import('views/utilities/SMSblockdata')));
const RDblockData = Loadable(lazy(() => import('views/utilities/R&Dblockdata')));
const SampleData = Loadable(lazy(() => import('views/utilities/LblockAllData')));


// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const SamplePage1 = Loadable(lazy(() => import('views/samplepage')));
const SeminarHalls = Loadable(lazy(() => import('views/samplepage2')));
const MeetingHalls = Loadable(lazy(() => import('views/meetinghalls')));
const StaffRooms = Loadable(lazy(() => import('views/staffrooms')));
const FilterSearch = Loadable(lazy(() => import('../menu-items/DataTable')));
const OutdoorSports = Loadable(lazy(() => import('views/outdoorsports')));
const IndoorSports = Loadable(lazy(() => import('views/indoorsports')));

//footer 
const Footerpage = Loadable(lazy(()=>import('views/dashboard/Default/footer')))
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'data',
          element: <FilterSearch/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Cblock',
          element: <CblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Nblock',
          element: <NblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Kblock',
          element: <KblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Mblock',
          element: <MblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Lblock',
          element: <LblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Bblock',
          element: <BblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Gblock',
          element: <GblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Hblock',
          element: <HblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'SMSblock',
          element: <SMSblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'R&Dblock',
          element: <RDblockData/>
        }
      ]
    },

    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'samplepage',
      element: <SamplePage1/>
    },
    {
      path: 'samplepage2',
      element: <SeminarHalls />
    },
    {
      path: 'meetinghalls',
      element: <MeetingHalls />
    },
    {
      path: 'staffrooms',
      element: <StaffRooms />
    },
    {
      path: 'outdoorsports',
      element: <OutdoorSports />
    },
    {
      path: 'indoorsports',
      element: <IndoorSports />
    },
        {
      path: 'sampledata',
      element: <SampleData/>
    },
  ]
};

export default MainRoutes;
