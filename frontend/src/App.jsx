import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import CallForPapers from './pages/CallForPapers';
import CareerDevelopment from './pages/CareerDevelopment';
import RegisterVirtualConference from './pages/RegisterVirtualConference';
import ConferenceSelector from './pages/ConferenceSelector';
import PaymentPage from './pages/PaymentPage';
import NotFound from './pages/NotFound';
import SubmitPaper from './pages/SubmitPaper';
import Login from './auth/Login';
import Register from './auth/Register';
import RecordedSessions from './pages/RecordedSessions';
import ContactUs from './pages/ContactUs';
import VideoConference from './pages/VideoConference';
import Mentorship from './pages/Mentorship';
import PeerReview from './pages/PeerReview';
import PeerReviewPaper from './pages/PeerReviewPaper';
import Feedback from "./pages/Feedback.jsx";
import HomePage from "./pages/HomePage";
import styles from './App.module.css'; // Importing the updated CSS module
import AdminPage from './admin/AdminPage.jsx';

const App = () => {
    return (
        <div className={styles.appContainer}>
            <Router>
                <NavBar className={styles.navBar}/>
                <main className={styles.mainContent}>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/contact-us" element={<ContactUs/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/career-development" element={<CareerDevelopment/>}/>

                        {/* Protected Routes */}
                        <Route path="/call-for-papers" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <CallForPapers/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/mentorship" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <Mentorship/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/peer-review" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <PeerReview/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/register/virtual-conference" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <RegisterVirtualConference/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/admin" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <AdminPage/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/select/virtual-conference" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <ConferenceSelector/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/payment" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <PaymentPage/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/submit/paper" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <SubmitPaper/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/recorded-sessions" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <RecordedSessions/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/video-conference" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <VideoConference/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/peer-review/paper" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <PeerReviewPaper/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/peer-review/feedback" element={
                            <ProtectedRoute className={styles.protectedRoute}>
                                <Feedback/>
                            </ProtectedRoute>
                        }/>

                        {/* Catch-All Route for 404 */}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
                <Footer className={styles.footer}/>
            </Router>
        </div>
    );
}

export default App;
