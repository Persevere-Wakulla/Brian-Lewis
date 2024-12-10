
import { Routes, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';
import Create from './Create';
import Delete from './Delete';
import Show from './Show';
import Top from './Top';
import Wanted from './Wanted';
import CreateWanted from './CreateWanted';
import DeleteWanted from './DeleteWanted';
import ShowWanted from './ShowWanted';
import Jobs from './Jobs';
import CreateJobs from './CreateJobs';
import DeleteJobs from './DeleteJobs';
import ShowJobs from './ShowJobs';
import Page from './Page';
import AboutMe from './AboutMe';
import Admin from './Admin';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Top />} />
        <Route path='/page' element={<Page />} />
        <Route path='/home' element={<Home />} />
        <Route path='/wanted' element={<Wanted />} />
        <Route path='/createWanted' element={<CreateWanted />} />
        <Route path='/deleteWanted/:id' element={<DeleteWanted />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/showWanted' element={<ShowWanted />} />
        <Route path='/create' element={<Create />} />
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/details/:id' element={<Show />} />
        <Route path='/detailsWanted/:id' element={<ShowWanted />} />
        <Route path='/detailsJobs/:id' element={<ShowJobs />} />
        <Route path='/deleteJobs/:id' element={<DeleteJobs />} />
        <Route path='/createJobs' element={<CreateJobs />} />
        <Route path='/aboutMe' element={< AboutMe />} />
        <Route path='/admin' element={<Admin/>} />
      </Route>
    </Routes>
  )
}

export default App
