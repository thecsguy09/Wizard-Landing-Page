import {
  Header,
  Services,
  Proposal,
  CaseStudy,
  WorkingProcess,
  Team,
  Footer,
} from "./Components/index";

function App() {
  return (
    <section className="w-full h-full flex flex-col gap-16 sm:gap-[4.5rem] md:gap-20 xl:gap-24">
      <Header />
      <Services />
      <Proposal />
      <CaseStudy />
      <WorkingProcess />
      <Team />
      <Footer />
    </section>
  );
}

export default App;
