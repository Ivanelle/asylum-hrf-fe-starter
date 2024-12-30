import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 30; 
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 20); 
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.humanrightsfirst.org';
  };

  return (
    <div className="flex-c w-full">
      <div className="flex w-50 text-center secondary-c" id="header">
        <div className="text-center w-full pb-10" id="header-text">
          <h1 className="text-4xl text-white">Asylum Office Grant Rate Tracker</h1>
            <h3 className="text-l text-white">
              The Asylum Office Grant Rate Tracker provides asylum seekers,
              researchers, policymakers, and the public an interactive tool to
              explore USCIS data on Asylum Office decisions
            </h3>
        </div>
      </div>

        <div className="flex justify-evenly text-lg">
          <div className="text-center"> 
            <img src={barGraph} alt="barGraph" className="h-48 " />
              <figcaption className="text-center">
                Search Grant Rates By Office
              </figcaption>
          </div>

          <div className="text-center">
            <img src={pieChart} 
              alt="pieChart" 
              className="h-48 pl-10" 
            />
              <figcaption className="text-center">
                Search Grant Rates By Nationality
              </figcaption>
          </div>

          <div className="text-center">
            <img src={lineGraph} 
              alt="lineGraph" 
              className="h-48 " 
            />
              <figcaption className="text-center">
                Search Grant Rates Over Time
              </figcaption>
          </div>
        </div>

        <div className="pt-[5%] 
          pl-[3%] h-11 
          w-50 mb-[15%] 
          gap-[2%] inline-flex 
          justify-center text-s"
        >
          <div>
            <button
              type="default"
              className="rounded bg-[#404C4A] text-white p-[2px]"
              onClick={() => navigate("/graphs")}
            >
              View the Data
            </button>
          </div>

          <div>
            <button
              type="default"
              className="rounded bg-[#404C4A] text-white p-[2px]"
              onClick={() => downloadCSV()}
            >
              Download the Data
            </button>
          </div>
        </div>

        <div className="flex justify-evenly items-center gap-[5px] pb-[5%]">
          <div>
            <img 
              src={paperStack} 
              alt="paperStack" 
              className="h-[339px] w-[648px] rounded-lg" 
            />
          </div>
          <div className="w-[500px] text-center">
            <h3 className="text-s p-[20px]">
              Human Rights First has created a search tool to give you a
              user-friendly way to explore a data set of asylum decisions between
              FY 2016 and May 2021 by the USCIS Asylum Office, which we received
              through a Freedom of Information Act request. You can search for
              information on asylum grant rates by year, nationality, and asylum
              office, visualize the data with charts and heat maps, and download
              the data set
            </h3>
          </div>
        </div>

        <div className="text-[2rem] mx-auto my-[5%] w-full text-center">
          <header>
            <h2>Systemic Disparity Insights</h2>
          </header>
        </div>

        <div className="text-center my-[5%] pl-[5%] gap-12 justify-around flex">
          <div className="w-1/3">
            <h2 className="text-[35px] pb-[5%]">36%</h2>
            <p className="text-base">
              By the end of the Trump administration, the average asylym office
              grant rate had fallen 36 percent from an average of 44 percent
              in fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div className="w-1/3">
            <h2 className="text-[35px] pb-[5%]">5%</h2>
            <p className="text-base">
              The New York asylum office grant rate dropped to 5 percent in 
              fiscal year 2020.
            </p>
          </div>
          <div className="w-1/3">
            <h2 className="text-[35px] pb-[5%]">6x Lower</h2>
            <p className="text-base">
              Between fiscal year 2017 and 2020, the New York asylum office's 
              average grant rate was six times lower than the San Francisco 
              asylum office.
            </p>
          </div>
        </div>

        <div>
          <button
            type="default"
            className="rounded bg-[#404C4A] text-white p-[2px]"
            onClick={() => handleReadMore()}
          >
            Read More
          </button>
        </div>

        <p onClick={() => scrollToTop()} 
          className="w-[8%] text-l cursor-pointer text-black mx-auto my-[5%]"
        >
          Back To Top ^
        </p>
    </div>

    
        

  );
};
