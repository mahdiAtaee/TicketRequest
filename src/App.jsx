import RequestBox from "./components/RequestBox";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Ticketing from "./components/Ticketing";
import SuccessTicket from "./components/SuccessTicket";
import TicketStatus from "./components/TicketStatus";
import TicketList from "./components/TicketList";
import TicketingMobile from "./components/TicketingMobile";
import TicketRequestMobile from "./components/TicketRequestMobile";

function App() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  console.log(isMobile);
  return (
    <div dir="rtl" className="w-full lg:w-[70vw]">
      <Router>
        <Routes>
          <Route path="/" element={<RequestBox />} />
          <Route path="/ticket/list" element={<TicketList />} />
          {!isMobile ? (
            <Route path="/ticketing/new" element={<Ticketing />} />
          ) : (
            <>
              <Route path="/ticketing/new" element={<TicketingMobile />}/>
              <Route path="/ticketing/new/form" element={<TicketRequestMobile />}/>
            </>
          )}
          <Route path="/ticketing/new/success" element={<SuccessTicket />} />
          <Route path="/ticketing/ticket/:id" element={<TicketStatus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
