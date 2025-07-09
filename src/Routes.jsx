import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ImpactDashboard from "pages/impact-dashboard";
import Marketplace from "pages/marketplace";
import LocalNetwork from "pages/local-network";
import ServiceDiscovery from "pages/service-discovery";
import CommunityPlatform from "pages/community-platform";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/impact-dashboard" element={<ImpactDashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/local-network" element={<LocalNetwork />} />
        <Route path="/service-discovery" element={<ServiceDiscovery />} />
        <Route path="/community-platform" element={<CommunityPlatform />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;