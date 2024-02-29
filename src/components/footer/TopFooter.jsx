
import './../../styles/main/main.css'
import { Link } from  'react-router-dom';

const categoryData = [
  {
    id: "1",
    title: "Women",
    link: "products/1",
    className: "",
  },
  {
    id: "2",
    title: "Men",
    link: "products/2",
    className: "",
  },
  {
    id: "3",
    title: "All",
    link: "products/3",
    className: "",
  },
  {
    id: "4",
    title: "Sale",
    link: "products/12",
    className: "",
  },  
  {
    id: "5",
    title: "New Arrivals",
    link: "products/18",
    className: "",
  },  
];

const linkData = [
  {
    id: "1",
    title: "About",
    link: "/about",
    className: "",
  },
  {
    id: "2",
    title: "Contact",
    link: "/contact",
    className: "",
  },
  {
    id: "3",
    title: "FAQs",
    link: "/faqs",
    className: "",
  },
  {
    id: "4",
    title: "Terms",
    link: "/terms",
    className: "",
  },
  {
    id: "5",
    title: "Privacy",
    link: "privacy",
    className: "",
  },    
];

const footerData = [
  {
    id: "1",
    title: "About",
    link: "about",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis urna dui, a faucibus velit dapibus eget. Donec mauris leo, tristique at massa vel, placerat hendrerit nulla.",
    className: "",
  },
  {
    id: "2",
    title: "Contact",
    link: "contact",
    desc: "Pellentesque elementum pellentesque leo, vitae fringilla odio dapibus a. Donec fringilla metus id accumsan aliquet. Aliquam erat volutpat. ",
    className: "",
  },
]

export default function TopFooter() {
  return (
    <div className="flexrow footer responsive ">      
      <div className="flex1">
          <h2>Categories</h2>  
          {categoryData.map(item => 
            <p className="flexcolumn dark-lt">
              <Link className="footer-link" to={item.link}>{item.title}</Link>
            </p>
          )}
      </div>

      <div className="flex1">
          <h2>Links</h2>  
          {linkData.map(item => 
            <p className="flexcolumn dark-lt">
              <Link className="footer-link" to={item.link}>{item.title}</Link>
            </p>
          )}
      </div>

      <div className="flex3">
        {footerData.map(item => 
          <div className="marginbtm30">
            <h2>{item.title}</h2>
            <p className="justify dark-lt">{item.desc}</p>
          </div>
        )}
      </div>
    </div>
  )
}