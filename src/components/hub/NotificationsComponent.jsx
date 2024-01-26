// NotificationsComponentNotificationsComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NotificationArrayComponent from "./NotificationArrayComponent";

const NotificationsComponent = () => {
return (
<div id="NotificationsDiv" className="glassFrame">
    <NotificationArrayComponent/>
    <NotificationArrayComponent/>
    <NotificationArrayComponent/>
    <NotificationArrayComponent/>
    <NotificationArrayComponent/>
    <NotificationArrayComponent/>
</div>
);
};

export default NotificationsComponent;