import React from 'react';
import './App.css';
import LinkSection from './ExternalLink/components/LinkSection';
import LinkTile from './ExternalLink/components/LinkTile';
import LogoImages from './ExternalLink/constants/LogoImages';
import StatsSection from './Stats/components/StatsSection';
import HelloMessage from './HelloMessage/components/HelloMessage';
import Counter from './Counter/components/Counter';
import Visit from './Visit/components/Visit';
import ProfileHero from './Profile/components/ProfileHero';
import ReactGA from 'react-ga';
import VisitUnique from './Visit/components/VisitUnique';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileHero/>

        <LinkSection title="GitHub Repositories">
          <LinkTile description="All Projects" link="https://github.com/CoderPraBhu" logo={LogoImages.github} />
          <LinkTile description="CoderPraBhu.com UI" link="https://github.com/CoderPraBhu/coderprabhu-ui" logo={LogoImages.github} />
          <LinkTile description="CoderPraBhu.com API" link="https://github.com/CoderPraBhu/coderprabhu-api" logo={LogoImages.github} />
          <LinkTile description="CoderPraBhu.com K8S" link="https://github.com/CoderPraBhu/coderprabhu-k8s" logo={LogoImages.github} />
        </LinkSection>

        <LinkSection title="Social">
          <LinkTile description="Twitter" link="https://twitter.com/CoderPraBhu" logo={LogoImages.twitter} />
          <LinkTile description="LinkedIn" link="https://linkedin.com/in/prashantbhuruk" logo={LogoImages.linkedIn} />
        </LinkSection>

        <StatsSection title="Stats">
          <Counter/>
          <VisitUnique/>
          <HelloMessage/>
          <Visit/>
        </StatsSection>
      </header>
    </div>
  );
}

const trackingId = "UA-166612018-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId,{testMode: true});
ReactGA.pageview(window.location.pathname + window.location.search);

export default App;
