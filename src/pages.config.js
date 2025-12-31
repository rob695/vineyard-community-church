import About from './pages/About';
import CommunityOutreach from './pages/CommunityOutreach';
import Contact from './pages/Contact';
import Home from './pages/Home';
import KindnessProjects from './pages/KindnessProjects';
import LifeGroups from './pages/LifeGroups';
import ListenAgain from './pages/ListenAgain';
import NewcomersLunch from './pages/NewcomersLunch';
import Sunday from './pages/Sunday';
import Team from './pages/Team';
import Events from './pages/Events';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "CommunityOutreach": CommunityOutreach,
    "Contact": Contact,
    "Home": Home,
    "KindnessProjects": KindnessProjects,
    "LifeGroups": LifeGroups,
    "ListenAgain": ListenAgain,
    "NewcomersLunch": NewcomersLunch,
    "Sunday": Sunday,
    "Team": Team,
    "Events": Events,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};