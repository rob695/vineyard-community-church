import About from './pages/About';
import CommunityOutreach from './pages/CommunityOutreach';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import KindnessProjects from './pages/KindnessProjects';
import NewcomersLunch from './pages/NewcomersLunch';
import Sunday from './pages/Sunday';
import Team from './pages/Team';
import LifeGroups from './pages/LifeGroups';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "CommunityOutreach": CommunityOutreach,
    "Contact": Contact,
    "Events": Events,
    "Home": Home,
    "KindnessProjects": KindnessProjects,
    "NewcomersLunch": NewcomersLunch,
    "Sunday": Sunday,
    "Team": Team,
    "LifeGroups": LifeGroups,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};