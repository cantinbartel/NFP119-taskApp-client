import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Drawer from './components/Drawer';
import Header from './components/Header';
import HomePage from './pages/ HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';
import TaskPage from './pages/TaskPage';


function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UserPage />} />
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/tasks/:id' element={<TaskPage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
