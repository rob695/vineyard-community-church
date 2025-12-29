import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Sunday from './pages/Sunday';
import LifeGroups from './pages/LifeGroups';
import Contact from './pages/Contact';
import Events from './pages/Events';
import NewcomersLunch from './pages/NewcomersLunch';
import KindnessProjects from './pages/KindnessProjects';
import CommunityOutreach from './pages/CommunityOutreach';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Team": Team,
    "Sunday": Sunday,
    "LifeGroups": LifeGroups,
    "Contact": Contact,
    "Events": Events,
    "NewcomersLunch": NewcomersLunch,
    "KindnessProjects": KindnessProjects,
    "CommunityOutreach": CommunityOutreach,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};