import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase"
import Login from "./components/Login";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";


const App = () => {
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoURL: user.photoURL,
            });
        }
    }, [user]);

    if (loading) return <Loading />;

    if (!user) return <Login />;

    return (
        <>
            <Navbar />
            <Sidebar />
            
            <Content />
            <Footer />
        
        </>
    );
};

export default App;