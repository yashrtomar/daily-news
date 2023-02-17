import React from 'react';
import Header from "./components/Header"
import News from './components/News'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//no Switch in latest version
export default function App() {
    const pageSize = 6;
    const apiKey = process.env.REACT_APP_NEWS_API;
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={
                    <News
                        apiKey={apiKey}
                        key="home"
                        pageSize={pageSize}
                        country='in'
                        category=''
                    />
                } />
                <Route path="/general" element={
                    <News
                        apiKey={apiKey}
                        key="general"
                        pageSize={pageSize}
                        country='in'
                        category='general'
                    />
                } />
                <Route path="/business" element={
                    <News
                        apiKey={apiKey}
                        key="business"
                        pageSize={pageSize}
                        country='in'
                        category='business'
                    />
                } />
                <Route path="/entertainment" element={
                    <News
                        apiKey={apiKey}
                        key="entertainment"
                        pageSize={pageSize}
                        country='in'
                        category='entertainment'
                    />
                } />
                <Route path="/health" element={
                    <News
                        apiKey={apiKey}
                        key="health"
                        pageSize={pageSize}
                        country='in'
                        category='health'
                    />
                } />
                <Route path="/science" element={
                    <News
                        apiKey={apiKey}
                        key="science"
                        pageSize={pageSize}
                        country='in'
                        category='science'
                    />
                } />
                <Route path="/sports" element={
                    <News
                        apiKey={apiKey}
                        key="sports"
                        pageSize={pageSize}
                        country='in'
                        category='sports'
                    />
                } />
                <Route path="/technology" element={
                    <News
                        apiKey={apiKey}
                        key="technology"
                        pageSize={pageSize}
                        country='in'
                        category='technology'
                    />
                } />
                <Route path="/about" element={
                    <About
                        key="about"
                    />
                } />
            </Routes>
        </Router>
    );
}