import Header from "@/components/ui/header/ Header";
import Hero from "@/components/screens/hero/Hero";
import Invitation from "@/components/screens/invitation/Invitation";
import Timer from "@/components/ui/timer/Timer";
import Location from "@/components/ui/location/Location";
import Program from "@/components/ui/program/Program";
import DressCode from "@/components/screens/dress-code/DressCode";
import RSVP from "@/components/ui/form/RSVP";
import Footer from "@/components/ui/footer/Footer";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <Header />

      <Hero />
      <Invitation />
      <Timer />
      <Location />
      <Program />
      <DressCode />
      <RSVP />
      <Footer />
    </main>
  );
}

export default Home;
