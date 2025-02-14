import Grid from "@mui/material/Grid";
import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {SmallNavBar } from "./SmallNavBar";
import {SignUpPage} from "../pages/SignUp";
import {LoginPage} from "../pages/SignIn";
import {CheckInSuccess} from "../pages/CheckInOut/CheckInSuccess";
import {CheckOutSuccess} from "../pages/CheckInOut/CheckOutSuccess";
import { CheckInCheckOut } from "../pages/CheckInOut/CheckInCheckOut";
import { CheckInForm } from "../pages/CheckInOut/CheckInForm";
import { CheckOutForm } from "../pages/CheckInOut/CheckOutForm";
import PrivateRoute from "./PrivateRoute";
import { MapPage } from "../pages/Map";
import Error from "../pages/Error";

function ApplicationRouter() {
    return (
            <Grid item xs={12}
                  md={10}
                  lg={9}
                  xl={8}
                  style={{margin: "auto"}}>

                <SmallNavBar></SmallNavBar>
                <Routes>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/checkinsuccess" element={<CheckInSuccess />}/>
                    <Route path="/checkoutsuccess" element={<CheckOutSuccess />}/>
                    <Route path="/checkincheckout/:tableId" element={<PrivateRoute><CheckInCheckOut /></PrivateRoute>}/>
                    <Route path="/checkinform/:tableId" element={<CheckInForm />}/>
                    <Route path="/checkoutform/:tableId" element={<CheckOutForm />}/>
                    <Route path="/home" element={<MapPage />} />
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/map" element={<MapPage/>}/>
                    <Route path="*" element={<Error />} />
                </Routes>
            </Grid>
    )
}


export default ApplicationRouter;